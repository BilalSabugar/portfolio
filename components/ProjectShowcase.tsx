'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  { id: 'NX-18', title: 'Novexa', category: 'Robotics / Mechatronics', desc: 'A 3D-printed, 18-DOF all-terrain hexapod.' },
  { id: 'SL-20', title: 'S.L.A.B.', category: 'Warehouse Robotics', desc: 'An automated guided vehicle for material movement.' },
  { id: 'VR-01', title: 'VIER', category: 'Medical Training Robotics', desc: 'An ultrasonic-guided intravenous practice simulator.' },
];

export default function ProjectShowcase() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="w-full max-w-5xl mx-auto py-32 px-6">
      <div className="mb-16">
        <h2 className="text-3xl font-bold tracking-tight mb-2">SELECTED WORKS</h2>
        <div className="w-24 h-[1px] bg-accent" />
      </div>

      <div className="flex flex-col">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseEnter={() => setActive(project.id)}
            onMouseLeave={() => setActive(null)}
            className="group relative border-t border-white/10 py-12 cursor-pointer transition-colors hover:bg-white/5"
          >
            <div className="flex flex-col md:flex-row justify-between items-baseline gap-4 relative z-10">
                <div className="flex items-baseline gap-6">
                    <span className="font-mono text-xs text-accent opacity-50">/{project.id}</span>
                    <h3 className="text-3xl md:text-4xl font-semibold group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                </div>
                <div className="text-right">
                    <p className="text-xs font-mono text-secondary mb-1">{project.category}</p>
                    <p className="text-sm text-secondary group-hover:text-white transition-colors">{project.desc}</p>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full h-[1px] bg-white/10" />
    </section>
  );
}
