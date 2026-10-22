import { portfolioData } from "@/lib/portfolio-data";

export const certificates = portfolioData.credentials.map((item) => ({
  id: item.id,
  area: item.issuer,
  note: item.title,
  status: `${item.date} · ${item.credential}`,
}));

export const blogPosts = [
  {
    slug: "fabrication-of-a-3d-printed-hexapod",
    title: "Fabrication of a 3D Printed Hexapod for All Terrain Adaptive Locomotion",
    summary: "Published work behind Novexa: a six-legged, 18-DOF platform for adaptive movement across uneven terrain.",
    date: "April 24, 2026",
    readTime: "Research publication",
    intro: "This publication documents the design and fabrication of Novexa, a 3D-printed hexapod developed to explore adaptable locomotion in challenging environments.",
    sections: [
      { heading: "The machine", body: "Novexa uses six articulated legs with three degrees of freedom per leg. The structure was designed and simulated in CAD before being fabricated as a physical prototype." },
      { heading: "The control system", body: "The prototype uses an Arduino Mega, with an upgrade path toward STM32 control. Ultrasonic, LiDAR and environmental sensing are part of the continuing development plan." },
      { heading: "The objective", body: "The work focuses on practical all-terrain locomotion: a platform that can be built, tested and improved through direct physical validation." },
    ],
  },
] as const;

export function getLocalPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
