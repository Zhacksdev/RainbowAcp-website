import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import "@/styles/globals.css";
import { FaWhatsapp } from "react-icons/fa";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID!;
const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID!;

export const metadata: Metadata = {
  metadataBase: new URL("https://rainbowacp.com"),
  title: "ACP Panel Indonesia",
  description: "Distributor ACP berkualitas di Indonesia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* Google Analytics */}
        <GoogleAnalytics gaId={GA_ID} />

        {/* Google Tag Manager */}
        <GoogleTagManager gtmId={GTM_ID} />

        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className={`${inter.variable} font-sans`}>
        <Navbar />

        <main>{children}</main>

        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/6282228211989"
          target="_blank"
          rel="noopener noreferrer"
          data-gtm="whatsapp"
          className="fixed bottom-6 right-6 z-50 bg-green-600 p-4 rounded-full text-white"
        >
          <FaWhatsapp className="w-7 h-7" />
        </a>

        {/* Optional: custom script */}
        <Script id="scroll-indicator" strategy="afterInteractive">
          {`
            console.log("Custom scripts loaded");
          `}
        </Script>
      </body>
    </html>
  );
}
