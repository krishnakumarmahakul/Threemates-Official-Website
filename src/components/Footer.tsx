import Link from "next/link";
import { Logo } from "./Logo";
import {
    COMPANY_EMAIL,
    COMPANY_LOCATIONS,
    COMPANY_PHONE,
    COMPANY_SUMMARY,
    COMPANY_WEBSITE,
    COMPANY_WEBSITE_URL,
    FOOTER_LINKS,
} from "@/constants/site";

type FooterData = {
    description?: string;
    ctaText?: string;
    ctaLink?: string;
    socials?: Array<{ name: string; href: string }>;
    links?: Array<{ label: string; href: string }>;
    contact?: { phone?: string; email?: string };
    copyright?: string;
};

export function Footer({ data }: { data?: FooterData }) {
    const quickLinks = data?.links?.length ? data.links : FOOTER_LINKS;
    const socials = (data?.socials ?? []).filter((social) => social.href && social.href !== "#");
    const footerDescription = data?.description || COMPANY_SUMMARY;
    const phone = data?.contact?.phone || COMPANY_PHONE;
    const email = data?.contact?.email || COMPANY_EMAIL;

    return (
        <footer className="relative mt-20 overflow-hidden rounded-t-[2.75rem] bg-[#06070b] text-white sm:mt-24 md:rounded-t-[4rem]">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_center,rgba(37,99,235,0.18),transparent_36%)]" />

            <div className="site-shell relative pt-16 sm:pt-20 lg:pt-24">
                <div className="grid gap-10 lg:grid-cols-[1.25fr_0.8fr_0.85fr_0.95fr] lg:gap-8">
                    <div>
                        <div className="mb-5">
                            <Logo forceLight className="scale-[0.86] origin-left" />
                        </div>
                        <h3 className="max-w-md font-display text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                            Stay connected
                        </h3>
                        <p className="mt-4 max-w-md text-sm leading-7 text-zinc-400 sm:text-base">
                            {footerDescription}
                        </p>

                        <div className="mt-8 grid gap-3 sm:grid-cols-2">
                            {COMPANY_LOCATIONS.map((location) => (
                                <div key={location.slug} className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-300">
                                        {location.label} · {location.region}
                                    </p>
                                    <p className="mt-3 text-sm leading-6 text-zinc-300">{location.address}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">Quick links</h4>
                        <ul className="space-y-3 text-sm text-zinc-300">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="transition-colors hover:text-white">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">Contact info</h4>
                        <div className="space-y-3 text-sm leading-7 text-zinc-300 sm:text-base">
                            <a href={`tel:${phone.replace(/[^0-9]/g, "")}`} className="block transition-colors hover:text-white">
                                {phone}
                            </a>
                            <a href={`mailto:${email}`} className="block transition-colors hover:text-white">
                                {email}
                            </a>
                            <a href={COMPANY_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="block transition-colors hover:text-white">
                                {COMPANY_WEBSITE}
                            </a>
                            <Link href={data?.ctaLink || "/contact"} className="site-button mt-4 px-5 py-3 text-sm">
                                {data?.ctaText || "Start a Project"}
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="mb-5 text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">Online</h4>
                        <div className="space-y-3 text-sm text-zinc-300">
                            {socials.length ? (
                                socials.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 border-b border-white/8 py-3 transition-colors hover:text-white"
                                    >
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[10px] font-semibold uppercase">
                                            {social.name.slice(0, 1)}
                                        </span>
                                        {social.name}
                                    </a>
                                ))
                            ) : (
                                <div className="rounded-[1.35rem] border border-white/10 bg-white/5 p-4 text-sm leading-6 text-zinc-400">
                                    Reach us by email or on the website while social profiles are being updated.
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-14 flex flex-col gap-4 border-t border-white/8 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>{data?.copyright || `© 2026 Threemates. All rights reserved.`}</p>
                    <div className="flex flex-wrap gap-5">
                        <Link href="/about" className="transition-colors hover:text-white">About</Link>
                        <Link href="/work" className="transition-colors hover:text-white">Work</Link>
                        <Link href="/blog" className="transition-colors hover:text-white">Blog</Link>
                    </div>
                </div>
            </div>

            <div className="pointer-events-none relative select-none px-4 pb-10 pt-6 sm:pb-6 sm:pt-4" aria-hidden="true">
                <div className="overflow-hidden">
                    <h1 className="text-center font-display text-[15vw] font-black uppercase leading-[0.9] tracking-[-0.08em] text-shadow-brand-3d sm:text-[18vw] sm:leading-[0.8] lg:text-[16vw]">
                        THREEMATES
                    </h1>
                </div>
            </div>
        </footer>
    );
}
