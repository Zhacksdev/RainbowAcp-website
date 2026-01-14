'use client'

import Link from 'next/link'
import Image from 'next/image' 
import { CheckCircle, Palette, Building, MessageCircle } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  const features = [
  {
    number: "1",
    icon: "/assets/images/randomAssets/map.webp",
    title: "100+ Warna dan Ukuran",
    description: "Solusi Aluminium Composite Panel (ACP) terlengkap dengan berbagai pilihan."
  },
  {
    number: "2",
    icon: "/assets/images/randomAssets/colorfilter.webp",
    title: "Desain Fleksibel",
    description: "Pilihan desain yang dapat disesuaikan dengan kebutuhan arsitektur modern."
  },
  {
    number: "3",
    icon: "/assets/images/randomAssets/shield-tick.webp",
    title: "Kualitas Terjamin",
    description: "Produk yang sudah melalui uji standar internasional."
  }
];

const colors = [
  { id: 1, name: 'Bright Silver', hex: '#D9D9D6' },
  { id: 2, name: 'Sub Silver', hex: '#C0C0C0' },
  { id: 3, name: 'Jade Silver', hex: '#A8B3A2' },
  { id: 4, name: 'Champagne Golden', hex: '#C8B273' },
  { id: 5, name: 'White', hex: '#FFFFFF' },
  { id: 6, name: 'ICBC Gray', hex: '#808080' },
  { id: 7, name: 'Silver Blue', hex: '#7B9AA6' },
  { id: 8, name: 'Golden', hex: '#D4AF37' },
  { id: 9, name: 'Ivory White', hex: '#F2E6D9' },
  { id: 10, name: 'China Grey', hex: '#5A6A6C' },
  { id: 11, name: 'Ratash Silver', hex: '#7D7D7D' },
  { id: 12, name: 'Copper', hex: '#B87333' },
  { id: 13, name: 'Beige', hex: '#E6D5B8' },
  { id: 14, name: 'Dark Gray', hex: '#4A4A4A' },
  { id: 15, name: 'Sparking Black', hex: '#2B2B2B' },
  { id: 16, name: 'Black Glossy', hex: '#000000' },
  { id: 17, name: 'Chinese Red', hex: '#C41E3A' },
  { id: 18, name: 'Xinhua Red', hex: '#B22222' },
  { id: 19, name: 'Coffee', hex: '#6F4E37' },
  { id: 20, name: 'Yellow', hex: '#FFD700' },
  { id: 21, name: 'Tiffany Blue', hex: '#40E0D0' },
  { id: 22, name: 'Lake Blue', hex: '#4682B4' },
  { id: 23, name: 'Telecom Blue', hex: '#1E5AA8' },
  { id: 24, name: 'Navy Blue', hex: '#000080' },
  { id: 25, name: 'Sparking White', hex: '#F8F8FF' },
  { id: 26, name: 'Pearlish Red', hex: '#E34234' },
  { id: 27, name: 'Red Gloss', hex: '#FF0000' },
  { id: 28, name: 'Brown Glossy', hex: '#5C4033' },
  { id: 29, name: 'Yellow Glossy', hex: '#FFC300' },
  { id: 30, name: 'Orange Yellow Glossy', hex: '#FFA500' },
  { id: 31, name: 'Brilliant Orange Glossy', hex: '#FF6700' },
  { id: 32, name: 'Light Green Gloss', hex: '#90EE90' },
  { id: 33, name: 'Apple Green Glossy', hex: '#32CD32' },
  { id: 34, name: 'Telecom Blue Glossy', hex: '#0077BE' },
  { id: 35, name: 'Sparking Blue', hex: '#005F99' },
  { id: 36, name: 'White Granite', hex: '#F5F5F5' },
  { id: 37, name: 'Gold Brushed', hex: '#BFA76F' },
  { id: 38, name: 'Silver Brushed', hex: '#B0B0B0' },
  { id: 39, name: 'Copper Brushed', hex: '#B87333' },
  { id: 40, name: 'Black Maquina', hex: '#2B2B2B' },
  { id: 41, name: 'Gold Mirror', hex: '#FFD700' },
  { id: 42, name: 'Silver Mirror', hex: '#C0C0C0' },
  { id: 43, name: 'Tawny Glasses', hex: '#8B5A2B' },
  { id: 44, name: 'Shah Anna Beige', hex: '#E6D1B3' },
  { id: 45, name: 'White Oak', hex: '#E5D3B3' },
  { id: 46, name: 'Teak', hex: '#D18547' },
  { id: 47, name: 'Walnut', hex: '#5D3A1A' },
  { id: 48, name: 'Golden Flower Beige', hex: '#D9C19B' },
];

  return (
    <>
      <section
        className="relative min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/home-Hero.webp')" }}>
        <div className="relative z-10 text-center text-white px-4 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl mx-auto">
          <div className="mb-8 md:mb-12">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/whiteLogo-RIJA.webp"
                alt="Logo RIJA"
                width={160}
                height={160}
                className="w-24 h-24 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-52 lg:h-52 object-contain"
                priority
                quality={100}
                sizes="(max-width: 640px) 64px, (max-width: 768px) 96px, (max-width: 1024px) 128px, 160px"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8">
            <div className="lg:w-1/3 text-center lg:text-left">
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Bertaraf
                <br />
                Internasional
              </h2>
            </div>

            <div className="lg:w-2/3">
              <div className="grid grid-cols-5 md:grid-cols-5 gap-4 sm:gap-6 items-center justify-items-center">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="flex justify-center items-center">
                    <Image
                      src={`/assets/images/CTA-Taraf/tarafInternational_${num}.webp`}
                      alt={`Certification ${num}`}
                      width={112}
                      height={112}
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
                      quality={100}
                      sizes="(max-width: 640px) 48px, (max-width: 768px) 64px, (max-width: 1024px) 80px, 96px"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Beyond Ordinary
                <br />
                Panels
              </h2>
              <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>

            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-80 xl:h-96 rounded-lg overflow-hidden mx-auto">
              <Image
                src="/assets/images/home-About.webp"
                alt="Modern Architecture"
                fill
                className="object-cover"
                priority
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="flex items-left justify-left mb-4 sm:mb-6">
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
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 md:mb-12 lg:mb-16">
              <span className="text-blue-400">1</span>
              <span className="text-green-400">0</span>
              <span className="text-yellow-400">0</span>
              <span className="text-white">+ Pilihan Warna</span>
            </h2>

            <div className="w-full max-w-full overflow-x-auto scrollbar-hide">
              <div className="flex gap-6 animate-scroll">
                {[...colors, ...colors].map((color, i) => (
                  <div
                    key={`${color.id}-${i}`}
                    className="flex-shrink-0 group cursor-pointer flex flex-col items-center">
                    <div
                      style={{ backgroundColor: color.hex }}
                      className={`
                        ${color.hex === '#FFFFFF' ? 'border-4 border-gray-300' : 'border border-white'} 
                        rounded-lg shadow-xl group-hover:shadow-2xl transition-all duration-300
                        w-42 h-32 sm:w-24 sm:h-16 md:w-32 md:h-20 lg:w-40 lg:h-24 xl:w-48 xl:h-48`}></div>
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

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8 md:mb-12 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl">
              <Image
                src="/assets/images/indonesia.webp"
                alt="Indonesia Distribution Map"
                width={800}
                height={400}
                className="w-full h-auto object-contain mx-auto"
                quality={100}
                sizes="(max-width: 640px) 384px, (max-width: 768px) 448px, (max-width: 1024px) 512px, (max-width: 1280px) 672px, 800px"
              />
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
            <span className="text-gray-700 font-medium text-sm sm:text-base">Bisa kirim ke</span>
            <div className="flex-1 h-px bg-gray-300 max-w-32 sm:max-w-48 md:max-w-xs"></div>
            <span className="text-gray-700 font-medium text-sm sm:text-base">Seluruh Indonesia</span>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto leading-tight">
            Jadilah bagian distribusi
            <br />
            Rainbow ACP
          </h2>
          <Link href="https://wa.me/" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg text-sm sm:text-base md:text-lg transition-colors duration-300 shadow-lg hover:shadow-xl">
            Hubungi Kami
          </Link>
        </div>
      </section>

      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group cursor-pointer">
        <Link 
          href="https://wa.me/" 
          className="relative flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-bounce-slow">
          <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <FaWhatsapp className="w-7 h-7 sm:w-8 sm:h-8 z-10 drop-shadow-sm" />
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-25 animate-ping"></div>
          </div>
          <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none">
            <span>Kontak Kami</span>
            <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </Link>
        <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-30 animate-ping animation-delay-1000"></div>
      </div>

      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        
        @keyframes pulse-delayed {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.1;
            transform: scale(1.1);
          }
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .hover\:shadow-3xl:hover {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  )
}