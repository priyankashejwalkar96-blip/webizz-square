import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-16 border-t border-white/5 relative overflow-hidden text-[14px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Info (Span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-8 pr-4">
            <Link href="/" className="flex items-center cursor-pointer">
              <img src="/white-logo.png" alt="Webiz Square" className="h-10 w-auto" />
            </Link>
            
            <p className="text-gray-400 leading-relaxed">
              Webiz Square Software Solutions LLP is an industry-leading software engineering and digital transformation agency headquartered in Nashik, Maharashtra. We engineer bespoke, lightning-fast digital solutions for clients worldwide.
            </p>
            
            <div className="flex flex-col gap-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-[#ff5987] shrink-0 mt-0.5" />
                <span>Nashik, Maharashtra, India - 422009</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-[#ff5987] shrink-0" />
                <span>+91 91729 44434</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-[#ff5987] shrink-0" />
                <span>info@webizsquare.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#ff5987] shrink-0" />
                <span>Monday - Saturday: 9:30 AM - 7:00 PM IST</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-10 h-10 rounded-xl bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff5987] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff5987] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff5987] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-[#111] flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#ff5987] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: CORE CAPABILITIES (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-[13px] font-bold text-white mb-8 tracking-widest uppercase">Core Capabilities</h3>
            <ul className="flex flex-col gap-4 text-gray-400">
              {[
                "Custom Website Development",
                "Enterprise ERP & Custom Software",
                "E-Commerce Web Solutions",
                "Mobile App Development",
                "UI/UX Design & Brand Identity",
                "SEO & Performance Growth",
                "Bulk SMS & WhatsApp Business API",
                "Cloud Infrastructure & Maintenance"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ff5987]/60 group-hover:bg-[#ff5987] transition-colors shrink-0"></div>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: PRODUCTS & HUB (Span 2) */}
          <div className="lg:col-span-2">
            <h3 className="text-[13px] font-bold text-white mb-8 tracking-widest uppercase">Products & Hub</h3>
            <ul className="flex flex-col gap-4 text-gray-400">
              {[
                "Webiz Square One ERP",
                "Bachat Gat Online",
                "Case Studies & Work",
                "Why Choose Us",
                "Agile Process",
                "Cost Estimator",
                "FAQ Center"
              ].map((item, i) => (
                <li key={i}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: TECH INSIGHTS NEWSLETTER (Span 3) */}
          <div className="lg:col-span-3">
            <h3 className="text-[13px] font-bold text-white mb-8 tracking-widest uppercase">Tech Insights Newsletter</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Subscribe to our monthly engineering bulletin covering Next.js, enterprise ERP architecture, and SEO strategies.
            </p>
            
            <form className="relative flex items-center mb-8">
              <input type="email" placeholder="Enter your email" className="w-full bg-[#111] border border-white/5 rounded-xl px-4 py-3.5 text-white text-[14px] focus:outline-none focus:border-[#ff5987]/50 transition-colors" />
              <button type="button" className="absolute right-2 top-2 bottom-2 bg-[#ff5987] text-white rounded-lg px-4 hover:bg-[#e04572] transition-colors flex items-center justify-center">
                <Send size={16} className="-ml-0.5" />
              </button>
            </form>

            {/* Instant Support Card */}
            <div className="bg-[#111] border border-white/5 p-6 rounded-xl group hover:border-[#ff5987]/30 transition-colors">
              <h4 className="text-white font-bold mb-3 text-[15px]">Instant Developer Support</h4>
              <a href="https://wa.me/919172944434" target="_blank" rel="noreferrer" className="text-[#ff5987] font-bold flex items-center hover:text-[#e04572] transition-colors">
                Chat on WhatsApp (+91 91729 44434) <ArrowRight size={16} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
