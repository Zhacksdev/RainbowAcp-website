"use client";

import Image from "next/image";
import Head from "next/head";
import { MessageCircle, MapPin, Clock, Mail } from "lucide-react";

export default function ContactPage() {
  const whatsappNumber = "6282228211989";
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Halo, saya mau tanya tentang produk ACP",
  )}`;
  const emailAddress = "rainbow.acp@gmail.com";
  const emailHref = `mailto:${emailAddress}?subject=${encodeURIComponent(
    "Konsultasi ACP",
  )}&body=${encodeURIComponent(
    "Halo Rainbow ACP,\n\nSaya ingin konsultasi terkait produk ACP. Mohon info lebih lanjut.\n\nTerima kasih.",
  )}`;

  const contactMethods = [
    {
      id: 1,
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Hubungi kami langsung via WhatsApp untuk respon cepat",
      contact: "+6282228211989",
      action: "Chat Sekarang",
      href: whatsappHref,
      target: "_blank" as const,
      focusRing: "focus:ring-green-200",
      color: "bg-green-500 hover:bg-green-600",
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
    {
      id: 2,
      icon: Mail,
      title: "Email",
      description: "Kirim pertanyaan detail melalui email",
      contact: "rainbow.acp@gmail.com",
      action: "Kirim Email",
      href: emailHref,
      focusRing: "focus:ring-orange-200",
      color: "bg-orange-500 hover:bg-orange-600",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
    },
  ];

  const officeInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: [
        "Perum. Jasamarga Green Residence, Blok AB3 No.9, Kendal Cabe, Kendalpecabean, Kec. Candi, Kabupaten Sidoarjo, Jawa Timur 61271",
      ],
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: [
        "Senin - Jumat : 08:00 - 16:00",
        "Sabtu : 08:00 - 12:00",
        "Minggu : Tutup",
      ],
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Kontak Rainbow ACP - Hubungi Kami untuk Konsultasi Aluminium Composite
          Panel
        </title>
        <meta
          name="description"
          content="Hubungi Rainbow ACP untuk konsultasi dan informasi produk Aluminium Composite Panel. Tim ahli siap membantu kebutuhan proyek konstruksi Anda."
        />
        <meta
          name="keywords"
          content="Kontak Rainbow ACP, Hubungi Rainbow ACP, Konsultasi ACP, Customer Service Rainbow ACP, Alamat Rainbow ACP"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Kontak Rainbow ACP - Hubungi Kami" />
        <meta
          property="og:description"
          content="Tim ahli Rainbow ACP siap membantu konsultasi dan kebutuhan Aluminium Composite Panel Anda."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://yoursite.com/kontak" />
      </Head>

      <section
        className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/assets/images/kontak/kontak-hero.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Hubungi Kami
          </h1>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Cara Menghubungi
              <br />
              <span className="text-blue-600">Rainbow ACP</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-8">
              <div className="space-y-6">
                {officeInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-300"
                    >
                      <div
                        className={`${info.iconBg} w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 mt-1`}
                      >
                        <IconComponent
                          className={`w-6 h-6 ${info.iconColor}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                          {info.title}
                        </h4>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p
                              key={idx}
                              className="text-gray-600 text-sm md:text-base"
                            >
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[18rem] rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15823.249747391075!2d112.72866979193873!3d-7.485952174999834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7e7d0cdf0334d%3A0xa1da3e0c56022bfc!2sRainbow%20ACP%20Indonesia%20%7C%20Exclusive%20Distributor%20Aluminium%20Composite%20Panel!5e0!3m2!1sen!2sid!4v1759205408144!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                ></iframe>
              </div>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-6 -right-6 bg-white rounded-xl p-4 md:p-6 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-200"
                aria-label="Chat WhatsApp 24/7"
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-green-600">
                    24/7
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    WhatsApp Support
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
                <Image
                  src="/assets/images/mascot/mascot1-main.webp"
                  alt="Rainbow ACP Mascot - Customer Service Representative"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Konsultasi <span className="text-blue-600">Gratis!</span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed max-w-lg">
                Dapatkan konsultasi gratis dari tim ahli kami untuk menentukan
                solusi Rainbow ACP yang tepat untuk proyek Anda. Tidak ada
                biaya, hanya solusi terbaik!
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {contactMethods.map((method) => {
                  const IconComponent = method.icon;
                  return (
                    <div
                      key={method.id}
                      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <div
                          className={`${method.iconBg} w-10 h-10 rounded-lg flex items-center justify-center`}
                        >
                          <IconComponent
                            className={`w-5 h-5 ${method.iconColor}`}
                          />
                        </div>
                        <h4 className="font-bold text-gray-900">
                          {method.title}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        {method.description}
                      </p>
                      <p className="text-sm font-semibold text-blue-600">
                        {method.contact}
                      </p>
                      <a
                        href={method.href}
                        target={method.target}
                        rel={
                          method.target === "_blank"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`mt-4 inline-flex items-center justify-center w-full ${method.color} text-white font-bold py-2.5 rounded-lg transition-transform duration-200 hover:scale-[1.02] focus:outline-none focus:ring-4 ${method.focusRing}`}
                        aria-label={`${method.action} via ${method.title}`}
                      >
                        {method.action}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
