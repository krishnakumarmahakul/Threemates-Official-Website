import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  BrainCircuit,
  Building,
  CheckCircle2,
  GraduationCap,
  Mail,
  Phone,
  ShieldCheck,
  Users,
  Workflow,
} from "lucide-react";
import { getAITrainingData } from "@/lib/data-loader";

export const metadata: Metadata = {
  title: "AI Training & Skill Development — Threemates",
  description: "We reach out to educational institutions and organizations to provide skill training on the latest AI technologies.",
  alternates: { canonical: "/ai-training" },
  openGraph: {
    title: "AI Training & Skill Development — Threemates",
    description: "Empowering students and professionals with cutting-edge AI skills.",
    url: "/ai-training",
    type: "website",
  },
  twitter: {
    title: "AI Training & Skill Development — Threemates",
    description: "Empowering students and professionals with cutting-edge AI skills.",
  },
};

export default async function AITrainingPage() {
  const data = await getAITrainingData();

  const audiences = [
    {
      icon: <GraduationCap className="h-5 w-5" />,
      title: "Educational institutions",
      description: "Schools, colleges, and universities looking to upskill students with practical AI knowledge.",
    },
    {
      icon: <Building className="h-5 w-5" />,
      title: "Corporate teams",
      description: "Organizations training teams on applied AI workflows, automation, and model-driven operations.",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Student cohorts",
      description: "Focused training for students and fresh graduates who want a production-oriented entry into AI work.",
    },
  ];

  const approach = [
    "Industry-aligned curriculum based on current market demand",
    "Live project work with mentor guidance and code reviews",
    "Assessments that measure practical build ability, not just theory",
    "Post-program support for projects, interviews, and portfolio direction",
  ];

  const deliveryIcons = [BookOpenCheck, Building, Workflow] as const;

  return (
    <div className="pb-8">
      <section className="site-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="hero-glow glass-panel px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pt-12">
          <div className="mx-auto max-w-4xl text-center">
            <span className="section-badge">
              <BrainCircuit className="h-3.5 w-3.5" />
              {data.badge}
            </span>
            <h1 className="display-title mt-6 text-balance">{data.title}</h1>
            <p className="lead-copy mx-auto mt-5 max-w-2xl">{data.description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={data.cta.primaryBtn.href} className="site-button gap-2 px-5 py-3">
                {data.cta.primaryBtn.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href={data.cta.secondaryBtn.href} className="site-button-secondary px-5 py-3">
                {data.cta.secondaryBtn.label}
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-left sm:grid-cols-2 xl:grid-cols-4">
              {data.heroHighlights.map((item: string, index: number) => (
                <div
                  key={item}
                  className={`${index % 2 === 0 ? "bg-white/75" : "bg-[#edf4ff]"} rounded-[1.35rem] border border-white/80 px-4 py-4 shadow-soft`}
                >
                  <p className="text-sm font-medium leading-6 text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell site-section">
        <div className="grid gap-5 md:grid-cols-3">
          {audiences.map((item, index) => (
            <div key={item.title} className={`${index === 0 ? "pastel-pink" : index === 1 ? "pastel-blue" : "pastel-sky"} editor-card min-h-[220px] p-6`}>
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-soft">
                {item.icon}
              </div>
              <h2 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="editor-card p-6 sm:p-7">
            <span className="section-badge">
              <Building className="h-3.5 w-3.5" />
              Partner ecosystem
            </span>
            <h2 className="section-title mt-5 text-balance">Training aligned to Microsoft and Claude certification-led workflows.</h2>
            <p className="lead-copy mt-4">
              We build institution and enterprise programs around applied lab work, assessment readiness, and verified completion pathways for modern AI adoption.
            </p>

            <div className="mt-8 grid gap-4">
              {data.partners.map((partner: any, index: number) => (
                <div
                  key={partner.name}
                  className={`${index === 0 ? "pastel-blue" : "pastel-pink"} rounded-[1.6rem] border border-white/80 p-5 shadow-soft`}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">{partner.label}</p>
                      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{partner.name}</h3>
                      <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">{partner.description}</p>
                    </div>
                    <div className="relative h-32 w-full max-w-[280px] overflow-hidden rounded-[1.2rem] border border-white/80 bg-white shadow-soft sm:h-36 sm:max-w-[320px]">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-contain p-2 sm:p-3"
                        sizes="(max-width: 640px) 280px, 320px"
                      />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {partner.benefits.map((benefit: string) => (
                      <div key={benefit} className="rounded-[1rem] bg-white/80 px-3 py-3 text-sm leading-6 text-slate-700">
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="editor-card p-6 sm:p-7">
              <span className="section-badge">
                <Award className="h-3.5 w-3.5" />
                Verified certification
              </span>
              <div className="mt-6 space-y-4">
                {data.certifications.map((item: any) => (
                  <div key={item.title} className="rounded-[1.25rem] border border-slate-100 bg-slate-50/85 p-4">
                    <div className="flex items-start gap-3">
                      <Award className="mt-1 h-5 w-5 text-blue-600" />
                      <div>
                        <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="editor-card overflow-hidden p-3 sm:p-4">
              <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100">
                  <Image
                    src={data.mentor.image}
                    alt={data.mentor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 22vw"
                  />
                </div>
                <div className="p-2 sm:p-4">
                  <span className="section-badge">
                    <Users className="h-3.5 w-3.5" />
                    Mentor-led delivery
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{data.mentor.name}</h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.16em] text-slate-400">{data.mentor.role}</p>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{data.mentor.description}</p>
                  <div className="mt-5 space-y-3">
                    <a
                      href={`mailto:${data.mentor.email}`}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#edf4ff] text-blue-600">
                        <Mail className="h-4 w-4" />
                      </span>
                      <span>{data.mentor.email}</span>
                    </a>
                    <a
                      href={`tel:${data.mentor.phone.replace(/[^0-9+]/g, "")}`}
                      className="flex items-center gap-3 text-sm font-medium text-slate-700 transition-colors hover:text-blue-700"
                    >
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#edf4ff] text-blue-600">
                        <Phone className="h-4 w-4" />
                      </span>
                      <span>{data.mentor.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          {data.programs.map((program: any) => (
            <div key={program.title} className="editor-card p-6 sm:p-7">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#edf4ff] text-lg font-semibold text-blue-700 shadow-soft">
                    {program.icon}
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{program.title}</h2>
                </div>
                <span className="tag-chip">{program.duration}</span>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">{program.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {program.topics.map((topic: string) => (
                  <span key={topic} className="tag-chip">{topic}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="section-badge">
              <Workflow className="h-3.5 w-3.5" />
              Session flow
            </span>
            <h2 className="section-title mt-5 text-balance">Hands-on, project-based learning that maps to real delivery.</h2>
            <div className="mt-6 space-y-4">
              {data.sessionFlow.map((item: any, index: number) => (
                <div key={item.title} className="flex items-start gap-4 rounded-[1.25rem] border border-white/80 bg-white/80 px-4 py-4 shadow-soft">
                  <div className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="editor-card p-6 sm:p-7">
            <span className="section-badge">
              <CheckCircle2 className="h-3.5 w-3.5" />
              Our approach
            </span>
            <div className="mt-6 space-y-4">
              {approach.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-blue-600" />
                  <p className="text-sm leading-7 text-slate-600 sm:text-base">{point}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] bg-[#0b0c10] p-5 text-white">
              <div className="flex items-center gap-3 text-white/85">
                <BrainCircuit className="h-5 w-5 text-blue-400" />
                <p className="text-sm font-medium uppercase tracking-[0.16em]">Certification-ready cohorts</p>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/72">Each program balances theory, labs, mentor review, and assessment discipline so participants leave with practical capability and evidence of completion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {data.deliveryModes.map((item: any, index: number) => {
            const Icon = deliveryIcons[index] || Workflow;
            return (
              <div key={item.title} className={`${index === 0 ? "pastel-sky" : index === 1 ? "pastel-blue" : "pastel-pink"} editor-card min-h-[220px] p-6`}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-blue-600 shadow-soft">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{item.title}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="site-shell pb-10">
        <div className="rounded-[1.75rem] border border-[#101827] bg-[#0b0c10] p-6 text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <span className="section-badge border-white/10 bg-white/10 text-white/85">
                <ShieldCheck className="h-3.5 w-3.5" />
                Results
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">Training outcomes that can be measured.</h2>
              <p className="mt-4 text-sm leading-7 text-white/75 sm:text-base">{data.cta.description}</p>
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  <span>Structured mentor reviews and completion validation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-white/80">
                  <Award className="h-4 w-4 text-amber-300" />
                  <span>Certification-focused preparation for Microsoft and Claude-aligned tracks</span>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {data.internship.stats.map((stat: any, index: number) => (
                <div key={stat.label} className={`${index === 0 ? "bg-[#1b2230]" : "bg-white/5"} rounded-[1.5rem] border border-white/10 p-5`}>
                  <div className="text-4xl font-semibold tracking-[-0.05em] text-white">{stat.value}</div>
                  <p className="mt-4 text-sm text-white/65">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}