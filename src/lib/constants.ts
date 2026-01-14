// Constants and Configuration
// Centralized configuration untuk seluruh aplikasi

// ============================================
// SITE CONFIGURATION
// ============================================

export const SITE_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "ACP Panel Indonesia - Rainbow ACP",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourwebsite.com",
  description:
    process.env.NEXT_PUBLIC_META_DESCRIPTION ||
    "Distributor dan supplier ACP (Aluminium Composite Panel) berkualitas tinggi di Indonesia. Tersedia berbagai merk dan ukuran dengan harga kompetitif. Konsultasi gratis!",
  keywords:
    process.env.NEXT_PUBLIC_META_KEYWORDS ||
    "ACP Panel,Aluminium Composite Panel,ACP Indonesia,Panel ACP,Rainbow ACP,Fasad Bangunan,Material Konstruksi",
  locale: "id_ID",
  language: "id",
} as const;

// ============================================
// CONTACT INFORMATION
// ============================================

export const CONTACT_INFO = {
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282228211989",
    url: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6282228211989"}`,
    message: "Halo, saya mau tanya tentang produk ACP",
  },
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@yourwebsite.com",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+62-822-2821-1989",
  address: {
    street: process.env.NEXT_PUBLIC_ADDRESS || "Jl. Raya ACP No. 123",
    city: process.env.NEXT_PUBLIC_CITY || "Surabaya",
    region: process.env.NEXT_PUBLIC_REGION || "Jawa Timur",
    postalCode: process.env.NEXT_PUBLIC_POSTAL_CODE || "60000",
    country: process.env.NEXT_PUBLIC_COUNTRY || "Indonesia",
    full:
      process.env.NEXT_PUBLIC_ADDRESS ||
      "Jl. Raya ACP No. 123, Surabaya, Jawa Timur 60000",
  },
  coordinates: {
    latitude: parseFloat(process.env.NEXT_PUBLIC_LATITUDE || "-7.2575"),
    longitude: parseFloat(process.env.NEXT_PUBLIC_LONGITUDE || "112.7521"),
  },
} as const;

// ============================================
// SOCIAL MEDIA
// ============================================

export const SOCIAL_MEDIA = {
  instagram: {
    username: process.env.NEXT_PUBLIC_INSTAGRAM || "yourinstagram",
    url: `https://instagram.com/${process.env.NEXT_PUBLIC_INSTAGRAM || "yourinstagram"}`,
  },
  tiktok: {
    username: process.env.NEXT_PUBLIC_TIKTOK || "yourtiktok",
    url: `https://tiktok.com/@${process.env.NEXT_PUBLIC_TIKTOK || "yourtiktok"}`,
  },
  facebook: {
    url:
      process.env.NEXT_PUBLIC_FACEBOOK ||
      "https://facebook.com/yourpage",
  },
  twitter: {
    username: process.env.NEXT_PUBLIC_TWITTER || "yourtwitter",
    url: `https://twitter.com/${process.env.NEXT_PUBLIC_TWITTER || "yourtwitter"}`,
  },
  linkedin: {
    url:
      process.env.NEXT_PUBLIC_LINKEDIN ||
      "https://linkedin.com/company/yourcompany",
  },
  whatsapp: {
    number: CONTACT_INFO.whatsapp.number,
    url: CONTACT_INFO.whatsapp.url,
  },
} as const;

// ============================================
// BUSINESS INFORMATION
// ============================================

export const BUSINESS_INFO = {
  openingHours: process.env.NEXT_PUBLIC_OPENING_HOURS || "Mo-Fr 08:00-17:00, Sa 08:00-12:00",
  priceRange: "$$",
  founded: "2020",
  employeeCount: "10-50",
  categories: ["construction", "building materials", "aluminium composite panel"],
} as const;

// ============================================
// ANALYTICS & TRACKING
// ============================================

export const ANALYTICS = {
  google: {
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "GA_MEASUREMENT_ID",
    enabled: !!process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
  },
  gtm: {
    id: process.env.NEXT_PUBLIC_GTM_ID || "",
    enabled: !!process.env.NEXT_PUBLIC_GTM_ID,
  },
  hotjar: {
    id: process.env.NEXT_PUBLIC_HOTJAR_ID || "",
    enabled: !!process.env.NEXT_PUBLIC_HOTJAR_ID,
  },
  facebookPixel: {
    id: process.env.NEXT_PUBLIC_FB_PIXEL_ID || "",
    enabled: !!process.env.NEXT_PUBLIC_FB_PIXEL_ID,
  },
  enableInDev: process.env.NEXT_PUBLIC_ENABLE_DEV_ANALYTICS === "true",
} as const;

// ============================================
// SEO VERIFICATION
// ============================================

export const SEO_VERIFICATION = {
  google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "your-google-verification-code",
  bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || "",
  yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
} as const;

// ============================================
// NAVIGATION LINKS
// ============================================

export const NAVIGATION_LINKS = [
  {
    name: "Beranda",
    href: "/",
    description: "Halaman utama website",
  },
  {
    name: "Produk",
    href: "/pages/produk",
    description: "Lihat koleksi produk ACP kami",
  },
  {
    name: "Galeri",
    href: "/pages/galeri",
    description: "Galeri proyek dan produk",
  },
  {
    name: "Distributor",
    href: "/pages/distributor",
    description: "Temukan distributor terdekat",
  },
  {
    name: "Instalasi",
    href: "/pages/instalasi",
    description: "Panduan dan layanan instalasi",
  },
  {
    name: "Kontak",
    href: "/pages/kontak",
    description: "Hubungi kami",
  },
] as const;

// ============================================
// PERFORMANCE SETTINGS
// ============================================

export const PERFORMANCE_CONFIG = {
  enableMonitoring: process.env.NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING === "true",
  imageQuality: parseInt(process.env.NEXT_PUBLIC_IMAGE_QUALITY || "85", 10),
  lazyLoadThreshold: 0.1,
  lazyLoadRootMargin: "50px",
  animationDuration: 300,
  debounceDelay: 300,
  throttleDelay: 100,
} as const;

// ============================================
// IMAGE PATHS
// ============================================

export const IMAGE_PATHS = {
  logo: "/assets/images/logo.png",
  logoWhite: "/assets/images/whiteLogo-RIJA.webp",
  ogImage: "/og-image.jpg",
  twitterImage: "/twitter-image.jpg",
  favicon: "/favicon.ico",
  appleTouchIcon: "/apple-touch-icon.png",
} as const;

// ============================================
// API ENDPOINTS (if needed)
// ============================================

export const API_ENDPOINTS = {
  contact: "/api/contact",
  newsletter: "/api/newsletter",
  catalog: "/api/catalog",
} as const;

// ============================================
// PRODUCT CATEGORIES
// ============================================

export const PRODUCT_CATEGORIES = [
  { id: "solid", name: "Solid Color", slug: "solid-color" },
  { id: "metallic", name: "Metallic", slug: "metallic" },
  { id: "brushed", name: "Brushed", slug: "brushed" },
  { id: "mirror", name: "Mirror", slug: "mirror" },
  { id: "wood", name: "Wood Grain", slug: "wood-grain" },
  { id: "granite", name: "Granite", slug: "granite" },
] as const;

// ============================================
// ACP SPECIFICATIONS
// ============================================

export const ACP_SPECIFICATIONS = {
  thicknesses: ["3mm", "4mm", "6mm"],
  sizes: [
    { width: 1220, height: 2440, unit: "mm" },
    { width: 1250, height: 2440, unit: "mm" },
    { width: 1500, height: 3000, unit: "mm" },
  ],
  finishes: ["PE (Polyester)", "PVDF", "Nano PVDF"],
  warranty: {
    min: 5,
    max: 15,
    unit: "years",
  },
  minOrder: {
    custom: 1000,
    unit: "m²",
  },
} as const;

// ============================================
// FEATURES & BENEFITS
// ============================================

export const FEATURES = [
  {
    id: 1,
    title: "100+ Warna",
    description: "Tersedia lebih dari 100 pilihan warna dan motif",
    icon: "palette",
  },
  {
    id: 2,
    title: "Kuat & Fleksibel",
    description: "Material kuat namun mudah dibentuk",
    icon: "shield",
  },
  {
    id: 3,
    title: "Kualitas Terjamin",
    description: "Bersertifikat internasional",
    icon: "award",
  },
  {
    id: 4,
    title: "Tahan Cuaca",
    description: "Anti rayap, jamur, dan tahan api",
    icon: "sun",
  },
] as const;

// ============================================
// TESTIMONIALS (example)
// ============================================

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Budi Santoso",
    company: "PT. Konstruksi Sejahtera",
    role: "Project Manager",
    content: "Kualitas ACP sangat bagus, instalasi mudah, dan harga kompetitif.",
    rating: 5,
    image: "/assets/images/testimonials/user1.jpg",
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    company: "Arsitek Mandiri",
    role: "Architect",
    content: "Pilihan warna sangat lengkap, cocok untuk berbagai konsep desain.",
    rating: 5,
    image: "/assets/images/testimonials/user2.jpg",
  },
] as const;

// ============================================
// FAQ (example)
// ============================================

export const FAQ_ITEMS = [
  {
    id: 1,
    question: "Apa itu ACP (Aluminium Composite Panel)?",
    answer:
      "ACP adalah material komposit yang terdiri dari dua lembar aluminium dengan core polyethylene di tengahnya. Material ini ringan, kuat, dan cocok untuk aplikasi eksterior maupun interior bangunan.",
  },
  {
    id: 2,
    question: "Berapa ketebalan ACP yang tersedia?",
    answer:
      "Kami menyediakan ACP dengan ketebalan 3mm, 4mm, dan 6mm. Ketebalan dapat disesuaikan dengan kebutuhan proyek Anda.",
  },
  {
    id: 3,
    question: "Apakah ACP tahan terhadap cuaca?",
    answer:
      "Ya, ACP dirancang untuk tahan terhadap cuaca ekstrem, UV, air hujan, dan perubahan suhu. Material ini juga anti rayap dan anti jamur.",
  },
  {
    id: 4,
    question: "Bagaimana cara pemesanan?",
    answer:
      "Anda dapat menghubungi kami melalui WhatsApp, email, atau telepon. Tim kami siap membantu konsultasi dan proses pemesanan Anda.",
  },
] as const;

// ============================================
// UTILITY FUNCTIONS
// ============================================

export const getWhatsAppLink = (message?: string): string => {
  const msg = message || CONTACT_INFO.whatsapp.message;
  return `${CONTACT_INFO.whatsapp.url}?text=${encodeURIComponent(msg)}`;
};

export const getGoogleMapsLink = (): string => {
  const { latitude, longitude } = CONTACT_INFO.coordinates;
  return `https://www.google.com/maps?q=${latitude},${longitude}`;
};

export const formatPhoneNumber = (phone: string): string => {
  return phone.replace(/[^\d+]/g, "");
};

export const isProduction = (): boolean => {
  return process.env.NODE_ENV === "production";
};

export const isDevelopment = (): boolean => {
  return process.env.NODE_ENV === "development";
};

// ============================================
// TYPE EXPORTS
// ============================================

export type NavigationLink = (typeof NAVIGATION_LINKS)[number];
export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];
export type Feature = (typeof FEATURES)[number];
export type Testimonial = (typeof TESTIMONIALS)[number];
export type FAQItem = (typeof FAQ_ITEMS)[number];
