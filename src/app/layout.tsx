import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Script from "next/script";

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

// Comprehensive SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL("https://jobshrabroad.in"),
  title: {
    default: "Job's HR Abroad | #1 International Recruitment Agency in Jaipur, India",
    template: "%s | Job's HR Abroad",
  },
  description: `Job's HR Abroad is India's leading overseas recruitment agency based in Jaipur. 
We connect skilled Indian professionals with verified employers in UAE, Saudi Arabia, Qatar, UK, Canada, Germany.`,
  keywords: [
    // Primary Keywords
    "international recruitment agency india",
    "overseas job consultancy jaipur",
    "best recruitment agency for abroad jobs",
    "gulf job consultancy",
    "dubai job placement agency",
    // Location Keywords
    "dubai jobs for indians",
    "uae jobs from india",
    "saudi arabia jobs for indians",
    "qatar jobs for indians",
    "uk work visa from india",
    "canada pr consultancy jaipur",
    "germany work permit india",
    // Job Type Keywords
    "construction jobs abroad",
    "hospitality jobs dubai",
    "driver jobs uae",
    "talabat delivery jobs",
    "careem jobs dubai",
    "noon delivery rider jobs",
    "welding jobs abroad",
    "electrician jobs dubai",
    "plumber jobs uae",
    // Service Keywords
    "visa assistance india",
    "work permit consultancy",
    "manpower supply agency",
    "labour recruitment agency",
    "overseas employment agency",
    // Brand Keywords
    "jobs hr abroad",
    "job's hr abroad jaipur",
    "varis khan recruitment",
    "aman sharma recruitment",
  ],
  authors: [
    { name: "Varis Khan", url: "https://jobshrabroad.in/about" },
    { name: "Aman Sharma", url: "https://jobshrabroad.in/about" },
  ],
  creator: "Job's HR Abroad",
  publisher: "Job's HR Abroad Labour Service",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://jobshrabroad.in",
    siteName: "Job's HR Abroad",
    title: "Job's HR Abroad | Best International Recruitment Agency in India",
    description:
      "India's most trusted overseas recruitment agency. 10,000+ successful placements in UAE, Saudi, Qatar, UK, Canada & Europe. Free career consultation. Call +91 94607 24814",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Job's HR Abroad - International Recruitment Agency India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@jobshrabroad",
    creator: "@jobshrabroad",
    title: "Job's HR Abroad | #1 Overseas Job Consultancy",
    description:
      "Your gateway to global career opportunities. 10,000+ Indians placed in UAE, Saudi, Qatar, UK, Canada. Free consultation!",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
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
  verification: {
    google: "your-google-verification-code", // Add your Google Search Console code
  },
  alternates: {
    canonical: "https://jobshrabroad.in",
    languages: {
      "en-IN": "https://jobshrabroad.in",
      "en-US": "https://jobshrabroad.in",
    },
  },
  category: "Employment Agency",
};

// Structured Data for SEO, AEO, and GEO
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // Organization Schema
    {
      "@type": "Organization",
      "@id": "https://jobshrabroad.in/#organization",
      name: "Job's HR Abroad",
      alternateName: ["Jobs HR Abroad", "Job's HR Abroad Labour Service"],
      url: "https://jobshrabroad.in",
      logo: {
        "@type": "ImageObject",
        url: "https://jobshrabroad.in/images/logo.webp",
        width: 200,
        height: 200,
      },
      description: "Job's HR Abroad is India's leading international recruitment agency specializing in overseas job placements. Founded by Varis Khan and Aman Sharma, we have successfully placed",
      foundingDate: "2015",
      founders: [
        {
          "@type": "Person",
          name: "Varis Khan",
          jobTitle: "Co-Founder",
        },
        {
          "@type": "Person",
          name: "Aman Sharma",
          jobTitle: "Co-Founder",
        },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "K-A-7 Third Floor, JTM Mall, Jagatpura",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302017",
        addressCountry: "IN",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-94607-24814",
          contactType: "customer service",
          areaServed: ["IN", "AE", "SA", "QA", "GB", "CA", "DE", "RU", "MU"],
          availableLanguage: ["English", "Hindi"],
        },
      ],
      sameAs: [
        "https://www.facebook.com/jobshrabroad",
        "https://www.instagram.com/jobshrabroad",
        "https://www.linkedin.com/company/jobshrabroad",
      ],
    },
    // LocalBusiness Schema
    {
      "@type": "EmploymentAgency",
      "@id": "https://jobshrabroad.in/#localbusiness",
      name: "Job's HR Abroad",
      image: "https://jobshrabroad.in/images/logo.webp",
      url: "https://jobshrabroad.in",
      telephone: "+91-94607-24814",
      email: "jobshrjaipur2023@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "K-A-7 Third Floor, JTM Mall, Jagatpura",
        addressLocality: "Jaipur",
        addressRegion: "Rajasthan",
        postalCode: "302017",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "26.8485",
        longitude: "75.8330",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "10:00",
          closes: "19:00",
        },
      ],
      priceRange: "Free Consultation",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "1250",
        bestRating: "5",
        worstRating: "1",
      },
    },
    // WebSite Schema with SearchAction
    {
      "@type": "WebSite",
      "@id": "https://jobshrabroad.in/#website",
      url: "https://jobshrabroad.in",
      name: "Job's HR Abroad",
      description: "India's #1 International Recruitment Agency for Overseas Jobs",
      publisher: { "@id": "https://jobshrabroad.in/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://jobshrabroad.in/jobs?search={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    // FAQPage Schema for AEO/GEO
    {
      "@type": "FAQPage",
      "@id": "https://jobshrabroad.in/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Job's HR Abroad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Job's HR Abroad is India's leading international recruitment agency based in Jaipur, Rajasthan. Founded by Varis Khan and Aman Sharma in 2015, we specialize in connecting skill",
          },
        },
        {
          "@type": "Question",
          name: "Which countries does Job's HR Abroad provide jobs for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Job's HR Abroad provides job placements in multiple countries including: UAE (Dubai, Abu Dhabi, Sharjah), Saudi Arabia (Riyadh, Jeddah), Qatar (Doha), United Kingdom (London)",
          },
        },
        {
          "@type": "Question",
          name: "What types of jobs are available through Job's HR Abroad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We offer a wide range of job categories including: Construction (Welders, Carpenters, Masons, Steel Fixers), Technical (Electricians, Plumbers, AC Technicians), Hospitality ",
          },
        },
        {
          "@type": "Question",
          name: "Is Job's HR Abroad a genuine recruitment agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, Job's HR Abroad is a legitimate and government-registered recruitment agency operating from Jaipur, India. We are known for our transparent processes, verified employer ",
          },
        },
        {
          "@type": "Question",
          name: "How can I apply for overseas jobs through Job's HR Abroad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Applying for overseas jobs through Job's HR Abroad is simple: 1) Visit our website at jobshrabroad.in and browse available positions, 2) Click 'Apply Now' on any job listing ",
          },
        },
        {
          "@type": "Question",
          name: "What is the consultation fee at Job's HR Abroad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Job's HR Abroad offers FREE initial consultation for all candidates. We assess your skills, experience, and career goals at no cost. Our transparent fee structure is discussed ",
          },
        },
        {
          "@type": "Question",
          name: "How to contact Job's HR Abroad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Job's HR Abroad through: Phone: +91 94607 24814, Email: jobshrjaipur2023@gmail.com, Office Address: K-A-7 Third Floor, JTM Mall, Jagatpura, Jaipur, Rajasthan ",
          },
        },
      ],
    },
  ],
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
        <link rel="canonical" href="https://jobshrabroad.in" />
        <meta name="geo.region" content="IN-RJ" />
        <meta name="geo.placename" content="Jaipur" />
        <meta name="geo.position" content="26.8485;75.8330" />
        <meta name="ICBM" content="26.8485, 75.8330" />
        {/* Structured Data for SEO, AEO, GEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          strategy="afterInteractive"
        />
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
