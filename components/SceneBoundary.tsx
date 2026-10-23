"use client";
import { Component, type ReactNode } from "react";

export default class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() { return { failed: true }; }
  render() {
    return this.state.failed
      ? <p className="scene-fallback">The 3D preview is unavailable on this device. All project records remain available through the navigation.</p>
      : this.props.children;
  }
}
