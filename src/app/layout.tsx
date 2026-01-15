"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import { FaWhatsapp } from "react-icons/fa";
import "../styles/globals.css";

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const SHOULD_LOAD_GTM = Boolean(GTM_ID);
const SHOULD_LOAD_GA = Boolean(GA_MEASUREMENT_ID) && !SHOULD_LOAD_GTM;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rainbowacp.com"),
  title: {
    default: "ACP Panel Indonesia | Aluminium Composite Panel Berkualitas",
    template: "%s | ACP Panel Indonesia",
  },
  description:
    "Distributor dan supplier ACP (Aluminium Composite Panel) berkualitas tinggi di Indonesia. Konsultasi gratis!",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      {/* === ANALYTICS (HEAD SAFE) === */}
      {SHOULD_LOAD_GTM && <GoogleTagManager gtmId={GTM_ID!} />}
      {!SHOULD_LOAD_GTM && SHOULD_LOAD_GA && (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID!} />
      )}

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}
      >
        <Navbar />

        <main id="main-content">{children}</main>

        <Footer />

        {/* === FLOATING WHATSAPP (TRACKED VIA GTM) === */}
        <a
          href="https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20ACP"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Hubungi via WhatsApp"
          onClick={() => {
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: "whatsapp_click",
              source: "floating_button",
              page: window.location.pathname,
            });
          }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-xl transition"
        >
          <FaWhatsapp className="w-8 h-8" />
        </a>

        {/* === OPTIONAL PERFORMANCE LOG (DEV ONLY) === */}
        {process.env.NODE_ENV === "development" && (
          <Script id="perf-log" strategy="afterInteractive">
            {`
              window.addEventListener('load', () => {
                console.log('Page Load:', performance.now().toFixed(0), 'ms');
              });
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
