import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { getWorkData } from "@/lib/data-loader";

export default async function Work() {
    const data = await getWorkData();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero with gradient background */}
            <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden">
                {/* Soft gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-cyan-50/40 to-background dark:from-blue-950/30 dark:via-cyan-950/20 dark:to-background" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-200/40 to-transparent dark:from-blue-800/20 blur-3xl" />
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur border shadow-soft text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        Our Work
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-bold text-foreground leading-[1.05] max-w-4xl mb-8">
                        {data.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
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
                                    ? 'bg-foreground text-background border-foreground'
                                    : 'bg-transparent text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground'
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
                                <div className="relative aspect-[4/5] rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-6 bg-secondary/50 card-hover">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent group-hover:from-blue-500/20 transition-all duration-700" />
                                    <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center text-sm font-medium text-muted-foreground">
                                        <span>{project.category}</span>
                                        <span>{project.client}</span>
                                    </div>
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-blue-600 transition-colors max-w-xs leading-tight">
                                            {project.title}
                                        </h3>
                                        <div className="w-11 h-11 rounded-full border border-border flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 shrink-0">
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
