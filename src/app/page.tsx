import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  BrainCircuit,
  Layers3,
  Mail,
  MapPin,
  MoveRight,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Workflow,
} from "lucide-react";
import {
  getBlogData,
  getClientsData,
  getFaqData,
  getHomeData,
  getProcessData,
  getTestimonialsData,
  getWorkData,
} from "@/lib/data-loader";
import { FaqAccordion } from "@/components/FAQAccordion";
import { COMPANY_EMAIL, COMPANY_LOCATIONS } from "@/constants/site";

export const metadata: Metadata = {
  title: "Threemates — Modern IT Solutions & Software Development",
  description:
    "Threemates builds ERP systems, SaaS platforms, web & mobile applications that help businesses digitize operations and scale efficiently. Based in Bhubaneswar, India.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Threemates — Modern IT Solutions & Software Development",
    description:
      "We build ERP systems, SaaS platforms, web & mobile apps for modern businesses.",
    url: "/",
    type: "website",
  },
  twitter: {
    title: "Threemates — Modern IT Solutions & Software Development",
    description:
      "We build ERP systems, SaaS platforms, web & mobile apps for modern businesses.",
  },
};

export default async function Home() {
  const [home, process, faqs, testimonials, clients, work, blog] = await Promise.all([
    getHomeData(),
    getProcessData(),
    getFaqData(),
    getTestimonialsData(),
    getClientsData(),
    getWorkData(),
    getBlogData(),
  ]);

  const featuredProjects = work.projects.slice(0, 5);
  const featuredPosts = [blog.featured, ...blog.posts].slice(0, 2);
  const pastelClasses = ["pastel-pink", "pastel-blue", "pastel-sky"];

  return (
    <div className="pb-6">
      <section className="site-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="hero-glow glass-panel relative overflow-hidden px-5 pb-5 pt-10 sm:px-8 lg:px-12 lg:pt-12">
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_center,rgba(255,255,255,0.65),transparent_70%)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="section-badge">
              <Sparkles className="h-3.5 w-3.5" />
              {home.hero.badge}
            </span>
            <h1 className="display-title mt-6 text-balance">
              Global IT systems and digital products for ambitious teams.
            </h1>
            <p className="lead-copy mx-auto mt-5 max-w-2xl text-balance">
              {home.hero.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href={home.hero.primaryCta.href} className="site-button min-w-[160px]">
                {home.hero.primaryCta.label}
              </Link>
              <Link href={home.hero.secondaryCta.href} className="site-button-secondary min-w-[160px] gap-2">
                {home.hero.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative mt-10 rounded-[2rem] border border-white/80 bg-[#dfeaff]/80 p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] sm:p-4 lg:mt-12 lg:rounded-[2.4rem]">
            <div className="absolute inset-x-4 top-3 h-4 rounded-full bg-white/45 blur-2xl" />
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/80 bg-white shadow-[0_26px_60px_-35px_rgba(37,99,235,0.35)]">
              <div className="relative aspect-[16/10] w-full sm:aspect-[16/9]">
                <Image
                  src={home.hero.image}
                  alt="Threemates product showcase"
                  fill
                  priority
                  quality={90}
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1120px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#edf4ff]/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell py-10 sm:py-12">
        <p className="text-center text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          {clients.title}
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-sm font-medium text-slate-500 sm:gap-x-10">
          {clients.logos.map((logo: { name: string }) => (
            <span key={logo.name} className="inline-flex items-center gap-2">
              <Star className="h-3.5 w-3.5 text-slate-300" />
              {logo.name}
            </span>
          ))}
        </div>
      </section>

      <section id="process" className="site-shell site-section">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="max-w-lg">
            <span className="section-badge">
              <Workflow className="h-3.5 w-3.5" />
              {process.badge}
            </span>
            <h2 className="section-title mt-5 text-balance">Our starting style</h2>
            <p className="lead-copy mt-4 text-balance">{process.description}</p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {process.steps.slice(0, 3).map((step: any, index: number) => (
              <div key={step.step} className={`${pastelClasses[index]} editor-card min-h-[220px] border-white/80`}>
                <span className="tag-chip">Step {step.step}</span>
                <h3 className="mt-16 text-xl font-semibold tracking-[-0.03em] text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div>
            <span className="section-badge">
              <ShieldCheck className="h-3.5 w-3.5" />
              Benefits
            </span>
            <h2 className="section-title mt-5 text-balance">We design software systems that move as fast as you do.</h2>
            <p className="lead-copy mt-4">{home.benefits.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {home.benefits.tags.map((tag: string) => (
                <span key={tag} className="tag-chip">{tag}</span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {home.benefits.items.map((item: any) => (
              <div key={item.title} className="editor-card">
                <p className="text-sm font-semibold text-blue-600">{item.title}</p>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell site-section pt-4">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="section-badge">
              <Layers3 className="h-3.5 w-3.5" />
              Projects
            </span>
            <h2 className="section-title mt-5 text-balance">Demand-built products for scaling brands.</h2>
          </div>
          <Link href="/work" className="site-button w-fit px-5 py-3">
            View more projects
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.25fr_0.95fr]">
          <Link href={`/work/${featuredProjects[0].slug}`} className="editor-card group block p-4 sm:p-5">
            <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
              <span className="tag-chip">{featuredProjects[0].category}</span>
              <span className="tag-chip">{featuredProjects[0].client}</span>
            </div>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-slate-950">
              {featuredProjects[0].title}
            </h3>
            <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-slate-100">
              <Image
                src={featuredProjects[0].image}
                alt={featuredProjects[0].title}
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </div>
          </Link>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {featuredProjects.slice(1, 3).map((project: any) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="editor-card group block p-4">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{project.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-500">
                  <span className="tag-chip">{project.client}</span>
                  <span className="tag-chip">{project.category}</span>
                </div>
                <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 768px) 100vw, 30vw"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-[0.55fr_1fr]">
          <div className="editor-card pastel-sky flex flex-col justify-between p-6">
            <div>
              <div className="text-4xl text-blue-500">↯</div>
              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-slate-950">For more details</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Strategy, delivery, and systems design around what your business actually needs.
              </p>
            </div>
            <Link href="/contact" className="site-button mt-8 w-fit px-5 py-3">
              Book a call
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {featuredProjects.slice(3, 5).map((project: any) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="editor-card group block p-4">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{project.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-slate-500">
                  <span className="tag-chip">{project.client}</span>
                  <span className="tag-chip">{project.category}</span>
                </div>
                <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell site-section">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="section-badge">
              <Award className="h-3.5 w-3.5" />
              Testimonials
            </span>
            <h2 className="section-title mt-5 text-balance">What people are saying</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {testimonials.cards.slice(0, 4).map((card: any) => (
                <div key={card.name} className="editor-card min-h-[220px]">
                  <p className="text-sm leading-7 text-slate-600">{card.text}</p>
                  <div className="mt-6 flex items-center gap-3">
                    <Image
                      src={card.avatar}
                      alt={card.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <p className="text-sm font-medium text-slate-900">{card.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] bg-[#0a0b0f] p-6 text-white shadow-[0_26px_60px_-28px_rgba(2,6,23,0.65)] sm:p-8">
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.16em] text-white/70">
                  {home.pricing.badge}
                </span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/50">Project based</span>
              </div>
              <h3 className="mt-6 text-3xl font-semibold tracking-[-0.04em]">{home.pricing.plan.name}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{home.pricing.plan.description}</p>
              <ul className="mt-6 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
                {home.pricing.plan.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex items-end justify-between gap-4">
                <div>
                  <div className="text-4xl font-semibold tracking-[-0.05em]">{home.pricing.plan.price}</div>
                  <div className="text-sm text-white/60">{home.pricing.plan.period}</div>
                </div>
                <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-medium text-slate-950 transition-colors hover:bg-slate-100">
                  Book a call
                </Link>
              </div>
            </div>

            <div className="editor-card">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={home.pricing.scheduleCard.avatar}
                    alt={home.pricing.scheduleCard.title}
                    width={46}
                    height={46}
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-slate-900">{home.pricing.scheduleCard.title}</p>
                    <p className="text-xs text-emerald-600">{home.pricing.scheduleCard.spotsAvailable} spots available</p>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{home.pricing.scheduleCard.description}</p>
              <Link href="/contact" className="site-button mt-6 w-fit px-5 py-3">
                Book a call
              </Link>
            </div>

            <div className="editor-card">
              <div className="flex items-center gap-1 text-slate-950">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current text-slate-950" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-slate-700">{home.pricing.reviewCard.text}</p>
              <p className="mt-6 text-sm font-medium text-slate-950">{home.pricing.reviewCard.name}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_340px] lg:items-start">
          <div>
            <span className="section-badge">
              <BookOpenCheck className="h-3.5 w-3.5" />
              FAQ
            </span>
            <h2 className="section-title mt-5">Question? Answer</h2>
            <div className="mt-8">
              <FaqAccordion items={faqs} />
            </div>
          </div>

          <aside className="glass-panel self-start px-5 py-6 sm:px-6">
            <span className="section-badge">Need a direct answer?</span>
            <p className="mt-5 text-base leading-7 text-slate-700">{home.about.text}</p>
            <div className="mt-6 space-y-4 rounded-[1.5rem] border border-white/75 bg-white/85 p-4 shadow-soft">
              {COMPANY_LOCATIONS.map((location) => (
                <div key={location.slug} className="border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
                    <MapPin className="h-3.5 w-3.5" />
                    <span>{location.label} · {location.region}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{location.address}</p>
                </div>
              ))}
            </div>
            <a href={`mailto:${COMPANY_EMAIL}`} className="site-button mt-6 inline-flex w-full justify-center gap-2 px-5 py-3 sm:w-auto">
              Email the team
              <Mail className="h-4 w-4" />
            </a>
          </aside>
        </div>
      </section>

      <section className="site-shell site-section pt-0">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="section-badge">
              <BrainCircuit className="h-3.5 w-3.5" />
              Blog
            </span>
            <h2 className="section-title mt-5 text-balance">Explore our latest journal</h2>
          </div>
          <Link href="/blog" className="site-button w-fit px-5 py-3">
            View more projects
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {featuredPosts.map((post: any) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="editor-card group block p-4">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.4rem] bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-slate-950">{post.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="site-shell pb-10">
        <div className="editor-card bg-slate-50/90 p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="section-badge">
                <Quote className="h-3.5 w-3.5" />
                Highlighted praise
              </span>
              <p className="mt-5 text-xl leading-9 tracking-[-0.03em] text-slate-900 sm:text-2xl">
                <Quote className="mr-2 inline h-5 w-5 text-blue-500" />
                {testimonials.highlight.text}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <div className="flex -space-x-3">
                  {testimonials.highlight.avatars.map((avatar: number) => (
                    <Image
                      key={avatar}
                      src={`https://i.pravatar.cc/60?img=${avatar}`}
                      alt="Client avatar"
                      width={40}
                      height={40}
                      className="rounded-full border-2 border-white"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-slate-950">{testimonials.highlight.name}</p>
                  <p className="text-xs text-slate-500">{testimonials.highlight.role}</p>
                </div>
              </div>
            </div>

            <Link href="/contact" className="site-button w-fit gap-2 px-5 py-3">
              Start a project
              <MoveRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}