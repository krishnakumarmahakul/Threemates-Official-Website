import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag, User, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBlogData } from "@/lib/data-loader";

interface BlogPostPageProps {
    params: { slug: string };
}

function getAllPosts(data: any) {
    return [
        { ...data.featured, isFeatured: true },
        ...data.posts,
    ];
}

// Generate static params for all blog posts
export async function generateStaticParams() {
    const data = await getBlogData();
    const allPosts = getAllPosts(data);
    return allPosts.map((post: any) => ({
        slug: post.slug,
    }));
}

// Generate dynamic metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const data = await getBlogData();
    const allPosts = getAllPosts(data);
    const post = allPosts.find((p: any) => p.slug === params.slug);

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
            publishedTime: post.date,
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
    const allPosts = getAllPosts(data);
    const post = allPosts.find((p: any) => p.slug === params.slug);

    if (!post || !post.content) {
        notFound();
    }

    // Get related posts (exclude current, take 3)
    const relatedPosts = allPosts
        .filter((p: any) => p.slug !== post.slug)
        .slice(0, 3);

    return (
        <div className="flex flex-col min-h-screen">
            {/* Back Navigation */}
            <section className="pt-28 md:pt-36 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    <Link href="/blog">
                        <Button variant="ghost" className="group -ml-4 text-muted-foreground hover:text-foreground">
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Blog
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Article Header */}
            <section className="pt-8 md:pt-12 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Category & Meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <Badge className="rounded-full px-4 py-1.5 bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 text-sm font-medium">
                            {post.category}
                        </Badge>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" />
                                {post.readTime}
                            </span>
                        </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-8">
                        {post.title}
                    </h1>

                    {/* Description */}
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
                        {post.description}
                    </p>

                    {/* Author */}
                    {post.author && (
                        <div className="flex items-center gap-4 pb-10 border-b">
                            <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                width={48}
                                height={48}
                                className="rounded-full"
                                quality={80}
                            />
                            <div>
                                <p className="font-semibold text-foreground">{post.author.name}</p>
                                <p className="text-sm text-muted-foreground">{post.author.role}</p>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Hero Image */}
            <section className="pt-10 md:pt-14 px-4 md:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="relative aspect-[21/9] rounded-2xl md:rounded-3xl overflow-hidden bg-secondary/30">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                            quality={90}
                            priority
                            sizes="(max-width: 1280px) 100vw, 1100px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className="pt-14 md:pt-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto">
                    {/* Intro */}
                    <div className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-14 border-l-4 border-blue-500/30 pl-6 py-2">
                        {post.content.intro}
                    </div>

                    {/* Sections */}
                    <div className="space-y-14 md:space-y-16">
                        {post.content.sections.map((section: any, index: number) => (
                            <div key={index}>
                                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6 tracking-tight">
                                    {section.heading}
                                </h2>
                                <div className="prose prose-lg dark:prose-invert max-w-none">
                                    {section.body.split('\n\n').map((paragraph: string, pIndex: number) => {
                                        // Check if paragraph is a list (starts with • or numbered)
                                        if (paragraph.includes('\n•') || paragraph.startsWith('•')) {
                                            const items = paragraph.split('\n').filter(Boolean);
                                            const hasIntro = !items[0].startsWith('•');
                                            return (
                                                <div key={pIndex} className="mb-6">
                                                    {hasIntro && (
                                                        <p className="text-muted-foreground leading-relaxed mb-4"
                                                            dangerouslySetInnerHTML={{
                                                                __html: items[0].replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                                                            }}
                                                        />
                                                    )}
                                                    <ul className="space-y-3">
                                                        {items.filter(item => item.startsWith('•')).map((item, iIndex) => (
                                                            <li key={iIndex} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 flex-shrink-0" />
                                                                <span
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item.replace('• ', '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                                                                    }}
                                                                />
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            );
                                        }

                                        // Check if it's a numbered list
                                        if (/^\d+\./.test(paragraph) || paragraph.includes('\n1.')) {
                                            const items = paragraph.split('\n').filter(Boolean);
                                            const hasIntro = !/^\d+\./.test(items[0]);
                                            return (
                                                <div key={pIndex} className="mb-6">
                                                    {hasIntro && (
                                                        <p className="text-muted-foreground leading-relaxed mb-4"
                                                            dangerouslySetInnerHTML={{
                                                                __html: items[0].replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                                                            }}
                                                        />
                                                    )}
                                                    <ol className="space-y-3">
                                                        {items.filter(item => /^\d+\./.test(item)).map((item, iIndex) => (
                                                            <li key={iIndex} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                                                                <span className="w-6 h-6 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                                                                    {iIndex + 1}
                                                                </span>
                                                                <span
                                                                    dangerouslySetInnerHTML={{
                                                                        __html: item.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                                                                    }}
                                                                />
                                                            </li>
                                                        ))}
                                                    </ol>
                                                </div>
                                            );
                                        }

                                        // Regular paragraph
                                        return (
                                            <p
                                                key={pIndex}
                                                className="text-muted-foreground leading-relaxed mb-6"
                                                dangerouslySetInnerHTML={{
                                                    __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
                                                }}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tags */}
                    {post.content.tags && (
                        <div className="mt-16 pt-10 border-t">
                            <div className="flex items-center gap-3 flex-wrap">
                                <Tag className="w-4 h-4 text-muted-foreground" />
                                {post.content.tags.map((tag: string, index: number) => (
                                    <Badge
                                        key={index}
                                        variant="secondary"
                                        className="rounded-full px-4 py-1.5 text-sm"
                                    >
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Author Bio Card */}
                    {post.author && (
                        <div className="mt-14 p-8 rounded-2xl bg-secondary/30 border">
                            <div className="flex items-start gap-5">
                                <Image
                                    src={post.author.avatar}
                                    alt={post.author.name}
                                    width={64}
                                    height={64}
                                    className="rounded-full"
                                    quality={80}
                                />
                                <div>
                                    <p className="text-sm text-muted-foreground mb-1">Written by</p>
                                    <p className="text-lg font-bold text-foreground">{post.author.name}</p>
                                    <p className="text-sm text-muted-foreground">{post.author.role}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="pt-20 md:pt-28 pb-20 md:pb-32 px-4 md:px-8 mt-16 border-t">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                                More Articles
                            </h2>
                            <Link href="/blog">
                                <Button variant="ghost" className="group text-muted-foreground hover:text-foreground">
                                    View all
                                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                            {relatedPosts.map((related: any, index: number) => (
                                <Link
                                    href={`/blog/${related.slug}`}
                                    key={index}
                                    className="group block"
                                >
                                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 bg-secondary/30">
                                        <Image
                                            src={related.image}
                                            alt={related.title}
                                            fill
                                            quality={80}
                                            loading="lazy"
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
                                            <span className="text-blue-600 dark:text-blue-400">{related.category}</span>
                                            <span>{related.date}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
                                            {related.title}
                                        </h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                                            {related.description}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="px-4 md:px-8 pb-20 md:pb-32">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="p-10 md:p-16 rounded-3xl bg-gradient-to-br from-blue-600 to-blue-700 text-white relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_60%)]" />
                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
                                Let&apos;s discuss how Threemates can help you build scalable, modern software solutions.
                            </p>
                            <Link href="/contact">
                                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 rounded-full px-8 font-semibold">
                                    Start a Conversation
                                    <ChevronRight className="w-4 h-4 ml-2" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
