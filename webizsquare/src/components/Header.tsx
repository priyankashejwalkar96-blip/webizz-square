"use client";

import Link from "next/link";
import { Smartphone, ChevronRight, ArrowRight } from "lucide-react";

export function Header() {
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
      <nav className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-8 h-8 rounded-[50%] border border-[#ff5987] opacity-60 -rotate-45 scale-x-150 shadow-[0_0_10px_rgba(255,89,135,0.2)]"></div>
              <div className="text-black font-black text-3xl italic tracking-tighter relative z-10 drop-shadow-sm flex items-center">
                <span className="text-[#ff5987]">W</span>
              </div>
            </div>
            <div className="flex flex-col ml-1">
              <span className="text-[22px] tracking-tight leading-none font-medium text-black">ebiz<span className="font-light text-gray-500">square</span></span>
              <span className="text-[7.5px] text-gray-500 tracking-[0.25em] mt-[3px] ml-[2px] uppercase">Make It Online</span>
            </div>
          </Link>
          
          {/* Nav Links */}
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
                  {[
                    'Website Development', 
                    'Application Development', 
                    'All IT Services', 
                    'ERP Software Development', 
                    'Graphics Designing', 
                    'Search Engine Optimization', 
                    'Social Media Optimization', 
                    'Software Development', 
                    'Website Hosting'
                  ].map((item) => (
                    <Link key={item} href="#" className="px-6 py-3 text-[15px] font-bold text-gray-800 hover:bg-gray-50 hover:text-[#ff5987] transition-colors">
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/portfolio" className="hover:text-[#ff5987] transition-colors">Portfolio</Link>
            <Link href="/about" className="hover:text-[#ff5987] transition-colors">About Us</Link>
            <Link href="/contact" className="hover:text-[#ff5987] transition-colors">Contact</Link>
          </div>
          
          <Link href="/quote" className="bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white px-6 py-2.5 rounded-full font-bold text-sm flex items-center gap-1.5 hover:shadow-[0_5px_15px_rgba(255,89,135,0.4)] transition-all duration-300 transform hover:-translate-y-0.5">
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>
      </nav>
    </div>
  );
}
