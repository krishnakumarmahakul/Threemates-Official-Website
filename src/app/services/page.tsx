import { getServicesData } from "@/lib/data-loader";

export default async function Services() {
    const data = await getServicesData();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <span className="pill-badge mb-6">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime">
                            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                        </svg>
                        What we do
                    </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-heading font-semibold text-white leading-[1.05] max-w-4xl mb-8">
                        {data.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 max-w-2xl leading-relaxed">
                        {data.hero.description}
                    </p>
                </div>
            </section>

            {/* Services List */}
            <section className="pb-20 md:pb-32 px-4 md:px-8">
                <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
                    {data.offerings.map((service: any, index: number) => (
                        <div
                            key={service.id}
                            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${index % 2 !== 0 ? 'lg:[&>div:first-child]:order-last' : ''}`}
                        >
                            <div className="pt-2 lg:pt-8">
                                <span className="text-lime text-sm font-bold tracking-widest block mb-4">
                                    0{index + 1}
                                </span>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-semibold text-white mb-6 leading-[1.05] tracking-tight">
                                    {service.title}
                                </h2>
                                <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
                                    {service.description}
                                </p>

                                <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">
                                    Capabilities
                                </h4>
                                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                    {service.features.map((feature: string, fIndex: number) => (
                                        <li key={fIndex} className="flex items-center gap-3 text-white/60 font-medium text-[15px]">
                                            <div className="w-1.5 h-1.5 rounded-full bg-lime shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="relative aspect-square lg:aspect-[4/3] rounded-[2rem] overflow-hidden bg-secondary/30 w-full">
                                <div className="absolute inset-0 bg-gradient-to-tr from-lime/10 to-transparent" />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
