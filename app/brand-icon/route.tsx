import { ImageResponse } from "next/og";
export const dynamic = "force-static";
const size = { width: 64, height: 64 };
export function GET() {
  return new ImageResponse(<div style={{ width: "100%", height: "100%", background: "#111713", color: "#eeeae1", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 54, fontWeight: 600, letterSpacing: -5 }}>b<span style={{ color: "#e38c64" }}>.</span></div>, size);
}
