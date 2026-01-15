import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import Navbar from "../components/layout/navbar";
import Footer from "../components/layout/footer";
import WhatsAppButton from "../components/layout/wa-button"; // Import komponen baru
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

// Metadata tetap aman di sini (Server Component)
export const metadata: Metadata = {
  metadataBase: new URL("https://rainbowacp.com"),
  title: {
    default: "ACP Panel Indonesia | Aluminium Composite Panel Berkualitas",
    template: "%s | ACP Panel Indonesia",
  },
  description: "Distributor dan supplier ACP berkualitas tinggi di Indonesia.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      {SHOULD_LOAD_GTM && <GoogleTagManager gtmId={GTM_ID!} />}
      {!SHOULD_LOAD_GTM && SHOULD_LOAD_GA && <GoogleAnalytics gaId={GA_MEASUREMENT_ID!} />}

      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900`}>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />

        {/* Panggil komponen Client di sini */}
        <WhatsAppButton />

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