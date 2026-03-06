import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function Footer({ data }: { data: any }) {
    if (!data) return null;

    return (
        <footer className="bg-lime text-black pt-24 pb-12 rounded-t-[3rem] md:rounded-t-[5rem] mt-0 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 md:mb-32">
                    <div className="lg:col-span-2">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-heading font-semibold mb-8 max-w-lg leading-[1.1]">
                            {data.title}
                        </h2>
                        <Link
                            href={data.ctaLink}
                            className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-black/80 transition-colors text-lg"
                        >
                            <span>{data.ctaText}</span>
                            <ArrowUpRight size={20} />
                        </Link>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-black/60 mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {data.links?.map((link: any) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-lg font-medium hover:opacity-70 transition-opacity">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-black/60 mb-6">Connect</h4>
                        <div className="space-y-2 text-lg font-medium mb-8">
                            <p className="hover:opacity-70 cursor-pointer transition-opacity">{data.contact?.email}</p>
                            <p className="hover:opacity-70 cursor-pointer transition-opacity">{data.contact?.phone}</p>
                        </div>
                        <ul className="flex gap-3">
                            {data.socials?.map((social: any) => (
                                <li key={social.name}>
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-11 h-11 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all text-sm font-bold"
                                    >
                                        <span className="sr-only">{social.name}</span>
                                        {social.name.charAt(0)}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-black/50 gap-4">
                    <p>{data.copyright}</p>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-black transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-black transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Huge background logo text */}
            <h1 className="text-[25vw] font-heading font-bold leading-[0.7] tracking-tighter text-black/[0.06] absolute -bottom-4 md:-bottom-12 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none">
                doop
            </h1>
        </footer>
    );
}
