import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Attachments now arrive as links into our own Vercel Blob store (uploaded
// directly from the browser) rather than raw bytes. Anything not pointing
// at that store is rejected, otherwise a forged request could inject
// arbitrary links into the enquiry email sent to the team.
const BLOB_URL_PATTERN = /^https:\/\/[a-z0-9]+\.public\.blob\.vercel-storage\.com\//;

function attachmentsAreValid(attachments: string): boolean {
  const urls = attachments.match(/https?:\/\/\S+/g) ?? [];
  return urls.every((url) => BLOB_URL_PATTERN.test(url));
}

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_KEY;
  if (!accessKey) {
    console.error("WEB3FORMS_KEY is not set");
    return NextResponse.json(
      { success: false, message: "Form is not configured yet. Please try again later." },
      { status: 500 },
    );
  }

  const incomingFormData = await request.formData();

  // Honeypot: real users never fill this hidden field.
  if (incomingFormData.get("botcheck")) {
    return NextResponse.json({ success: true });
  }

  const attachments = incomingFormData.get("attachments");
  if (typeof attachments === "string" && attachments.trim() && !attachmentsAreValid(attachments)) {
    return NextResponse.json(
      { success: false, message: "One or more attachment links were invalid." },
      { status: 400 },
    );
  }

  const outgoing = new FormData();
  outgoing.set("access_key", accessKey);
  outgoing.set("subject", "New SpecSwap FF&E review request");
  outgoing.set("from_name", "SpecSwap website");

  for (const [key, value] of incomingFormData.entries()) {
    if (key === "botcheck") continue;
    outgoing.set(key, value);
  }

  try {
    const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        // Cloudflare (in front of Web3Forms) can challenge/block requests
        // that don't look like they came from a browser, which Node's
        // default fetch User-Agent triggers from serverless environments.
        "User-Agent":
          "Mozilla/5.0 (compatible; SpecSwapWebsite/1.0; +https://www.specswap.com.au)",
      },
      body: outgoing,
    });
    const responseText = await web3formsResponse.text();
    let result: { success?: boolean; message?: string };
    try {
      result = JSON.parse(responseText);
    } catch {
      console.error(
        "Web3Forms returned a non-JSON response",
        web3formsResponse.status,
        responseText.slice(0, 500),
      );
      return NextResponse.json(
        { success: false, message: "We couldn't send that. Please try again." },
        { status: 502 },
      );
    }

    if (!web3formsResponse.ok || !result.success) {
      console.error("Web3Forms submission failed", result);
      return NextResponse.json(
        { success: false, message: "We couldn't send that. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error submitting to Web3Forms", error);
    return NextResponse.json(
      { success: false, message: "We couldn't send that. Please try again." },
      { status: 502 },
    );
  }
}
