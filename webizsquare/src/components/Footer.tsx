import Link from "next/link";
import { Phone, MapPin, Mail, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-16 border-t border-white/5 relative overflow-hidden text-[14px]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Info */}
          <div className="flex flex-col gap-8 pr-4">
            <Link href="/" className="flex items-center cursor-pointer">
              <img src="/white-logo.png" alt="Webiz Square" className="h-10 w-auto" />
            </Link>
            
            <p className="text-gray-400 leading-relaxed text-[15px]">
              At Webiz Square, technology and creativity unite to make your business thrive globally. We're Nashik's premier software and website development company, driving success through innovation.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#050505] hover:text-white hover:bg-[#ff5987] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#050505] hover:text-white hover:bg-[#ff5987] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#050505] hover:text-white hover:bg-[#ff5987] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#050505] hover:text-white hover:bg-[#ff5987] transition-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <div className="flex items-center gap-4 mb-8 mt-2">
              <h3 className="text-[20px] font-medium text-white">Useful Links</h3>
              <div className="w-8 h-[2px] bg-[#ff5987]"></div>
            </div>
            <ul className="flex flex-col gap-5 text-gray-300 font-medium text-[15px]">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "About Us", href: "/about" },
                { name: "Contact Us", href: "/contact" },
                { name: "Privacy Policy", href: "/policies/privacy-policy" },
                { name: "Terms & Conditions", href: "/policies/terms-conditions" }
              ].map((item, i) => (
                <li key={i}>
                  <Link href={item.href} className="hover:text-[#ff5987] transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <div className="flex items-center gap-4 mb-8 mt-2">
              <h3 className="text-[20px] font-medium text-white">Services</h3>
              <div className="w-8 h-[2px] bg-[#ff5987]"></div>
            </div>
            <ul className="flex flex-col gap-5 text-gray-300 font-medium text-[15px]">
              {[
                { name: "Graphic Designing", slug: "graphics-designing" },
                { name: "Website Development", slug: "website-development" },
                { name: "Website Hosting", slug: "website-hosting" },
                { name: "Search Engine Optimization", slug: "search-engine-optimization" },
                { name: "Social Media Optimization", slug: "social-media-optimization" },
                { name: "Application Development", slug: "application-development" },
                { name: "Software Development", slug: "software-development" }
              ].map((item, i) => (
                <li key={i}>
                  <Link href={`/services/${item.slug}`} className="hover:text-[#ff5987] transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Official info */}
          <div>
            <div className="flex items-center gap-4 mb-8 mt-2">
              <h3 className="text-[20px] font-medium text-white">Official info</h3>
              <div className="w-8 h-[2px] bg-[#ff5987]"></div>
            </div>
            
            <div className="flex flex-col gap-6 text-gray-300">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#ff5987] flex items-center justify-center shrink-0 shadow-lg shadow-[#ff5987]/20">
                  <MapPin size={20} className="text-white" />
                </div>
                <span className="text-[14.5px] leading-relaxed font-medium">Office No 01, Mayuresh Residency, Ground Floor, Sadguru Nagar, Nashik, Maharashtra 422009</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#ff5987] flex items-center justify-center shrink-0 shadow-lg shadow-[#ff5987]/20">
                  <Phone size={20} className="text-white" />
                </div>
                <span className="text-[14.5px] font-medium">+91 8888203760 / +91 7020053055</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#ff5987] flex items-center justify-center shrink-0 shadow-lg shadow-[#ff5987]/20">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="text-[14.5px] font-medium">info@webizsquare.com</span>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#ff5987] flex items-center justify-center shrink-0 shadow-lg shadow-[#ff5987]/20">
                  <Clock size={20} className="text-white" />
                </div>
                <span className="text-[14.5px] font-medium">Working Hours: 10:00 AM to 07:00 PM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
