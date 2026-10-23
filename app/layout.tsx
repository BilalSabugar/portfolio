import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bilalsabugar.github.io/portfolio/"),
  title: "Bilal Sabugar — Robotics, AI & Product Engineering",
  description: "Portfolio of Bilal Sabugar: robotics, embedded systems, applied AI, research and product engineering.",
  openGraph: {
    type: "website",
    title: "Bilal Sabugar — Robotics & Product Engineering",
    description: "Explore robotics projects, published research, open-source software and work at Aetheron Labs.",
    url: "https://bilalsabugar.github.io/portfolio/",
  },
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
