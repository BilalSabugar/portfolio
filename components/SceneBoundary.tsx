"use client";
import { Component, type ReactNode } from "react";

export default class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed
      ? <p className="scene-fallback" role="status">The 3D preview could not load. You can still inspect the images and open the original CAD from the project repository below.</p>
      : this.props.children;
  }
}
