import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bilal Sabugar — Robotics, AI & Product Engineering",
  description: "Portfolio of Bilal Sabugar: robotics, embedded systems, applied AI, research and product engineering.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
