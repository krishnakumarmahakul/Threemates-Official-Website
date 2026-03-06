import Link from "next/link";
import { getBlogData } from "@/lib/data-loader";

export default async function Blog() {
    const data = await getBlogData();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <span className="pill-badge mb-6">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                        </svg>
                        Blog
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-heading font-semibold text-white leading-[1.05] max-w-4xl mb-8">
                        {data.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
                        {data.hero.description}
                    </p>
                </div>
            </section>

            {/* Featured Post */}
            <section className="px-4 md:px-8 mb-16 md:mb-24">
                <div className="max-w-7xl mx-auto">
                    <Link href={`/blog/${data.featured.slug}`} className="group block">
                        <div className="relative aspect-[21/9] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-8 bg-secondary/30">
                            <div className="absolute inset-0 bg-gradient-to-tr from-lime/10 to-transparent group-hover:from-lime/20 transition-all duration-700" />
                            <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute bottom-6 left-6 flex items-center gap-3">
                                <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-white text-sm font-semibold border border-white/10">
                                    Featured
                                </span>
                            </div>
                        </div>
                        <div className="max-w-3xl space-y-4">
                            <div className="flex items-center gap-4 text-sm font-medium text-white/40">
                                <span className="text-lime">{data.featured.category}</span>
                                <span>•</span>
                                <span>{data.featured.date}</span>
                                <span>•</span>
                                <span>{data.featured.readTime}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-heading font-semibold text-white group-hover:text-lime transition-colors leading-tight">
                                {data.featured.title}
                            </h2>
                            <p className="text-lg text-white/50 leading-relaxed">
                                {data.featured.description}
                            </p>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Posts Grid */}
            <section className="px-4 md:px-8 pb-20 md:pb-32 border-t border-white/5 pt-16 md:pt-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14 md:gap-y-16">
                        {data.posts.map((post: any, index: number) => (
                            <Link
                                href={`/blog/${post.slug}`}
                                key={index}
                                className="group block"
                            >
                                <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-6 bg-secondary/30">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm font-medium text-white/40">
                                        <span className="text-lime">{post.category}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-heading font-semibold text-white group-hover:text-lime transition-colors leading-tight">
                                        {post.title}
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
