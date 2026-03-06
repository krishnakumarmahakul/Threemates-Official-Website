"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation({ data }: { data: any }) {
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

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8",
                scrolled ? "pt-4" : "pt-6 md:pt-8"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-3xl font-heading font-bold tracking-tight z-50">
                    doop
                </Link>

                {/* Desktop Nav - Floating Pill */}
                <nav className="hidden md:flex flex-1 justify-center pointer-events-none">
                    <div className="pointer-events-auto flex items-center p-1.5 rounded-full border border-white/10 bg-black/40 backdrop-blur-md">
                        {data?.links?.map((link: any) => {
                            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-all px-5 py-2.5 rounded-full",
                                        isActive
                                            ? "bg-white text-black"
                                            : "text-white/80 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>
                </nav>

                {/* Right side CTA & Mobile Toggle */}
                <div className="flex items-center gap-4 z-50">
                    {data?.cta && (
                        <Link
                            href={data.cta.href}
                            className="hidden md:flex items-center gap-2 px-6 py-3 bg-lime text-black rounded-full text-sm font-semibold hover:bg-lime-hover transition-all"
                        >
                            {data.cta.label}
                            <ArrowUpRight size={18} />
                        </Link>
                    )}

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-white bg-white/10 rounded-full border border-white/10 backdrop-blur-sm"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-4 right-4 mt-2 p-4 bg-[#111] border border-white/10 rounded-3xl shadow-2xl md:hidden overflow-hidden flex flex-col space-y-2 backdrop-blur-xl"
                    >
                        {data?.links?.map((link: any) => {
                            const isActive = pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');
                            return (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={cn(
                                        "text-lg font-medium px-4 py-3 rounded-2xl transition-colors",
                                        isActive ? "bg-white border text-black" : "text-white/80 hover:bg-white/5"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            )
                        })}
                        {data?.cta && (
                            <Link
                                href={data.cta.href}
                                className="mt-4 flex items-center justify-center gap-2 w-full px-6 py-4 bg-lime text-black rounded-full text-base font-semibold"
                            >
                                {data.cta.label}
                                <ArrowUpRight size={20} />
                            </Link>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
