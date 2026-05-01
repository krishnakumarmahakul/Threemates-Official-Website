import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Layers3 } from "lucide-react";
import { getWorkData } from "@/lib/data-loader";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Explore software platforms and digital solutions built by Threemates — School ERP, College ERP, Hospital Management, SaaS platforms, and more.",
  alternates: { canonical: "/work" },
  openGraph: {
    title: "Our Work — Threemates Portfolio",
    description:
      "See the ERP systems, SaaS platforms, and web applications we have built for businesses and institutions.",
    url: "/work",
    type: "website",
  },
  twitter: {
    title: "Our Work — Threemates Portfolio",
    description:
      "See the ERP systems, SaaS platforms, and web applications we have built for businesses and institutions.",
  },
};

export default async function Work() {
  const data = await getWorkData();

  return (
    <div className="pb-8">
      <section className="site-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="hero-glow glass-panel px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pt-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-badge">
              <Layers3 className="h-3.5 w-3.5" />
              Projects
            </span>
            <h1 className="display-title mt-6 text-balance">Our top work between 2019-25</h1>
            <p className="lead-copy mx-auto mt-5 max-w-2xl">{data.hero.description}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.projects.map((project: any) => (
              <Link key={project.slug} href={`/work/${project.slug}`} className="editor-card group block p-4">
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-500">
                  <span className="tag-chip">{project.category}</span>
                  <span className="tag-chip">{project.client}</span>
                </div>
                <h2 className="mt-4 text-xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-2xl">
                  {project.title}
                </h2>
                <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-[1.4rem] bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover img-zoom"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link href="/contact" className="site-button gap-2 px-5 py-3">
              View more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}