import { notFound } from "next/navigation";
import { ArchiveShell } from "@/components/ArchiveShell";
import { blogPosts, getLocalPost } from "@/lib/site-content";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getLocalPost(slug);
  if (!post) notFound();

  return (
    <ArchiveShell eyebrow={`${post.date} · ${post.readTime}`} title={post.title} intro={post.summary}>
      <article className="article-body">
        <p className="article-lead">{post.intro}</p>
        <p>Co-authored with Aditya Jadav, Archie Veera and Rabinder Henry. Published in IJIRT, Volume 12, Issue 11, pages 12393–12396.</p>
        <a href="https://ijirt.org/publishedpaper/IJIRT199344_PAPER.pdf" target="_blank" rel="noreferrer">Read the original publication (PDF) ↗</a>
        {post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}
      </article>
    </ArchiveShell>
  );
}
