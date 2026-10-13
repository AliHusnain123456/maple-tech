import { ImageResponse } from "next/og";
export const alt = "Maple Tech: Reliable IT, Rooted in Service.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: 80, background: "#0B1F3A", color: "white" }}>
        <div style={{ display: "flex", alignItems: "center", fontSize: 76, fontWeight: 800 }}>
          <svg width="96" height="96" viewBox="0 0 32 32" style={{ marginRight: 24 }}><path d="M16 2L19 8L23 6L22 13L28 11L26 17L30 19L22 23L23 26L17 25L17 31L15 31L15 25L9 26L10 23L2 19L6 17L4 11L10 13L9 6L13 8Z" fill="#2563EB" /></svg>
          Maple Tech
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 40, color: "#CBD5E1" }}>Reliable IT, Rooted in Service.</div>
      </div>
    ),
    size
  );
}
