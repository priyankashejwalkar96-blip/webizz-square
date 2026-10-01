"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState("All Work");
  const categories = ["All Work", "Web & E-Commerce", "Branding & Creative", "Packaging & Print"];

  const projects = [
    {
      category: "Web & E-Commerce",
      stat: "+280% GMV Growth",
      client: "EasyVendor Global",
      title: "EasyVendor B2B Multi-Vendor Platform",
      desc: "Enterprise multi-vendor procurement and wholesale marketplace with automated vendor settlements, real-time inventory syncing, and B2B pricing tiers.",
      tags: ["Next.js", "React", "PostgreSQL", "+2"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "E-Commerce",
      stat: "1.1s Load Time",
      client: "EGR59 Foods Pvt Ltd",
      title: "EGR59 Gourmet Food Showcase & Shop",
      desc: "Ultra-fast headless food ordering experience with live kitchen dispatch tracking, recipe discovery, and international logistics integration.",
      tags: ["Next.js App Router", "Stripe / Razorpay", "Tailwind", "+1"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "Digital Experience",
      stat: "45k+ Monthly Visitors",
      client: "Eternal Devalaya Trust",
      title: "Eternal Devalaya Cultural Portal",
      desc: "Immersive spiritual and cultural heritage portal with 3D temple walkthrough previews, live donation processing, and multi-lingual support.",
      tags: ["React", "Next.js", "Cloudflare CDN", "+1"],
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "Brand & E-Commerce",
      stat: "4.8x ROI on Ads",
      client: "The Avocado Co.",
      title: "The Avo Company DTC Superfood Site",
      desc: "Direct to consumer e-commerce experience highlighting sustainable farming and organic avocado products with a modern, earthy aesthetic.",
      tags: ["Next.js", "React", "PostgreSQL", "+2"],
      image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "Service Platform",
      stat: "+190% Lead Inquiries",
      client: "Mech Moto Automotives",
      title: "Mech Moto Automotive Service Hub",
      desc: "Digital service booking platform for premium automotive care with real-time mechanic tracking and automated service reminders.",
      tags: ["Next.js App Router", "Stripe / Razorpay", "Tailwind", "+1"],
      image: "https://images.unsplash.com/photo-1503375894024-426b3a3c9b68?q=80&w=800&auto=format&fit=crop"
    },
    {
      category: "Industrial Web",
      stat: "Top 3 Google Ranking",
      client: "Polymer Crafts Inc.",
      title: "Polymer Crafts Industrial Showcase",
      desc: "B2B manufacturing catalogue with advanced technical specifications filtering and international bulk quote request system.",
      tags: ["React", "Next.js", "Cloudflare CDN", "+1"],
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-white text-black">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-xs font-bold tracking-widest uppercase mb-8 shadow-sm">
            <Sparkles size={12} className="text-[#ff5987]" /> PROVEN TRACK RECORD
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight leading-tight max-w-4xl mx-auto">
            Featured Case Studies &<br/> Engineered <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5987] to-[#ff8dae]">Digital Products</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Explore a curated selection of our high-conversion websites, enterprise platforms, brand identities, and packaging systems.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white shadow-[0_5px_15px_rgba(255,89,135,0.3)]' 
                  : 'bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-black shadow-sm'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white border border-gray-200 rounded-3xl overflow-hidden group hover:border-[#ff5987]/30 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-[#ff5987]/10"
            >
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden bg-gray-50 p-4 flex items-center justify-center border-b border-gray-100">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-100/80 via-transparent to-transparent z-10"></div>
                
                {/* Badges */}
                <div className="absolute top-5 left-5 z-20 bg-white/90 backdrop-blur-md px-3 py-1.5 text-[9px] font-bold uppercase rounded-full border border-gray-200 text-gray-700 tracking-wider shadow-sm">
                  {project.category}
                </div>
                <div className="absolute top-5 right-5 z-20 bg-[#ff5987] px-3 py-1.5 text-[10px] font-bold text-white rounded-full shadow-[0_5px_15px_rgba(255,89,135,0.4)]">
                  {project.stat}
                </div>
                
                {/* Mockup visual representation */}
                <div className="w-[90%] h-48 bg-white rounded-xl border border-gray-200 overflow-hidden relative z-0 group-hover:scale-105 transition-transform duration-700 shadow-lg">
                  <img src={project.image} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt={project.title} />
                  {/* Subtle laptop frame mock overlay effect */}
                  <div className="absolute top-0 w-full h-4 bg-gray-100 border-b border-gray-200 flex items-center px-2 gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                  </div>
                </div>
              </div>
              
              {/* Content Body */}
              <div className="p-8 pt-6 relative z-20 bg-white">
                <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">{project.client}</p>
                <h3 className="text-xl font-bold mb-4 text-black group-hover:text-[#ff5987] transition-colors">{project.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed mb-8 line-clamp-3">{project.desc}</p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((t, i) => (
                    <span key={i} className={`text-[10px] font-bold px-3 py-1.5 rounded-lg ${t.startsWith('+') ? 'bg-[#ff5987]/10 text-[#ff5987]' : 'bg-gray-50 border border-gray-200 text-gray-600'}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
