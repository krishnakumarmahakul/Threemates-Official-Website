import { getAboutData } from "@/lib/data-loader";

export default async function About() {
    const data = await getAboutData();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center space-y-8">
                    <span className="pill-badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                        </svg>
                        About Us
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-heading font-semibold text-white leading-[1.05] max-w-4xl mx-auto">
                        {data.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
                        {data.hero.description}
                    </p>
                </div>
                <div className="mt-16 relative aspect-video rounded-[2rem] overflow-hidden bg-secondary/30 w-full max-w-6xl mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-lime/10 to-transparent" />
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 md:py-20 border-y border-white/5">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {data.stats.map((stat: any, index: number) => (
                            <div key={index} className="text-center p-6 md:p-8">
                                <p className="text-4xl md:text-5xl font-heading font-bold text-white mb-2">{stat.value}</p>
                                <p className="text-sm text-white/40 uppercase tracking-wider font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission */}
            <section className="py-20 md:py-32">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-heading font-semibold text-white leading-[1.1] mb-6">
                                {data.mission.title}
                            </h2>
                            <p className="text-lg text-white/50 leading-relaxed mb-10">
                                {data.mission.description}
                            </p>
                            <ul className="space-y-5">
                                {data.mission.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-center gap-4 text-white font-medium text-lg">
                                        <div className="w-2 h-2 rounded-full bg-lime shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="relative aspect-square rounded-[2rem] bg-secondary/30 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-tr from-lime/10 to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-20 md:py-32 bg-[#060606]">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-heading font-semibold text-white text-center mb-16">
                        {data.team.title}
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {data.team.members.map((member: any, index: number) => (
                            <div key={index} className="group">
                                <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden mb-6 bg-secondary/30">
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-lime/5 to-transparent" />
                                </div>
                                <h3 className="text-xl font-heading font-bold text-white">{member.name}</h3>
                                <p className="text-lime text-sm font-medium">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
