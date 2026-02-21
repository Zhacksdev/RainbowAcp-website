"use client";

import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { CheckCircle } from "lucide-react";

export default function ProductPage() {
  const specifications = [
    {
      id: 1,
      title: "Material Premium",
      description:
        "Dibuat dari aluminium berkualitas tinggi dengan lapisan pelindung khusus yang mampu bertahan pada cuaca ekstrem.",
      position: "top-left",
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Ketebalan Variatif",
      description:
        "Tersedia dalam pilihan ketebalan 3mm hingga 4mm, fleksibel untuk menyesuaikan kebutuhan proyek konstruksi Anda.",
      position: "left",
      color: "bg-teal-500",
    },
    {
      id: 3,
      title: "Finishing Sempurna",
      description:
        "Permukaan halus dengan teknologi coating modern yang menghasilkan tampilan premium, bergaransi resmi 5–15 tahun.",
      position: "top-right",
      color: "bg-pink-500",
    },
    {
      id: 4,
      title: "Daya Tahan Tinggi",
      description:
        "Anti rayap, anti jamur, tahan api, serta kokoh menghadapi berbagai kondisi cuaca yang paling ekstrem sekalipun.",
      position: "bottom-right",
      color: "bg-orange-500",
    },
    {
      id: 5,
      title: "Warna & Motif Custom",
      description:
        "Menyediakan finishing warna dan motif sesuai pesanan khusus, dengan minimum pembelian sebesar 1000 m² produksi.",
      position: "bottom-right",
      color: "bg-red-500",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Produk Rainbow ACP - Aluminium Composite Panel Berkualitas Tinggi
        </title>
        <meta
          name="description"
          content="Discover Rainbow ACP premium aluminium composite panel dengan 100+ pilihan warna dan spesifikasi terlengkap untuk kebutuhan arsitektur modern Anda."
        />
        <meta
          name="keywords"
          content="Rainbow ACP, Aluminium Composite Panel, ACP Indonesia, Panel Aluminium, Fasad Bangunan"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Produk Rainbow ACP - Aluminium Composite Panel Berkualitas Tinggi"
        />
        <meta
          property="og:description"
          content="Premium aluminium composite panel dengan 100+ pilihan warna dan spesifikasi terlengkap."
        />
        <meta property="og:type" content="product" />
        <link rel="canonical" href="https://yoursite.com/produk" />
      </Head>

      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/assets/images/produk/productBG.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Produk Kami
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-left mb-6 md:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Spesifikasi
              <br />
              <span className="text-blue-600">Rainbow ACP</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-2xl">
              Teknologi terdepan dengan material berkualitas tinggi untuk hasil
              maksimal
            </p>
          </div>

          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative w-full max-w-lg md:max-w-2xl">
              <Image
                src="/assets/images/produk/RainbowACP-Spesifikasi2.webp"
                alt="Rainbow ACP Colorful Panels Specification"
                width={600}
                height={400}
                className="w-full object-contain"
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 600px"
              />
            </div>
          </div>

          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Keunggulan
              <br />
              <span className="text-blue-600">Rainbow ACP</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-2xl mx-auto">
              Berbagai keunggulan yang membuat Rainbow ACP menjadi pilihan
              terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {specifications.map((spec, index) => (
              <div
                key={spec.id}
                className={`bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-fit ${
                  specifications.length % 2 !== 0 &&
                  index === specifications.length - 1
                    ? "lg:col-span-2 lg:mx-auto lg:max-w-md"
                    : ""
                }`}
              >
                <div className="flex justify-center items-center">
                  <div
                    className={`${spec.color} w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg flex-shrink-0`}
                  >
                    {spec.id}
                  </div>
                  <div className="relative mx-3 sm:mx-4 flex-shrink-0 flex justify-center">
                    <div className={`${spec.color} w-1 h-20 rounded-full`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2">
                      {spec.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed">
                      {spec.description}
                    </p>
                  </div>
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
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
                  Aplikasi
                  <br />
                  <span className="text-blue-600">Rainbow ACP</span>
                </h2>
                <p className="text-gray-600 text-sm md:text-lg">
                  Solusi terdepan untuk berbagai kebutuhan arsitektur modern
                </p>
              </div>
              {[
                {
                  title: "Fasad Bangunan",
                  description:
                    "Memberikan tampilan modern dan elegan pada eksterior bangunan komersial, perkantoran, dan residensial dengan daya tahan maksimal.",
                },
                {
                  title: "Interior Design",
                  description:
                    "Cocok untuk aplikasi interior seperti wall cladding, ceiling, dan partisi dengan berbagai pilihan finishing premium.",
                },
                {
                  title: "Signage & Branding",
                  description:
                    "Ideal untuk papan nama, signage komersial, dan branding dengan hasil cetak yang tajam dan tahan lama.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="bg-green-500 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-xs md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="relative h-80 sm:h-96 md:h-[28rem] lg:h-[32rem]">
                <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-2xl z-10">
                  <Image
                    src="/assets/images/produk/produkImage-assets5.webp"
                    alt="Modern Building with Rainbow ACP Facade"
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-xl overflow-hidden shadow-xl z-20">
                  <Image
                    src="/assets/images/produk/produkImage-assets3.webp"
                    alt="Rainbow ACP Interior Application"
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 1024px) 40vw, 25vw"
                  />
                </div>
                <div className="absolute top-1/4 right-4 w-1/3 h-1/3 rounded-lg overflow-hidden shadow-lg z-30 border-4 border-white">
                  <Image
                    src="/assets/images/produk/produkImage-assets4.webp"
                    alt="Rainbow ACP Signage Application"
                    fill
                    className="object-cover"
                    quality={100}
                    sizes="(max-width: 1024px) 30vw, 20vw"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 md:p-6 shadow-xl z-40">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    20+
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    Proyek Selesai
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative py-20 sm:py-24 md:py-32 lg:py-40 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/assets/images/produk/produkImage-assets2.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Bangunan
                <br />
                Kamu Belum
                <br />
                <span className="text-yellow-400">Estetik??</span>
              </h2>
              <p className="text-sm md:text-xl opacity-90 leading-relaxed max-w-lg">
                Wujudkan impian arsitektur modern Anda dengan Rainbow ACP.
                Konsultasi gratis untuk solusi terbaik!
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Link
                href="https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20produk%20ACP"
                target="_blank"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
