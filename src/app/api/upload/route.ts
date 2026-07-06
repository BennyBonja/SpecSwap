import { handleUpload, type HandleUploadBody } from "@vercel/blob/client";
import { NextResponse } from "next/server";
import {
  ACCEPTED_FILE_EXTENSIONS,
  MAX_FILE_SIZE_BYTES,
  getExtension,
} from "@/components/form/formSchema";

export const runtime = "nodejs";

export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname) => {
        // The client's file-type/size checks are only for UX — this is the
        // real gate. Extension is used instead of content-type because
        // formats like .dwg/.rvt/.ifc don't have reliable browser MIME types.
        if (!ACCEPTED_FILE_EXTENSIONS.includes(getExtension(pathname))) {
          throw new Error("Unsupported file type");
        }

        return {
          maximumSizeInBytes: MAX_FILE_SIZE_BYTES,
          addRandomSuffix: true,
        };
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Upload failed" },
      { status: 400 },
    );
  }
}
