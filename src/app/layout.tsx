import type { Metadata } from "next";
import "./globals.css";

import { getGlobalData, getSiteData } from "@/lib/data-loader";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export async function generateMetadata(): Promise<Metadata> {
  const site = await getSiteData().catch(() => ({ name: "doop", description: "" }));
  return {
    title: {
      default: site.name,
      template: `%s | ${site.name}`,
    },
    description: site.description,
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const globalData = await getGlobalData().catch(() => null);

  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        {globalData && <Navigation data={globalData.navigation} />}
        <main className="flex-grow">
          {children}
        </main>
        {globalData && <Footer data={globalData.footer} />}
      </body>
    </html>
  );
}
