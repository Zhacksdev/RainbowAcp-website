'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Prevent body scroll when menu is open and add blur effect
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      // Add blur class to main content
      const mainContent = document.querySelector('#main-content');
      if (mainContent) {
        mainContent.classList.add('blur-sm', 'transition-all', 'duration-300');
      }
    } else {
      document.body.style.overflow = 'unset';
      // Remove blur class from main content
      const mainContent = document.querySelector('#main-content');
      if (mainContent) {
        mainContent.classList.remove('blur-sm');
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
      const mainContent = document.querySelector('#main-content');
      if (mainContent) {
        mainContent.classList.remove('blur-sm', 'transition-all', 'duration-300');
      }
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Produk', href: '/pages/produk' },
    { name: 'Distributor', href: '/pages/distributor' },
    { name: 'Instalasi', href: '/pages/instalasi' }
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href;
  };

  return (
    <nav className="bg-white shadow-md z-50 fixed w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18 md:h-20 lg:h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image 
                src="/assets/images/mainLogo-RIJA.webp"
                alt="Rainbow ACP Logo"
                width={160}
                height={160}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain"
                priority
                quality={100}
                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, (max-width: 1024px) 144px, 160px"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 lg:ml-10 flex items-center space-x-2 lg:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative px-1 lg:px-3 py-1 lg:py-2 text-xs sm:text-sm lg:text-base font-medium transition-colors duration-200 whitespace-nowrap group ${
                    isActive(item.href) 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}>
                  {item.name}
                  <span 
                    className={`absolute bottom-0 left-0 h-1 bg-blue-600 rounded-full transition-all duration-300 ease-out ${
                      isActive(item.href) 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <Link
              href="/pages/kontak"
              className="bg-orange-500 hover:bg-orange-600 text-white px-2 lg:px-6 font-bold py-1 lg:py-3 rounded-md text-xs sm:text-sm transition-all duration-200 whitespace-nowrap hover:scale-105 shadow-lg hover:shadow-xl">
              Hubungi Kami
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="cursor-pointer text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu">
              {isMenuOpen ? 
                <X className="w-6 h-6" /> : 
                <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>

        <div 
          className={`md:hidden fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
            isMenuOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        <div className={`md:hidden fixed top-0 right-0 h-full w-80 sm:w-96 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <Image
              src="/assets/images/mainLogo-RIJA.webp"
              alt="mainLogo-RIJA"
              width={200}
              height={200}
              className="w-28 h-auto sm:w-32 md:w-36 lg:w-40 object-contain"
              priority
            />
            <button
              onClick={toggleMenu}
              className="cursor-pointer text-gray-700 hover:text-gray-900 focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="px-6 pt-6 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}>
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="px-6 pt-4 pb-6">
            <Link
              href="/pages/kontak"
              className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={() => setIsMenuOpen(false)}>
              Hubungi Kami
            </Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Global blur effect for main content when menu is open */
        #main-content {
          transition: filter 0.3s ease-in-out;
        }
        
        /* Smooth transitions for all interactive elements */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms;
        }
        
        /* Enhanced shadow effects */
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        
        /* Backdrop blur support */
        @supports (backdrop-filter: blur(10px)) {
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }
        }
        
        /* Prevent horizontal scroll when menu is open */
        body.menu-open {
          overflow: hidden;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;