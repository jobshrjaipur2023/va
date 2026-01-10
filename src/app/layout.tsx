import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Job's HR Abroad | International Recruitment & Labour Service",
  description:
    "Your trusted gateway to global career opportunities. Job's HR Abroad connects skilled professionals with verified international employers in UAE, UK, Canada, Germany, Russia, Mauritius and more. Expert visa assistance and placement services.",
  keywords: [
    "international recruitment",
    "overseas jobs",
    "labour service",
    "UAE jobs",
    "Dubai jobs",
    "UK jobs",
    "Canada immigration",
    "Germany work visa",
    "Russia jobs",
    "Mauritius jobs",
    "Qatar jobs",
    "Saudi Arabia jobs",
    "abroad jobs",
    "HR abroad",
    "job placement",
    "visa assistance",
  ],
  authors: [{ name: "Job's HR Abroad" }],
  creator: "Job's HR Abroad",
  publisher: "Job's HR Abroad Labour Service",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jobshrabroad.com",
    siteName: "Job's HR Abroad",
    title: "Job's HR Abroad | Your Gateway to Global Opportunities",
    description:
      "Connect with top international employers. Expert recruitment and visa assistance for UAE, UK, Canada, Germany, and more.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Job's HR Abroad - International Recruitment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Job's HR Abroad | International Recruitment",
    description:
      "Your gateway to global career opportunities. Expert placement services for overseas jobs.",
    images: ["/images/og-image.png"],
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
  icons: {
    icon: "/images/logo.webp",
    shortcut: "/images/logo.webp",
    apple: "/images/logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://jobshrabroad.com" />
      </head>
      <body
        className={`${outfit.variable} ${inter.variable} antialiased font-sans`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
