import { Metadata } from "next";

interface PageMetadataProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: "website" | "article";
  noindex?: boolean;
  canonical?: string;
}

const baseUrl = "https://www.yourwebsite.com"; // Ganti dengan domain Anda
const siteName = "ACP Panel Indonesia - Rainbow ACP";
const defaultDescription =
  "Distributor dan supplier ACP (Aluminium Composite Panel) berkualitas tinggi di Indonesia. Tersedia berbagai merk dan ukuran dengan harga kompetitif. Konsultasi gratis!";

export function generateMetadata({
  title,
  description = defaultDescription,
  keywords = [],
  image = "/og-image.jpg",
  url = "",
  type = "website",
  noindex = false,
  canonical,
}: PageMetadataProps = {}): Metadata {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const fullUrl = `${baseUrl}${url}`;
  const imageUrl = image.startsWith("http") ? image : `${baseUrl}${image}`;

  const defaultKeywords = [
    "ACP Panel",
    "Aluminium Composite Panel",
    "ACP Indonesia",
    "Panel ACP",
    "Rainbow ACP",
    "Fasad Bangunan",
    "Material Konstruksi",
    "ACP Berkualitas",
  ];

  const allKeywords = [...new Set([...defaultKeywords, ...keywords])];

  return {
    title: fullTitle,
    description,
    keywords: allKeywords,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: canonical || fullUrl,
    },
    openGraph: {
      type: type as "website" | "article",
      locale: "id_ID",
      url: fullUrl,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title || siteName,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [imageUrl],
      creator: "@yourtwitter", // Ganti dengan Twitter handle Anda
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      nocache: noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateProductMetadata(
  productName: string,
  productDescription: string,
) {
  return generateMetadata({
    title: productName,
    description: productDescription,
    type: "website",
    keywords: [productName, "ACP", "Aluminium Panel", "Komposit"],
  });
}

export function generateArticleMetadata(
  articleTitle: string,
  articleDescription: string,
  publishDate?: Date,
) {
  return {
    ...generateMetadata({
      title: articleTitle,
      description: articleDescription,
      type: "article",
    }),
    openGraph: {
      ...generateMetadata({
        title: articleTitle,
        description: articleDescription,
        type: "article",
      }).openGraph,
      publishedTime: publishDate?.toISOString(),
      authors: [siteName],
    },
  };
}

// Structured Data helpers
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: defaultDescription,
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
      areaServed: "ID",
    },
    sameAs: [
      "https://wa.me/6282228211989",
      "https://www.instagram.com/yourinstagram",
      "https://www.tiktok.com/@yourtiktok",
    ],
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  brand?: string;
  sku?: string;
  price?: number;
  currency?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image,
    brand: {
      "@type": "Brand",
      name: product.brand || "Rainbow ACP",
    },
    sku: product.sku,
    offers: product.price
      ? {
          "@type": "Offer",
          price: product.price,
          priceCurrency: product.currency || "IDR",
          availability: "https://schema.org/InStock",
          url: baseUrl,
        }
      : undefined,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "150",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${baseUrl}${item.url}`,
    })),
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteName,
    image: `${baseUrl}/logo.png`,
    "@id": baseUrl,
    url: baseUrl,
    telephone: "+62-822-2821-1989",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Raya ACP No. 123",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      postalCode: "60000",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -7.2575,
      longitude: 112.7521,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    priceRange: "$$",
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
