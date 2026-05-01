import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  MoveRight,
  Phone,
  Repeat,
  Shield,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { FaqAccordion } from "@/components/FAQAccordion";
import { getAboutData, getAITrainingData, getFaqData, getProcessData, getWorkData } from "@/lib/data-loader";
import {
  COMPANY_EMAIL,
  COMPANY_LOCATIONS,
  COMPANY_PHONE,
  COMPANY_WEBSITE,
  COMPANY_WEBSITE_URL,
} from "@/constants/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Threemates, our software delivery process, AI skilling programs, and our offices in Maharashtra and Odisha.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Threemates — Who We Are",
    description:
      "Threemates is a technology company providing modern IT services, product engineering, and AI skilling programs.",
    url: "/about",
    type: "website",
  },
  twitter: {
    title: "About Threemates — Who We Are",
    description:
      "Threemates is a technology company providing modern IT services, product engineering, and AI skilling programs.",
  },
};

export default async function About() {
  const [data, faqs, process, work, aiTraining] = await Promise.all([
    getAboutData(),
    getFaqData(),
    getProcessData(),
    getWorkData(),
    getAITrainingData(),
  ]);

  const valueIcons = {
    Shield,
    Zap,
    Code2,
    Users,
    BarChart3,
    Repeat,
  } as const;

  const clientStories = work.projects.slice(0, 3);
  const trainingPrograms = aiTraining.programs.slice(0, 3);

  return (
    <div className="pb-10">
      <section className="site-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="hero-glow glass-panel overflow-hidden px-5 pb-5 pt-10 sm:px-8 lg:px-12 lg:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-badge">
              <Sparkles className="h-3.5 w-3.5" />
              About Threemates
            </span>
            <h1 className="display-title mt-6 text-balance">We build practical software systems that help teams operate and grow with confidence.</h1>
            <p className="lead-copy mx-auto mt-5 max-w-2xl">{data.hero.description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              <Link href="/contact" className="site-button gap-2 px-5 py-3">
                Start a project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/ai-training" className="site-button-secondary px-5 py-3">
                Explore AI skilling
              </Link>
            </div>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.75fr] lg:items-start">
            <div className="editor-card overflow-hidden p-3 sm:p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.5rem] bg-slate-100">
                <Image
                  src={data.hero.image}
                  alt="Threemates delivery team"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 65vw"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-3 text-sm text-slate-500">
                <div>
                  <p className="font-medium text-slate-900">Delivery for institutions, enterprises, and growth-stage teams</p>
                  <p className="text-xs">ERP, SaaS, web platforms, mobile products, and AI capability building.</p>
                </div>
                <div className="flex -space-x-2">
                  {[11, 12, 13, 14, 15].map((avatar) => (
                    <Image
                      key={avatar}
                      src={`https://i.pravatar.cc/60?img=${avatar}`}
                      alt="Client avatar"
                      width={28}
                      height={28}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {data.stats.map((stat: any, index: number) => (
                <div key={stat.label} className={`${index % 2 === 0 ? "pastel-pink" : "pastel-blue"} editor-card min-h-[140px] p-6`}>
                  <div className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">{stat.value}</div>
                  <p className="mt-5 text-sm leading-6 text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell site-section">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <div>
            <span className="section-badge">
              <Users className="h-3.5 w-3.5" />
              Who we are
            </span>
            <h2 className="section-title mt-5 text-balance">Technology execution for teams that need clarity, speed, and measurable outcomes.</h2>
            <p className="lead-copy mt-4">{data.company.description}</p>
            <div className="mt-6 space-y-3">
              {data.mission.features.map((feature: string) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-blue-600" />
                  <p className="text-sm leading-7 text-slate-600">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="editor-card p-6">
              <span className="tag-chip">Mission</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Build software that removes friction.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{data.mission.description}</p>
            </div>
            <div className="editor-card pastel-sky p-6">
              <span className="tag-chip">Vision</span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">Be the partner teams rely on when execution matters.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{data.vision.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="section-badge">
              <Shield className="h-3.5 w-3.5" />
              Why choose us
            </span>
            <h2 className="section-title mt-5 text-balance">A delivery model built for reliability, visibility, and long-term product value.</h2>
          </div>
          <Link href="/services" className="site-button-secondary w-fit px-5 py-3">
            See services
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {data.values.items.map((item: any, index: number) => {
            const Icon = valueIcons[item.icon as keyof typeof valueIcons] || Shield;
            return (
              <div key={item.title} className={`${index % 3 === 0 ? "pastel-pink" : index % 3 === 1 ? "pastel-blue" : "pastel-sky"} editor-card min-h-[220px] p-6`}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-10 text-xl font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="section-badge">
              <Repeat className="h-3.5 w-3.5" />
              Our process
            </span>
            <h2 className="section-title mt-5 text-balance">Structured delivery from discovery through deployment and support.</h2>
          </div>
          <Link href="/contact" className="site-button w-fit gap-2 px-5 py-3">
            Talk to the team
            <MoveRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {process.steps.map((step: any, index: number) => (
            <div key={step.step} className={`${index % 2 === 0 ? "editor-card" : "editor-card pastel-sky"} min-h-[210px] p-6`}>
              <span className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">Step {step.step}</span>
              <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="section-badge">
              <BriefcaseBusiness className="h-3.5 w-3.5" />
              Client success
            </span>
            <h2 className="section-title mt-5 text-balance">A few examples of the systems we have already put into production.</h2>
          </div>
          <Link href="/work" className="site-button-secondary w-fit px-5 py-3">
            View case studies
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {clientStories.map((project: any) => (
            <div key={project.slug} className="editor-card group flex h-full flex-col p-4 sm:p-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-slate-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] text-slate-500">
                <span className="tag-chip">{project.category}</span>
                <span className="tag-chip">{project.client}</span>
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{project.caseStudy.solution}</p>
              <p className="mt-4 text-sm font-medium text-slate-900">Outcome</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{project.caseStudy.outcome}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
          <div>
            <span className="section-badge">
              <GraduationCap className="h-3.5 w-3.5" />
              AI skilling & training
            </span>
            <h2 className="section-title mt-5 text-balance">Programs for institutions and teams building practical AI capability.</h2>
            <p className="lead-copy mt-4">{aiTraining.description}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {aiTraining.internship.stats.map((stat: any, index: number) => (
                <div key={stat.label} className={`${index % 2 === 0 ? "pastel-blue" : "pastel-pink"} editor-card p-5`}>
                  <div className="text-4xl font-semibold tracking-[-0.05em] text-slate-950">{stat.value}</div>
                  <p className="mt-3 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
            <Link href="/ai-training" className="site-button mt-8 inline-flex gap-2 px-5 py-3">
              Explore AI training
              <GraduationCap className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-4">
            {trainingPrograms.map((program: any, index: number) => (
              <div key={program.title} className={`${index === 1 ? "pastel-sky" : "editor-card"} rounded-[1.75rem] border border-white/80 p-6 shadow-[0_16px_40px_-26px_rgba(15,23,42,0.26)]`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl shadow-soft">
                      {program.icon}
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{program.title}</h3>
                      <p className="text-sm text-slate-500">{program.duration}</p>
                    </div>
                  </div>
                  <BriefcaseBusiness className="h-5 w-5 text-blue-600" />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">{program.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {program.topics.map((topic: string) => (
                    <span key={topic} className="tag-chip">{topic}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="section-badge">
              <MapPin className="h-3.5 w-3.5" />
              Our offices
            </span>
            <h2 className="section-title mt-5 text-balance">Local presence for delivery, training, and long-term support.</h2>
          </div>
          <a href={COMPANY_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="site-button-secondary inline-flex w-fit gap-2 px-5 py-3">
            Visit {COMPANY_WEBSITE}
            <Globe className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="grid gap-5 sm:grid-cols-2">
            {COMPANY_LOCATIONS.map((location, index) => (
              <div key={location.slug} className={`${index === 0 ? "pastel-blue" : "pastel-pink"} editor-card min-h-[260px] p-6`}>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
                  <MapPin className="h-4 w-4" />
                  <span>{location.label} · {location.region}</span>
                </div>
                <p className="mt-6 text-lg font-semibold tracking-[-0.03em] text-slate-950">{location.region}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{location.address}</p>
              </div>
            ))}
          </div>

          <div className="editor-card p-6 sm:p-7">
            <span className="section-badge">
              <Mail className="h-3.5 w-3.5" />
              Contact
            </span>
            <div className="mt-6 space-y-5">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Phone</p>
                  <a href={`tel:${COMPANY_PHONE.replace(/[^0-9]/g, "")}`} className="mt-1 block text-base font-medium text-slate-950">
                    {COMPANY_PHONE}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Email</p>
                  <a href={`mailto:${COMPANY_EMAIL}`} className="mt-1 block text-base font-medium text-slate-950">
                    {COMPANY_EMAIL}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  <Globe className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Web</p>
                  <a href={COMPANY_WEBSITE_URL} target="_blank" rel="noopener noreferrer" className="mt-1 block text-base font-medium text-slate-950">
                    {COMPANY_WEBSITE}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_340px] lg:items-start">
          <div>
            <span className="section-badge">FAQ</span>
            <h2 className="section-title mt-5">Question? Answer</h2>
            <div className="mt-8">
              <FaqAccordion items={faqs.slice(0, 6)} />
            </div>
          </div>

          <aside className="glass-panel self-start px-5 py-6 sm:px-6">
            <span className="section-badge">Work with us</span>
            <p className="mt-5 text-base leading-7 text-slate-700">
              Need ERP delivery, SaaS engineering, or AI skilling support? We can scope the right engagement quickly.
            </p>
            <div className="mt-6 space-y-4 rounded-[1.5rem] border border-white/80 bg-white/90 p-4 shadow-soft">
              <div className="flex items-start gap-3">
                <Building2 className="mt-1 h-5 w-5 text-blue-600" />
                <p className="text-sm leading-6 text-slate-600">Delivery and training support across Maharashtra and Odisha.</p>
              </div>
              <div className="flex items-start gap-3">
                <Users className="mt-1 h-5 w-5 text-blue-600" />
                <p className="text-sm leading-6 text-slate-600">Structured discovery, practical implementation, and post-launch support.</p>
              </div>
            </div>
            <Link href="/contact" className="site-button mt-6 inline-flex gap-2 px-5 py-3">
              Contact Threemates
              <MoveRight className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </section>
    </div>
  );
}