import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import Script from "next/script";
import "../styles/globals.css";
import { FaWhatsapp } from "react-icons/fa";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const SHOULD_LOAD_GTM = Boolean(GTM_ID);
const SHOULD_LOAD_GA = Boolean(GA_MEASUREMENT_ID) && !SHOULD_LOAD_GTM;

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "ACP Panel Indonesia | Aluminium Composite Panel Berkualitas",
    template: "%s | ACP Panel Indonesia",
  },
  description:
    "Distributor dan supplier ACP (Aluminium Composite Panel) berkualitas tinggi di Indonesia. Tersedia berbagai merk dan ukuran dengan harga kompetitif. Konsultasi gratis!",
  keywords: [
    "ACP Panel",
    "Aluminium Composite Panel",
    "ACP Indonesia",
    "Panel ACP",
    "Fasad Bangunan",
    "Material Konstruksi",
    "ACP Murah",
    "Supplier ACP",
  ],
  authors: [{ name: "ACP Panel Indonesia" }],
  creator: "ACP Panel Indonesia",
  publisher: "ACP Panel Indonesia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // metadataBase: new URL("https://rainbowacp.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://rainbowacp.com",
    title: "ACP Panel Indonesia | Aluminium Composite Panel Berkualitas",
    description:
      "Distributor dan supplier ACP (Aluminium Composite Panel) berkualitas tinggi di Indonesia. Konsultasi gratis!",
    siteName: "ACP Panel Indonesia",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ACP Panel Indonesia - Aluminium Composite Panel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ACP Panel Indonesia | Aluminium Composite Panel Berkualitas",
    description:
      "Distributor dan supplier ACP berkualitas tinggi di Indonesia. Konsultasi gratis!",
    images: ["/twitter-image.jpg"],
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
  },
  category: "construction",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      {SHOULD_LOAD_GTM ? <GoogleTagManager gtmId={GTM_ID!} /> : null}
      {SHOULD_LOAD_GA ? <GoogleAnalytics gaId={GA_MEASUREMENT_ID!} /> : null}
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme colors */}
        <meta name="theme-color" content="#059669" />
        <meta name="msapplication-TileColor" content="#059669" />

        {/* Viewport optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://www.google-analytics.com" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://wa.me" />

        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta
          httpEquiv="Referrer-Policy"
          content="strict-origin-when-cross-origin"
        />

        {/* Structured Data - Organization */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ACP Panel Indonesia",
              url: "https://www.yourwebsite.com",
              logo: "https://www.yourwebsite.com/logo.png",
              description:
                "Distributor dan supplier ACP (Aluminium Composite Panel) berkualitas tinggi di Indonesia",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surabaya",
                addressRegion: "Jawa Timur",
                addressCountry: "ID",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+62-822-2821-1989",
                contactType: "customer service",
                availableLanguage: ["Indonesian"],
              },
              sameAs: ["https://wa.me/6282228211989"],
            }),
          }}
        />

        {/* Structured Data - LocalBusiness */}
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "ACP Panel Indonesia",
              description:
                "Distributor dan supplier ACP (Aluminium Composite Panel) berkualitas tinggi di Indonesia",
              url: "https://www.yourwebsite.com",
              telephone: "+62-822-2821-1989",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Surabaya",
                addressRegion: "Jawa Timur",
                addressCountry: "ID",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-7.2575",
                longitude: "112.7521",
              },
              openingHours: "Mo-Fr 08:00-17:00, Sa 08:00-12:00",
              priceRange: "$$",
            }),
          }}
        />
      </head>

      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900 selection:bg-green-100 selection:text-green-900`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-green-600 text-white px-4 py-2 rounded-md">
          Skip to main content
        </a>

        <div
          id="loading-bar"
          className="fixed top-0 left-0 w-full h-1 bg-green-500 transform -translate-x-full transition-transform duration-300 z-50"></div>

        <div className="flex flex-col min-h-screen">
          <Navbar />

          <main id="main-content" className="flex-grow">
            {children}
          </main>

          <Footer />
        </div>

        {/* WhatsApp Button */}
        <div
          className="fixed bottom-6 right-6 z-50 group cursor-pointer"
          aria-label="Hubungi kami via WhatsApp">
          <a
            href="https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20ACP"
            target="_blank"
            rel="noopener noreferrer"
            className="relative flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-bounce-slow focus:outline-none focus:ring-4 focus:ring-green-300"
            aria-label="Hubungi kami via WhatsApp untuk konsultasi ACP Panel">
            <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 z-10 drop-shadow-sm" />
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-25 animate-ping"></div>
            </div>
            <div className="absolute right-full mr-3 px-4 py-3 bg-gray-900 text-white text-sm rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-gray-700">
              <div className="font-semibold">Konsultasi Gratis</div>
              <div className="text-xs text-gray-300 mt-1">
                Tanya produk ACP terbaik
              </div>
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-gray-900 border-r border-b border-gray-700 rotate-45"></div>
            </div>
          </a>
          <div
            className="pointer-events-none absolute inset-0 rounded-full border-2 border-green-400 opacity-30 animate-ping animation-delay-1000"
            aria-hidden="true"></div>
          <div
            className="pointer-events-none absolute inset-0 rounded-full border-2 border-green-300 opacity-20 animate-ping animation-delay-2000"
            aria-hidden="true"
          ></div>
        </div>

        {/* Performance and Analytics Scripts */}
        <Script id="page-speed-insights" strategy="afterInteractive">
          {`
            // Simple page load time tracking
            window.addEventListener('load', function() {
              const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
              console.log('Page Load Time:', loadTime + 'ms');
            });

            // Back to top functionality dengan dynamic button creation
            function createBackToTopButton() {
              const container = document.getElementById('back-to-top-container');
              if (container && !container.hasChildNodes()) {
                const button = document.createElement('button');
                button.id = 'back-to-top';
                button.className = 'fixed bottom-24 right-6 z-40 bg-gray-900 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg opacity-0 invisible transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-gray-300';
                button.setAttribute('aria-label', 'Kembali ke atas');
                button.innerHTML = \`
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                \`;
                button.addEventListener('click', function() {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                });
                container.appendChild(button);
              }
            }

            // Create button after DOM is ready
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', createBackToTopButton);
            } else {
              createBackToTopButton();
            }

            // Back to top visibility
            window.addEventListener('scroll', function() {
              const backToTop = document.getElementById('back-to-top');
              if (backToTop) {
                if (window.pageYOffset > 300) {
                  backToTop.classList.remove('opacity-0', 'invisible');
                  backToTop.classList.add('opacity-100', 'visible');
                } else {
                  backToTop.classList.add('opacity-0', 'invisible');
                  backToTop.classList.remove('opacity-100', 'visible');
                }
              }
            });

            // Simple scroll indicator
            window.addEventListener('scroll', function() {
              const scrollTop = window.pageYOffset;
              const docHeight = document.body.offsetHeight - window.innerHeight;
              const scrollPercent = (scrollTop / docHeight) * 100;
              const loadingBar = document.getElementById('loading-bar');
              if (loadingBar) {
                loadingBar.style.transform = \`translateX(-\${100 - scrollPercent}%)\`;
              }
            });
          `}
        </Script>

      </body>
    </html>
  );
}
