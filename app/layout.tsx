import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bilalsabugar.github.io/portfolio/"),
  title: { default: "Bilal Sabugar — Robotics & Product Engineering", template: "%s | Bilal Sabugar" },
  description: "Portfolio of Bilal Sabugar: robotics, embedded systems, applied AI, research and product engineering.",
  robots: { index: true, follow: true },
  icons: { icon: [{ url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/brand-icon`, type: "image/png", sizes: "64x64" }] },
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
