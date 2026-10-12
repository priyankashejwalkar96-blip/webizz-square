"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, ArrowRight, Menu, X, Mail } from "lucide-react";
import { QuoteModal } from "./QuoteModal";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ services = [] }: { services?: { name: string; slug: string }[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const defaultServices = [
    { name: "Website Development", slug: "website-development" },
    { name: "Application Development", slug: "application-development" },
    { name: "All IT Services", slug: "all-it-services" },
    { name: "ERP Software Development", slug: "erp-software-development" },
    { name: "Graphics Designing", slug: "graphics-designing" },
    { name: "Search Engine Optimization", slug: "search-engine-optimization" },
    { name: "Social Media Optimization", slug: "social-media-optimization" },
    { name: "Software Development", slug: "software-development" },
    { name: "Website Hosting", slug: "website-hosting" },
  ];

  const displayServices = services && services.length > 0 ? services : defaultServices;

  return (
    <>
      {/* 1. Top Header Bar (Static - scrolls away naturally with the page) */}
      <div className="bg-black py-2.5 px-6 lg:px-8 border-b border-white/10 hidden md:block w-full">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between text-[12.5px] font-semibold text-white">
          {/* Left: Office Address & Email */}
          <div className="flex items-center gap-8 lg:gap-10">
            {/* Address with Folded Map Pin Icon */}
            <a
              href="https://maps.google.com/?q=Office+No+01,+Mayuresh+Residency,+Ground+Floor,+Sadguru+Nagar,+Nashik,+Maharashtra+422009"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#ff3b6a] transition-colors group cursor-pointer"
            >
              <svg
                className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 6L9 3L15 6L21 3V18L15 21L9 18L3 21V6Z"
                  fill="#F8FAFC"
                  stroke="#94A3B8"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                />
                <path d="M9 3V18" stroke="#CBD5E1" strokeWidth="1.2" />
                <path d="M15 6V21" stroke="#CBD5E1" strokeWidth="1.2" />
                <path
                  d="M14 8.5C14 6.8 12.66 5.5 11 5.5C9.34 5.5 8 6.8 8 8.5C8 11.2 11 15 11 15C11 15 14 11.2 14 8.5Z"
                  fill="#EF4444"
                  stroke="#DC2626"
                  strokeWidth="0.8"
                />
                <circle cx="11" cy="8.5" r="1.5" fill="#FFFFFF" />
              </svg>
              <span>Office No 01, Mayuresh Residency, Ground Floor, Sadguru Nagar, Nashik, Maharashtra 422009</span>
            </a>

            {/* Email with Outline Envelope Icon */}
            <a
              href="mailto:info@webizsquare.com"
              className="flex items-center gap-2 hover:text-[#ff3b6a] transition-colors group shrink-0 cursor-pointer"
            >
              <svg
                className="w-4 h-4 text-white group-hover:text-[#ff3b6a] transition-colors shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="15" x="2" y="4.5" rx="2" />
                <path d="m22 7.5-9.1 5.7a1.8 1.8 0 0 1-1.8 0L2 7.5" />
              </svg>
              <span>info@webizsquare.com</span>
            </a>
          </div>

          {/* Right: Social Media Icons */}
          <div className="flex items-center gap-4.5 shrink-0">
            {/* Facebook (Circle with 'f') */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white hover:text-[#ff3b6a] transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </a>
            {/* Twitter */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-white hover:text-[#ff3b6a] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-[#ff3b6a] transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-[#ff3b6a] transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar (Sticky top-0 - stays sticky when scrolling) */}
      <header className="sticky top-0 left-0 w-full z-50 bg-white/95 dark:bg-[#0c0d12]/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-white/10 transition-all main-nav-header">
        <nav className="max-w-[1440px] mx-auto px-6 lg:px-8 h-[76px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <img src="/dark-logo.png" alt="Webiz Square" className="h-11 md:h-12 w-auto dark:hidden theme-logo-dark" />
            <img src="/white-logo.png" alt="Webiz Square" className="h-11 md:h-12 w-auto hidden dark:block theme-logo-white" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-9 text-[16px] font-bold text-gray-800 dark:text-gray-100">
            <Link href="/" className="nav-link hover:text-[#ff3b6a] transition-colors">
              Home
            </Link>

            {/* Services with Dropdown */}
            <div className="relative group py-6 -my-6 flex items-center">
              <Link href="/services" className="nav-link flex items-center gap-1.5 hover:text-[#ff3b6a] transition-colors cursor-pointer">
                <span>Services</span>
                <ChevronDown size={14} className="opacity-70 group-hover:rotate-180 transition-transform duration-200 text-gray-600 dark:text-gray-300 group-hover:text-[#ff3b6a]" />
              </Link>

              {/* Dropdown Menu */}
              <div className="main-nav-dropdown absolute top-[80%] left-0 w-[280px] bg-white dark:bg-[#15171e] border border-gray-100 dark:border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 z-50 overflow-hidden pt-2">
                <div className="absolute top-0 left-8 w-4 h-4 bg-white dark:bg-[#15171e] border-t border-l border-gray-100 dark:border-white/10 rotate-45 -translate-y-1/2"></div>
                <div className="relative bg-white dark:bg-[#15171e] flex flex-col py-3">
                  {displayServices.map((item) => (
                    <Link
                      key={item.name}
                      href={`/services/${item.slug}`}
                      className="px-6 py-2.5 text-[15px] font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/5 hover:!text-[#ff3b6a] dark:hover:!text-[#ff3b6a] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/portfolio" className="nav-link hover:text-[#ff3b6a] transition-colors">
              Portfolio
            </Link>
            <Link href="/about" className="nav-link hover:text-[#ff3b6a] transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="nav-link hover:text-[#ff3b6a] transition-colors">
              Contact
            </Link>
          </div>

          {/* Right Actions: Theme Toggle & Get a Quote Button */}
          <div className="flex items-center gap-4">
            <ThemeToggle />

            <button
              onClick={() => setIsModalOpen(true)}
              className="hidden md:inline-flex bg-gradient-to-r from-[#ff4d79] to-[#ff2a5f] text-white px-7 py-3 rounded-full font-bold text-[15px] items-center gap-2 shadow-[0_4px_16px_rgba(255,42,95,0.35)] hover:shadow-[0_6px_22px_rgba(255,42,95,0.5)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
            >
              <span>Get a Quote</span>
              <ArrowRight size={17} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden text-gray-800 dark:text-gray-100 p-2 -mr-2 cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Drawer Menu */}
        <div
          className={`lg:hidden fixed inset-x-0 top-[76px] bottom-0 bg-white dark:bg-[#0c0d12] z-40 transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col h-full px-6 py-8 overflow-y-auto pb-32">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-xl font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-100 dark:border-white/10">
              Home
            </Link>

            <div className="py-4 border-b border-gray-100 dark:border-white/10">
              <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center justify-between">
                Services
              </Link>
              <div className="flex flex-col mt-4 gap-3 pl-4 border-l-2 border-[#ff3b6a]/30">
                {displayServices.map((item) => (
                  <Link
                    key={item.name}
                    href={`/services/${item.slug}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-[16px] text-gray-600 dark:text-gray-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-xl font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-100 dark:border-white/10">
              Portfolio
            </Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-xl font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-100 dark:border-white/10">
              About Us
            </Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-xl font-semibold text-gray-800 dark:text-gray-100 border-b border-gray-100 dark:border-white/10">
              Contact
            </Link>

            <div className="mt-8 flex flex-col gap-4">
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
                className="w-full bg-gradient-to-r from-[#ff4d79] to-[#ff2a5f] text-white px-6 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2"
              >
                Get a Quote <ArrowRight size={20} />
              </button>
              <a
                href="mailto:info@webizsquare.com"
                className="w-full bg-gray-50 dark:bg-white/5 text-gray-800 dark:text-gray-100 px-6 py-3.5 rounded-xl font-semibold text-base flex items-center justify-center gap-2 border border-gray-200 dark:border-white/10"
              >
                <Mail size={18} className="text-[#ff3b6a]" /> info@webizsquare.com
              </a>
              <div className="pt-4 border-t border-gray-100 dark:border-white/10 flex items-center justify-center gap-6">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#ff3b6a]" aria-label="Facebook">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/></svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#ff3b6a]" aria-label="Twitter">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#ff3b6a]" aria-label="Instagram">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 dark:text-gray-300 hover:text-[#ff3b6a]" aria-label="LinkedIn">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
              </div>
              <p className="text-xs text-gray-500 text-center px-4 leading-relaxed">
                Office No 01, Mayuresh Residency, Ground Floor, Sadguru Nagar, Nashik, Maharashtra 422009
              </p>
            </div>
          </div>
        </div>
      </header>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
