"use client";

import { motion } from "motion/react";
import { Globe, Smartphone, PenTool, Share2, Search, BarChart, Bot, Zap, ArrowUpRight } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Website Design",
      icon: <Globe size={16} className="text-[#ff5987]" />,
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop",
      delay: 0.1
    },
    {
      title: "App Development",
      icon: <Smartphone size={16} className="text-[#ff5987]" />,
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
      delay: 0.2
    },
    {
      title: "Graphic Design",
      icon: <PenTool size={16} className="text-[#ff5987]" />,
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
      delay: 0.3
    },
    {
      title: "Social Media Marketing",
      icon: <Share2 size={16} className="text-[#ff5987]" />,
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop",
      delay: 0.4
    },
    {
      title: "Search Engine Optimization",
      icon: <Search size={16} className="text-[#ff5987]" />,
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop",
      delay: 0.5
    },
    {
      title: "Search Engine Marketing",
      icon: <BarChart size={16} className="text-[#ff5987]" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      delay: 0.6
    },
    {
      title: "AI Integration",
      icon: <Bot size={16} className="text-[#ff5987]" />,
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
      delay: 0.7
    },
    {
      title: "Marketing Automation",
      icon: <Zap size={16} className="text-[#ff5987]" />,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      delay: 0.8
    }
  ];

  return (
    <div className="pt-32 pb-32 px-6 min-h-screen relative">
      {/* Background Glow */}
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#ff5987] rounded-full blur-[150px] opacity-10 pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-24">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
          >
            Our <span className="text-[#ff5987]">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            From concept to conversion, we provide end-to-end digital solutions that<br className="hidden md:block"/> drive measurable growth for your business.
          </motion.p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.5 }}
              className={`group relative h-[380px] rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl shadow-black/50 border border-white/10 ${
                index % 3 === 1 ? 'lg:translate-y-16' : ''
              }`}
            >
              {/* Background Image with Overlay */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80 transition-opacity duration-300 group-hover:opacity-90"></div>

              {/* Top Right Action Icon */}
              <div className="absolute top-5 right-5 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={18} className="text-white" />
              </div>

              {/* Bottom Left Pill */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center">
                <div className="bg-white rounded-full py-3 px-5 flex items-center gap-3 shadow-[0_10px_30px_rgba(255,89,135,0.3)] transform transition-transform duration-300 group-hover:-translate-y-2">
                  <div className="w-8 h-8 rounded-full bg-[#ff5987]/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <span className="text-black font-bold text-sm tracking-wide">
                    {service.title}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
