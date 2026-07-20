import { upload } from "@vercel/blob/client";
import type { UploadedFile } from "@/lib/buildSubmission";

const UPLOAD_CONCURRENCY = 3;
const MULTIPART_THRESHOLD_BYTES = 100 * 1024 * 1024;

export async function uploadFiles(
  files: File[],
  onProgress: (percentage: number) => void,
): Promise<UploadedFile[]> {
  const results: UploadedFile[] = new Array(files.length);
  const loadedByIndex = new Array(files.length).fill(0);
  const totalByIndex = files.map((file) => file.size);
  const reportProgress = () => {
    const loaded = loadedByIndex.reduce((sum, value) => sum + value, 0);
    const total = totalByIndex.reduce((sum, value) => sum + value, 0);
    onProgress(total === 0 ? 100 : Math.round((loaded / total) * 100));
  };

  let nextIndex = 0;
  async function worker() {
    while (nextIndex < files.length) {
      const index = nextIndex++;
      const file = files[index];
      if (!file) continue;
      const blob = await upload(file.name, file, {
        access: "public",
        handleUploadUrl: "/api/upload",
        contentType: file.type,
        multipart: file.size > MULTIPART_THRESHOLD_BYTES,
        onUploadProgress: ({ loaded }) => {
          loadedByIndex[index] = loaded;
          reportProgress();
        },
      });
      results[index] = { name: file.name, url: blob.url, size: file.size };
    }
  }

  await Promise.all(
    Array.from({ length: Math.min(UPLOAD_CONCURRENCY, files.length) }, worker),
  );
  return results;
}
