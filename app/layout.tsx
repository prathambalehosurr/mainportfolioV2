import type { Metadata } from "next";
import { Inter, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Background from "@/components/Background";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prathambalehosur.codes"),
  title: {
    default: "Pratham Balehosur",
    template: "%s | Pratham Balehosur",
  },
  icons: {
    icon: "https://github.com/prathambalehosurr.png?size=256",
    shortcut: "https://github.com/prathambalehosurr.png?size=256",
    apple: "https://github.com/prathambalehosurr.png?size=256",
  },
  description: "Full Stack Engineer & AI Builder · I turn ideas into shipped products",
  openGraph: {
    title: "Pratham Balehosur",
    description: "Full Stack Engineer & AI Builder · I turn ideas into shipped products",
    url: "https://www.prathambalehosur.codes",
    siteName: "Pratham Balehosur",
    images: [
      {
        url: "https://github.com/prathambalehosurr.png",
        width: 1200,
        height: 630,
        alt: "Pratham Balehosur",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratham Balehosur",
    description: "Full Stack Engineer & AI Builder · I turn ideas into shipped products",
    creator: "@prathamspiky",
    images: ["https://github.com/prathambalehosurr.png"],
  },
  authors: [{ name: "Pratham Balehosur" }],
  keywords: [
    "Pratham Balehosur",
    "Full Stack Engineer",
    "AI Builder",
    "Portfolio",
    "Web Development",
    "Artificial Intelligence",
    "Pratham Balehosur Portfolio",
    "prathambalehosur.codes",
    "developer portfolio",
    "AI developer portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${inter.variable} ${geistMono.variable} ${instrumentSerif.variable} font-sans  `}
      >
        <SmoothScrollProvider>
          <Background />
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
