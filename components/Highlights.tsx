'use client'

import { motion } from 'framer-motion'


const items = [
{ title: 'AI & ML', desc: 'Models that actually ship.' },
{ title: 'Robotics', desc: 'Hardware + software thinking.' },
{ title: 'Systems', desc: 'Scalable, structured engineering.' },
]


export default function Highlights() {
return (
<section className="py-32 max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-10">
{items.map((i, idx) => (
<motion.div
key={i.title}
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ delay: idx * 0.15 }}
className="border border-white/10 rounded-xl p-8"
>
<h3 className="text-xl font-semibold">{i.title}</h3>
<p className="mt-4 opacity-60">{i.desc}</p>
</motion.div>
))}
</section>
)
}