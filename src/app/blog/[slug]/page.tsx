import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, BookOpenCheck, Layers3 } from "lucide-react";
import { notFound } from "next/navigation";
import { getBlogData } from "@/lib/data-loader";

interface BlogPostPageProps {
  params: { slug: string };
}

function getAllPosts(data: any) {
  return [{ ...data.featured, isFeatured: true }, ...data.posts];
}

export async function generateStaticParams() {
  const data = await getBlogData();
  return getAllPosts(data).map((post: any) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const data = await getBlogData();
  const post = getAllPosts(data).find((entry: any) => entry.slug === params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} — Threemates Blog`,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: "article",
      images: [{ url: post.image, width: 800, height: 450, alt: post.title }],
    },
    twitter: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const data = await getBlogData();
  const posts = getAllPosts(data);
  const post = posts.find((entry: any) => entry.slug === params.slug);

  if (!post || !post.content) {
    notFound();
  }

  const relatedPosts = posts.filter((entry: any) => entry.slug !== post.slug).slice(0, 3);

  return (
    <div className="pb-8">
      <section className="site-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="hero-glow glass-panel px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pt-12">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            Back to blog
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="tag-chip">{post.category}</span>
                <span className="tag-chip">{post.date}</span>
                <span className="tag-chip">{post.readTime}</span>
              </div>
              <h1 className="display-title mt-5 text-balance text-[clamp(2.2rem,4.8vw,4.6rem)]">{post.title}</h1>
              <p className="lead-copy mt-5 max-w-xl">{post.description}</p>
              {post.author && (
                <div className="mt-6 flex items-center gap-3">
                  <Image src={post.author.avatar} alt={post.author.name} width={44} height={44} className="rounded-full" />
                  <div>
                    <p className="text-sm font-medium text-slate-950">{post.author.name}</p>
                    <p className="text-xs text-slate-500">{post.author.role}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="editor-card p-4">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell site-section">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="editor-card p-6">
              <span className="section-badge">
                <BookOpenCheck className="h-3.5 w-3.5" />
                Tags
              </span>
              <div className="mt-5 flex flex-wrap gap-2">
                {post.content.tags?.map((tag: string) => (
                  <span key={tag} className="tag-chip">{tag}</span>
                ))}
              </div>
            </div>
            <div className="rounded-[1.75rem] border border-[#101827] bg-[#0b0c10] p-6 text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)]">
              <span className="section-badge border-white/10 bg-white/10 text-white/85">
                <Layers3 className="h-3.5 w-3.5" />
                Ready to build?
              </span>
              <p className="mt-5 text-sm leading-7 text-white/78">
                If this article reflects the kind of clarity you want in your product work, let&apos;s talk about your roadmap.
              </p>
              <Link href="/contact" className="site-button mt-6 w-fit px-5 py-3">
                Start a conversation
              </Link>
            </div>
          </aside>

          <article className="editor-card p-6 sm:p-8">
            <p className="text-base leading-8 text-slate-700">{post.content.intro}</p>
            <div className="mt-10 space-y-10">
              {post.content.sections.map((section: any, index: number) => (
                <section key={index}>
                  <h2 className="text-2xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-5 text-sm leading-7 text-slate-700 sm:text-base">
                    {section.body.split("\n\n").map((paragraph: string, paragraphIndex: number) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-badge">More reading</span>
            <h2 className="section-title mt-5">Related articles</h2>
          </div>
          <Link href="/blog" className="site-button gap-2 px-5 py-3">
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {relatedPosts.map((related: any) => (
            <Link key={related.slug} href={`/blog/${related.slug}`} className="editor-card block p-4">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.35rem] bg-slate-100">
                <Image src={related.image} alt={related.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="mt-4 flex items-center gap-3 text-xs text-slate-400">
                <span>{related.date}</span>
                <span>•</span>
                <span>{related.readTime}</span>
              </div>
              <h3 className="mt-2 text-xl font-semibold tracking-[-0.03em] text-slate-950">{related.title}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}