import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://yeremallufoundation.org'),
  title: {
    default: "Yeremallu Foundation | Empowering Northern Ghana",
    template: "%s | Yeremallu Foundation"
  },
  description: "Empowering communities in Northern Ghana through education, health awareness, and acts of service. Join us in making a lasting impact through mentorship, diabetes outreach, and community giving.",
  keywords: [
    "NGO", "Ghana", "Education", "Health", "Diabetes", "Community", "Mentorship", 
    "Northern Ghana", "Nonprofit", "Foundation", "Charity", "Development", 
    "Healthcare", "Youth Empowerment", "Rural Development", "West Africa",
    "Community Service", "Volunteer", "Donate", "Social Impact"
  ],
  authors: [{ name: "Yeremallu Foundation" }],
  creator: "Yeremallu Foundation",
  publisher: "Yeremallu Foundation",
  category: "Nonprofit Organization",
  classification: "Charity & Nonprofit",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yeremallufoundation.org",
    siteName: "Yeremallu Foundation",
    title: "Yeremallu Foundation | Empowering Northern Ghana",
    description: "Empowering communities in Northern Ghana through education, health awareness, and acts of service. Join us in making a lasting impact through mentorship, diabetes outreach, and community giving.",
    images: [
      {
        url: "/metadata-img.png",
        width: 1200,
        height: 630,
        alt: "Yeremallu Foundation - Empowering Northern Ghana Through Education, Health, and Community Service",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@yeremallufound",
    site: "@yeremallufound",
    title: "Yeremallu Foundation | Empowering Northern Ghana",
    description: "Empowering communities in Northern Ghana through education, health awareness, and acts of service.",
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
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  alternates: {
    canonical: "https://yeremallufoundation.org",
  },
  other: {
    "theme-color": "#4f46e5",
    "msapplication-TileColor": "#4f46e5",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Yeremallu Foundation",
    "application-name": "Yeremallu Foundation",
    "msapplication-TileImage": "/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Favicon Links */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional Meta Tags for Better SEO */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="msapplication-TileColor" content="#4f46e5" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Yeremallu Foundation" />
        <meta name="application-name" content="Yeremallu Foundation" />
        
        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NonProfit",
              "name": "Yeremallu Foundation",
              "description": "Empowering communities in Northern Ghana through education, health awareness, and acts of service",
              "url": "https://yeremallufoundation.org",
              "logo": "https://yeremallufoundation.org/images/logo.JPG",
              "image": "https://yeremallufoundation.org/metadata-img.png",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Northern Region",
                "addressCountry": "GH"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@yeremallufoundation.org"
              },
              "sameAs": [
                "https://facebook.com/yeremallufoundation",
                "https://twitter.com/yeremallufound",
                "https://instagram.com/yeremallufoundation",
                "https://linkedin.com/company/yeremallu-foundation"
              ],
              "foundingDate": "2021",
              "areaServed": {
                "@type": "Place",
                "name": "Northern Ghana"
              },
              "serviceType": ["Education", "Healthcare", "Community Development"],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Programs",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Northern Stars Mentorship Program"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "J&C Diabetes Outreach Program"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Community Giving Program"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
