"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MapPin, Phone, Mail, Send, Clock } from "lucide-react";
import { FaTiktok, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Image from "next/image";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 xs:gap-10 sm:gap-12 py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20">
          {/* Company Info */}
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 xs:gap-10">
            {/* Brand Section */}
            <div className="space-y-4 xs:space-y-6">
              <div className="flex items-center space-x-3 xs:space-x-4">
                <div className="relative">
                  <Image
                    src="/assets/images/mainLogo-RIJA2.webp"
                    alt="RIJA Company Logo"
                    width={80}
                    height={80}
                    className="w-12 xs:w-14 sm:w-16 h-auto"
                    priority
                    quality={100}
                  />
                  <div className="absolute -inset-2 bg-orange-500 rounded-full blur-sm opacity-20 -z-10"></div>
                </div>
                <div>
                  <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-white">
                    RAINBOW ACP
                  </h3>
                  <p className="text-orange-400 text-xs xs:text-sm font-medium">
                    Quality Aluminum Composite Panel
                  </p>
                </div>
              </div>

              <p className="text-gray-300 text-xs xs:text-sm leading-relaxed max-w-md">
                Perusahaan terdepan dalam penyediaan solusi Aluminium Composite
                Panel berkualitas tinggi untuk kebutuhan arsitektur modern.
              </p>

              {/* Social Media */}
              <div className="pt-2">
                <h4 className="text-gray-400 text-xs xs:text-sm font-semibold mb-3 xs:mb-4">
                  Follow Us
                </h4>
                <div className="flex space-x-3">
                  {[
                    {
                      icon: FaTiktok,
                      href: "https://tiktok.com/@rainbow.acp.offic",
                      label: "TikTok",
                    },
                    {
                      icon: FaInstagram,
                      href: "https://instagram.com/rainbow_acp.indonesia",
                      label: "Instagram",
                    },
                    {
                      icon: FaWhatsapp,
                      href: "https://wa.me/6282228211989",
                      label: "WhatsApp",
                    },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="group w-10 h-10 xs:w-12 xs:h-12 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:border-orange-500 hover:text-white"
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <social.icon className="w-4 h-4 xs:w-5 xs:h-5 group-hover:scale-110" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 xs:space-y-6">
              <h3 className="text-white text-base xs:text-lg font-semibold border-l-4 border-orange-500 pl-3">
                Kontak Kami
              </h3>

              <div className="space-y-3 xs:space-y-4">
                <div className="flex items-start space-x-3 p-3 xs:p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                  <MapPin className="w-4 h-4 xs:w-5 xs:h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-xs xs:text-sm leading-relaxed">
                    Perum. Jasamarga Green Residence, Blok AB3 No 9, Kendal
                    Cabe, Kendalpecabean, Kec. Candi, Kabupaten Sidoarjo, Jawa
                    Timur 61271
                  </span>
                </div>

                <div className="flex items-center space-x-3 p-3 xs:p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                  <Phone className="w-4 h-4 xs:w-5 xs:h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-300 text-xs xs:text-sm">
                    +6282228211989
                  </span>
                </div>

                <div className="flex items-center space-x-3 p-3 xs:p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                  <Mail className="w-4 h-4 xs:w-5 xs:h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-300 text-xs xs:text-sm">
                    rainbow.acp@gmail.com
                  </span>
                </div>

                <div className="flex items-center space-x-3 p-3 xs:p-4 bg-slate-800/30 rounded-xl border border-slate-700/50">
                  <Clock className="w-4 h-4 xs:w-5 xs:h-5 text-orange-500 flex-shrink-0" />
                  <span className="text-gray-300 text-xs xs:text-sm">
                    Senin - Sabtu: 08:00 - 17:00
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="xl:col-span-1">
            <div className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-6 xs:p-8 h-full">
              <h3 className="text-white text-base xs:text-lg font-semibold mb-3 xs:mb-4">
                Newsletter
              </h3>
              <p className="text-gray-300 text-xs xs:text-sm mb-4 xs:mb-6 leading-relaxed">
                Dapatkan informasi terbaru tentang produk dan penawaran spesial
                kami langsung ke email Anda.
              </p>

              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-slate-900/50 border border-slate-600 rounded-xl py-3 xs:py-4 px-4 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none text-xs xs:text-sm backdrop-blur-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl p-2 text-white"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send size={16} className="xs:w-5 xs:h-5" />
                  </button>
                </div>
              </form>

              <div className="mt-6 xs:mt-8 pt-4 xs:pt-6 border-t border-slate-700/50">
                <p className="text-gray-400 text-xs text-center">
                  Bergabung dengan 1000+ pelanggan kami
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700/50 py-6 xs:py-8">
          <div className="flex flex-col xs:flex-row justify-between items-center space-y-3 xs:space-y-0">
            <div className="text-gray-400 text-xs xs:text-sm text-center xs:text-left">
              © {new Date().getFullYear()} RAINBOW ACP. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
