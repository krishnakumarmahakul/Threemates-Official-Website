import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

export function Footer({ data }: { data: any }) {
    if (!data) return null;

    return (
        <footer className="bg-[#0a0a0a] text-white mt-16 md:mt-24 rounded-t-[2.5rem] md:rounded-t-[4rem] relative overflow-hidden">
            {/* Top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

            <div className="pt-16 md:pt-24 px-6 md:px-16 lg:px-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-12 gap-12 md:gap-8 pb-16 md:pb-24">
                        {/* Stay Connected */}
                        <div className="md:col-span-5">
                            <div className="mb-6">
                                <Logo forceLight />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{data.title}</h3>
                            <p className="text-zinc-400 mb-6 max-w-sm leading-relaxed">
                                {data.description || "Ideal for brands needing ongoing design and dev support."}
                            </p>
                            <div className="flex items-center rounded-full bg-zinc-900 border border-zinc-800 p-1.5 max-w-md">
                                <input
                                    type="email"
                                    placeholder="Enter your mail"
                                    className="bg-transparent border-none outline-none px-4 text-sm w-full placeholder:text-zinc-500 focus:ring-0 text-white"
                                />
                                <Button className="rounded-full w-10 h-10 p-0 flex-shrink-0 bg-white text-black hover:bg-zinc-200">
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>

                            {/* Social Links */}
                            <div className="mt-12 space-y-0">
                                {data.socials?.map((social: any) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 py-3 border-b border-zinc-800/60 text-zinc-400 hover:text-white cursor-pointer transition-colors"
                                    >
                                        <div className="w-6 h-6 rounded bg-zinc-800 flex items-center justify-center text-xs font-bold">
                                            {social.name.charAt(0)}
                                        </div>
                                        <span className="text-sm">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Menu */}
                        <div className="md:col-span-3">
                            <h4 className="text-zinc-500 mb-6 text-lg font-medium">Menu</h4>
                            <ul className="space-y-4">
                                {data.links?.map((link: any) => (
                                    <li key={link.label}>
                                        <Link href={link.href} className="text-zinc-300 hover:text-white transition-colors duration-200">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="md:col-span-4">
                            <h4 className="text-zinc-500 mb-6 text-lg font-medium">Get in touch</h4>
                            <div className="space-y-4 text-white font-medium">
                                <p>{data.contact?.phone}</p>
                                <p>{data.contact?.email}</p>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-zinc-800/50 pt-8 pb-8">
                        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-zinc-500 gap-4">
                            <p>{data.copyright}</p>
                            <div className="flex gap-6">
                                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Giant 3D brand text — bottom, clipped to prevent overflow */}
            <div className="relative w-full overflow-hidden pointer-events-none select-none">
                <div className="flex justify-end pr-4 md:pr-12 lg:pr-20 pb-4 md:pb-6">
                    <h1
                        className="font-display text-[18vw] md:text-[14vw] leading-[0.85] tracking-tighter uppercase text-shadow-brand text-right"
                    >
                        THREEMATES
                    </h1>
                </div>
            </div>
        </footer>
    );
}
