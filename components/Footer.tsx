export default function Footer() {
return (
<footer className="border-t border-white/10 mt-20">
<div className="max-w-7xl mx-auto px-6 py-10 text-sm flex justify-between">
<span>© {new Date().getFullYear()} Bilal Sabugar</span>
<span className="opacity-60">Built with Next.js & Three.js</span>
</div>
<section id="contact" className="border-t border-white/10 py-20 text-center">
<h2 className="text-3xl font-semibold">Let’s Work Together</h2>
<p className="opacity-60 mt-4">bilal.07.04.07@gmail.com</p>
</section>
</footer>
)
}
