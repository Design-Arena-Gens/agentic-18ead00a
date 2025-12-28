import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-display",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Rushabh Sanghavi | SEO Manager",
  description: "Portfolio of Rushabh Sanghavi, an SEO Manager based in Rajkot, Gujarat.",
  metadataBase: new URL("https://agentic-18ead00a.vercel.app"),
  openGraph: {
    title: "Rushabh Sanghavi | SEO Manager",
    description: "Discover the strategic SEO approach of Rushabh Sanghavi from Rajkot, Gujarat.",
    url: "https://agentic-18ead00a.vercel.app",
    siteName: "Rushabh Sanghavi",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rushabh Sanghavi | SEO Manager",
    description: "Strategist blending data, content, and UX to deliver organic growth.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
