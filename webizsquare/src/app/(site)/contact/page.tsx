import { Mail, Phone, MapPin, Clock, Send, User, Building, MessageCircle, ChevronDown } from "lucide-react";
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import React from 'react';

export default async function ContactPage() {
  let contactData = null;
  try {
    const payload = await getPayload({ config: configPromise })
    contactData = await payload.findGlobal({
      slug: 'contact-page',
    })
  } catch (err) {
    console.error("Database tables might not exist yet:", err)
  }

  const heroBadgeText = contactData?.heroBadgeText || "Contact Webiz Square";
  const heroHeadline = contactData?.heroHeadline || "Let's Start a";
  const heroHighlightedWord = contactData?.heroHighlightedWord || "Conversation";
  const heroDescription = contactData?.heroDescription || "Have questions? We'd love to hear from you. Share a few details and we'll respond as soon as possible.";
  const whatsappButtonText = contactData?.whatsappButtonText || "Chat on WhatsApp";
  const callButtonText = contactData?.callButtonText || "Call Now";

  const contactHeadline = contactData?.contactHeadline || "Get in";
  const contactHighlightedWord = contactData?.contactHighlightedWord || "Touch";
  const phoneNumber = contactData?.phoneNumber || "+91 91729 44434";
  const emailAddress = contactData?.emailAddress || "hello@webizsquare.com";
  const locationText = contactData?.locationText || "Webiz Square HQ, College Road,\nNashik, Maharashtra 422005";
  const businessHours = contactData?.businessHours || "Mon - Sat: 9:00 AM - 6:00 PM";

  const formTitle = contactData?.formTitle || "Send us a Message";
  const formSubtitle = contactData?.formSubtitle || "We'll get back within 24 hours.";
  const formButtonText = contactData?.formButtonText || "Get Growth Audit";

  const mapHeadline = contactData?.mapHeadline || "Visit Our";
  const mapHighlightedWord = contactData?.mapHighlightedWord || "Office";
  const mapSubtitle = contactData?.mapSubtitle || "We're located in Nashik, Maharashtra. Feel free to drop by for a coffee and discuss your next big idea during business hours.";
  const mapEmbedUrl = contactData?.mapEmbedUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119981.38706385208!2d73.72107759882206!3d20.000109968434692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdebaa0967d1655%3A0xc07a216fcb11a5dc!2sNashik%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714488390772!5m2!1sen!2sin";

  return (
    <div className="min-h-screen bg-gray-50 text-black font-sans pb-32">
      
      {/* Top section with gradient background */}
      <div className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-gradient-to-b from-[#ff5987]/10 to-transparent -z-10 blur-3xl rounded-full"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff5987]/10 text-[#ff5987] border border-[#ff5987]/20 text-xs font-bold mb-8">
            <Mail size={14} /> {heroBadgeText}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {heroHeadline} <span className="text-[#ff5987]">{heroHighlightedWord}</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl mx-auto leading-relaxed">
            {heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#1ebd5a] text-white rounded-full font-bold transition-all shadow-lg shadow-green-500/20 w-full sm:w-auto transform hover:-translate-y-1">
              <MessageCircle size={20} /> {whatsappButtonText}
            </button>
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#ff5987] hover:bg-[#e04572] text-white rounded-full font-bold transition-all shadow-lg shadow-[#ff5987]/30 w-full sm:w-auto transform hover:-translate-y-1">
              <Phone size={20} /> {callButtonText}
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Info + Form */}
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 mb-32 items-start">
        
        {/* Left Side: Info Cards */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">{contactHeadline} <span className="text-[#ff5987]">{contactHighlightedWord}</span></h2>
          <div className="flex flex-col gap-6">
             
             {/* Phone Card */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#ff5987]/10 rounded-2xl flex items-center justify-center text-[#ff5987] shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-lg font-bold text-gray-900">{phoneNumber}</p>
                </div>
             </div>

             {/* Email Card */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#ff5987]/10 rounded-2xl flex items-center justify-center text-[#ff5987] shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Email</p>
                  <p className="text-lg font-bold text-gray-900">{emailAddress}</p>
                </div>
             </div>

             {/* Location Card */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#ff5987]/10 rounded-2xl flex items-center justify-center text-[#ff5987] shrink-0">
                  <MapPin size={24} />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Location</p>
                  <p className="text-base font-bold text-gray-900 leading-snug whitespace-pre-line">
                    {locationText}
                  </p>
                </div>
                <div className="text-gray-300 hover:text-[#ff5987] cursor-pointer mt-1">
                  <Send size={16} />
                </div>
             </div>

             {/* Hours Card */}
             <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-6 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-[#ff5987]/10 rounded-2xl flex items-center justify-center text-[#ff5987] shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Business Hours</p>
                  <p className="text-lg font-bold text-gray-900">{businessHours}</p>
                </div>
             </div>

          </div>
        </div>

        {/* Right Side: Form Block */}
        <div className="bg-[#1c1c1c] rounded-[2rem] p-8 md:p-10 shadow-2xl relative">
          <div className="absolute top-8 right-8 w-12 h-12 bg-[#ff5987]/20 rounded-xl flex items-center justify-center text-[#ff5987]">
             <Send size={20} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">{formTitle}</h3>
          <p className="text-gray-400 text-sm mb-10">{formSubtitle}</p>
          
          <form className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="relative">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                   <User size={18} />
                 </div>
                 <input type="text" placeholder="Full Name" className="w-full bg-[#2a2a2a] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#ff5987]/50 transition-colors" />
               </div>
               <div className="relative">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                   <Mail size={18} />
                 </div>
                 <input type="email" placeholder="Email Address" className="w-full bg-[#2a2a2a] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#ff5987]/50 transition-colors" />
               </div>
               <div className="relative">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                   <Phone size={18} />
                 </div>
                 <input type="tel" placeholder="Phone Number" className="w-full bg-[#2a2a2a] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#ff5987]/50 transition-colors" />
               </div>
               <div className="relative">
                 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
                   <Building size={18} />
                 </div>
                 <input type="text" placeholder="Company Name" className="w-full bg-[#2a2a2a] border border-white/5 rounded-xl py-4 pl-12 pr-4 text-white text-sm focus:outline-none focus:border-[#ff5987]/50 transition-colors" />
               </div>
             </div>

             <div className="relative">
               <select defaultValue="" className="w-full bg-[#2a2a2a] border border-white/5 rounded-xl py-4 pl-4 pr-12 text-gray-400 text-sm focus:outline-none focus:border-[#ff5987]/50 appearance-none transition-colors">
                 <option value="" disabled>Select your interest</option>
                 <option value="web">Web Development</option>
                 <option value="app">App Development</option>
                 <option value="seo">SEO & Marketing</option>
                 <option value="erp">ERP Solutions</option>
               </select>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                 <ChevronDown size={18} />
               </div>
             </div>

             <button type="button" className="w-full py-4 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,89,135,0.4)] transition-all transform hover:-translate-y-1 mt-4">
               {formButtonText} <Send size={16} />
             </button>
          </form>
        </div>

      </div>

      {/* Map Section */}
      <div className="max-w-6xl mx-auto px-6 text-center">
         <h2 className="text-4xl font-bold mb-4">{mapHeadline} <span className="text-[#ff5987]">{mapHighlightedWord}</span></h2>
         <p className="text-gray-600 mb-10 max-w-2xl mx-auto">{mapSubtitle}</p>
         
         <div className="w-full h-[450px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-gray-200">
            <iframe 
              src={mapEmbedUrl} 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
         </div>
      </div>

    </div>
  );
}
