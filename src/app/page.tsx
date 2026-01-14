"use client";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

export default function HomePage() {
  const features = [
    {
      number: "1",
      icon: "/assets/images/randomAssets/map.webp",
      title: "100+ Warna",
      description:
        "Solusi Aluminium Composite Panel (ACP) terlengkap dengan berbagai pilihan warna dan dapat request warna sesuai yang di inginkan untuk kebutuhan konstruksi modern.",
    },
    {
      number: "2",
      icon: "/assets/images/randomAssets/colorfilter.webp",
      title: "Kuat dan Mudah dibentuk",
      description:
        "Material kuat dan tidak mudah patah, mudah untuk dibentuk sehingga dapat memenuhi kebutuhan design dan arsitektur yang modern.",
    },
    {
      number: "3",
      icon: "/assets/images/randomAssets/shield-tick.webp",
      title: "Kualitas Terjamin",
      description:
        "Produk yang sudah melalui uji standar internasional dengan sertifikasi kualitas terpercaya.",
    },
  ];

  const colors = [
    { id: 1, name: "Bright Silver", hex: "#D9D9D6" },
    { id: 2, name: "Sub Silver", hex: "#C0C0C0" },
    { id: 3, name: "Jade Silver", hex: "#A8B3A2" },
    { id: 4, name: "Champagne Golden", hex: "#C8B273" },
    { id: 5, name: "White", hex: "#FFFFFF" },
    { id: 6, name: "ICBC Gray", hex: "#808080" },
    { id: 7, name: "Silver Blue", hex: "#7B9AA6" },
    { id: 8, name: "Golden", hex: "#D4AF37" },
    { id: 9, name: "Ivory White", hex: "#F2E6D9" },
    { id: 10, name: "China Grey", hex: "#5A6A6C" },
    { id: 11, name: "Ratash Silver", hex: "#7D7D7D" },
    { id: 12, name: "Copper", hex: "#B87333" },
    { id: 13, name: "Beige", hex: "#E6D5B8" },
    { id: 14, name: "Dark Gray", hex: "#4A4A4A" },
    { id: 15, name: "Sparking Black", hex: "#2B2B2B" },
    { id: 16, name: "Black Glossy", hex: "#000000" },
    { id: 17, name: "Chinese Red", hex: "#C41E3A" },
    { id: 18, name: "Xinhua Red", hex: "#B22222" },
    { id: 19, name: "Coffee", hex: "#6F4E37" },
    { id: 20, name: "Yellow", hex: "#FFD700" },
    { id: 21, name: "Tiffany Blue", hex: "#40E0D0" },
    { id: 22, name: "Lake Blue", hex: "#4682B4" },
    { id: 23, name: "Telecom Blue", hex: "#1E5AA8" },
    { id: 24, name: "Navy Blue", hex: "#000080" },
    { id: 25, name: "Sparking White", hex: "#F8F8FF" },
    { id: 26, name: "Pearlish Red", hex: "#E34234" },
    { id: 27, name: "Red Gloss", hex: "#FF0000" },
    { id: 28, name: "Brown Glossy", hex: "#5C4033" },
    { id: 29, name: "Yellow Glossy", hex: "#FFC300" },
    { id: 30, name: "Orange Yellow Glossy", hex: "#FFA500" },
    { id: 31, name: "Brilliant Orange Glossy", hex: "#FF6700" },
    { id: 32, name: "Light Green Gloss", hex: "#90EE90" },
    { id: 33, name: "Apple Green Glossy", hex: "#32CD32" },
    { id: 34, name: "Telecom Blue Glossy", hex: "#0077BE" },
    { id: 35, name: "Sparking Blue", hex: "#005F99" },
    { id: 36, name: "White Granite", hex: "#F5F5F5" },
    { id: 37, name: "Gold Brushed", hex: "#BFA76F" },
    { id: 38, name: "Silver Brushed", hex: "#B0B0B0" },
    { id: 39, name: "Copper Brushed", hex: "#B87333" },
    { id: 40, name: "Black Maquina", hex: "#2B2B2B" },
    { id: 41, name: "Gold Mirror", hex: "#FFD700" },
    { id: 42, name: "Silver Mirror", hex: "#C0C0C0" },
    { id: 43, name: "Tawny Glasses", hex: "#8B5A2B" },
    { id: 44, name: "Shah Anna Beige", hex: "#E6D1B3" },
    { id: 45, name: "White Oak", hex: "#E5D3B3" },
    { id: 46, name: "Teak", hex: "#D18547" },
    { id: 47, name: "Walnut", hex: "#5D3A1A" },
    { id: 48, name: "Golden Flower Beige", hex: "#D9C19B" },
  ];

  // Schema markup untuk SEO
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RIJA Rainbow ACP",
    description:
      "Distributor Aluminium Composite Panel (ACP) terlengkap di Indonesia dengan 100+ pilihan warna dan kualitas berstandar internasional",
    url: "https://rijarainbow.com",
    logo: "https://rijarainbow.com/assets/images/whiteLogo-RIJA.webp",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62-822-2821-1989",
      contactType: "sales",
      availableLanguage: "Indonesian",
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
    product: {
      "@type": "Product",
      name: "Aluminium Composite Panel (ACP)",
      description:
        "Panel komposit aluminium berkualitas tinggi dengan berbagai pilihan warna dan finishing",
    },
  };

  return (
    <>
      <Head>
        <title>
          RIJA Rainbow ACP - Distributor ACP Terlengkap di Indonesia
        </title>
        <meta
          name="description"
          content="Distributor Aluminium Composite Panel (ACP) terlengkap di Indonesia. 100+ pilihan warna, kualitas berstandar internasional, tersedia di seluruh Indonesia."
        />
        <meta
          name="keywords"
          content="ACP, Aluminium Composite Panel, Rainbow ACP, RIJA, distributor ACP Indonesia, panel komposit aluminium, fasad bangunan, material konstruksi"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="RIJA Rainbow ACP - Distributor ACP Terlengkap di Indonesia"
        />
        <meta
          property="og:description"
          content="100+ pilihan warna ACP berkualitas berstandar internasional. Solusi terlengkap untuk kebutuhan fasad bangunan modern."
        />
        <meta property="og:image" content="/assets/images/home-Hero.webp" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://rijarainbow.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      </Head>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/assets/images/home-Hero.webp')" }}
        role="banner"
        aria-label="Hero section"
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/whiteLogo-RIJA.webp"
                alt="RIJA Rainbow ACP Logo - Distributor ACP Terlengkap Indonesia"
                width={208}
                height={208}
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 object-contain"
                priority
                quality={90}
                sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 208px"
              />
            </div>
            <h1 className="sr-only">
              RIJA Rainbow ACP - Distributor Aluminium Composite Panel
              Terlengkap di Indonesia
            </h1>
          </div>
        </div>
      </section>

      {/* International Standards Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 bg-gray-50"
        aria-labelledby="standards-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2
                id="standards-heading"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
              >
                Berstandar Internasional
              </h2>
              <p className="text-gray-600 text-base sm:text-lg">
                Produk ACP kami telah tersertifikasi dengan standar kualitas
                internasional
              </p>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 items-center justify-center">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex justify-center items-center">
                    <Image
                      src={`/assets/images/CTA-Taraf/Taraf2/tarafInternational_${num}p2.webp`}
                      alt={`Sertifikasi internasional ${num} untuk produk ACP Rainbow`}
                      width={96}
                      height={96}
                      className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 object-contain transition-transform duration-300 hover:scale-110"
                      quality={85}
                      sizes="(max-width: 640px) 64px, (max-width: 768px) 80px, 96px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        className="py-12 sm:py-16 lg:py-20 bg-white"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 text-left sm:text-center lg:text-left">
              <h2
                id="about-heading"
                className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 lg:mb-8 leading-tight"
              >
                Beyond Ordinary Panels
              </h2>
              <p className="text-gray-600 text-sm sm:text-lg md:text-xl leading-relaxed mb-8">
                RIJA Rainbow ACP menghadirkan solusi panel komposit aluminium
                premium yang menggabungkan keindahan estetika dengan kekuatan
                struktural. Dengan teknologi terdepan dan standar kualitas
                internasional, kami memberikan pilihan terbaik untuk fasad
                bangunan modern Anda.
              </p>
              {/* <Link
                href="/about"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-sm sm:text-base transition-colors duration-300 shadow-md hover:shadow-lg"
                aria-label="Pelajari lebih lanjut tentang RIJA Rainbow ACP">
                Pelajari Lebih Lanjut
              </Link> */}
            </div>

            <div className="order-1 lg:order-2 relative w-full h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/home-assets1.webp"
                alt="Aplikasi ACP Rainbow pada arsitektur modern - fasad bangunan berkualitas tinggi"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Keunggulan
              <br />
              <span className="text-blue-600">Rainbow ACP</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              Berbagai keunggulan yang membuat Rainbow ACP menjadi pilihan
              terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center h-full flex flex-col"
              >
                <div className="flex items-center justify-start mb-4 sm:mb-6">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {feature.number}
                  </div>
                </div>
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={68}
                    height={68}
                    className="w-12 h-12 sm:w-16 sm:h-16 md:w-17 md:h-17 object-contain"
                    quality={100}
                    sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, 68px"
                  />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Selection Section */}
      <section className="relative bg-white">
        <div className="relative py-20 sm:py-24 md:py-32 lg:py-40">
          <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem] overflow-hidden">
            <Image
              src="/assets/images/home-Katalog.webp"
              alt="Color Selection Background"
              fill
              className="object-cover"
              quality={100}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center pt-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 lg:mb-16">
              <span className="text-blue-400">1</span>
              <span className="text-green-400">0</span>
              <span className="text-yellow-400">0</span>
              <span className="text-white">+ Pilihan Warna</span>
            </h2>

            <div className="w-full max-w-full overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 animate-scroll scrollbar-hide">
                {[...colors, ...colors].map((color, i) => (
                  <div
                    key={`${color.id}-${i}`}
                    className="flex-shrink-0 group cursor-pointer flex flex-col items-center"
                  >
                    <div
                      style={{ backgroundColor: color.hex }}
                      className={`
                        ${color.hex === "#FFFFFF" ? "border-4 border-gray-300" : "border border-white"}
                        rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-300
                        w-42 h-32 sm:w-24 sm:h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 xl:w-48 xl:h-48`}
                    ></div>
                    <p className="text-white text-xs sm:text-sm md:text-base font-medium mt-2 sm:mt-3 text-center opacity-80 group-hover:opacity-100 transition-opacity">
                      {color.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Section */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-white"
        aria-labelledby="distribution-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-12 sm:mb-16 flex justify-center">
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl xl:max-w-4xl">
              <Image
                src="/assets/images/indonesia.webp"
                alt="Peta distribusi ACP Rainbow di seluruh Indonesia - jaringan distribusi nasional"
                width={800}
                height={400}
                className="w-full h-auto object-contain mx-auto"
                quality={85}
                sizes="(max-width: 640px) 320px, (max-width: 768px) 384px, (max-width: 1024px) 448px, (max-width: 1280px) 672px, 800px"
              />
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-row sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-6 sm:mb-8">
              <h2
                id="distribution-heading"
                className="text-sm sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900"
              >
                Melayani Pengiriman ke
              </h2>
              <div
                className=" text-sm lg:text-4xl text-blue-500"
                aria-hidden="true"
              >
                →
              </div>
              <h2 className="text-sm sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                Seluruh Indonesia
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-lg max-w-3xl mx-auto">
              Ketersediaan stok cukup untuk memenuhi kebutuhan material di
              seluruh indonesia
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-tight">
            Jadilah bagian distribusi
            <br />
            Rainbow ACP
          </h2>
          <Link
            href="https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20ACP"
            target="_blank"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Hubungi Kami
          </Link>
        </div>
      </section>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .animate-scroll {
          width: calc(200% + 2rem);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
