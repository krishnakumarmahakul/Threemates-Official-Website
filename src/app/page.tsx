import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Star,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import {
  getHomeData,
  getProcessData,
  getFaqData,
  getTestimonialsData,
  getClientsData,
} from "@/lib/data-loader";

export default async function Home() {
  const home = await getHomeData();
  const process = await getProcessData();
  const faqs = await getFaqData();
  const testimonials = await getTestimonialsData();
  const clients = await getClientsData();

  return (
    <div className="flex flex-col min-h-screen">
      {/* ════════════════════════════════════════════════════
          HERO SECTION
       ════════════════════════════════════════════════════ */}
      <section className="relative pt-32 md:pt-44 pb-16 md:pb-24 px-4 md:px-8 max-w-7xl mx-auto w-full overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/60 via-background to-background dark:from-blue-900/20" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[600px] -z-10 bg-blue-400/5 dark:bg-blue-500/5 rounded-full blur-3xl" />

        <div className="flex flex-col items-center text-center space-y-6 md:space-y-8">
          {/* Animated badge */}
          <Badge variant="secondary" className="rounded-full px-4 py-1.5 text-xs md:text-sm font-medium shadow-soft">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            {home.hero.badge}
          </Badge>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.08] font-bold tracking-tight max-w-4xl">
            {home.hero.headline}
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {home.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            <Link
              href={home.hero.primaryCta.href}
              className="btn-press inline-flex items-center justify-center rounded-full px-8 h-12 md:h-14 text-sm md:text-base w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 font-medium transition-all shadow-medium hover:shadow-elevated glow-blue"
            >
              {home.hero.primaryCta.label}
            </Link>
            <Link
              href={home.hero.secondaryCta.href}
              className="btn-press inline-flex items-center justify-center rounded-full px-8 h-12 md:h-14 text-sm md:text-base w-full sm:w-auto border border-border bg-background hover:bg-muted font-medium transition-all shadow-soft hover:shadow-medium"
            >
              {home.hero.secondaryCta.label} <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Hero Image with layered shadows */}
          <div className="mt-10 md:mt-16 w-full max-w-5xl relative rounded-2xl md:rounded-3xl overflow-hidden shadow-elevated border bg-card group">
            <div className="aspect-[16/9] w-full relative flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-950 dark:to-purple-950" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src={home.hero.image}
                  alt="Dashboard preview"
                  fill
                  className="object-cover opacity-50 group-hover:opacity-60 transition-opacity duration-700"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                />
              </div>
              <div className="z-10 w-16 h-16 md:w-20 md:h-20 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl cursor-pointer hover:scale-110 hover:bg-blue-500 transition-all duration-300 glow-blue">
                <Play className="h-6 w-6 md:h-8 md:w-8 ml-1" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          LOGOS / CLIENTS BAR
       ════════════════════════════════════════════════════ */}
      <section className="py-8 md:py-12 border-y bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs md:text-sm font-medium text-muted-foreground mb-6 md:mb-8 uppercase tracking-widest">
            {clients.title}
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-40 hover:opacity-60 transition-opacity duration-500">
            {clients.logos.map((logo: any, i: number) => (
              <span key={i} className="text-base md:text-lg font-bold flex items-center gap-1.5 font-mono tracking-tight">
                <Star className="h-3 w-3 text-muted-foreground" />
                {logo.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PROCESS SECTION
       ════════════════════════════════════════════════════ */}
      <section id="process" className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="mb-10 md:mb-16">
          <Badge variant="outline" className="rounded-full px-4 mb-4 md:mb-6 shadow-soft">{process.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">{process.title}</h2>
          <p className="text-muted-foreground max-w-xl text-base md:text-lg leading-relaxed">
            {process.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {process.steps.map((step: any, i: number) => (
            <Card key={i} className={`${step.color} border-none shadow-none card-hover rounded-3xl overflow-hidden`}>
              <CardContent className="p-6 md:p-8 pb-24 md:pb-32 relative">
                {/* Large faded step number */}
                <span className="absolute bottom-4 right-6 text-[6rem] md:text-[8rem] font-bold opacity-[0.06] leading-none select-none font-mono">
                  {step.step}
                </span>
                <Badge variant="secondary" className="bg-white/60 dark:bg-black/20 text-xs mb-4 md:mb-6 font-mono">
                  Step {step.step}
                </Badge>
                <h3 className="text-xl md:text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          BENEFITS SECTION
       ════════════════════════════════════════════════════ */}
      <section id="about" className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Badge variant="outline" className="rounded-full mb-4 md:mb-6 shadow-soft">{home.benefits.badge}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6 leading-tight">
              {home.benefits.title}
            </h2>
            <p className="text-muted-foreground mb-6 md:mb-8 text-base md:text-lg leading-relaxed">
              {home.benefits.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {home.benefits.tags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="rounded-full px-3 md:px-4 py-1.5 font-normal text-foreground text-xs md:text-sm hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-6 md:space-y-8">
            {home.benefits.items.map((b: any, i: number) => (
              <div key={i} className="space-y-1.5 group/benefit">
                <h3 className="text-lg md:text-xl font-bold flex items-center gap-2">
                  <span className="text-blue-500 text-sm group-hover/benefit:scale-125 transition-transform duration-200 inline-block">{b.icon}</span>
                  {b.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          SERVICES SECTION
       ════════════════════════════════════════════════════ */}
      <section id="services" className="py-16 md:py-28 px-4 md:px-8 bg-blue-50/50 dark:bg-blue-950/10">
        <div className="max-w-7xl mx-auto text-center mb-10 md:mb-16">
          <Badge variant="outline" className="rounded-full mb-4 md:mb-6 bg-white dark:bg-background shadow-soft">{home.services.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">{home.services.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {home.services.description}
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {home.services.items.map((s: any, i: number) => (
            <Card
              key={i}
              className={`border-none card-hover rounded-2xl overflow-hidden ${
                s.active
                  ? "bg-blue-600 text-white shadow-elevated glow-blue"
                  : "shadow-soft hover:shadow-medium"
              }`}
            >
              <CardContent className="p-5 md:p-6">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 md:mb-6 text-sm ${
                    s.active
                      ? "bg-white/20"
                      : "bg-blue-50 text-blue-600 dark:bg-blue-900/40"
                  }`}
                >
                  {s.icon}
                </div>
                <h3 className="font-semibold text-lg md:text-xl mb-2 md:mb-3">{s.title}</h3>
                <p className={`text-sm md:text-base leading-relaxed ${s.active ? "text-white/80" : "text-muted-foreground"}`}>
                  {s.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          MISSION STATEMENT
       ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
            Guided by <span className="text-blue-600 italic">strategy</span>, powered
            by <span className="text-blue-600 italic">creativity</span>. We design-first
            solutions that make brands shine and{" "}
            <span className="text-blue-600 italic">succeed</span> in the digital era.
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-12 mt-6 text-sm text-muted-foreground">
          {home.mission.reviews.map((r: any, i: number) => (
            <div key={i} className="flex items-center gap-2 hover:text-foreground transition-colors">
              <span className="font-bold text-yellow-500">★★★★★</span>
              <span className="font-mono text-xs md:text-sm">{r.rating}</span>
              <span>Based on {r.count} reviews</span>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 max-w-2xl mx-auto rounded-3xl overflow-hidden aspect-[4/3] relative shadow-elevated group">
          <Image
            src={home.mission.image}
            alt="Team"
            fill
            className="object-cover img-zoom"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PROJECTS SECTION
       ════════════════════════════════════════════════════ */}
      <section id="projects" className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-10 md:mb-16">
          <div>
            <Badge variant="secondary" className="rounded-full mb-3 md:mb-4 shadow-soft">{home.projects.badge}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {home.projects.title}
            </h2>
          </div>
          <Link
            href={home.projects.viewAllBtn.href}
            className="btn-press inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 transition-all shadow-medium hover:shadow-elevated"
          >
            {home.projects.viewAllBtn.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Left column */}
          <div className="space-y-6 md:space-y-8">
            {/* Project 1 */}
            <Card className="bg-card border rounded-3xl overflow-hidden group cursor-pointer card-hover">
              <CardContent className="p-5 md:p-6">
                <h3 className="font-bold text-lg md:text-xl mb-3">{home.projects.items[0].title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {home.projects.items[0].tags.map((t: string) => (
                    <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                  ))}
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[4/3] relative bg-gray-900">
                  <Image src={home.projects.items[0].image} alt={home.projects.items[0].title} fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </CardContent>
            </Card>

            {/* CTA card */}
            <Card className="bg-muted border-none rounded-3xl card-hover">
              <CardContent className="p-6 md:p-8 text-center flex flex-col items-center justify-center min-h-[200px]">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-2">{home.projects.ctaCard.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 max-w-xs leading-relaxed">
                  {home.projects.ctaCard.description}
                </p>
                <Button className="btn-press rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-medium hover:shadow-elevated">
                  {home.projects.ctaCard.buttonLabel}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Right column */}
          <div className="space-y-6 md:space-y-8">
            {home.projects.items.slice(1).map((project: any, i: number) => (
              <Card key={i} className="bg-card border rounded-3xl overflow-hidden group cursor-pointer card-hover">
                <CardContent className="p-5 md:p-6">
                  <h3 className="font-bold text-lg md:text-xl mb-3">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((t: string) => (
                      <Badge key={t} variant="secondary" className="text-xs">{t}</Badge>
                    ))}
                  </div>
                  <div className={`rounded-2xl overflow-hidden ${i === home.projects.items.length - 2 ? "aspect-[4/3]" : "aspect-[3/2]"} relative bg-gray-900`}>
                    <Image src={project.image} alt={project.title} fill className="object-cover img-zoom" sizes="(max-width: 768px) 100vw, 50vw" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          ABOUT / DOUBT SECTION
       ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 px-4 md:px-8 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full overflow-hidden relative ring-2 ring-background shadow-soft">
              <Image src={home.about.avatar} alt="avatar" fill className="object-cover" sizes="32px" />
            </div>
            <span className="text-sm font-medium">{home.about.label}</span>
          </div>
          <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
            {home.about.text}{" "}
            <span className="text-blue-600 font-semibold">
              {home.about.highlight}
            </span>
          </p>
          <Button className="btn-press rounded-full bg-blue-600 hover:bg-blue-700 text-white px-8 h-12 shadow-medium hover:shadow-elevated glow-blue">
            {home.about.buttonLabel}
          </Button>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          TESTIMONIALS
       ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t">
        <div className="text-center mb-10 md:mb-16">
          <Badge variant="outline" className="rounded-full mb-4 md:mb-6 shadow-soft">{testimonials.badge}</Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">{testimonials.title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {testimonials.description}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {testimonials.cards.map((t: any, i: number) => (
            <Card key={i} className="border shadow-soft card-hover rounded-2xl">
              <CardContent className="p-5 md:p-6 flex flex-col h-full">
                <div className="flex text-yellow-400 mb-4 gap-0.5">
                  {[1,2,3,4,5].map(s => <Star key={s} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed flex-1">{t.text}</p>
                <div className="flex items-center gap-3 mt-auto pt-4 border-t">
                  <div className="w-8 h-8 rounded-full overflow-hidden relative ring-2 ring-background shadow-soft">
                    <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="32px" />
                  </div>
                  <span className="text-sm font-semibold">{t.name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PRICING
       ════════════════════════════════════════════════════ */}
      <section id="pricing" className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t">
        <Badge variant="outline" className="rounded-full mb-4 md:mb-6 shadow-soft">{home.pricing.badge}</Badge>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-10 md:mb-16">
          {home.pricing.title}
        </h2>

        <div className="grid md:grid-cols-5 gap-6 md:gap-8 items-start">
          {/* Main pricing card */}
          <Card className="md:col-span-3 bg-zinc-950 text-white border-none shadow-2xl rounded-3xl overflow-hidden relative">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-80" />
            <CardContent className="p-6 md:p-10 lg:p-12 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">{home.pricing.plan.name}</h3>
                  <p className="text-zinc-400 text-sm md:text-base">
                    {home.pricing.plan.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" className="btn-press rounded-full border-zinc-700 bg-zinc-900 hover:bg-zinc-800 text-white text-sm">
                    Book a call
                  </Button>
                  <Button className="btn-press rounded-full bg-white text-black hover:bg-zinc-200 text-sm">
                    Project Base
                  </Button>
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-6 md:pt-8 mb-8 md:mb-12">
                <p className="font-medium mb-5 md:mb-6 text-sm md:text-base">What&apos;s included:</p>
                <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                  {home.pricing.plan.features.map((item: string) => (
                    <div key={item} className="flex items-center gap-3 text-zinc-300 group/feature">
                      <CheckCircle2 className="h-4 w-4 text-blue-400 flex-shrink-0 group-hover/feature:text-blue-300 transition-colors" />
                      <span className="text-xs md:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-end gap-2">
                <span className="text-4xl md:text-5xl font-bold font-mono">{home.pricing.plan.price}</span>
                <span className="text-zinc-400 mb-1 text-sm">{home.pricing.plan.period}</span>
              </div>
            </CardContent>
          </Card>

          {/* Side cards */}
          <div className="md:col-span-2 space-y-4 md:space-y-6">
            <Card className="rounded-3xl border shadow-soft card-hover">
              <CardContent className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-5 md:mb-6">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden relative ring-2 ring-background shadow-soft">
                    <Image src={home.pricing.scheduleCard.avatar} alt="avatar" fill className="object-cover" sizes="48px" />
                  </div>
                  <Badge variant="secondary" className="bg-green-100/50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-none text-xs">
                    <span className="relative flex h-1.5 w-1.5 mr-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                    </span>
                    {home.pricing.scheduleCard.spotsAvailable} spot available
                  </Badge>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2">{home.pricing.scheduleCard.title}</h3>
                <p className="text-muted-foreground text-sm mb-5 md:mb-6 leading-relaxed">
                  {home.pricing.scheduleCard.description}
                </p>
                <Button className="btn-press w-full rounded-full bg-blue-600 hover:bg-blue-700 text-white h-11 md:h-12 shadow-medium hover:shadow-elevated">
                  Book a call
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border shadow-soft bg-muted/50 card-hover">
              <CardContent className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-3 md:mb-4">
                  <div className="text-sm font-semibold flex items-center gap-2">
                    {home.pricing.reviewCard.name}
                    <div className="w-6 h-6 rounded-full overflow-hidden relative ring-1 ring-background">
                      <Image src={home.pricing.reviewCard.avatar} alt={home.pricing.reviewCard.name} fill className="object-cover" sizes="24px" />
                    </div>
                  </div>
                  <div className="text-yellow-500 flex items-center text-sm font-semibold">★ {home.pricing.reviewCard.rating}</div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {home.pricing.reviewCard.text}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          PROOF / TESTIMONIAL HIGHLIGHT
       ════════════════════════════════════════════════════ */}
      <section className="py-12 md:py-20 px-4 md:px-8 max-w-7xl mx-auto border-t">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <p className="text-muted-foreground mb-3 md:mb-4 font-medium uppercase tracking-widest text-xs md:text-sm">
              The proof is in their words
            </p>
            <div className="flex -space-x-2 mb-6 md:mb-8">
              {testimonials.highlight.avatars.map((idx: number) => (
                <div key={idx} className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-background relative shadow-soft hover:z-10 hover:scale-110 transition-transform duration-200">
                  <Image src={`https://i.pravatar.cc/80?img=${idx}`} alt="reviewer" fill className="object-cover" sizes="48px" />
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="flex mb-3 md:mb-4 space-x-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-current text-yellow-500" />
              ))}
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-6 md:mb-8">
              {testimonials.highlight.text}
            </p>
            <div>
              <p className="font-bold text-sm md:text-base">{testimonials.highlight.name}</p>
              <p className="text-muted-foreground text-xs md:text-sm">{testimonials.highlight.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          FAQ
       ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <Badge variant="outline" className="rounded-full mb-4 md:mb-6 shadow-soft">FAQ</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 md:mb-8">
              Question? Answer
            </h2>

            <Card className="bg-zinc-950 text-white rounded-3xl overflow-hidden border-none hidden md:block mt-8 shadow-elevated relative">
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-black opacity-80" />
              <CardContent className="p-8 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden mb-6 relative ring-2 ring-zinc-700 shadow-medium">
                  <Image src="https://i.pravatar.cc/80?img=43" alt="contact" fill className="object-cover" sizes="48px" />
                </div>
                <p className="text-lg md:text-xl font-medium mb-6 md:mb-8">
                  Feel free to reach out whenever you have questions.
                </p>
                <Button variant="outline" className="btn-press rounded-full border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-white px-6">
                  Book a call
                </Button>
              </CardContent>
            </Card>
          </div>

          <div>
            <Accordion className="w-full space-y-3 md:space-y-4">
              {faqs.map((faq: any, i: number) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border rounded-2xl px-4 md:px-6 bg-muted/30 data-[state=open]:bg-background data-[state=open]:shadow-medium transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-semibold hover:no-underline text-sm md:text-base py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4 text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════
          BLOG
       ════════════════════════════════════════════════════ */}
      <section className="py-16 md:py-28 px-4 md:px-8 max-w-7xl mx-auto border-t">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 mb-8 md:mb-12">
          <div>
            <Badge variant="outline" className="rounded-full mb-4 md:mb-6 shadow-soft">{home.blog.badge}</Badge>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              {home.blog.title}
            </h2>
          </div>
          <Link
            href={home.blog.viewAllBtn.href}
            className="btn-press inline-flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2.5 transition-all shadow-medium hover:shadow-elevated"
          >
            {home.blog.viewAllBtn.label}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {home.blog.posts.map((blog: any, i: number) => (
            <div key={i} className="group cursor-pointer">
              <div className="rounded-2xl md:rounded-3xl overflow-hidden mb-4 md:mb-6 aspect-[4/3] relative shadow-soft group-hover:shadow-elevated transition-shadow duration-500">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover img-zoom"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground mb-2 md:mb-3 font-mono">
                <span>{blog.date}</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                <span>{blog.readTime}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300">{blog.title}</h3>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
