const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export type Web3FormsResult =
  | { success: true }
  | { success: false; message: string };

/**
 * Submits straight from the browser to Web3Forms. This can't go through our
 * own server: Cloudflare (in front of Web3Forms) presents a JS challenge to
 * any server-to-server request and blocks it outright, regardless of
 * headers - only a real browser can pass it. Web3Forms' access key is
 * designed to be public/client-side for this reason.
 */
export async function submitToWeb3Forms(
  fields: Record<string, string>,
  meta: { subject: string; fromName: string },
): Promise<Web3FormsResult> {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
  if (!accessKey) {
    console.error("NEXT_PUBLIC_WEB3FORMS_KEY is not set");
    return {
      success: false,
      message: "Form is not configured yet. Please try again later.",
    };
  }

  try {
    const response = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: meta.subject,
        from_name: meta.fromName,
        ...fields,
      }),
    });
    const result = await response.json();

    if (!response.ok || !result.success) {
      console.error("Web3Forms submission failed", result);
      return {
        success: false,
        message: "We couldn't send that. Please try again.",
      };
    }

    return { success: true };
  } catch (error) {
    console.error("Error submitting to Web3Forms", error);
    return {
      success: false,
      message: "We couldn't reach the server. Check your connection and try again.",
    };
  }
}
