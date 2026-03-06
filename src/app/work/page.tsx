import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getWorkData } from "@/lib/data-loader";

export default async function Work() {
    const data = await getWorkData();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <span className="pill-badge mb-6">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                        </svg>
                        Our Work
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-heading font-semibold text-white leading-[1.05] max-w-4xl mb-8">
                        {data.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
                        {data.hero.description}
                    </p>
                </div>
            </section>

            {/* Category Filter */}
            <section className="px-4 md:px-8 mb-12 md:mb-16">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap gap-3">
                        {data.categories.map((cat: string, index: number) => (
                            <button
                                key={cat}
                                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 border ${index === 0
                                    ? 'bg-white text-black border-white'
                                    : 'bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Grid */}
            <section className="px-4 md:px-8 pb-20 md:pb-32">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-20">
                        {data.projects.map((project: any, index: number) => (
                            <Link
                                href={project.link}
                                key={project.id}
                                className={`group block ${index % 2 !== 0 ? 'md:mt-20' : ''}`}
                            >
                                <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-6 bg-secondary/30">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-lime/10 to-transparent group-hover:from-lime/20 transition-all duration-700" />
                                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm font-medium text-white/40">
                                        <span>{project.category}</span>
                                        <span>{project.client}</span>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white group-hover:text-lime transition-colors max-w-xs leading-tight">
                                            {project.title}
                                        </h3>
                                        <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-lime group-hover:text-black group-hover:border-lime transition-all duration-300 shrink-0">
                                            <ArrowUpRight className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
