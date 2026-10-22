const events = [
{ year: '2023', text: 'Started serious engineering projects' },
{ year: '2024', text: 'AI + Robotics focus' },
{ year: '2025', text: 'Production systems & research' },
]


export default function Timeline() {
return (
<section className="py-32 max-w-4xl mx-auto px-8">
<h2 className="text-4xl font-semibold mb-12">Journey</h2>
<div className="space-y-8">
{events.map(e => (
<div key={e.year} className="flex gap-6">
<span className="text-cyan-400 font-mono">{e.year}</span>
<p className="opacity-70">{e.text}</p>
</div>
))}
</div>
</section>
)
}