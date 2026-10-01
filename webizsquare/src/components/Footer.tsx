import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black pt-20 pb-8 border-t border-white/10 relative overflow-hidden">
      
      {/* Floating Action Buttons (Left side) - Only visible on desktop here, usually handled in layout, but added per screenshot */}
      <div className="hidden lg:flex flex-col gap-4 absolute left-4 bottom-12 z-50">
        <a href="https://wa.me/919172944434" target="_blank" rel="noreferrer" className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-emerald-500/30">
          <MessageCircle size={24} />
        </a>
        <a href="tel:+919172944434" className="w-12 h-12 bg-[#ff5987] rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform shadow-lg shadow-[#ff5987]/30">
          <Phone size={24} />
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col gap-6 lg:ml-12">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 cursor-pointer">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-8 h-8 rounded-[50%] border border-[#ff5987] opacity-60 -rotate-45 scale-x-150 shadow-[0_0_10px_rgba(255,89,135,0.3)]"></div>
                <div className="text-white font-black text-3xl italic tracking-tighter relative z-10 drop-shadow-lg flex items-center">
                  <span className="text-[#ff5987]">W</span>
                </div>
              </div>
              <div className="flex flex-col ml-1">
                <span className="text-[22px] tracking-tight leading-none font-medium">ebiz<span className="font-light opacity-90">square</span></span>
                <span className="text-[7.5px] text-gray-400 tracking-[0.25em] mt-[3px] ml-[2px] uppercase">Make It Online</span>
              </div>
            </Link>
            
            <p className="text-gray-300 text-sm leading-relaxed pr-4">
              Transforming businesses with cutting-edge software development, enterprise applications, and creative digital excellence.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#ff5987] hover:bg-[#ff5987]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#ff5987] hover:bg-[#ff5987]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#ff5987] hover:bg-[#ff5987]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#ff5987] hover:bg-[#ff5987]/10 transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Services</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-[#ff5987] transition-colors">Custom Software</Link></li>
              <li><Link href="/services" className="hover:text-[#ff5987] transition-colors">Web Development</Link></li>
              <li><Link href="/services" className="hover:text-[#ff5987] transition-colors">Mobile Applications</Link></li>
              <li><Link href="/products" className="hover:text-[#ff5987] transition-colors">ERP Solutions</Link></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-[#ff5987] transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-[#ff5987] transition-colors">Contact</Link></li>
              <li><Link href="/portfolio" className="hover:text-[#ff5987] transition-colors">Portfolio</Link></li>
              <li><Link href="/pricing" className="hover:text-[#ff5987] transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Legal</h3>
            <ul className="flex flex-col gap-4 text-sm text-gray-300">
              <li><Link href="/privacy" className="hover:text-[#ff5987] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#ff5987] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/refund" className="hover:text-[#ff5987] transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-[#ff5987]/10 via-[#ff5987]/50 to-[#ff5987]/10 mb-8 lg:ml-12 lg:w-[calc(100%-3rem)]"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400 lg:ml-12">
          <p>© 2026 Webiz Square. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
            <Link href="/refund" className="hover:text-white transition-colors">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
