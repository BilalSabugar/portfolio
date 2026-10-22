import Link from 'next/link'


export default function BlogCard({ blog }: { blog: any }) {
return (
<Link href={`/blog/${blog.slug}`} className="block border border-white/10 rounded-lg p-6 hover:border-cyan-400 transition">
<h2 className="text-xl font-semibold">{blog.title}</h2>
<p className="opacity-60 mt-3">{blog.excerpt}</p>
</Link>
)
}