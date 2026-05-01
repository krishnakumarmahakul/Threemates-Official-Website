import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BrainCircuit, BriefcaseBusiness, Layers3 } from "lucide-react";
import { getAITrainingData, getServicesData } from "@/lib/data-loader";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore Threemates services — ERP Development, Web Application Development, Mobile App Development, SaaS Development, and Cloud Solutions.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Our Services — Threemates",
    description:
      "End-to-end IT services: ERP systems, web apps, mobile apps, SaaS platforms, and cloud solutions.",
    url: "/services",
    type: "website",
  },
  twitter: {
    title: "Our Services — Threemates",
    description:
      "End-to-end IT services: ERP systems, web apps, mobile apps, SaaS platforms, and cloud solutions.",
  },
};

export default async function Services() {
  const [services, training] = await Promise.all([getServicesData(), getAITrainingData()]);

  return (
    <div className="pb-8">
      <section className="site-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="hero-glow glass-panel px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-badge">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              What we do
            </span>
            <h1 className="display-title mt-6 text-balance">Systems, products, and delivery built for serious growth.</h1>
            <p className="lead-copy mx-auto mt-5 max-w-2xl">{services.hero.description}</p>
          </div>
        </div>
      </section>

      <section className="site-shell site-section">
        <div className="space-y-6 lg:space-y-8">
          {services.offerings.map((service: any, index: number) => (
            <div
              key={service.id}
              className="group grid gap-6 rounded-[2rem] border border-white/70 bg-white/88 p-5 shadow-[0_18px_50px_-30px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(15,23,42,0.22)] sm:p-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-10"
            >
              <div className={index % 2 !== 0 ? "lg:order-2" : undefined}>
                <span className="section-badge">
                  <Layers3 className="h-3.5 w-3.5" />
                  0{index + 1}
                </span>
                <h2 className="section-title mt-5 text-[clamp(2rem,4vw,3.5rem)]">{service.title}</h2>
                <p className="lead-copy mt-4 max-w-xl">{service.description}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {service.features.map((feature: string) => (
                    <div key={feature} className="editor-card p-4">
                      <p className="text-sm font-medium text-slate-800">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className={index % 2 !== 0 ? "lg:order-1" : undefined}>
                <div className="editor-card p-3">
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover img-zoom"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell pb-10">
        <div className="rounded-[1.75rem] border border-[#101827] bg-[#0b0c10] p-6 text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="section-badge border-white/10 bg-white/10 text-white/85">
                <BrainCircuit className="h-3.5 w-3.5" />
                Skill development
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Empowering teams with AI skills.</h2>
              <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">{training.description}</p>
              <Link href="/ai-training" className="site-button mt-6 w-fit gap-2 px-5 py-3">
                Explore AI training
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {training.programs.map((program: any) => (
                <div key={program.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <div className="text-3xl">{program.icon}</div>
                  <h3 className="mt-4 text-lg font-semibold">{program.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">{program.duration}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}