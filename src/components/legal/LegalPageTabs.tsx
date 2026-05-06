"use client";

import { useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { LEGAL_LINKS } from "@/constants/site";
import { cn } from "@/lib/utils";

const LEGAL_SCROLL_STORAGE_KEY = "threemates-legal-scroll-restore";
const LEGAL_SCROLL_TTL_MS = 10000;

type PendingScrollRestore = {
  to: string;
  y: number;
  tabViewportTop: number;
  createdAt: number;
};

type LegalPageTabsProps = {
  currentPath: string;
};

function readPendingScrollRestore() {
  const rawValue = window.sessionStorage.getItem(LEGAL_SCROLL_STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as PendingScrollRestore;
  } catch {
    window.sessionStorage.removeItem(LEGAL_SCROLL_STORAGE_KEY);
    return null;
  }
}

export function LegalPageTabs({ currentPath }: LegalPageTabsProps) {
  const router = useRouter();
  const tabsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const pendingRestore = readPendingScrollRestore();
    const tabsElement = tabsRef.current;

    if (!pendingRestore || !tabsElement) {
      return;
    }

    const isExpired = Date.now() - pendingRestore.createdAt > LEGAL_SCROLL_TTL_MS;

    if (isExpired || pendingRestore.to !== currentPath) {
      window.sessionStorage.removeItem(LEGAL_SCROLL_STORAGE_KEY);
      return;
    }

    window.sessionStorage.removeItem(LEGAL_SCROLL_STORAGE_KEY);

    const htmlElement = document.documentElement;
    const previousScrollBehavior = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = "auto";
    htmlElement.getClientRects();

    const restoreScrollPosition = () => {
      const currentTabsTop = tabsElement.getBoundingClientRect().top;
      const nextScrollTop = window.scrollY + currentTabsTop - pendingRestore.tabViewportTop;

      window.scrollTo({ left: 0, top: Math.max(0, nextScrollTop || pendingRestore.y) });
    };

    const restoreTimers = [0, 120, 280].map((delay) =>
      window.setTimeout(() => {
        restoreScrollPosition();

        if (delay === 280) {
          htmlElement.style.scrollBehavior = previousScrollBehavior;
        }
      }, delay)
    );

    return () => {
      restoreTimers.forEach((timer) => window.clearTimeout(timer));
      htmlElement.style.scrollBehavior = previousScrollBehavior;
    };
  }, [currentPath]);

  const navigateWithPreservedScroll = (href: string) => {
    const tabsElement = tabsRef.current;
    const pendingRestore: PendingScrollRestore = {
      to: href,
      y: window.scrollY,
      tabViewportTop: tabsElement?.getBoundingClientRect().top ?? 0,
      createdAt: Date.now(),
    };

    window.sessionStorage.setItem(LEGAL_SCROLL_STORAGE_KEY, JSON.stringify(pendingRestore));
    router.push(href, { scroll: false });
  };

  return (
    <div ref={tabsRef} className="mt-8 flex flex-wrap gap-2">
      {LEGAL_LINKS.map((link) => {
        const isCurrent = link.href === currentPath;
        const className = cn(
          "rounded-full border px-4 py-2 text-sm font-medium transition-all",
          isCurrent
            ? "cursor-default border-blue-600 bg-blue-600 text-white shadow-[0_18px_40px_-20px_rgba(37,99,235,0.7)]"
            : "border-white/70 bg-white/80 text-slate-700 shadow-soft hover:border-blue-200 hover:text-slate-950"
        );

        if (isCurrent) {
          return (
            <span key={link.href} aria-current="page" className={className}>
              {link.label}
            </span>
          );
        }

        return (
          <button
            key={link.href}
            type="button"
            className={className}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => navigateWithPreservedScroll(link.href)}
          >
            {link.label}
          </button>
        );
      })}
    </div>
  );
}