import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone, Workflow } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { COMPANY_EMAIL } from "@/constants/site";
import { getAITrainingData, getClientsData, getContactData } from "@/lib/data-loader";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    `Get in touch with Threemates. Have a project in mind? Contact us for ERP solutions, SaaS development, web and mobile applications. Email: ${COMPANY_EMAIL}`,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Threemates — Let's Build Something Great",
    description:
      "Ready to start your project? Reach out to our team for ERP, SaaS, web, and mobile development solutions.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    title: "Contact Threemates — Let's Build Something Great",
    description:
      "Ready to start your project? Reach out to our team for ERP, SaaS, web, and mobile development solutions.",
  },
};

export default async function Contact() {
  const [data, clients, training] = await Promise.all([
    getContactData(),
    getClientsData(),
    getAITrainingData(),
  ]);

  const mentor = training.mentor;

  const expectations = [
    {
      title: "Send us a message",
      description: "Tell us what you need, where the bottleneck is, and what a good outcome looks like.",
    },
    {
      title: "We will get back to you soon",
      description: "We review scope quickly and come back with the right next step, not generic back-and-forth.",
    },
    {
      title: "Meet and proposal",
      description: "We align on goals, timeline, and the working model that fits your team best.",
    },
    {
      title: "Let's collaborate",
      description: "Once the fit is clear, we move into delivery with structure, accountability, and speed.",
    },
  ];

  return (
    <div className="pb-6">
      <section className="site-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="hero-glow glass-panel px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pt-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
            <div>
              <span className="section-badge">
                <Mail className="h-3.5 w-3.5" />
                Get in touch
              </span>
              <h1 className="display-title mt-6 text-balance">Have a project? Let&apos;s talk.</h1>
              <p className="lead-copy mt-5 max-w-lg">{data.hero.description}</p>

              <div className="mt-8 space-y-5">
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-blue-600 shadow-soft">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Email</p>
                    <a href={`mailto:${data.info.email}`} className="mt-1 block text-base font-medium text-slate-950">
                      {data.info.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/80 text-blue-600 shadow-soft">
                    <Phone className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Phone</p>
                    <a href={`tel:${data.info.phone.replace(/[^0-9]/g, "")}`} className="mt-1 block text-base font-medium text-slate-950">
                      {data.info.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Office</p>
                    <div className="mt-3 space-y-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/80 text-blue-600 shadow-soft">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <p className="text-base leading-8 text-slate-600">{data.info.address1}</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/80 text-blue-600 shadow-soft">
                          <MapPin className="h-4 w-4" />
                        </span>
                        <p className="text-base leading-8 text-slate-600">{data.info.address2}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm
              title={data.form.title}
              fields={data.form.fields}
              submitBtn={data.form.submitBtn}
            />
          </div>
        </div>
      </section>

      <section className="site-shell site-section pt-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/75 bg-white/88 p-5 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.22)] sm:p-6 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-12 lg:p-8">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-slate-100 shadow-soft sm:max-w-[360px]">
            <Image
              src={mentor.image}
              alt={mentor.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 360px"
            />
          </div>

          <div>
            <span className="section-badge">
              <Phone className="h-3.5 w-3.5" />
              Direct contact
            </span>
            <h2 className="section-title mt-5 text-balance">Talk directly with {mentor.name}.</h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.16em] text-slate-400">{mentor.role}</p>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">{mentor.description}</p>

            <div className="mt-8 grid gap-4 sm:max-w-xl">
              <a
                href={`mailto:${mentor.email}`}
                className="flex items-center gap-4 rounded-[1.35rem] border border-slate-100 bg-[#f6f9ff] px-4 py-4 text-slate-800 shadow-soft transition-colors hover:border-blue-200 hover:bg-[#edf4ff]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-soft">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Email</p>
                  <p className="mt-1 text-base font-medium text-slate-950">{mentor.email}</p>
                </div>
              </a>

              <a
                href={`tel:${mentor.phone.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-4 rounded-[1.35rem] border border-slate-100 bg-[#f6f9ff] px-4 py-4 text-slate-800 shadow-soft transition-colors hover:border-blue-200 hover:bg-[#edf4ff]"
              >
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-blue-600 shadow-soft">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Phone</p>
                  <p className="mt-1 text-base font-medium text-slate-950">{mentor.phone}</p>
                </div>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${mentor.email}`} className="site-button px-5 py-3">
                Email Gokul Mahakul
              </a>
              <a href={`tel:${mentor.phone.replace(/[^0-9+]/g, "")}`} className="site-button-secondary px-5 py-3">
                Call now
              </a>
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
            <span key={logo.name}>{logo.name}</span>
          ))}
        </div>
      </section>

      <section className="site-shell site-section pt-10">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
          <div>
            <span className="section-badge">
              <Workflow className="h-3.5 w-3.5" />
              The process
            </span>
            <h2 className="section-title mt-5 text-balance">What to expect. Fourth base on a first date?</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {expectations.map((step, index) => (
              <div key={step.title} className={`${index % 2 === 0 ? "pastel-sky" : "pastel-pink"} editor-card min-h-[200px] p-6`}>
                <div className="text-sm font-semibold text-blue-700">0{index + 1}</div>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-slate-950">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="site-shell pb-12">
        <div className="rounded-[1.75rem] border border-[#101827] bg-[#0b0c10] p-6 text-white shadow-[0_24px_60px_-30px_rgba(15,23,42,0.45)] sm:p-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <span className="section-badge border-white/10 bg-white/10 text-white/85">
                <Phone className="h-3.5 w-3.5" />
                Support
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">Need a quick reply?</h2>
              <p className="mt-4 text-sm leading-7 text-white/75">
                If it&apos;s easier, send the scope summary and we&apos;ll reply with the clearest next step instead of pushing you into a long sales process.
              </p>
            </div>
            <Link href={`mailto:${data.info.email}`} className="site-button w-fit px-5 py-3">
              Email the team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}