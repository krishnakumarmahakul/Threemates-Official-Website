import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpenCheck } from "lucide-react";
import { getBlogData } from "@/lib/data-loader";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles, guides, and industry insights from the Threemates team — covering ERP, SaaS, web development, mobile apps, and technology trends.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog — Threemates Insights & Tech Updates",
    description:
      "Read the latest articles on ERP, SaaS, web development, and technology trends from the Threemates team.",
    url: "/blog",
    type: "website",
  },
  twitter: {
    title: "Blog — Threemates Insights & Tech Updates",
    description:
      "Read the latest articles on ERP, SaaS, web development, and technology trends from the Threemates team.",
  },
};

export default async function Blog() {
  const data = await getBlogData();
  const posts = [data.featured, ...data.posts];

  return (
    <div className="pb-8">
      <section className="site-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="hero-glow glass-panel px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-badge">
              <BookOpenCheck className="h-3.5 w-3.5" />
              Blog
            </span>
            <h1 className="display-title mt-6 text-balance">Insights & creative resources</h1>
            <p className="lead-copy mx-auto mt-5 max-w-2xl">{data.hero.description}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {posts.map((post: any) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="editor-card group block p-4">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[1.35rem] bg-slate-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
                <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-950">{post.title}</h2>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="site-button gap-2 px-5 py-3">
              View more blog
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}