import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, forceLight, forceDark, size = "lg" }: { className?: string; forceLight?: boolean; forceDark?: boolean; size?: "sm" | "lg" }) {
  const containerClass = "relative overflow-hidden";
  const imgScale = "scale-[2.5]";

  // sm = navbar, lg = footer
  const sizeClass = size === "sm"
    ? "h-[5rem] sm:h-[5rem] md:h-[5.5rem] lg:h-[6rem] w-[16rem] sm:w-[16rem] md:w-[18rem] lg:w-[20rem]"
    : "h-[12rem] sm:h-[7rem] md:h-[6.5rem] lg:h-[7rem] w-[20rem] sm:w-[20rem] md:w-[24rem] lg:w-[26rem]";

  return (
    <Link href="/" className={cn("relative flex items-center shrink-0 z-50 transition-transform duration-200 hover:scale-[0.98]", className)}>
      {/* Light Mode → dark described logo */}
      <div className={cn(
        containerClass,
        sizeClass,
        forceDark ? "block" : forceLight ? "hidden" : "block dark:hidden"
      )}>
        <Image
          src="/assets/darkDescribedlogo.png"
          alt="Threemates"
          width={400}
          height={100}
          className={cn("w-full h-full object-contain", imgScale)}
          priority
        />
      </div>

      {/* Dark Mode → light/white described logo */}
      <div className={cn(
        containerClass,
        sizeClass,
        forceLight ? "block" : forceDark ? "hidden" : "hidden dark:block"
      )}>
        <Image
          src="/assets/describedLogo.png"
          alt="Threemates"
          width={400}
          height={100}
          className={cn("w-full h-full object-contain", imgScale)}
          priority
        />
      </div>
    </Link>
  );
}
