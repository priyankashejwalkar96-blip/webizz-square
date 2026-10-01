"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Code, Smartphone, Globe, Sparkles, ChevronRight, ChevronLeft, Zap, Shield, Star, CheckCircle, Quote, PenTool, Share2, Search, BarChart, Bot, ArrowUpRight } from "lucide-react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    { name: "Priya Sharma", role: "CEO, TechCorp", img: "10", quote: "Webiz Square completely transformed our digital presence. Their attention to detail, modern design approach, and robust engineering resulted in a website that not only looks beautiful but performs exceptionally well. Our inbound leads have tripled." },
    { name: "David Chen", role: "Founder, GrowthX", img: "12", quote: "The speed and performance they delivered are unmatched. We saw a 40% increase in conversions within the first month. The team is incredibly responsive and proactive." },
    { name: "Sarah Jenkins", role: "Marketing Director", img: "14", quote: "They didn't just build a website, they built a scalable lead generation machine for us. The backend dashboard is intuitive, and the front end is an absolute work of art." },
    { name: "Rahul Verma", role: "Operations Head", img: "16", quote: "Highly recommend Webiz Square for enterprise-level projects. They handled our complex backend integration flawlessly while keeping the frontend lightning fast." }
  ];

  const scrollSlider = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const services = [
    { title: "Website Design", icon: <Globe size={16} className="text-[#ff5987]" />, image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format&fit=crop" },
    { title: "App Development", icon: <Smartphone size={16} className="text-[#ff5987]" />, image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop" },
    { title: "Graphic Design", icon: <PenTool size={16} className="text-[#ff5987]" />, image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop" },
    { title: "Social Media Marketing", icon: <Share2 size={16} className="text-[#ff5987]" />, image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop" },
    { title: "Search Engine Optimization", icon: <Search size={16} className="text-[#ff5987]" />, image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=800&auto=format&fit=crop" },
    { title: "Search Engine Marketing", icon: <BarChart size={16} className="text-[#ff5987]" />, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" },
    { title: "AI Integration", icon: <Bot size={16} className="text-[#ff5987]" />, image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop" },
    { title: "Marketing Automation", icon: <Zap size={16} className="text-[#ff5987]" />, image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" }
  ];

  return (
    <main className="bg-white text-black overflow-hidden selection:bg-[#ff5987] selection:text-white pb-0">
      
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ff5987] rounded-full blur-[150px] opacity-10 pointer-events-none mix-blend-multiply" />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          
          {/* Left Text */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#ff5987]/20 bg-[#ff5987]/10 text-[#ff5987] text-sm font-medium mb-6 shadow-sm">
              <Sparkles size={16} /> <span>Award Winning Digital Agency</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-6xl lg:text-[70px] font-bold tracking-tighter leading-[1.1] mb-6 text-black">
              Driving Business <br className="hidden lg:block"/> Growth Through <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff5987] to-[#ff8dae]">Smart Digital Traffic</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-lg text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0">
              We build lightning-fast, SEO-optimized digital experiences that drive measurable growth. From stunning websites to powerful web applications, we engineer success.
            </motion.p>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-full font-bold flex items-center justify-center gap-2 hover:shadow-[0_5px_20px_rgba(255,89,135,0.4)] transition-all transform hover:-translate-y-1">
                Book Free Strategy Call
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-black rounded-full font-bold flex items-center justify-center gap-2 transition-all shadow-sm">
                Our Services <ArrowRight size={18} />
              </button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex items-center justify-center lg:justify-start gap-3">
              <div className="flex -space-x-2">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="User" />
                ))}
              </div>
              <div className="flex flex-col items-start ml-2">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/><Star fill="currentColor" size={14}/>
                </div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">Google 5.0 Rated</span>
              </div>
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.7 }} className="flex-1 relative w-full max-w-[600px] lg:max-w-none">
            <div className="relative rounded-[2.5rem] overflow-hidden border border-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.1)] aspect-[4/3] lg:aspect-square">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="VR Tech" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-xl border border-gray-200 p-4 rounded-2xl shadow-xl flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
              <div className="w-12 h-12 bg-[#ff5987] rounded-full flex items-center justify-center shadow-inner">
                <CheckCircle className="text-white" size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-black">12K+</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="py-24 px-6 relative bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">About <span className="text-[#ff5987]">Webiz Square</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              As a leading Digital Agency, we offer strategic solutions tailored to elevate your brand's digital presence.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Tabs */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-5 rounded-2xl bg-[#ff5987] text-white font-bold flex justify-between items-center shadow-[0_5px_15px_rgba(255,89,135,0.3)] cursor-pointer transition-transform hover:-translate-y-1">
                <span className="text-lg">Our Vision</span> <CheckCircle size={22} />
              </div>
              {['Our Mission', 'Our Approach', 'Core Values'].map((tab, i) => (
                <div key={i} className="p-5 rounded-2xl bg-white border border-gray-200 text-gray-700 font-bold flex justify-between items-center cursor-pointer hover:bg-gray-50 hover:border-gray-300 transition-all shadow-sm">
                  <span className="text-lg">{tab}</span> <ArrowRight size={20} className="text-gray-400" />
                </div>
              ))}
            </div>

            {/* Right Content */}
            <div className="lg:col-span-8 flex flex-col gap-8">
               <div className="flex flex-col md:flex-row gap-8 bg-black p-8 rounded-[2rem] border border-gray-800 shadow-xl items-center">
                 <div className="flex-1">
                   <h3 className="text-2xl font-bold mb-4 text-white">Expert Team</h3>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6">
                     Our dedicated team has the skills and experience to deliver cutting-edge solutions. We combine creative design with robust engineering to ensure your project not only looks great but performs flawlessly.
                   </p>
                   <button className="text-[#ff5987] text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all">
                     Get Free Consultation <ArrowRight size={16}/>
                   </button>
                 </div>
                 <div className="flex-1 w-full h-full">
                   <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" className="w-full h-48 md:h-full object-cover rounded-2xl" alt="Team" />
                 </div>
               </div>
               
               {/* Stat Cards */}
               <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                 {[
                   { val: "97%", text: "Success Rate" },
                   { val: "99%", text: "Client Retention" },
                   { val: "300%", text: "ROI Increase" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-gradient-to-br from-[#ff5987] to-[#e04572] p-8 rounded-[2rem] text-center shadow-[0_10px_30px_rgba(255,89,135,0.3)] transform hover:-translate-y-2 transition-transform">
                     <h4 className="text-4xl font-black text-white mb-2">{stat.val}</h4>
                     <p className="text-[10px] font-bold text-white/90 uppercase tracking-widest">{stat.text}</p>
                   </div>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Brands We Work With (Reused) */}
      <section className="py-24 px-6 border-y border-gray-200 bg-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-black">Brands We <span className="text-[#ff5987]">Work With</span></h2>
          <p className="text-gray-600 text-lg md:text-xl">Trusted by leading brands across industries driving digital transformation.</p>
        </div>
        <div className="w-full flex relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <motion.div className="flex gap-6 items-center whitespace-nowrap cursor-default" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 50, ease: "linear", repeat: Infinity }}>
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-6 items-center pr-6">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                  <div key={num} className="w-[240px] h-[120px] bg-white border border-gray-100 rounded-2xl flex items-center justify-center p-2 opacity-100 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105">
                    <img src={`/${num}.png`} alt={`Brand ${num}`} className="max-w-full max-h-full object-contain scale-110 transition-all duration-300" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. Our Services (Condensed Masonry) */}
      <section className="py-24 px-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Our <span className="text-[#ff5987]">Services</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">End-to-end digital solutions that drive measurable growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0,6).map((service, index) => (
              <div key={index} className={`group relative h-[300px] rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow border border-gray-100 ${index % 3 === 1 ? 'lg:translate-y-12' : ''}`}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: `url(${service.image})` }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70 transition-opacity duration-300 group-hover:opacity-90"></div>
                
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full py-2.5 px-4 flex items-center gap-3 shadow-lg transform transition-transform group-hover:-translate-y-1">
                    <div className="w-7 h-7 rounded-full bg-[#ff5987]/10 flex items-center justify-center">{service.icon}</div>
                    <span className="text-black font-bold text-xs tracking-wide">{service.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Transformative Success (Portfolio Slider) */}
      <section className="py-32 bg-gray-50 relative border-t border-gray-200">
        <div className="max-w-[1400px] mx-auto px-6 mb-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-600 text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
              <Sparkles size={12} className="text-[#ff5987]" /> PROVEN TRACK RECORD
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">Transformative <span className="text-[#ff5987]">Success</span></h2>
            <p className="text-gray-600">Discover how our bespoke strategies brought victory to our clients.</p>
          </div>
          
          {/* Navigation Arrows Removed for Continuous Slide */}
        </div>
        
        {/* Continuous Horizontal Scroll Container */}
        <div className="w-full flex overflow-hidden relative pb-12 group">
          <motion.div 
            className="flex gap-8 items-stretch"
            animate={{ x: ["0%", "-50%"] }} 
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
            whileHover={{ animationPlayState: "paused" }} // Optional: pausing on hover isn't directly supported by animate prop in this way without custom controls, but we'll let it scroll continuously
          >
            {[...Array(2)].map((_, arrayIndex) => (
              <div key={arrayIndex} className="flex gap-8 items-stretch pr-8">
                {[
                  {
                    category: "Web & E-Commerce", stat: "+280% GMV Growth", client: "EasyVendor Global",
                    title: "EasyVendor B2B Multi-Vendor Platform",
                    desc: "Enterprise multi-vendor procurement and wholesale marketplace with automated vendor settlements, real-time inventory syncing, and B2B pricing tiers.",
                    tags: ["Next.js", "React", "PostgreSQL", "+2"],
                    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    category: "E-Commerce", stat: "1.1s Load Time", client: "EGR59 Foods Pvt Ltd",
                    title: "EGR59 Gourmet Food Showcase & Shop",
                    desc: "Ultra-fast headless food ordering experience with live kitchen dispatch tracking, recipe discovery, and international logistics integration.",
                    tags: ["Next.js App Router", "Stripe / Razorpay", "Tailwind", "+1"],
                    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    category: "Digital Experience", stat: "45k+ Monthly Visitors", client: "Eternal Devalaya Trust",
                    title: "Eternal Devalaya Cultural Portal",
                    desc: "Immersive spiritual and cultural heritage portal with 3D temple walkthrough previews, live donation processing, and multi-lingual support.",
                    tags: ["React", "Next.js", "Cloudflare CDN", "+1"],
                    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    category: "Brand & E-Commerce", stat: "4.8x ROI on Ads", client: "The Avocado Co.",
                    title: "The Avo Company DTC Superfood Site",
                    desc: "Direct to consumer e-commerce experience highlighting sustainable farming and organic avocado products with a modern, earthy aesthetic.",
                    tags: ["Next.js", "React", "PostgreSQL", "+2"],
                    image: "https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    category: "Service Platform", stat: "+190% Lead Inquiries", client: "Mech Moto Automotives",
                    title: "Mech Moto Automotive Service Hub",
                    desc: "Digital service booking platform for premium automotive care with real-time mechanic tracking and automated service reminders.",
                    tags: ["Next.js App Router", "Stripe / Razorpay", "Tailwind", "+1"],
                    image: "https://images.unsplash.com/photo-1503375894024-426b3a3c9b68?q=80&w=800&auto=format&fit=crop"
                  },
                  {
                    category: "Industrial Web", stat: "Top 3 Google Ranking", client: "Polymer Crafts Inc.",
                    title: "Polymer Crafts Industrial Showcase",
                    desc: "B2B manufacturing catalogue with advanced technical specifications filtering and international bulk quote request system.",
                    tags: ["React", "Next.js", "Cloudflare CDN", "+1"],
                    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=800&auto=format&fit=crop"
                  }
                ].map((project, idx) => (
                  <div key={idx} className="w-[320px] md:w-[400px] shrink-0 bg-white border border-gray-100 rounded-3xl overflow-hidden group hover:border-[#ff5987]/30 transition-all duration-500 shadow-lg hover:shadow-2xl">
                    <div className="relative h-56 overflow-hidden bg-gray-100 p-4 flex items-center justify-center">
                      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10"></div>
                      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-md px-2 py-1 text-[8px] font-bold uppercase rounded-full border border-gray-200 text-gray-600 shadow-sm">
                        {project.category}
                      </div>
                      <div className="absolute top-4 right-4 z-20 bg-[#ff5987] px-2 py-1 text-[9px] font-bold text-white rounded-full shadow-[0_5px_15px_rgba(255,89,135,0.4)]">
                        {project.stat}
                      </div>
                      <div className="w-[90%] h-40 bg-white rounded-xl border border-gray-200 overflow-hidden relative z-0 group-hover:scale-105 transition-transform duration-700 shadow-lg">
                        <img src={project.image} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" alt={project.title} />
                        <div className="absolute top-0 w-full h-3 bg-white/80 backdrop-blur-sm border-b border-gray-200 flex items-center px-1.5 gap-1">
                          <div className="w-1 h-1 rounded-full bg-red-400"></div><div className="w-1 h-1 rounded-full bg-yellow-400"></div><div className="w-1 h-1 rounded-full bg-green-400"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 pt-4 relative z-20">
                      <p className="text-[10px] font-medium text-gray-400 mb-1.5">{project.client}</p>
                      <h3 className="text-lg font-bold mb-3 text-black group-hover:text-[#ff5987] transition-colors leading-tight line-clamp-1">{project.title}</h3>
                      <p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-2">{project.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((t, i) => (
                          <span key={i} className={`text-[8px] font-bold px-2 py-1 rounded-md ${t.startsWith('+') ? 'bg-[#ff5987]/10 text-[#ff5987]' : 'bg-gray-50 border border-gray-200 text-gray-600'}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 6. Numbers That Speak */}
      <section className="bg-gradient-to-r from-[#ff5987] to-[#e04572] py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
           <div className="text-center lg:text-left">
             <h2 className="text-4xl font-bold text-white mb-2">Numbers That <span className="text-black">Speak</span></h2>
             <p className="text-white/90 text-lg">We are proud of the impact we've made globally.</p>
           </div>
           <div className="flex flex-wrap justify-center gap-6">
             {[
               { val: "150+", text: "Projects Delivered" },
               { val: "$50M+", text: "Client Revenue" },
               { val: "100%", text: "Satisfaction" },
               { val: "300%", text: "ROI Average" }
             ].map((stat, i) => (
               <div key={i} className="bg-white p-6 rounded-[2rem] text-center min-w-[160px] shadow-xl transform hover:-translate-y-2 transition-transform">
                 <h4 className="text-4xl font-black text-[#ff5987] mb-1">{stat.val}</h4>
                 <p className="text-xs font-bold text-gray-800 uppercase tracking-wider">{stat.text}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 7. What Our Clients Say */}
      <section className="py-32 px-6 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black">What Our <span className="text-[#ff5987]">Clients Say</span></h2>
        </div>
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          <div className="flex md:flex-col gap-4">
             {testimonials.map((test, i) => (
               <img 
                 key={i} 
                 src={`https://i.pravatar.cc/150?img=${test.img}`} 
                 className={`w-16 h-16 rounded-full border-4 shadow-sm cursor-pointer transition-all hover:scale-105 ${activeTestimonial === i ? 'border-[#ff5987] scale-110' : 'border-gray-100 hover:border-[#ff5987]/50'}`} 
                 alt={test.name}
                 onClick={() => setActiveTestimonial(i)}
               />
             ))}
          </div>
          <div className="flex-1 bg-white border border-gray-100 p-10 md:p-16 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative min-h-[300px] flex flex-col justify-center overflow-hidden group">
            <Quote className="absolute top-10 right-10 text-[#ff5987] opacity-10" size={80} />
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="relative z-10"
            >
              <h3 className="text-2xl font-bold mb-1 text-black">{testimonials[activeTestimonial].name}</h3>
              <p className="text-sm font-semibold text-[#ff5987] mb-6 uppercase tracking-wider">{testimonials[activeTestimonial].role}</p>
              <p className="text-xl text-gray-600 italic leading-relaxed relative z-10">
                "{testimonials[activeTestimonial].quote}"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. Ready to Transform (Contact) */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-200 relative overflow-hidden">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#ff5987] rounded-full blur-[150px] opacity-10 pointer-events-none" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
           <div>
             <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight text-black">Ready to <span className="text-[#ff5987]">Transform</span><br/>Your Business?</h2>
             <div className="space-y-6 mb-12">
               {['Free Architecture Consultation', 'Guaranteed SEO Improvements', 'Lightning Fast Performance', 'Dedicated Support Team'].map((item, i) => (
                 <div key={i} className="flex items-center gap-4 text-gray-700 text-lg">
                   <CheckCircle className="text-[#ff5987]" size={24} /> <span>{item}</span>
                 </div>
               ))}
             </div>
           </div>
           
           <div className="bg-white border border-gray-100 p-10 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
             <h3 className="text-2xl font-bold mb-8 text-center text-black">Get Your Free Growth Audit</h3>
             <form className="space-y-4">
               <div className="grid grid-cols-2 gap-4">
                 <input type="text" placeholder="First Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#ff5987] focus:bg-white transition-colors" />
                 <input type="text" placeholder="Last Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#ff5987] focus:bg-white transition-colors" />
               </div>
               <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#ff5987] focus:bg-white transition-colors" />
               <input type="text" placeholder="Company Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black focus:outline-none focus:border-[#ff5987] focus:bg-white transition-colors" />
               <button type="button" className="w-full py-4 bg-[#ff5987] hover:bg-[#e04572] text-white rounded-xl font-bold text-lg mt-4 transition-colors shadow-lg shadow-[#ff5987]/30 transform hover:-translate-y-1">
                 Submit Request
               </button>
             </form>
           </div>
        </div>
      </section>

    </main>
  );
}

function TargetIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#ff5987]">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
    </svg>
  );
}
