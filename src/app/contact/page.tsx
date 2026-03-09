import { getContactData } from "@/lib/data-loader";
import { ArrowUpRight, Mail, Phone, MapPin, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default async function Contact() {
    const data = await getContactData();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100/60 via-cyan-50/40 to-background dark:from-blue-950/30 dark:via-cyan-950/20 dark:to-background" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-200/40 to-transparent dark:from-blue-800/20 blur-3xl" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Left: Info */}
                        <div>
                            <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs md:text-sm font-medium shadow-soft mb-6">
                                <Sparkles className="w-4 h-4 text-blue-500 mr-2" />
                                Get in Touch
                            </Badge>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-bold text-foreground leading-[1.05] mb-6">
                                {data.hero.title}
                            </h1>
                            <p className="text-lg md:text-xl text-muted-foreground max-w-md leading-relaxed mb-16">
                                {data.hero.description}
                            </p>

                            <div className="space-y-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 mb-2">Email</h4>
                                        <a href={`mailto:${data.info.email}`} className="text-lg text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                                            {data.info.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 mb-2">Phone</h4>
                                        <a href={`tel:${data.info.phone.replace(/[^0-9]/g, '')}`} className="text-lg text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium">
                                            {data.info.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-blue-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground/70 mb-2">Office</h4>
                                        <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
                                            {data.info.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="bg-card p-8 md:p-12 rounded-[2rem] border">
                            <h2 className="text-2xl font-bold text-foreground mb-8">{data.form.title}</h2>

                            <form className="space-y-6">
                                {data.form.fields.map((field: any, index: number) => (
                                    <div key={index} className="space-y-2">
                                        <label htmlFor={field.name} className="text-sm font-medium text-muted-foreground">
                                            {field.label}
                                        </label>
                                        {field.type === 'textarea' ? (
                                            <textarea
                                                id={field.name}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                rows={5}
                                                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none"
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                id={field.name}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3.5 text-foreground placeholder-muted-foreground/50 focus:outline-none focus:ring-1 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                                            />
                                        )}
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors mt-4 flex items-center justify-center gap-2 text-lg"
                                >
                                    {data.form.submitBtn}
                                    <ArrowUpRight className="w-5 h-5" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
