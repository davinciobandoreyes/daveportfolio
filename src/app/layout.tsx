import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getProfile } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Obando Reyes · UX Engineer",
  description:
    "Portfolio of David Obando Reyes — UX Engineer designing digital products, systems, and game experiences.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profile = await getProfile();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <SiteNav />
          <main>{children}</main>
          <SiteFooter profile={profile} />
        </ThemeProvider>
      </body>
    </html>
  );
}
