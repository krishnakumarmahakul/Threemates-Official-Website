import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Building2, Layers3, ShieldCheck, Users2 } from "lucide-react";
import { notFound } from "next/navigation";
import { getWorkData } from "@/lib/data-loader";

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const data = await getWorkData();
  return data.projects.map((project: any) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const data = await getWorkData();
  const project = data.projects.find((entry: any) => entry.slug === params.slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} — Threemates Case Study`,
      description: project.description,
      url: `/work/${project.slug}`,
      type: "article",
      images: [{ url: project.image, width: 800, height: 600, alt: project.title }],
    },
    twitter: {
      title: `${project.title} — Threemates Case Study`,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const data = await getWorkData();
  const project = data.projects.find((entry: any) => entry.slug === params.slug);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const caseStudy = project.caseStudy;
  const hasPillars = Array.isArray(caseStudy.pillars) && caseStudy.pillars.length > 0;
  const hasModuleGroups = Array.isArray(caseStudy.moduleGroups) && caseStudy.moduleGroups.length > 0;
  const hasShowcasePanels = Array.isArray(caseStudy.showcasePanels) && caseStudy.showcasePanels.length > 0;
  const hasStats = Array.isArray(caseStudy.stats) && caseStudy.stats.length > 0;
  const hasDayOne = Array.isArray(caseStudy.dayOne) && caseStudy.dayOne.length > 0;
  const pillarIcons = [Layers3, Users2, ShieldCheck, Building2] as const;

  return (
    <div className="pb-8">
      <section className="site-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="hero-glow glass-panel px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pt-12">
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900">
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <div className="mt-6 grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <span className="section-badge">
                <Layers3 className="h-3.5 w-3.5" />
                Overview
              </span>
              <h1 className="display-title mt-5 text-balance text-[clamp(2.4rem,5vw,4.8rem)]">{project.title}</h1>
              <p className="lead-copy mt-5 max-w-xl">{project.description}</p>
              {caseStudy.summary ? (
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">{caseStudy.summary}</p>
              ) : null}
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="tag-chip">Client: {project.client}</span>
                <span className="tag-chip">Category: {project.category}</span>
              </div>
            </div>

            <div className="editor-card p-4">
              <div className="relative aspect-[16/11] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
            </div>
          </div>

          {hasStats ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {caseStudy.stats.map((stat: any, index: number) => (
                <div key={stat.label} className={`${index % 2 === 0 ? "pastel-blue" : "pastel-pink"} editor-card min-h-[150px] p-5`}>
                  <div className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">{stat.value}</div>
                  <p className="mt-4 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {hasPillars ? (
        <section className="site-shell site-section pt-0">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="section-badge">
                <ShieldCheck className="h-3.5 w-3.5" />
                Why it works
              </span>
              <h2 className="section-title mt-5 text-balance">The operating principles behind Smart Campus ERP.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {caseStudy.pillars.map((pillar: any, index: number) => {
              const Icon = pillarIcons[index] || Layers3;
              return (
                <div key={pillar.title} className={`${index % 2 === 0 ? "pastel-sky" : "editor-card"} min-h-[220px] rounded-[1.75rem] border border-white/80 p-6 shadow-soft`}>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-soft">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-10 text-xl font-semibold tracking-[-0.03em] text-slate-950">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      <section className="site-shell site-section">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="editor-card p-6">
              <span className="section-badge">
                <ShieldCheck className="h-3.5 w-3.5" />
                The challenge
              </span>
              <p className="mt-5 text-base leading-8 text-slate-700">{caseStudy.clientRequirement}</p>
            </div>

            <div className="editor-card p-6">
              <span className="section-badge">
                <Users2 className="h-3.5 w-3.5" />
                Key friction points
              </span>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                {caseStudy.challenges.map((challenge: string) => (
                  <li key={challenge} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="editor-card p-6">
              <span className="section-badge">
                <Layers3 className="h-3.5 w-3.5" />
                The solution
              </span>
              <p className="mt-5 text-base leading-8 text-slate-700">{caseStudy.solution}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="editor-card p-6">
              <span className="section-badge">
                <Building2 className="h-3.5 w-3.5" />
                Project info
              </span>
              <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                <div className="grid grid-cols-[120px_1fr] gap-3 border-b border-slate-100 pb-4">
                  <span className="text-slate-400">Client</span>
                  <span>{project.client}</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-3 border-b border-slate-100 pb-4">
                  <span className="text-slate-400">Category</span>
                  <span>{project.category}</span>
                </div>
                <div className="grid grid-cols-[120px_1fr] gap-3">
                  <span className="text-slate-400">Scope</span>
                  <span>{project.description}</span>
                </div>
              </div>
              <Link href="/contact" className="site-button mt-6 w-fit px-5 py-3">
                View live site
              </Link>
            </div>

            <div className="editor-card p-6">
              <span className="section-badge">
                <Layers3 className="h-3.5 w-3.5" />
                Features
              </span>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-700">
                {caseStudy.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {hasModuleGroups ? (
        <section className="site-shell site-section pt-0">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <span className="section-badge">
                <Layers3 className="h-3.5 w-3.5" />
                Every module in one place
              </span>
              <h2 className="section-title mt-5 text-balance">Fifteen modules engineered to work as one system, not stitched together tools.</h2>
              <p className="lead-copy mt-4">Admissions, academics, finance, people operations, communication, analytics, and deployment all move inside the same operational fabric.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {caseStudy.moduleGroups.map((group: any, index: number) => (
                <div key={group.title} className={`${index === 0 ? "pastel-blue" : index === 1 ? "pastel-pink" : "pastel-sky"} editor-card min-h-[280px] p-6`}>
                  <span className="tag-chip">0{index + 1}</span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-slate-950">{group.title}</h3>
                  <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-600">
                    {group.items.map((item: string) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {hasShowcasePanels ? (
        <section className="site-shell site-section pt-0">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="section-badge">
                <Users2 className="h-3.5 w-3.5" />
                Product walkthrough
              </span>
              <h2 className="section-title mt-5 text-balance">Screens and workflows that make the platform tangible from day one.</h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {caseStudy.showcasePanels.map((panel: any, index: number) => (
              <div key={panel.title} className="editor-card group overflow-hidden p-4 sm:p-5">
                <div className={`rounded-[1.4rem] border border-white/80 ${index === 0 ? "bg-[#eef5ff]" : index === 1 ? "bg-[#fff8ef]" : "bg-[#f3f8f2]"} p-3`}>
                  <div className="flex items-center justify-between px-2 pb-3 pt-1">
                    <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Screen 0{index + 1}</span>
                    <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
                  </div>
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[1rem] border border-white/90 bg-white shadow-soft">
                    {panel.image ? (
                      <Image
                        src={panel.image}
                        alt={panel.title}
                        fill
                        className="object-cover img-zoom"
                        sizes="(max-width: 1024px) 100vw, 33vw"
                      />
                    ) : (
                      <div className="grid h-full gap-2 rounded-[1rem] bg-white/90 p-4 shadow-soft">
                        <div className="h-3 w-1/2 rounded-full bg-slate-200" />
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-20 rounded-[0.9rem] bg-slate-100" />
                          <div className="h-20 rounded-[0.9rem] bg-slate-100" />
                        </div>
                        <div className="h-28 rounded-[1rem] bg-slate-100" />
                      </div>
                    )}
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-slate-950">{panel.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{panel.description}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="site-shell site-section pt-0">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <div className="editor-card p-6">
            <span className="section-badge">
              <Layers3 className="h-3.5 w-3.5" />
              Stack
            </span>
            <div className="mt-5 flex flex-wrap gap-2">
              {caseStudy.technologyStack.map((tech: string) => (
                <span key={tech} className="tag-chip">{tech}</span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[#101827] bg-[#0b0c10] p-6 text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)]">
            <span className="section-badge border-white/10 bg-white/10 text-white/85">
              <ShieldCheck className="h-3.5 w-3.5" />
              The outcome
            </span>
            <p className="mt-5 text-base leading-8 text-white/80">{caseStudy.outcome}</p>
            {hasDayOne ? (
              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/55">Day one readiness</p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/70">
                  {caseStudy.dayOne.map((item: string) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="site-shell pb-10">
        <div className="editor-card bg-slate-50/90 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <span className="section-badge">Next project</span>
              <h2 className="section-title mt-5 text-[clamp(2rem,4vw,3.4rem)]">Have a similar project in mind?</h2>
              <p className="lead-copy mt-4">Let&apos;s shape a custom system with the same clarity, structure, and production focus.</p>
            </div>
            <Link href="/contact" className="site-button gap-2 px-5 py-3">
              Start a project
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}