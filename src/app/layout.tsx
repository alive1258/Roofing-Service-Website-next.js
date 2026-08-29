import type { Metadata } from "next";
import { Geist, Geist_Mono, Caveat, Poppins, Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/src/lib/providers/Providers";
import ToastProvider from "../components/Common/ToastProvider/ToastProvider";

// ✅ Font Optimization
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten accent font for headline highlight words (e.g. "Journeys")
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

// Roofing site type system: Poppins for headings, Inter for body copy.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// ✅ SEO Metadata
// NOTE: metadataBase/canonical use a placeholder domain — swap in the
// real domain once one is registered/deployed.
export const metadata: Metadata = {
  metadataBase: new URL("https://ironcladroofing.com"),

  title: {
    default: "Ironclad Roofing | Reliable Roofing. Built to Protect What Matters Most.",
    template: "%s | Ironclad Roofing",
  },

  description:
    "Professional roof installation, repair, replacement, and maintenance for homes and businesses. Licensed, insured, and trusted for 15+ years.",

  keywords: [
    "Ironclad Roofing",
    "roof repair",
    "roof replacement",
    "roof installation",
    "storm damage repair",
    "commercial roofing",
    "roofing contractor",
  ],

  authors: [{ name: "Ironclad Roofing" }],
  creator: "Ironclad Roofing",
  publisher: "Ironclad Roofing",

  category: "home services",

  // ✅ Open Graph (Facebook, LinkedIn)
  openGraph: {
    title: "Ironclad Roofing | Reliable Roofing. Built to Protect What Matters Most.",
    description:
      "Professional roof installation, repair, replacement, and maintenance for homes and businesses.",
    url: "https://ironcladroofing.com",
    siteName: "Ironclad Roofing",
    images: [
      {
        url: "/images/roofing/hero-roofer.jpg",
        width: 1600,
        height: 1067,
        alt: "Ironclad Roofing — professional roofers installing shingles",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter SEO
  twitter: {
    card: "summary_large_image",
    title: "Ironclad Roofing | Reliable Roofing. Built to Protect What Matters Most.",
    description:
      "Professional roof installation, repair, replacement, and maintenance for homes and businesses.",
    images: ["/images/roofing/hero-roofer.jpg"],
  },

  // ✅ Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ✅ Canonical
  alternates: {
    canonical: "https://ironcladroofing.com",
  },

  // ✅ Icons
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.svg",
  },

  // ✅ App Info
  applicationName: "Ironclad Roofing",
  referrer: "origin-when-cross-origin",

  // ✅ Format detection
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${caveat.variable} ${poppins.variable} ${inter.variable} font-sans antialiased bg-white text-brand-900`}
      >
        <Providers>
          {children}
          <ToastProvider />
        </Providers>
      </body>
    </html>
  );
}
