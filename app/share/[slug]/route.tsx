import { ImageResponse } from "next/og";
import { works } from "@/lib/portfolio";

export const dynamic = "force-static";
export function generateStaticParams() {
  return ["portfolio", ...works.map(work => work.slug)].map(slug => ({ slug: `${slug}.png` }));
}
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const key = slug.replace(/\.png$/, "");
  const work = works.find(item => item.slug === key);
  if (key !== "portfolio" && !work) return new Response("Not found", { status: 404 });
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "100%", height: "100%", padding: "44px 56px", background: "#111713", color: "#eeeae1", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #485047", paddingBottom: 24 }}><span style={{ fontSize: 28 }}>Bilal Sabugar<span style={{ color: "#e38c64" }}>.</span></span><span style={{ fontSize: 18, color: "#b4bbaa" }}>Robotics & software</span></div>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}><span style={{ color: "#e38c64", fontSize: 18 }}>{work ? work.label : "Co-founder & CTO / Aetheron Labs"}</span><span style={{ fontSize: work ? 102 : 74, lineHeight: 1.08, letterSpacing: -4, maxWidth: 1050 }}>{work ? work.title : "I build robots. And the software behind them."}</span><span style={{ fontSize: 26, lineHeight: 1.45, color: "#c3c9bc", maxWidth: 1010 }}>{work ? work.summary : "Mechanical design, robot control and engineering software. Explore the work, research and original sources."}</span></div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: "1px solid #485047", paddingTop: 20, fontSize: 17, color: "#b4bbaa" }}><span>{work ? work.contribution : "bilalsabugar.github.io/portfolio"}</span><span style={{ color: "#e38c64" }}>{work ? `Project ${work.number}` : "Portfolio"}</span></div>
    </div>, { width: 1200, height: 630 },
  );
}
