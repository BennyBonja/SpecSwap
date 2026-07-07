import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#051220",
          padding: "80px",
        }}
      >
        <div style={{ display: "flex", fontSize: 72, fontWeight: 700 }}>
          <span style={{ color: "#ffffff" }}>Spec</span>
          <span style={{ color: "#e35f12" }}>Swap</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 34,
            color: "#aec7dd",
            maxWidth: 900,
          }}
        >
          We swap specified FF&E for smarter, more cost-effective
          alternatives.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 48,
            fontSize: 24,
            color: "#f3752a",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          24–48 hour comparison quote
        </div>
      </div>
    ),
    { ...size },
  );
}
