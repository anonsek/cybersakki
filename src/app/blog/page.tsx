import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { constructMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = constructMetadata({
  title: "Technical Blog & Web Insights",
  description:
    "Articles and technical guides on Next.js 16 SEO, Core Web Vitals performance optimization, web security hardening, and React architecture by Muhammad Saqlain.",
  path: "/blog",
  keywords: [
    "Next.js SEO Blog",
    "Web Security Articles",
    "Core Web Vitals Guide",
    "Full Stack Development Blog",
  ],
});

export default function BlogIndexPage() {
  const breadcrumbItems = [{ label: "Blog", href: "/blog" }];
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  return (
    <div className="pt-32 pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} />

        <div className="mb-16 text-center">
          <span className="mb-3 inline-block font-mono text-sm uppercase tracking-widest text-primary">
            Engineering Insights
          </span>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Technical SEO, Security & Performance Articles
          </h1>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-muted-foreground">
            In-depth guides on Next.js 16, technical SEO best practices, web vulnerability hardening, and web performance optimization.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="glass group flex flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all hover:border-primary/30 hover:glow-primary"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4 text-xs font-mono text-muted-foreground">
                  <span className="rounded-md bg-primary/10 border border-primary/20 px-2.5 py-1 text-primary">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                  {post.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-secondary/80 px-2 py-0.5 font-mono text-[10px] text-muted-foreground"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <Button asChild variant="outline" className="w-full group/btn" size="sm">
                <Link href={`/blog/${post.slug}`}>
                  <span>Read Article</span>
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
