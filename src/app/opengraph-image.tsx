import { ImageResponse } from "next/og";

export const alt = "NEXGRAN | Fulget e Revestimentos Minerais";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#292D30", color: "#F4F2ED", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <svg width="96" height="96" viewBox="0 0 40 40">
            <rect x="3" y="4" width="9" height="32" fill="#F4F2ED" />
            <rect x="28" y="4" width="9" height="32" fill="#F4F2ED" />
            <polygon points="12,4 21,4 28,36 19,36" fill="#D87542" />
          </svg>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: 10 }}>NEXGRAN</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ width: 96, height: 6, background: "#D87542" }} />
          <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.05 }}>Fulget mineral aplicado diretamente no local.</div>
          <div style={{ fontSize: 28, color: "#A9AEB1" }}>FULGET E REVESTIMENTOS MINERAIS</div>
        </div>
      </div>
    ),
    size,
  );
}
