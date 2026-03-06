import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { getHomeData } from "@/lib/data-loader";

export default async function Home() {
  const data = await getHomeData();

  return (
    <div className="flex flex-col min-h-screen">

      {/* ════════════════════════════════════════════ */}
      {/* HERO SECTION */}
      {/* ════════════════════════════════════════════ */}
      <section className="relative pt-32 md:pt-48 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">

          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-xs md:text-sm font-semibold tracking-widest uppercase">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
            AGENCY EXCELLENCE
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime">
              <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
            </svg>
          </div>

          {/* Main Headline Block */}
          <div className="flex flex-col items-center gap-1 md:gap-4 w-full">
            <h1 className="text-5xl sm:text-6xl md:text-[7rem] lg:text-[8.5rem] leading-[0.9] tracking-tighter font-heading text-white font-semibold">
              A digital agency
            </h1>

            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mt-2 md:mt-4">
              <h1 className="text-5xl sm:text-6xl md:text-[7rem] lg:text-[8.5rem] leading-[0.9] tracking-tighter font-heading text-white font-semibold">
                that
              </h1>
              {/* Avatar Group Pill */}
              <div className="flex items-center bg-secondary p-1 md:p-2 rounded-full border border-white/10">
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-600 border-2 border-background overflow-hidden relative">
                  <Image src="https://i.pravatar.cc/150?img=32" alt="Team member" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-gray-500 border-2 border-background -ml-4 overflow-hidden relative">
                  <Image src="https://i.pravatar.cc/150?img=12" alt="Team member" fill className="object-cover" />
                </div>
                <div className="w-10 h-10 md:w-16 md:h-16 rounded-full bg-lime border-2 border-background -ml-4 flex items-center justify-center text-black font-bold text-xl">
                  +
                </div>
              </div>
              <h1 className="text-5xl sm:text-6xl md:text-[7rem] lg:text-[8.5rem] leading-[0.9] tracking-tighter font-heading text-white font-semibold">
                builds
              </h1>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-[7rem] lg:text-[8.5rem] leading-[0.9] tracking-tighter font-heading text-white font-semibold mt-2 md:mt-4">
              great products
            </h1>
          </div>

          {/* Description & CTAs */}
          <div className="flex flex-col items-center gap-8 mt-6">
            <p className="text-lg md:text-xl text-white/60 max-w-2xl text-center font-body leading-relaxed">
              {data.hero.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full md:w-auto">
              <Link
                href={data.hero.primaryCta.href}
                className="btn-primary w-full sm:w-auto text-lg"
              >
                {data.hero.primaryCta.label}
              </Link>
              <Link
                href={data.hero.secondaryCta.href}
                className="btn-secondary w-full sm:w-auto text-lg"
              >
                {data.hero.secondaryCta.label}
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* CLIENTS / TRUSTED BY - MARQUEE */}
      {/* ════════════════════════════════════════════ */}
      <section className="py-16 md:py-20 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-8">
          <p className="text-sm font-semibold tracking-widest uppercase text-white/40 text-center">
            {data.clients.title}
          </p>
        </div>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee items-center gap-16 md:gap-24 whitespace-nowrap">
            {[...data.clients.logos, ...data.clients.logos].map((logo: any, index: number) => (
              <span
                key={index}
                className="text-2xl md:text-3xl font-heading font-bold text-white/20 hover:text-white/50 transition-colors cursor-default select-none"
              >
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* SERVICES SECTION */}
      {/* ════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left Column: Heading */}
            <div className="lg:w-1/3 lg:sticky lg:top-32 lg:self-start">
              <span className="pill-badge mb-6">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
                {data.services.badge}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-heading font-semibold text-white leading-[1.1]">
                {data.services.title}
              </h2>
            </div>

            {/* Right Column: Interactive List */}
            <div className="lg:w-2/3 flex flex-col">
              {data.services.items.map((service: any, index: number) => (
                <div
                  key={index}
                  className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-white/10 hover:border-lime/50 transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <span className="text-sm font-mono text-white/30 font-semibold">0{index + 1}</span>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-semibold text-white group-hover:text-lime transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <div className="md:w-1/2 mt-4 md:mt-0 flex items-center justify-between gap-6">
                    <p className="text-white/50 text-base md:text-lg line-clamp-2 md:line-clamp-none leading-relaxed">
                      {service.description}
                    </p>
                    <div className="hidden md:flex flex-shrink-0 w-12 h-12 rounded-full border border-white/20 items-center justify-center group-hover:bg-lime group-hover:text-black group-hover:border-lime transition-all duration-300">
                      <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* FEATURED WORK */}
      {/* ════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
            <div>
              <span className="pill-badge mb-6">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                </svg>
                {data.featuredWork.badge}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-heading font-semibold text-white leading-[1.1]">
                {data.featuredWork.title}
              </h2>
            </div>
            <Link
              href={data.featuredWork.viewAllBtn.href}
              className="inline-flex items-center gap-3 font-semibold text-lg hover:text-lime transition-colors group shrink-0"
            >
              {data.featuredWork.viewAllBtn.label}
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-lime group-hover:text-black transition-colors">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            {data.featuredWork.projects.map((project: any, index: number) => (
              <Link
                href={`/work/${project.slug}`}
                key={index}
                className={`group block ${index === 2 ? 'md:col-span-2' : ''}`}
              >
                <div className={`relative ${index === 2 ? 'aspect-[21/9]' : 'aspect-[4/3]'} rounded-[1.5rem] md:rounded-[2rem] overflow-hidden mb-6 bg-secondary/30`}>
                  <div className="absolute inset-0 bg-gradient-to-tr from-lime/10 via-transparent to-transparent group-hover:from-lime/20 transition-all duration-700" />
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-5 left-5 flex items-center gap-2">
                    <span className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md text-white text-sm font-semibold border border-white/10">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center px-1">
                  <h3 className="text-2xl md:text-3xl font-heading font-semibold text-white group-hover:text-lime transition-colors">
                    {project.title}
                  </h3>
                  <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-lime group-hover:text-black group-hover:border-lime transition-all duration-300">
                    <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* PROCESS / HOW WE WORK */}
      {/* ════════════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="pill-badge mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-lime">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
              </svg>
              {data.process.badge}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-heading font-semibold text-white leading-[1.1]">
              {data.process.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {data.process.steps.map((step: any, index: number) => (
              <div
                key={index}
                className="group relative p-8 md:p-10 rounded-[1.5rem] md:rounded-[2rem] bg-[#0d0d0d] border border-white/5 hover:border-lime/20 transition-all duration-300"
              >
                <span className="text-6xl md:text-7xl font-heading font-bold text-white/[0.04] absolute top-4 right-6 select-none">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-full bg-lime/10 flex items-center justify-center mb-6 group-hover:bg-lime/20 transition-colors">
                  <span className="text-lime font-heading font-bold text-sm">{step.number}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-heading font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm md:text-base">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* TESTIMONIALS */}
      {/* ════════════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-[#060606]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl tracking-tighter font-heading font-semibold text-white text-center mb-16">
            {data.testimonials.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {data.testimonials.reviews.map((review: any, index: number) => (
              <div key={index} className="bg-[#111] p-8 md:p-12 rounded-[1.5rem] md:rounded-[2rem] border border-white/[0.06] hover:border-lime/20 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-lime/40 mb-6">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" />
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" />
                </svg>
                <p className="text-xl md:text-2xl leading-relaxed text-white mb-8 font-heading font-medium">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-secondary border border-white/10 overflow-hidden relative">
                    <Image src={`https://i.pravatar.cc/150?img=${index + 10}`} alt={review.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">{review.author}</h4>
                    <p className="text-sm text-lime">{review.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════ */}
      {/* CTA BANNER */}
      {/* ════════════════════════════════════════════ */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-7xl tracking-tighter font-heading font-semibold text-white leading-[1.1] mb-8">
            Ready to build something{" "}
            <span className="text-lime">amazing?</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
            Let&apos;s discuss your next project and create something that stands out in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg">
              Start a Project
              <ArrowUpRight className="w-5 h-5" />
            </Link>
            <Link href="/work" className="btn-secondary text-lg">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
