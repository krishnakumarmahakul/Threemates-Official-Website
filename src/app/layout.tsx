import type { Metadata } from "next";
import { Inter, Fira_Code, Anton } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Loader } from "@/components/Loader";
import { getGlobalData } from "@/lib/data-loader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-sans" });
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: {
    default: "Threemates",
    template: "%s | Threemates",
  },
  description:
    "Threemates - Modern IT solutions including ERP systems, SaaS platforms, web development, and mobile applications.",
  icons: {
    icon: [
      {
        url: "/assets/icon.png",
        sizes: "124x124",
        type: "image/png",
      },
      {
        url: "/assets/darkIcon.png",
        sizes: "384x384",
        type: "image/png",
      },
      {
        url: "/assets/icon-512.png",
        sizes: "1024x1024",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/assets/darkIcon.png",
        sizes: "360x360",
        type: "image/png",
      },
    ],
  },
};
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const global = await getGlobalData();
  return (
    <html lang="en" suppressHydrationWarning className={cn("font-sans", inter.variable, firaCode.variable, anton.variable)}>
      <body className="antialiased min-h-screen flex flex-col relative">
        {/* Cool Blue Glow Top */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
          style={{
            backgroundImage: `radial-gradient(circle at top center, rgba(70, 130, 180, 0.2), transparent 50%)`,
            filter: "blur(80px)",
            backgroundRepeat: "no-repeat",
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Loader />
          <Navigation data={{}} />
          <main className="flex-grow relative z-10">{children}</main>
          <Footer data={global?.footer} />
        </ThemeProvider>
      </body>
    </html>
  );
}
