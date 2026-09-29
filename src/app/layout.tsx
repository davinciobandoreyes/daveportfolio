import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Suspense } from "react";
import { AnalyticsBeacon } from "@/components/AnalyticsBeacon";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "David Obando Reyes · UX Engineer",
  description:
    "Portfolio of David Obando Reyes — UX Engineer designing digital products, systems, and game experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Suspense fallback={null}>
            <AnalyticsBeacon />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
