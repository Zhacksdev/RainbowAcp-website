"use client";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useState, useEffect } from "react";
import { MapPin, Building2, Globe } from "lucide-react";

export default function DistributorPage() {
  const distributors = [
    {
      id: 1,
      city: "Sidoarjo",
      province: "Jawa Timur",
      address:
        "Jl. Raya Bypass Krian No. 123, Krian, Sidoarjo, Jawa Timur 61262",
      phone: "+62 822-2821-1989",
      email: "sidoarjo@rainbowacp.com",
      LinkText: "Hubungi Kami",
      LinkColor: "bg-orange-500 hover:bg-orange-600",
    },
    {
      id: 2,
      city: "Jakarta",
      province: "DKI Jakarta",
      address:
        "Jl. TB Simatupang No. 789, Cilandak, Jakarta Selatan, DKI Jakarta 12430",
      phone: "+62 822-2821-1989",
      email: "jakarta@rainbowacp.com",
      LinkText: "Hubungi Kami",
      LinkColor: "bg-orange-500 hover:bg-orange-600",
    },
  ];

  const mascotImages = [
    {
      src: "/assets/images/mascot/mascot1-main.webp",
      label: "Main",
      bgColor: "bg-blue-500",
    },
    {
      src: "/assets/images/mascot/mascot2-contractor.webp",
      label: "Contractor",
      bgColor: "bg-pink-500",
    },
    {
      src: "/assets/images/mascot/mascot3-arsitek.webp",
      label: "Architect",
      bgColor: "bg-green-500",
    },
    {
      src: "/assets/images/mascot/mascot4-pengirim.webp",
      label: "Delivery",
      bgColor: "bg-purple-500",
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === mascotImages.length - 1 ? 0 : prevIndex + 1,
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [mascotImages.length]);

  const advantages = [
    {
      icon: Building2,
      title: "Jaringan Luas",
      description:
        "Kami telah bekerja sama dengan berbagai ekspedisi untuk memenuhi kebutuhan material Rainbow ACP ke seluruh wilayah di indonesia.",
    },
    {
      icon: Globe,
      title: "Dukungan Penuh",
      description: "Tim support profesional untuk membantu kebutuhan pelanggan",
    },
    {
      icon: MapPin,
      title: "Lokasi Strategis",
      description:
        "Lokasi distributor yang mudah diakses untuk pengiriman ke seluruh indonesia",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Distributor Rainbow ACP - Jaringan Nasional Aluminium Composite Panel
          Indonesia
        </title>
        <meta
          name="description"
          content="Temukan distributor resmi Rainbow ACP terdekat di seluruh Indonesia. Jaringan distribusi terpercaya untuk kebutuhan Aluminium Composite Panel berkualitas tinggi dengan layanan profesional."
        />
        <meta
          name="keywords"
          content="Distributor Rainbow ACP, ACP Indonesia, Distributor Aluminium Composite Panel, Rainbow ACP Jakarta, Rainbow ACP Surabaya, Rainbow ACP Sidoarjo, Supplier ACP Indonesia, Jaringan Distributor ACP"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Distributor Rainbow ACP - Jaringan Nasional Indonesia"
        />
        <meta
          property="og:description"
          content="Jaringan distributor resmi Rainbow ACP di seluruh Indonesia untuk kebutuhan Aluminium Composite Panel berkualitas tinggi dengan layanan terbaik."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="/assets/images/distributor/distributor-hero.webp"
        />
        <meta name="author" content="Rainbow ACP" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/distributor" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Rainbow ACP",
            description:
              "Distributor Aluminium Composite Panel terpercaya di Indonesia",
            url: "https://yourwebsite.com",
            contactPoint: distributors.map((distributor) => ({
              "@type": "ContactPoint",
              telephone: distributor.phone,
              contactType: "sales",
              areaServed: distributor.province,
              availableLanguage: "Indonesian",
            })),
            address: distributors.map((distributor) => ({
              "@type": "PostalAddress",
              streetAddress: distributor.address,
              addressLocality: distributor.city,
              addressRegion: distributor.province,
              addressCountry: "ID",
            })),
          })}
        </script>
      </Head>

      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage:
            "url('/assets/images/distributor/distributor-hero.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Distributor Rainbow ACP
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-8 md:mb-12">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                Melayani Pengiriman ke
              </h2>
              <div className="text-2xl lg:text-3xl text-blue-600 transform rotate-90 sm:rotate-0">
                →
              </div>
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-blue-600">
                Seluruh Indonesia
              </h2>
            </div>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Kami hadir untuk melayani kebutuhan Rainbow ACP Anda di berbagai
              kota di seluruh Indonesia.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto mb-16 md:mb-20">
            <div className="relative rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[32rem]">
                <Image
                  src="/assets/images/distributor/indonesia.webp"
                  alt="Peta Distribusi Rainbow ACP di Indonesia"
                  fill
                  className="object-contain"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 1200px"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Advantages Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 sm:p-8 text-center hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 sm:w-7 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Distributors Section - Responsif diperbaiki */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Distributor Resmi
              <br />
              <span className="text-blue-600">Rainbow ACP</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-2xl">
              Tim profesional kami siap melayani kebutuhan Rainbow ACP Anda di
              berbagai kota besar Indonesia
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
            {distributors.map((distributor) => (
              <div
                key={distributor.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                    <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                  </div>
                </div>

                <div className="text-center flex-grow">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2">
                    {distributor.city}
                  </h3>
                  <p className="text-blue-600 text-sm md:text-base font-medium mb-4">
                    {distributor.province}
                  </p>
                </div>

                <div className="text-center mt-auto">
                  <Link
                    href={`https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20ACP%20untuk%20area%20${distributor.city}`}
                    target="_blank"
                    className={`${distributor.LinkColor} text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-xs sm:text-sm md:text-base transition-all duration-300 shadow-lg hover:shadow-xl inline-block w-full`}
                  >
                    {distributor.LinkText}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 md:space-y-8">
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                  Beyond Ordinary
                  <br />
                  <span className="text-blue-600">Panels</span>
                </h2>

                <p className="text-gray-600 text-sm md:text-lg lg:text-xl leading-relaxed max-w-lg mb-6 md:mb-8">
                  Rainbow ACP menghadirkan solusi Aluminium Composite Panel yang
                  berkualitas. Dengan teknologi terdepan dan kualitas premium,
                  kami berkomitmen memberikan yang terbaik untuk setiap proyek
                  arsitektur modern Anda.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  href="https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20ACP"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-xs sm:text-sm md:text-base lg:text-lg transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
                >
                  Hubungi Kami
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
                <Image
                  src={mascotImages[currentImageIndex].src}
                  alt={`Rainbow ACP ${mascotImages[currentImageIndex].label} Character`}
                  fill
                  className="object-contain transition-opacity duration-500 ease-in-out drop-shadow-2xl"
                  quality={100}
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 512px"
                />

                <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
                  <span
                    className={`${mascotImages[currentImageIndex].bgColor} text-white text-xs sm:text-sm md:text-base font-bold px-3 py-1 sm:px-4 sm:py-2 rounded-full shadow-lg`}
                  >
                    {mascotImages[currentImageIndex].label}
                  </span>
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {mascotImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-blue-600 scale-110"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="absolute inset-y-0 left-0 flex items-center">
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        currentImageIndex === 0
                          ? mascotImages.length - 1
                          : currentImageIndex - 1,
                      )
                    }
                    className="bg-white/80 hover:bg-white text-gray-700 rounded-full p-1 sm:p-2 shadow-lg ml-2 transition-all duration-200 hover:scale-110 md:opacity-0 md:hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center">
                  <button
                    onClick={() =>
                      setCurrentImageIndex(
                        currentImageIndex === mascotImages.length - 1
                          ? 0
                          : currentImageIndex + 1,
                      )
                    }
                    className="bg-white/80 hover:bg-white text-gray-700 rounded-full p-1 sm:p-2 shadow-lg mr-2 transition-all duration-200 hover:scale-110 md:opacity-0 md:hover:opacity-100"
                    aria-label="Next image"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-12 leading-tight">
            Jadilah bagian distribusi
            <br />
            <span className="text-blue-600">Rainbow ACP</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            Bergabunglah dengan jaringan distributor Rainbow ACP dan dapatkan
            keuntungan dari brand terpercaya dengan dukungan penuh dari tim
            profesional kami.
          </p>

          <div className="pt-4">
            <Link
              href="https://wa.me/6282228211989?text=Halo%2C%20saya%20tertarik%20untuk%20menjadi%20distributor%20Rainbow%20ACP"
              target="_blank"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-12 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 shadow-lg hover:shadow-xl inline-block"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @media (max-width: 640px) {
          .bg-fixed {
            background-attachment: scroll;
          }
        }

        /* Improved responsive typography */
        @media (max-width: 640px) {
          h1 {
            line-height: 1.1;
          }
          h2 {
            line-height: 1.2;
          }
        }

        /* Enhanced card hover effects */
        .transform:hover {
          transform: translateY(-4px) scale(1.02);
        }
      `}</style>
    </>
  );
}
