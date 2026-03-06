import { getContactData } from "@/lib/data-loader";
import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";

export default async function Contact() {
    const data = await getContactData();

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* Left: Info */}
                        <div>
                            <span className="pill-badge mb-6">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime">
                                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                                </svg>
                                Get in Touch
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl tracking-tighter font-heading font-semibold text-white leading-[1.05] mb-6">
                                {data.hero.title}
                            </h1>
                            <p className="text-lg md:text-xl text-white/50 max-w-md leading-relaxed mb-16">
                                {data.hero.description}
                            </p>

                            <div className="space-y-10">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center shrink-0">
                                        <Mail className="w-5 h-5 text-lime" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Email</h4>
                                        <a href={`mailto:${data.info.email}`} className="text-lg text-white hover:text-lime transition-colors font-medium">
                                            {data.info.email}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center shrink-0">
                                        <Phone className="w-5 h-5 text-lime" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Phone</h4>
                                        <a href={`tel:${data.info.phone.replace(/[^0-9]/g, '')}`} className="text-lg text-white hover:text-lime transition-colors font-medium">
                                            {data.info.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-lime" />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Studio</h4>
                                        <p className="text-lg text-white/70 whitespace-pre-line leading-relaxed">
                                            {data.info.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="bg-[#0d0d0d] p-8 md:p-12 rounded-[2rem] border border-white/[0.06]">
                            <h2 className="text-2xl font-heading font-semibold text-white mb-8">{data.form.title}</h2>

                            <form className="space-y-6">
                                {data.form.fields.map((field: any, index: number) => (
                                    <div key={index} className="space-y-2">
                                        <label htmlFor={field.name} className="text-sm font-medium text-white/60">
                                            {field.label}
                                        </label>
                                        {field.type === 'textarea' ? (
                                            <textarea
                                                id={field.name}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                rows={5}
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-lime/50 focus:border-lime/50 transition-all resize-none"
                                            />
                                        ) : (
                                            <input
                                                type={field.type}
                                                id={field.name}
                                                name={field.name}
                                                placeholder={field.placeholder}
                                                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/20 focus:outline-none focus:ring-1 focus:ring-lime/50 focus:border-lime/50 transition-all"
                                            />
                                        )}
                                    </div>
                                ))}

                                <button
                                    type="button"
                                    className="w-full bg-lime text-black py-4 rounded-xl font-semibold hover:bg-lime-hover transition-colors mt-4 flex items-center justify-center gap-2 text-lg"
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
