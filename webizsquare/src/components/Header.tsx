"use client";

import Link from "next/link";
import { useState } from "react";
import { Smartphone, ChevronRight, ArrowRight, Menu, X } from "lucide-react";
import { QuoteModal } from "./QuoteModal";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ services = [] }: { services?: { name: string, slug: string }[] }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const defaultServices = [
    { name: 'Website Development', slug: 'website-development' },
    { name: 'Application Development', slug: 'application-development' },
    { name: 'All IT Services', slug: 'all-it-services' },
    { name: 'ERP Software Development', slug: 'erp-software-development' },
    { name: 'Graphics Designing', slug: 'graphics-designing' },
    { name: 'Search Engine Optimization', slug: 'search-engine-optimization' },
    { name: 'Social Media Optimization', slug: 'social-media-optimization' },
    { name: 'Software Development', slug: 'software-development' },
    { name: 'Website Hosting', slug: 'website-hosting' }
  ];

  const displayServices = services && services.length > 0 ? services : defaultServices;

  return (
    <div className="fixed top-0 w-full z-50">
      {/* Top Announcement Bar */}
      <div className="bg-[#111111] py-2 px-6 hidden md:block">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center text-xs font-medium text-gray-400">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff5987] animate-pulse"></div>
            <span className="text-white">Q4 Enterprise Software & Web Development Booking Open</span>
            <span className="mx-1">•</span>
            <span>Free Architecture Consultation</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:+919172944434" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Smartphone size={12} className="text-[#ff5987]" />
              <span>+91 91729 44434</span>
            </a>
            <div className="w-px h-3 bg-gray-700"></div>
            <a href="#" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-white shadow-sm border-b border-gray-100 relative z-50">
        <div className="max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <img src="/dark-logo.png" alt="Webiz Square" className="h-10 md:h-12 w-auto" />
          </Link>
          
          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-8 text-[16px] font-semibold text-gray-800">
            <Link href="/" className="hover:text-[#ff5987] transition-colors">Home</Link>
            <div className="relative group py-6 -my-6 flex items-center">
              <Link href="/services" className="flex items-center gap-1 group-hover:text-[#ff5987] transition-colors">
                Services <ChevronRight size={14} className="rotate-90 opacity-70 group-hover:-rotate-90 transition-transform duration-300" />
              </Link>
              
              {/* Dropdown Menu */}
              <div className="absolute top-[80%] left-0 w-[280px] bg-white border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50 overflow-hidden pt-2">
                <div className="absolute top-0 left-8 w-4 h-4 bg-white border-t border-l border-gray-100 rotate-45 -translate-y-1/2"></div>
                <div className="relative bg-white flex flex-col py-3">
                  {displayServices.map((item) => (
                    <Link key={item.name} href={`/services/${item.slug}`} className="px-6 py-3 text-[15px] font-bold text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 hover:!text-[#ff5987] dark:hover:!text-[#ff5987] transition-colors">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/portfolio" className="hover:text-[#ff5987] transition-colors">Portfolio</Link>
            <Link href="/about" className="hover:text-[#ff5987] transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-[#ff5987] transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button onClick={() => setIsModalOpen(true)} className="hidden md:flex bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white px-6 py-2.5 rounded-full font-bold text-sm items-center gap-1.5 hover:shadow-[0_5px_15px_rgba(255,89,135,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
              Get a Quote <ArrowRight size={16} />
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="lg:hidden text-gray-800 p-2 -mr-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-[72px] md:translate-y-[108px]' : '-translate-y-full'}`}>
        <div className="flex flex-col h-full bg-white px-6 py-8 overflow-y-auto pb-32">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-xl font-semibold text-gray-800 border-b border-gray-100">Home</Link>
          
          <div className="py-4 border-b border-gray-100">
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-xl font-semibold text-gray-800 flex items-center justify-between">
              Services
            </Link>
            <div className="flex flex-col mt-4 gap-3 pl-4 border-l-2 border-[#ff5987]/20">
              {displayServices.map((item) => (
                <Link key={item.name} href={`/services/${item.slug}`} onClick={() => setIsMobileMenuOpen(false)} className="text-[16px] text-gray-600">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-xl font-semibold text-gray-800 border-b border-gray-100">Portfolio</Link>
          <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-xl font-semibold text-gray-800 border-b border-gray-100">About Us</Link>
          <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="py-4 text-xl font-semibold text-gray-800 border-b border-gray-100">Contact</Link>
          
          <div className="mt-8 flex flex-col gap-4">
            <button onClick={() => { setIsModalOpen(true); setIsMobileMenuOpen(false); }} className="w-full bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white px-6 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
              Get a Quote <ArrowRight size={20} />
            </button>
            <a href="tel:+919172944434" className="w-full bg-gray-50 text-gray-800 px-6 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 border border-gray-200">
              <Smartphone size={20} className="text-[#ff5987]" /> Call Us Now
            </a>
          </div>
        </div>
      </div>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

