'use client'

import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { CheckCircle, Settings, Ruler, Layout, Wrench, Layers, Shield, ClipboardCheck } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

export default function InstalasiPage() {
  const installationSteps = [
    {
      id: 1,
      title: "Persiapan Alat & Bahan",
      description: "Menyiapkan semua peralatan yang diperlukan seperti meteran, waterpas, router, gerinda, bor, dll. termasuk perlengkapan keselamatan.",
      icon: Settings,
      image: "/assets/images/instalasi/PersiapanAlat.webp",
    },
    {
      id: 2,
      title: "Persiapan Permukaan",
      description: "Memastikan permukaan rata, kering dan kuat untuk pemasangan optimal, Pemasangan rangka yang kuat dan lurus.",
      icon: ClipboardCheck,
      image: "/assets/images/instalasi/PersiapanPermukaan.webp",
    },
    {
      id: 3,
      title: "Pengukuran Panel",
      description: "Melakukan pengukuran vertikal dan horizontal secara akurat menggunakan alat pengukur. Menandai panel sesuai ukuran yang tepat.",
      icon: Ruler,
      image: "/assets/images/instalasi/PengukuranPanel.webp",
    },
    {
      id: 4,
      title: "Perencanaan Tata Letak",
      description: "Merencanakan pola dan susunan ACP sesuai dengan desain arsitektur dan mempertimbangkan aspek fungsional seperti pencahayaan dan ventilasi.",
      icon: Layout,
      image: "/assets/images/instalasi/PerancanganTataLetak.webp",
    },
    {
      id: 5,
      title: "Fabrikasi Panel",
      description: "Melakukan pemotongan dan pengaluran panel menggunakan mesin pemotong dan mesin router untuk menyesuaikan dengan desain yang diinginkan.",
      icon: Layers,
      image: "/assets/images/instalasi/FabrikasiPanel.webp",
      details: "Fabrikasi presisi untuk fitting yang sempurna"
    },
    {
      id: 6,
      title: "Pemasangan ACP",
      description: "Memasang ACP pada rangka menggunakan teknik secrw atau riveting. Memastikan pemasangan lurus dan rata.",
      icon: Wrench,
      image: "/assets/images/instalasi/PemasanganACP.webp",
    },
    {
      id: 7,
      title: "Aplikasi Sealant",
      description: "Menutup rongga antara panel menggunakan sealant untuk mencegah kebocoran air dan memperpanjang umur ACP serta menjaga keindahan jangka panjang.",
      icon: Shield,
      image: "/assets/images/instalasi/AplikasiSealant.webp",
    }
  ];

  const qualityFeatures = [
    "Garansi hingga 15 tahun",
    "Tim teknisi berpengalaman", 
    "Peralatan modern & lengkap",
    "Hasil terjamin berkualitas"
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Berpengalaman",
      description: "Puluhan tahun pengalaman di industri ACP"
    },
    {
      icon: Settings,
      title: "Peralatan Modern", 
      description: "Menggunakan teknologi dan alat terkini"
    },
    {
      icon: Wrench,
      title: "Tim Ahli",
      description: "Teknisi terlatih dan bersertifikat profesional"
    }
  ];

  return (
    <>
      <Head>
        <title>Instalasi Rainbow ACP - Langkah Profesional Pemasangan Aluminium Composite Panel</title>
        <meta name="description" content="Panduan lengkap langkah-langkah instalasi Rainbow ACP profesional. Tim ahli dengan pengalaman puluhan tahun, garansi hingga 15 tahun. Hubungi kami sekarang!" />
        <meta name="keywords" content="Instalasi Rainbow ACP, Langkah Pemasangan ACP, Cara Pasang ACP, Aluminium Composite Panel Installation, Rainbow ACP Indonesia, Pemasangan ACP Profesional" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Instalasi Rainbow ACP - Langkah Profesional Pemasangan ACP" />
        <meta property="og:description" content="Panduan lengkap instalasi Rainbow ACP dengan langkah profesional. Tim ahli berpengalaman dengan garansi hingga 15 tahun." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/images/instalasi/instalasi-hero.webp" />
        <meta name="author" content="Rainbow ACP" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourwebsite.com/instalasi" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            "name": "Langkah-Langkah Instalasi Rainbow ACP",
            "description": "Panduan lengkap langkah pemasangan Rainbow ACP profesional",
            "step": installationSteps.map((step, index) => ({
              "@type": "HowToStep",
              "position": index + 1,
              "name": step.title,
              "text": step.description
            }))
          })}
        </script>
      </Head>
      <section 
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{ 
          backgroundImage: "url('/assets/images/instalasi/instalasi-hero.webp')"
        }}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Instalasi Rainbow ACP
          </h1>
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
                <Image
                  src="/assets/images/instalasi/instalasi-assets1.webp"
                  alt="Rainbow ACP Installation Professional Service Mascot"
                  fill
                  className="object-contain drop-shadow-2xl"
                  quality={100}
                  sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 512px"
                  priority
                />
              </div>
            </div>

            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              <div className="mb-8 md:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                  Kualitas Premium<br />
                  <span className="text-blue-600">Hasil Maksimal</span>
                </h2>
                
                <p className="text-gray-600 text-sm md:text-lg lg:text-xl leading-relaxed max-w-xl mb-6 md:mb-8">
                  Rainbow ACP menghadirkan solusi instalasi Aluminium Composite Panel 
                  terbaik dengan teknologi terdepan dan tim profesional berpengalaman 
                  puluhan tahun di industri konstruksi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Langkah Instalasi
              <br />
              <span className="text-blue-600">Rainbow ACP</span>
            </h2>
            <p className="text-gray-600 text-sm sm:text-lg md:text-xl max-w-4xl leading-relaxed">
              Proses instalasi ACP yang tepat memerlukan perencanaan yang matang dan pelaksanaan yang cermat untuk memastikan hasil optimal dan tahan lama.
              Berikut adalah langkah-langkah profesional yang kami terapkan.
            </p>
          </div>

          <div className="space-y-8 md:space-y-12 mb-16">
            {installationSteps.map((step, index) => {
              const isEven = index % 2 === 1;
              
              return (
                <div key={step.id} className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="w-full lg:w-1/2">
                    <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-xl">
                      <img
                        src={step.image}
                        alt={`${step.title} - Rainbow ACP Installation Step ${step.id}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-base md:text-lg">
                        {step.id}
                      </div>
                      <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-12 leading-tight">
            Butuh bantuan instalasi<br />
            <span className="text-blue-600">Rainbow ACP?</span>
          </h2>
          
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto">
            Tim ahli kami siap membantu Anda dalam proses instalasi Rainbow ACP 
            untuk memastikan hasil yang sempurna dan berkualitas tinggi.
          </p>
          
          <div className="pt-4">
            <Link 
              href="https://wa.me/6282228211989?text=Halo%2C%20saya%20mau%20tanya%20tentang%20instalasi%20ACP"
              target="_blank" 
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 md:py-5 md:px-12 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block">
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

        /* Custom gradient animations */
        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
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
      `}</style>
    </>
  )
}