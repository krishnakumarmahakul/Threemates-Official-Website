"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Logo } from "./Logo";

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

    const links = [
        { href: "/about", label: "About us" },
        { href: "/services", label: "Services" },
        { href: "/work", label: "Projects" },
        { href: "/blog", label: "Blog" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 md:px-8",
                    scrolled ? "pt-2 pb-2" : "pt-4 md:pt-6"
                )}
            >
                <div className="max-w-7xl mx-auto grid grid-cols-[auto_1fr_auto] items-center">
                    <Logo size="sm" />

                    <nav className="hidden md:flex items-center justify-center">
                        <div className="flex items-center gap-1 px-2 py-1.5 rounded-full bg-secondary/60 dark:bg-zinc-800/70 backdrop-blur-sm">
                            {links.map((link) => (
                                <Link
                                    key={link.label}
                                    href={link.href}
                                    className={cn(
                                        "text-sm font-medium transition-all duration-200 px-5 py-2 rounded-full",
                                        pathname === link.href
                                            ? "bg-primary text-primary-foreground"
                                            : "text-foreground/70 hover:text-foreground hover:bg-secondary/80 dark:hover:bg-zinc-700/60"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    <div className="flex items-center gap-3">
                        <ModeToggle />
                        <Link href="/contact" className="hidden md:flex">
                            <Button className="rounded-full px-6 bg-blue-600 hover:bg-blue-700 text-white" size="sm">
                                Start a Project
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>

            {/* Mobile menu toggle - rendered outside header to avoid stacking context issues */}
            <button
                className={cn(
                    "md:hidden fixed top-5 right-4 p-2.5 rounded-full border backdrop-blur-sm transition-all duration-200 z-[1000]",
                    isOpen
                        ? "bg-white text-black shadow-lg"
                        : "bg-secondary text-foreground shadow-soft hover:shadow-medium",
                    scrolled && !isOpen && "top-3"
                )}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Mobile menu overlay - rendered outside header to avoid stacking context issues */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed inset-0 z-[999] bg-background flex flex-col pt-28 px-8 md:hidden"
                    >
                        <div className="flex flex-col space-y-1">
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.06, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className={cn(
                                            "text-xl font-medium border-b border-border/50 py-5 block transition-all duration-200",
                                            pathname === link.href
                                                ? "text-primary translate-x-2"
                                                : "text-foreground hover:text-primary hover:translate-x-2"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        <div className="mt-auto pb-12 space-y-4">
                            <Link href="/contact" className="w-full">
                                <Button className="w-full rounded-full btn-press shadow-medium glow-blue" size="lg">
                                    Start a Project
                                </Button>
                            </Link>
                            <div className="flex justify-center">
                                <ModeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}