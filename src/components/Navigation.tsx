"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "./Logo";
import { NAV_ITEMS } from "@/constants/site";

export function Navigation({ data: _data }: { data: any }) {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const links = NAV_ITEMS;

    const isActive = (href: string) => {
        if (href.startsWith("/#")) {
            return pathname === "/";
        }
        return pathname === href;
    };

    return (
        <>
            <header
                className={cn(
                    "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
                    scrolled ? "pt-2" : "pt-3 sm:pt-5"
                )}
            >
                <div className="site-shell">
                    <div className={cn(
                        "relative mx-auto flex items-center justify-between gap-2 px-1 py-2 transition-all duration-300 sm:gap-3 sm:px-2",
                        scrolled && "py-1.5"
                    )}>
                        <div className="relative z-10 flex items-center gap-3">
                            <Logo size="sm" className="scale-[0.6] origin-left sm:scale-[0.76] md:scale-[0.82] lg:scale-[0.86]" />
                        </div>

                        <nav className="relative z-10 hidden lg:flex items-center justify-center">
                            <div className={cn(
                                "flex items-center gap-1 rounded-full border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.62)_0%,rgba(233,241,255,0.34)_100%)] px-2 py-1.5 shadow-[0_24px_60px_-34px_rgba(15,23,42,0.28),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-2xl",
                                scrolled && "border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.72)_0%,rgba(233,241,255,0.42)_100%)]"
                            )}>
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={cn(
                                        "whitespace-nowrap rounded-full px-4 py-2.5 text-[13px] font-medium transition-all duration-200 xl:px-5 xl:text-sm",
                                        isActive(link.href)
                                            ? "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0_12px_30px_-16px_rgba(37,99,235,0.85)]"
                                            : "text-slate-700 hover:bg-white/70 hover:text-slate-950"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>

                        <div className="relative z-10 hidden sm:flex items-center gap-3">
                            <Link href="/contact" className="site-button whitespace-nowrap px-5 py-2.5 text-sm sm:px-6">
                                Start a Project
                            </Link>
                        </div>

                        <button
                            className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/55 text-slate-700 shadow-[0_18px_40px_-28px_rgba(15,23,42,0.28),inset_0_1px_0_rgba(255,255,255,0.92)] backdrop-blur-2xl transition-all hover:shadow-medium lg:hidden"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.button
                            type="button"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[60] bg-slate-950/18 backdrop-blur-sm lg:hidden"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close menu"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -12, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -12, scale: 0.96 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="fixed inset-x-4 top-20 z-[70] rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(242,246,255,0.88)_100%)] p-5 shadow-[0_28px_80px_-34px_rgba(15,23,42,0.34)] backdrop-blur-2xl sm:inset-x-auto sm:right-6 sm:w-[360px] lg:hidden"
                        >
                            <div className="mb-5 flex items-center justify-between">
                                <Logo size="sm" className="scale-[0.62] origin-left sm:scale-[0.72]" />
                                <button
                                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-700"
                                    onClick={() => setIsOpen(false)}
                                    aria-label="Close menu"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            <div className="space-y-1 rounded-[1.5rem] border border-white/70 bg-white/60 p-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                                {links.map((link, index) => (
                                    <motion.div
                                        key={link.label}
                                        initial={{ opacity: 0, x: -12 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.04 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "block rounded-[1.1rem] px-4 py-3 text-sm font-medium transition-all",
                                                isActive(link.href)
                                                    ? "bg-white text-slate-950 shadow-soft"
                                                    : "text-slate-600 hover:bg-white hover:text-slate-950"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="mt-5 space-y-3 rounded-[1.5rem] border border-white/70 bg-white/75 p-4">
                                <p className="text-sm leading-6 text-slate-500">
                                    Let&apos;s shape a focused, conversion-first product presence for your brand.
                                </p>
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="site-button flex w-full items-center justify-center px-4 py-3">
                                    Start a Project
                                </Link>
                                <Link href="/contact" onClick={() => setIsOpen(false)} className="site-button-secondary flex w-full items-center justify-center px-4 py-3">
                                    Contact us
                                </Link>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}