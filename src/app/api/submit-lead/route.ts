import { NextResponse } from "next/server";
import { ACCEPTED_FILE_TYPES, MAX_FILE_SIZE_BYTES } from "@/components/form/formSchema";

export const runtime = "nodejs";

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

  const file = incomingFormData.get("file");
  if (file instanceof File) {
    if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: "Accepted file formats are PNG, JPEG or PDF." },
        { status: 400 },
      );
    }
    if (file.size > MAX_FILE_SIZE_BYTES) {
      return NextResponse.json(
        { success: false, message: "File must be under 20MB." },
        { status: 400 },
      );
    }
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
      body: outgoing,
    });
    const result = await web3formsResponse.json();

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
