import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./portfolio.css";
const manrope = localFont({ src: "./fonts/manrope-latin.woff2", variable: "--font-manrope", weight: "400 700", display: "swap" });
const dmMono = localFont({ src: [{ path: "./fonts/dm-mono-regular.woff2", weight: "400" }, { path: "./fonts/dm-mono-medium.woff2", weight: "500" }], variable: "--font-dm-mono", display: "swap", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL("https://bilalsabugar.github.io/portfolio/"),
  title: { default: "Bilal Sabugar — Robotics & Product Engineering", template: "%s | Bilal Sabugar" },
  description: "Portfolio of Bilal Sabugar: robotics, embedded systems, applied AI, research and product engineering.",
  robots: { index: true, follow: true },
  icons: { icon: [{ url: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/brand-icon.png`, type: "image/png", sizes: "64x64" }] },
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
      <body className={`${manrope.variable} ${dmMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
