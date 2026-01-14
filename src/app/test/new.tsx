'use client'

import Link from 'next/link'
import Image from 'next/image' 
import { CheckCircle, Palette, Building, MessageCircle, ArrowRight, Star, Award, Globe, Shield } from 'lucide-react'
import { FaWhatsapp } from "react-icons/fa";

export default function HomePage() {
  const features = [
    {
      number: "1",
      icon: "/assets/images/randomAssets/map.webp",
      title: "100+ Warna dan Ukuran",
      description: "Solusi Aluminium Composite Panel (ACP) terlengkap dengan berbagai pilihan yang memenuhi kebutuhan arsitektur modern.",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      number: "2",
      icon: "/assets/images/randomAssets/colorfilter.webp",
      title: "Desain Fleksibel",
      description: "Pilihan desain yang dapat disesuaikan dengan kebutuhan arsitektur modern dan inovasi terdepan.",
      gradient: "from-green-500 to-green-600"
    },
    {
      number: "3",
      icon: "/assets/images/randomAssets/shield-tick.webp",
      title: "Kualitas Terjamin",
      description: "Produk yang sudah melalui uji standar internasional dengan sertifikasi lengkap dan terpercaya.",
      gradient: "from-purple-500 to-purple-600"
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

  const stats = [
    { icon: Award, value: "100+", label: "Pilihan Warna", color: "text-blue-500" },
    { icon: Globe, value: "50+", label: "Kota Distribusi", color: "text-green-500" },
    { icon: Shield, value: "ISO", label: "Certified", color: "text-purple-500" },
    { icon: Star, value: "15+", label: "Tahun Pengalaman", color: "text-orange-500" }
  ];

  return (
    <>
      {/* Hero Section with Animated Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/images/home-Hero.webp')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-gray-900/50 to-black/60" />
          
          {/* Floating Geometric Shapes */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-float-slow" />
          <div className="absolute top-40 right-20 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-float-delayed" />
          <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-float" />
        </div>

        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <div className="mb-12 animate-fade-in-up">
            <div className="flex items-center justify-center mb-8">
              <div className="relative">
                <Image
                  src="/assets/images/whiteLogo-RIJA.webp"
                  alt="Logo RIJA"
                  width={200}
                  height={200}
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain drop-shadow-2xl"
                  priority
                  quality={100}
                />
                <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl animate-pulse-slow" />
              </div>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-white to-green-400 bg-clip-text text-transparent">
                Beyond Ordinary
              </span>
              <br />
              <span className="text-white">Panels</span>
            </h1>
            
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Solusi Aluminium Composite Panel Terdepan untuk Arsitektur Modern
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="#katalog" 
                className="group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105 flex items-center gap-2"
              >
                Lihat Katalog
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#tentang" 
                className="group border-2 border-white/50 hover:border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Pelajari Lebih Lanjut
              </Link>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll-indicator" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 group-hover:scale-110 transition-transform duration-300 mb-4 ${stat.color}`}>
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* International Standards Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-2/5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                Sertifikasi Internasional
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Bertaraf
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Internasional
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Produk kami telah melewati berbagai uji standar internasional dan memperoleh sertifikasi dari lembaga terpercaya dunia.
              </p>
            </div>

            <div className="lg:w-3/5">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-6 items-center justify-items-center">
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="group cursor-pointer">
                    <div className="bg-white rounded-2xl p-6 shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105">
                      <Image
                        src={`/assets/images/CTA-Taraf/tarafInternational_${num}.webp`}
                        alt={`Certification ${num}`}
                        width={80}
                        height={80}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain mx-auto"
                        quality={100}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute left-0 top-1/2 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 -translate-y-1/2 -translate-x-48" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative w-full h-80 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/assets/images/home-About.webp"
                  alt="Modern Architecture"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Premium Quality</div>
                    <div className="text-gray-600 text-sm">Kualitas Terjamin</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building className="w-4 h-4" />
                Tentang RIJA ACP
              </div>
              
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Beyond Ordinary
                <br />
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  Panels
                </span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kami menghadirkan solusi Aluminium Composite Panel yang tidak hanya memenuhi standar kualitas internasional, tetapi juga memberikan fleksibilitas desain yang tak terbatas untuk mewujudkan visi arsitektur modern Anda.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-gray-600">Project Selesai</div>
                </div>
              </div>
              
              <Link 
                href="#fitur" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Pelajari Fitur
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="fitur" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30 -translate-y-48 -translate-x-48" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="w-4 h-4" />
              Keunggulan Produk
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Mengapa Memilih
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> RIJA ACP?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tiga keunggulan utama yang menjadikan RIJA ACP pilihan terbaik untuk proyek arsitektur modern Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-white/50 relative overflow-hidden"
              >
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${feature.gradient} rounded-full blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-lg`}>
                      {feature.number}
                    </div>
                    <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-white transition-colors duration-300">
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={40}
                        height={40}
                        className="w-10 h-10 object-contain"
                        quality={100}
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Color Catalog Section */}
      <section id="katalog" className="relative bg-gray-900 overflow-hidden">
        <div className="relative py-24">
          <div className="relative h-96 lg:h-[32rem] overflow-hidden">
            <Image
              src="/assets/images/home-Katalog.webp"
              alt="Color Selection Background"
              fill
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/60 to-gray-900/80" />
          </div>

          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Palette className="w-4 h-4" />
                Koleksi Warna Premium
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 bg-clip-text text-transparent">
                  100+
                </span>
                <span className="text-white"> Pilihan Warna</span>
              </h2>
              
              <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
                Ekspresikan kreativitas tanpa batas dengan koleksi warna premium yang dapat disesuaikan dengan visi desain Anda
              </p>
            </div>

            {/* Enhanced Color Showcase */}
            <div className="w-full max-w-full overflow-hidden">
              <div className="flex gap-8 animate-scroll-infinite hover:pause">
                {[...colors, ...colors, ...colors].map((color, i) => (
                  <div
                    key={`${color.id}-${i}`}
                    className="flex-shrink-0 group cursor-pointer flex flex-col items-center transform transition-all duration-300 hover:scale-110"
                  >
                    <div className="relative">
                      <div
                        style={{ backgroundColor: color.hex }}
                        className={`
                          ${color.hex === '#FFFFFF' || color.hex === '#F8F8FF' ? 'border-4 border-gray-300 shadow-white/20' : 'border-2 border-white/30'} 
                          rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300
                          w-24 h-16 sm:w-32 sm:h-20 md:w-40 md:h-24 lg:w-48 lg:h-28
                          relative overflow-hidden
                        `}
                      >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      {/* Floating Badge */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center transform scale-0 group-hover:scale-100">
                        <Star className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 group-hover:bg-white/20 transition-all duration-300">
                      <p className="text-white text-sm font-medium opacity-90 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {color.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-12">
              <Link 
                href="#distribusi" 
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 hover:from-blue-600 hover:via-green-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105"
              >
                Lihat Semua Warna
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Distribution Section */}
      <section id="distribusi" className="py-24 bg-gradient-to-br from-white via-blue-50 to-green-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48" />
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Globe className="w-4 h-4" />
            Jangkauan Nasional
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Melayani 
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent"> Seluruh Nusantara</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Dengan jaringan distribusi yang luas, kami siap mengantarkan produk berkualitas tinggi ke seluruh pelosok Indonesia
          </p>

          <div className="mb-12 flex justify-center">
            <div className="relative w-full max-w-4xl group">
              <Image
                src="/assets/images/indonesia.webp"
                alt="Indonesia Distribution Map"
                width={800}
                height={400}
                className="w-full h-auto object-contain mx-auto drop-shadow-2xl group-hover:scale-105 transition-transform duration-700"
                quality={100}
              />
              
              {/* Animated Dots */}
              <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-ping" />
              <div className="absolute top-1/2 right-1/3 w-4 h-4 bg-green-500 rounded-full animate-ping animation-delay-1000" />
              <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-purple-500 rounded-full animate-ping animation-delay-2000" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <span className="text-gray-700 font-semibold text-lg">Pengiriman ke</span>
            </div>
            
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent max-w-xs"></div>
            
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Seluruh Indonesia
              </span>
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🇮🇩</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600 mb-1">Jakarta</div>
              <div className="text-gray-600 text-sm">Pusat</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600 mb-1">Surabaya</div>
              <div className="text-gray-600 text-sm">Timur</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600 mb-1">Medan</div>
              <div className="text-gray-600 text-sm">Barat</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-orange-600 mb-1">Makassar</div>
              <div className="text-gray-600 text-sm">Selatan</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-float-slow" />
        </div>
        
        <div className="relative w-full mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Building className="w-4 h-4" />
            Bergabung Bersama Kami
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Jadilah Bagian 
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 bg-clip-text text-transparent">
              Jaringan Distribusi
            </span>
            <br />
            Rainbow ACP
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Bergabunglah dengan mitra distribusi terpercaya kami dan raih kesempatan bisnis yang menguntungkan dengan produk berkualitas internasional
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-lg mx-auto">
            <Link 
              href="https://wa.me/" 
              className="group w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              Hubungi Kami
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="#tentang" 
              className="w-full sm:w-auto border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <Link 
          href="https://wa.me/" 
          className="relative flex items-center bg-gradient-to-r from-green-500 via-green-600 to-green-700 hover:from-green-600 hover:via-green-700 hover:to-green-800 text-white rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-300 transform hover:scale-110"
        >
          <div className="flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9 z-10 drop-shadow-lg" />
            
            {/* Pulse Rings */}
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-20 animate-ping"></div>
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-10 animate-ping animation-delay-500"></div>
          </div>
          
          {/* Enhanced Tooltip */}
          <div className="absolute right-full mr-4 px-4 py-3 bg-gray-900 text-white text-sm rounded-xl shadow-2xl opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap pointer-events-none border border-gray-700">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="font-medium">Kontak Kami Sekarang</span>
            </div>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-gray-900 border-r border-b border-gray-700 rotate-45"></div>
          </div>
        </Link>
        
        {/* Additional Pulse Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-green-400 opacity-20 animate-ping animation-delay-1000"></div>
      </div>

      <style jsx global>{`
        @keyframes scroll-infinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(2deg);
          }
          66% {
            transform: translateY(-10px) rotate(-2deg);
          }
        }
        
        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(-2deg);
          }
          66% {
            transform: translateY(-25px) rotate(2deg);
          }
        }
        
        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(3deg);
          }
        }
        
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes scroll-indicator {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          50% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }
        
        .animate-scroll-infinite {
          animation: scroll-infinite 60s linear infinite;
        }
        
        .animate-scroll-infinite:hover {
          animation-play-state: paused;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .pause:hover {
          animation-play-state: paused;
        }
        
        /* Scrollbar Hide */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Custom Shadows */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
        
        .hover\:shadow-3xl:hover {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.4);
        }
        
        /* Glass Effect */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
        }
        
        /* Smooth Scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Gradient Text Animation */
        .bg-clip-text {
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        /* Enhanced Hover Effects */
        .group:hover .group-hover\:scale-110 {
          transform: scale(1.1);
        }
        
        .group:hover .group-hover\:translate-x-1 {
          transform: translateX(0.25rem);
        }
        
        /* Responsive Text Scaling */
        @media (max-width: 640px) {
          .text-responsive {
            font-size: clamp(1rem, 4vw, 1.5rem);
          }
        }
        
        /* Performance Optimizations */
        * {
          transform-style: preserve-3d;
          backface-visibility: hidden;
        }
        
        .transform {
          will-change: transform;
        }
        
        .transition-all {
          will-change: transform, opacity, box-shadow;
        }
      `}</style>
    </>
  )
}