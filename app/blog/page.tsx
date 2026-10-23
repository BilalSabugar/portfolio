import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ArchiveShell } from "@/components/ArchiveShell";
import { blogPosts } from "@/lib/site-content";

export default function BlogPage() {
  return (
    <ArchiveShell eyebrow="Research archive" title="Design, fabrication and research." intro="A summary of the Novexa development work, with the original publication available for technical detail.">
      <section className="article-index">
        {blogPosts.map((post, index) => (
          <Link href={`/blog/${post.slug}`} key={post.slug}>
            <span>0{index + 1}</span><div><p>{post.date} · {post.readTime}</p><h2>{post.title}</h2><small>{post.summary}</small></div><ArrowRight />
          </Link>
        ))}
      </section>
    </ArchiveShell>
  );
}
