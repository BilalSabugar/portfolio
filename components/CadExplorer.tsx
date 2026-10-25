"use client";
import dynamic from "next/dynamic";
import { useState } from "react";
import SceneBoundary from "./SceneBoundary";
import { Box, RotateCcw, ArrowUpRight } from "lucide-react";

const Viewer = dynamic(() => import("./OriginalCadViewer"), { ssr: false, loading: () => <p className="cad-loading" role="status">Preparing the CAD viewer…</p> });
export function CadExplorer() {
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState(0);
  return <section className="cad-explorer"><p className="eyebrow">Original CAD / Interactive inspection</p><h2>A closer look at the mechanism.</h2><p>Rotate the original assembly mesh from the Novexa repository. This is design geometry; it does not simulate the robot’s movement.</p><div className="cad-stage">{loaded ? <SceneBoundary><Viewer key={view} /></SceneBoundary> : <div className="cad-invitation"><Box size={38} strokeWidth={1} /><button className="button-primary" onClick={() => setLoaded(true)}>Load original CAD · 19 MB<ArrowUpRight size={18} /></button><p>Downloads the source STL from GitHub when you choose to open it.</p></div>}</div>{loaded && <div className="cad-tools"><span>Drag to rotate · Scroll to zoom</span><button onClick={() => setView(view + 1)}><RotateCcw size={15} />Reset view</button></div>}</section>;
}
