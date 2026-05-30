import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
});

const siteDescription =
  "Wintima Foundation is an education-focused non-profit in Ghana ensuring children in rural communities have access to quality education through school supplies, uniforms, mentorship, and infrastructure support.";

export const metadata: Metadata = {
  metadataBase: new URL("https://wintima.org"),
  title: {
    default: "Wintima Foundation",
    template: "%s | Wintima Foundation",
  },
  description: siteDescription,
  keywords: [
    "education",
    "Ghana",
    "Upper East Region",
    "rural schools",
    "mentorship",
    "school supplies",
    "uniforms",
    "community development",
    "non-profit",
    "Wintima Foundation",
    "school infrastructure",
    "charity",
    "NGO",
  ],
  authors: [{ name: "Wintima Foundation" }],
  creator: "Wintima Foundation",
  publisher: "Wintima Foundation",
  category: "Nonprofit Organization",
  classification: "Charity & Nonprofit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://wintima.org",
    siteName: "Wintima Foundation",
    title: "Wintima Foundation",
    description: siteDescription,
    images: [
      {
        url: "/metadata-img.png",
        width: 1200,
        height: 630,
        alt: "Wintima Foundation — Restoring smiles, impacting lives through education in Ghana",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wintima Foundation",
    description: siteDescription,
    images: ["/metadata-img.png"],
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
  alternates: {
    canonical: "https://wintima.org",
  },
  other: {
    "theme-color": "#8B1A1A",
    "msapplication-TileColor": "#8B1A1A",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Wintima Foundation",
    "application-name": "Wintima Foundation",
    "msapplication-TileImage": "/favicon-32x32.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "NonProfit",
  name: "Wintima Foundation",
  description: siteDescription,
  url: "https://wintima.org",
  logo: "https://wintima.org/images/logo.png",
  image: "https://wintima.org/metadata-img.png",
  foundingDate: "2015",
  founder: {
    "@type": "Person",
    name: "Janet Zeylisa Dauda",
  },
  address: {
    "@type": "PostalAddress",
    addressRegion: "Upper East Region",
    addressCountry: "GH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "wintimafoundation@gmail.com",
  },
  sameAs: [
    "https://www.linkedin.com/company/wintima-foundation/",
    "https://www.instagram.com/wintima.foundation/",
  ],
  areaServed: {
    "@type": "Place",
    name: "Upper East Region, Ghana",
  },
  serviceType: [
    "Education",
    "School Infrastructure",
    "Mentorship",
    "Community Support",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Projects",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "School Supplies and Mentorship Support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Student Health and Sanitary Pad Support",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "School Infrastructure Projects",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${lora.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#8B1A1A" />
        <meta name="msapplication-TileColor" content="#8B1A1A" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Wintima Foundation" />
        <meta name="application-name" content="Wintima Foundation" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${dmSans.className} antialiased`}>
        <Header />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <GoogleAnalytics gaId="G-2256Y8WHBZ" />
      </body>
    </html>
  );
}
