import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Code2, GraduationCap, Workflow } from "lucide-react";
import { getAITrainingData } from "@/lib/data-loader";

export const metadata: Metadata = {
  title: "Internship Program — Gain Real-World Tech Experience",
  description: "Join Threemates internship program to work on live projects, learn from industry experts, and kickstart your tech career.",
  alternates: { canonical: "/internship" },
  openGraph: {
    title: "Internship Program — Threemates",
    description: "Gain real-world tech experience with Threemates internship program.",
    url: "/internship",
    type: "website",
  },
  twitter: {
    title: "Internship Program — Threemates",
    description: "Gain real-world tech experience with Threemates internship program.",
  },
};

export default async function InternshipPage() {
  const data = await getAITrainingData();
  const internship = data.internship;

  const timeline = [
    {
      month: "Months 1-2",
      title: "Foundation & learning",
      description: "Core technologies, engineering workflow, version control, and structured mentor sessions.",
    },
    {
      month: "Months 3-4",
      title: "Project development",
      description: "Active contribution to live product work with guided ownership over real deliverables.",
    },
    {
      month: "Months 5-6",
      title: "Advanced & capstone",
      description: "Performance, shipping discipline, and a final capstone that proves full-stack capability.",
    },
  ];

  const stacks = [
    ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    ["Node.js", "Python", "FastAPI", "PostgreSQL"],
    ["AWS", "Docker", "GitHub", "Figma"],
  ];

  return (
    <div className="pb-8">
      <section className="site-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="hero-glow glass-panel px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-badge">
              <GraduationCap className="h-3.5 w-3.5" />
              {internship.badge}
            </span>
            <h1 className="display-title mt-6 text-balance">Kickstart your tech career with real product work.</h1>
            <p className="lead-copy mx-auto mt-5 max-w-2xl">{internship.description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/contact" className="site-button gap-2 px-5 py-3">
                Apply now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/ai-training" className="site-button-secondary px-5 py-3">
                View AI training
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell site-section">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {internship.stats.map((stat: any, index: number) => (
            <div key={stat.label} className={`${index === 0 ? "pastel-pink" : index % 2 === 0 ? "pastel-sky" : "pastel-blue"} editor-card min-h-[170px] p-6`}>
              <div className="text-5xl font-semibold tracking-[-0.06em] text-slate-950">{stat.value}</div>
              <p className="mt-6 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="grid gap-5 lg:grid-cols-[1fr_1fr]">
          <div className="editor-card p-6 sm:p-7">
            <span className="section-badge">
              <Award className="h-3.5 w-3.5" />
              What you&apos;ll get
            </span>
            <div className="mt-6 space-y-4">
              {internship.features.map((feature: any) => (
                <div key={feature.title} className="rounded-[1.25rem] border border-slate-100 bg-slate-50/75 p-4">
                  <h2 className="text-lg font-semibold tracking-[-0.03em] text-slate-950">{feature.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="editor-card p-6 sm:p-7">
            <span className="section-badge">
              <Code2 className="h-3.5 w-3.5" />
              Tech stack
            </span>
            <div className="mt-6 space-y-4">
              {stacks.map((stack, index) => (
                <div key={index} className="rounded-[1.25rem] border border-slate-100 bg-slate-50/75 p-4">
                  <p className="text-sm font-medium text-slate-950">Track {index + 1}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {stack.map((tech) => (
                      <span key={tech} className="tag-chip">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="mb-8">
          <span className="section-badge">
            <Workflow className="h-3.5 w-3.5" />
            Journey timeline
          </span>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {timeline.map((phase, index) => (
            <div key={phase.title} className={`${index === 0 ? "pastel-pink" : index === 1 ? "pastel-blue" : "pastel-sky"} editor-card min-h-[240px] p-6`}>
              <span className="tag-chip">{phase.month}</span>
              <h2 className="mt-10 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{phase.title}</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">{phase.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-shell pb-10">
        <div className="rounded-[1.75rem] border border-[#101827] bg-[#0b0c10] p-6 text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="section-badge border-white/10 bg-white/10 text-white/85">
                <Award className="h-3.5 w-3.5" />
                Success story
              </span>
              <p className="mt-5 text-xl leading-9 tracking-[-0.03em] text-white/92 sm:text-2xl">
                The internship gave me real project experience and mentor guidance that helped me land my first developer role within a month of completion.
              </p>
              <p className="mt-6 text-sm text-white/65">Priya Sharma, former intern</p>
            </div>
            <div className="flex flex-col items-start gap-4 lg:items-end">
              <p className="max-w-md text-sm leading-7 text-white/72 lg:text-right">
                Join the next cohort and build the habits, portfolio proof, and production thinking that hiring teams actually notice.
              </p>
              <Link href="/contact" className="site-button gap-2 px-5 py-3">
                Apply for internship
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}