import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, forceLight, forceDark, size = "lg" }: { className?: string; forceLight?: boolean; forceDark?: boolean; size?: "sm" | "md" | "lg" }) {
  const containerClass = "relative overflow-hidden";
  const imgScale = "scale-[2.5]";

  const sizeClass =
    size === "sm"
      ? "h-[3.1rem] w-[9.8rem] sm:h-[3.3rem] sm:w-[10.4rem]"
      : size === "md"
        ? "h-[3.7rem] w-[11.8rem] sm:h-[4rem] sm:w-[12.6rem] md:h-[4.2rem] md:w-[13.4rem] lg:h-[4.4rem] lg:w-[14rem]"
        : "h-[5rem] w-[14rem] sm:h-[6rem] sm:w-[18rem] md:h-[6.5rem] md:w-[22rem] lg:h-[7rem] lg:w-[26rem]";

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
          quality={90}
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
          quality={90}
          className={cn("w-full h-full object-contain", imgScale)}
          priority
        />
      </div>
    </Link>
  );
}
