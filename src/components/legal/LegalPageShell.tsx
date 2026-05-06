import type { ReactNode } from "react";
import { Scale } from "lucide-react";
import { LegalPageTabs } from "@/components/legal/LegalPageTabs";
import { cn } from "@/lib/utils";

type MetaItem = {
  label: string;
  value: string;
};

type HighlightItem = {
  title: string;
  description: string;
};

type LegalPageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  currentPath: string;
  meta: MetaItem[];
  highlights: HighlightItem[];
  children: ReactNode;
};

type LegalSectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

type LegalCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

type LegalTableProps = {
  columns: string[];
  rows: ReactNode[][];
};

export function LegalPageShell({
  eyebrow,
  title,
  description,
  currentPath,
  meta,
  highlights,
  children,
}: LegalPageShellProps) {
  return (
    <div className="pb-10">
      <section className="site-shell pt-28 sm:pt-32 lg:pt-36">
        <div className="hero-glow glass-panel overflow-hidden px-5 pb-8 pt-10 sm:px-8 lg:px-12 lg:pt-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <span className="section-badge">
                <Scale className="h-3.5 w-3.5" />
                {eyebrow}
              </span>
              <h1 className="display-title mt-6 text-balance">{title}</h1>
              <p className="lead-copy mt-5 max-w-2xl">{description}</p>

              <LegalPageTabs currentPath={currentPath} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {meta.map((item, index) => (
                <div
                  key={`${item.label}-${index}`}
                  className={cn(
                    "editor-card min-h-[144px] p-5",
                    index % 3 === 0
                      ? "pastel-blue"
                      : index % 3 === 1
                        ? "pastel-sky"
                        : "pastel-pink"
                  )}
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">
                    {item.label}
                  </p>
                  <p className="mt-6 text-lg font-semibold leading-7 tracking-[-0.03em] text-slate-950">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={cn(
                  "editor-card min-h-[180px] p-5",
                  index % 2 === 0 ? "bg-white/92" : "pastel-sky"
                )}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-700">
                  {item.title}
                </p>
                <p className="mt-5 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="site-shell site-section space-y-6 pt-10 sm:pt-14">{children}</div>
    </div>
  );
}

export function LegalSection({ eyebrow, title, description, children }: LegalSectionProps) {
  return (
    <section className="soft-panel px-5 py-6 sm:px-8 sm:py-8">
      <div className="max-w-3xl">
        {eyebrow ? <span className="section-badge">{eyebrow}</span> : null}
        <h2 className="section-title mt-5 text-balance text-3xl sm:text-4xl">{title}</h2>
        {description ? <p className="lead-copy mt-4 max-w-2xl">{description}</p> : null}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

export function LegalCard({ title, children, className }: LegalCardProps) {
  return (
    <div className={cn("editor-card h-full p-5", className)}>
      <h3 className="text-xl font-semibold tracking-[-0.03em] text-slate-950">{title}</h3>
      <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">{children}</div>
    </div>
  );
}

export function LegalTable({ columns, rows }: LegalTableProps) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/95 shadow-[0_16px_40px_-26px_rgba(15,23,42,0.26)]">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200/70 text-left">
          <thead className="bg-slate-50/80">
            <tr>
              {columns.map((column) => (
                <th
                  key={column}
                  scope="col"
                  className="px-5 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/70 bg-white/95">
            {rows.map((row, rowIndex) => (
              <tr key={`row-${rowIndex}`}>
                {row.map((cell, cellIndex) => (
                  <td
                    key={`cell-${rowIndex}-${cellIndex}`}
                    className="px-5 py-4 align-top text-sm leading-7 text-slate-600"
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}