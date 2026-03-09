import { getAboutData } from "@/lib/data-loader";
import { Sparkles, Shield, Zap, Code2, Users, BarChart3, Repeat } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default async function About() {
    const data = await getAboutData();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-cyan-50/40 to-background dark:from-blue-950/30 dark:via-cyan-950/20 dark:to-background" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-200/40 to-transparent dark:from-blue-800/20 blur-3xl" />

                <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                    <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs md:text-sm font-medium shadow-soft">
                        <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                        About Us
                    </Badge>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-bold text-foreground leading-[1.05] max-w-4xl mx-auto">
                        {data.hero.title}
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        {data.hero.description}
                    </p>
                </div>
                <div className="mt-16 relative aspect-video rounded-[2rem] overflow-hidden bg-secondary/30 w-full max-w-6xl mx-auto">
                    <Image
                        src={data.hero.image}
                        alt="Threemates Team"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 1200px"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 md:py-20 border-y">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {data.stats.map((stat: any, index: number) => (
                            <div key={index} className="text-center p-6 md:p-8">
                                <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">{stat.value}</p>
                                <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Are */}
            {data.company && (
                <section className="py-20 md:py-32">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold text-foreground leading-[1.1] mb-6">
                                    {data.company.title}
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {data.company.description}
                                </p>
                            </div>
                            <div className="relative aspect-square rounded-[2rem] bg-secondary/30 overflow-hidden">
                                <Image
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop"
                                    alt="Our Office"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Mission */}
            <section className="py-20 md:py-32 border-t">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="relative aspect-square rounded-[2rem] bg-secondary/30 overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=800&auto=format&fit=crop"
                                alt="Our Mission"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                        </div>
                        <div>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold text-foreground leading-[1.1] mb-6">
                                {data.mission.title}
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                                {data.mission.description}
                            </p>
                            <ul className="space-y-5">
                                {data.mission.features.map((feature: string, index: number) => (
                                    <li key={index} className="flex items-center gap-4 text-foreground font-medium text-lg">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision */}
            {data.vision && (
                <section className="py-20 md:py-32 border-t">
                    <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold text-foreground leading-[1.1] mb-6">
                            {data.vision.title}
                        </h2>
                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                            {data.vision.description}
                        </p>
                    </div>
                </section>
            )}

            {/* Why Choose Us */}
            {data.values && (
                <section className="py-20 md:py-32 bg-muted/30 border-t">
                    <div className="max-w-7xl mx-auto px-4 md:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-bold text-foreground mb-6">
                                {data.values.title}
                            </h2>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                                {data.values.description}
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {data.values.items.map((item: any, index: number) => {
                                const iconMap: Record<string, any> = { Shield, Zap, Code2, Users, BarChart3, Repeat };
                                const IconComponent = iconMap[item.icon] || Sparkles;
                                return (
                                    <div key={index} className="group p-6 md:p-8 rounded-[1.5rem] bg-background border hover:shadow-elevated transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-5">
                                            <IconComponent className="w-6 h-6 text-blue-500" />
                                        </div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </div>
    );
}
