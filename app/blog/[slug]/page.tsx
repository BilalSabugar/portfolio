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
        {post.sections.map((section) => <section key={section.heading}><h2>{section.heading}</h2><p>{section.body}</p></section>)}
      </article>
    </ArchiveShell>
  );
}
