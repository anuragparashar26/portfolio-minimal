import { Analytics } from "@vercel/analytics/next";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import OnekoCat from "@/components/OnekoCat";
import { ScrollToTop } from "@/components/ScrollToTop";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  icons: {
    icon: "/dp-title.png",
  },
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased max-w-3xl mx-auto py-12 sm:py-20 px-6 sm:px-10",
          fontSans.variable
        )}
      >
        {/* Switch Portfolio
        <a
          href="https://switch.anuragparashar.tech"
          rel="noopener noreferrer"
          className="fixed top-4 left-4 z-50 pointer-events-auto rounded bg-primary text-primary-foreground px-4 py-1 font-semibold shadow hover:bg-primary/90 transition-colors text-sm hidden sm:inline-block"
        >
          Switch Portfolio
        </a> */}
        <ThemeProvider attribute="class" defaultTheme="light" disableTransitionOnChange>
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <ScrollToTop />
          </TooltipProvider>
        </ThemeProvider>
        <div className="hidden sm:block">
          <OnekoCat/>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
