import { Target, Zap, Heart, Award, ArrowRight, CheckCircle2, Users, BarChart, Rocket } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-black font-sans pb-32 pt-40">
      
      {/* 1. Hero Section */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center mb-32 relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff5987] rounded-full blur-[150px] opacity-5 pointer-events-none -z-10" />
        
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#ff5987]/10 text-[#ff5987] border border-[#ff5987]/20 text-xs font-bold mb-6">
            <Users size={14} /> About Webiz Square
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-bold mb-6 tracking-tight leading-[1.1]">
            About <br className="hidden md:block"/>
            <span className="text-[#ff5987]">Webiz Square</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
            We are a team of digital marketing experts, AI engineers, and creative strategists dedicated to helping businesses achieve extraordinary growth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact" className="px-8 py-3.5 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-full font-bold hover:shadow-[0_0_20px_rgba(255,89,135,0.4)] transition-all transform hover:-translate-y-1">
              Contact Us <ArrowRight size={16} className="inline ml-1" />
            </Link>
            <Link href="/services" className="px-8 py-3.5 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-black hover:border-gray-300 rounded-full font-bold transition-all shadow-sm">
              View Services
            </Link>
          </div>
        </div>

        <div className="bg-[#1c1c1c] rounded-[2rem] p-8 md:p-10 shadow-2xl relative">
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#ff5987] rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(255,89,135,0.6)] animate-pulse">
             <Rocket size={20} />
          </div>
          
          <div className="flex justify-between items-start mb-8">
             <div>
                <h3 className="text-white text-2xl font-bold">Company Highlights</h3>
                <p className="text-gray-400 text-sm mt-1">Rapid business growth, real results.</p>
             </div>
             <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#ff5987] border border-white/10">
               <BarChart size={18} />
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
             <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors">
               <h4 className="text-2xl font-black text-[#ff5987]">150+</h4>
               <p className="text-gray-400 text-[10px] font-bold uppercase mt-1 tracking-wider">Happy Clients</p>
             </div>
             <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors">
               <h4 className="text-2xl font-black text-[#ff5987]">₹50Cr+</h4>
               <p className="text-gray-400 text-[10px] font-bold uppercase mt-1 tracking-wider">Ad Budgets Managed</p>
             </div>
             <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors">
               <h4 className="text-2xl font-black text-[#ff5987]">300%</h4>
               <p className="text-gray-400 text-[10px] font-bold uppercase mt-1 tracking-wider">Avg. ROI Increase</p>
             </div>
             <div className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors">
               <h4 className="text-2xl font-black text-[#ff5987]">4.8/5</h4>
               <p className="text-gray-400 text-[10px] font-bold uppercase mt-1 tracking-wider">Client Rating</p>
             </div>
          </div>
          
          <div className="space-y-4">
             <div className="flex items-center gap-3 text-gray-300 text-sm">
               <div className="w-5 h-5 rounded-full bg-[#ff5987]/20 flex items-center justify-center shrink-0">
                 <CheckCircle2 size={12} className="text-[#ff5987]" />
               </div>
               Strategy first, commercial focus on execution
             </div>
             <div className="flex items-center gap-3 text-gray-300 text-sm">
               <div className="w-5 h-5 rounded-full bg-[#ff5987]/20 flex items-center justify-center shrink-0">
                 <CheckCircle2 size={12} className="text-[#ff5987]" />
               </div>
               AI-powered automation & analytics
             </div>
             <div className="flex items-center gap-3 text-gray-300 text-sm">
               <div className="w-5 h-5 rounded-full bg-[#ff5987]/20 flex items-center justify-center shrink-0">
                 <CheckCircle2 size={12} className="text-[#ff5987]" />
               </div>
               Transparent reporting & measurable success
             </div>
          </div>
        </div>
      </div>

      {/* 2. Our Story */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
           <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-[#ff5987]">Story</span></h2>
           <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
             <p>
               Webiz Square was founded with a simple belief: every business deserves access to world-class digital strategy that drives real, measurable results.
             </p>
             <p>
               What started as a small team of passionate developers and marketers has grown into a full-service digital agency managing enterprise web applications and serving 150+ clients across the globe.
             </p>
             <p className="text-[#ff5987] font-medium border-l-4 border-[#ff5987] pl-4 italic bg-[#ff5987]/5 py-2">
               Today, we combine cutting-edge technology with proven marketing strategies to empower our clients in a fast-evolving digital landscape.
             </p>
           </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
           <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 text-center flex flex-col justify-center h-48 hover:-translate-y-1 transition-transform">
              <h4 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] mb-2">150+</h4>
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">Happy Clients</p>
           </div>
           <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 text-center flex flex-col justify-center h-48 hover:-translate-y-1 transition-transform">
              <h4 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] mb-2">₹50Cr+</h4>
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">Budgets Managed</p>
           </div>
           <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 text-center flex flex-col justify-center h-48 hover:-translate-y-1 transition-transform">
              <h4 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] mb-2">300%</h4>
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">Avg. ROI Increase</p>
           </div>
           <div className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 text-center flex flex-col justify-center h-48 hover:-translate-y-1 transition-transform">
              <h4 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] mb-2">4.8/5</h4>
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">Client Rating</p>
           </div>
        </div>
      </div>

      {/* 3. Core Values */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core <span className="text-[#ff5987]">Values</span></h2>
          <p className="text-gray-500 text-lg">The principles that guide everything we do</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-xl transition-shadow">
             <div className="w-14 h-14 bg-[#ff5987]/10 rounded-2xl flex items-center justify-center text-[#ff5987] mb-6 shadow-inner">
               <Target size={26} />
             </div>
             <h3 className="text-xl font-bold mb-3">Results-Driven</h3>
             <p className="text-gray-500 text-sm leading-relaxed">We measure success by the growth we deliver to our clients. ROI is at the core of what we do.</p>
           </div>
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-xl transition-shadow">
             <div className="w-14 h-14 bg-[#ff5987]/10 rounded-2xl flex items-center justify-center text-[#ff5987] mb-6 shadow-inner">
               <Zap size={26} />
             </div>
             <h3 className="text-xl font-bold mb-3">Innovation First</h3>
             <p className="text-gray-500 text-sm leading-relaxed">We stay ahead of the curve with cutting-edge AI technology and creative strategy.</p>
           </div>
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-xl transition-shadow">
             <div className="w-14 h-14 bg-[#ff5987]/10 rounded-2xl flex items-center justify-center text-[#ff5987] mb-6 shadow-inner">
               <Heart size={26} />
             </div>
             <h3 className="text-xl font-bold mb-3">Client-Centric</h3>
             <p className="text-gray-500 text-sm leading-relaxed">Your success is our success. We build long-term partnerships, not just campaigns.</p>
           </div>
           <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-xl transition-shadow">
             <div className="w-14 h-14 bg-[#ff5987]/10 rounded-2xl flex items-center justify-center text-[#ff5987] mb-6 shadow-inner">
               <Award size={26} />
             </div>
             <h3 className="text-xl font-bold mb-3">Excellence</h3>
             <p className="text-gray-500 text-sm leading-relaxed">We maintain the highest standards in everything we do, from strategy to execution.</p>
           </div>
        </div>
      </div>

      {/* 4. Journey Timeline */}
      <div className="max-w-5xl mx-auto px-6 mb-32 relative">
         <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-[#ff5987]">Journey</span></h2>
           <p className="text-gray-500 text-lg">Key milestones in our growth story</p>
         </div>

         <div className="relative pt-10 pb-10">
           {/* Vertical Line */}
           <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff5987]/0 via-[#ff5987]/30 to-[#ff5987]/0"></div>
           
           {/* Timeline Items */}
           
           {/* Item 1 (Left on desktop, Right on mobile) */}
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 relative">
             <div className="md:w-5/12 text-left md:text-right pl-16 md:pl-0 w-full">
               <div className="bg-[#1c1c1c] text-white p-6 md:p-8 rounded-[2rem] shadow-xl inline-block text-left w-full max-w-[340px] md:float-right border border-gray-800 relative group">
                 <div className="absolute top-1/2 -right-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#1c1c1c] hidden md:block"></div>
                 <h4 className="font-bold text-xl mb-2 text-white">Founded</h4>
                 <p className="text-gray-400 text-sm leading-relaxed">Started with a vision to simplify digital marketing and bring engineering excellence to local businesses.</p>
               </div>
             </div>
             <div className="absolute left-0 md:static md:w-2/12 flex justify-center mt-6 md:mt-0">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-[0_0_20px_rgba(255,89,135,0.6)] z-10 border-4 border-gray-50">
                 2020
               </div>
             </div>
             <div className="md:w-5/12 hidden md:block"></div>
           </div>

           {/* Item 2 (Right) */}
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 relative">
             <div className="md:w-5/12 hidden md:block"></div>
             <div className="absolute left-0 md:static md:w-2/12 flex justify-center mt-6 md:mt-0">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-[0_0_20px_rgba(255,89,135,0.6)] z-10 border-4 border-gray-50">
                 2021
               </div>
             </div>
             <div className="md:w-5/12 text-left pl-16 md:pl-0 w-full">
               <div className="bg-[#1c1c1c] text-white p-6 md:p-8 rounded-[2rem] shadow-xl inline-block text-left w-full max-w-[340px] border border-gray-800 relative">
                 <div className="absolute top-1/2 -left-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#1c1c1c] hidden md:block"></div>
                 <h4 className="font-bold text-xl mb-2 text-white">100+ Clients</h4>
                 <p className="text-gray-400 text-sm leading-relaxed">Reached our first major milestone, expanding our team and operational capacity.</p>
               </div>
             </div>
           </div>
           
           {/* Item 3 (Left) */}
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 relative">
             <div className="md:w-5/12 text-left md:text-right pl-16 md:pl-0 w-full">
               <div className="bg-[#1c1c1c] text-white p-6 md:p-8 rounded-[2rem] shadow-xl inline-block text-left w-full max-w-[340px] md:float-right border border-gray-800 relative group">
                 <div className="absolute top-1/2 -right-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#1c1c1c] hidden md:block"></div>
                 <h4 className="font-bold text-xl mb-2 text-white">AI Integration</h4>
                 <p className="text-gray-400 text-sm leading-relaxed">Pioneered AI-powered marketing solutions and automation for enterprise clients.</p>
               </div>
             </div>
             <div className="absolute left-0 md:static md:w-2/12 flex justify-center mt-6 md:mt-0">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-[0_0_20px_rgba(255,89,135,0.6)] z-10 border-4 border-gray-50">
                 2022
               </div>
             </div>
             <div className="md:w-5/12 hidden md:block"></div>
           </div>

           {/* Item 4 (Right) */}
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 relative">
             <div className="md:w-5/12 hidden md:block"></div>
             <div className="absolute left-0 md:static md:w-2/12 flex justify-center mt-6 md:mt-0">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-[0_0_20px_rgba(255,89,135,0.6)] z-10 border-4 border-gray-50">
                 2023
               </div>
             </div>
             <div className="md:w-5/12 text-left pl-16 md:pl-0 w-full">
               <div className="bg-[#1c1c1c] text-white p-6 md:p-8 rounded-[2rem] shadow-xl inline-block text-left w-full max-w-[340px] border border-gray-800 relative">
                 <div className="absolute top-1/2 -left-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#1c1c1c] hidden md:block"></div>
                 <h4 className="font-bold text-xl mb-2 text-white">₹50Cr+ Managed</h4>
                 <p className="text-gray-400 text-sm leading-relaxed">Managed over ₹50 crores in ad budgets, solidifying our position as a top-tier agency.</p>
               </div>
             </div>
           </div>

           {/* Item 5 (Left) */}
           <div className="flex flex-col md:flex-row items-start md:items-center justify-between relative">
             <div className="md:w-5/12 text-left md:text-right pl-16 md:pl-0 w-full">
               <div className="bg-gradient-to-br from-[#1c1c1c] to-[#ff5987]/20 text-white p-6 md:p-8 rounded-[2rem] shadow-[0_10px_40px_rgba(255,89,135,0.3)] inline-block text-left w-full max-w-[340px] md:float-right border border-[#ff5987]/50 relative group">
                 <div className="absolute top-1/2 -right-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#1c1c1c] hidden md:block"></div>
                 <h4 className="font-bold text-xl mb-2 text-white">Global Reach</h4>
                 <p className="text-gray-300 text-sm leading-relaxed">Serving 150+ international clients with award-winning software architecture and marketing.</p>
               </div>
             </div>
             <div className="absolute left-0 md:static md:w-2/12 flex justify-center mt-6 md:mt-0">
               <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-[0_0_20px_rgba(255,89,135,0.6)] z-10 border-4 border-gray-50">
                 2024
               </div>
             </div>
             <div className="md:w-5/12 hidden md:block"></div>
           </div>

         </div>
      </div>

      {/* 5. Team Stats */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
         <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="text-[#ff5987]">Team</span></h2>
         <p className="text-gray-500 mb-12 text-lg">A diverse team of experts working together to deliver exceptional results.</p>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform">
               <h4 className="text-4xl md:text-5xl font-black text-[#ff5987] mb-3">25+</h4>
               <p className="font-bold text-gray-900 mb-1 text-lg">Expert Strategists</p>
               <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">Marketing Specialists</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform">
               <h4 className="text-4xl md:text-5xl font-black text-[#ff5987] mb-3">15+</h4>
               <p className="font-bold text-gray-900 mb-1 text-lg">AI Engineers</p>
               <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">Development & IT</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform">
               <h4 className="text-4xl md:text-5xl font-black text-[#ff5987] mb-3">20+</h4>
               <p className="font-bold text-gray-900 mb-1 text-lg">Creative Team</p>
               <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">Designers & Writers</p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform">
               <h4 className="text-4xl md:text-5xl font-black text-[#ff5987] mb-3">10+</h4>
               <p className="font-bold text-gray-900 mb-1 text-lg">Support Staff</p>
               <p className="text-[11px] text-gray-500 uppercase tracking-widest font-bold">Dedicated Account Mgrs</p>
            </div>
         </div>
      </div>

      {/* 6. CTA Section */}
      <div className="max-w-5xl mx-auto px-6">
         <div className="bg-[#1c1c1c] rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl border border-gray-800 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5987] rounded-full blur-[100px] opacity-10 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff5987] rounded-full blur-[100px] opacity-10 pointer-events-none" />
           
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to Work Together?</h2>
           <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto relative z-10">
             Find out how we can help grow your business with our proven strategies and AI-powered solutions. Let's make it online.
           </p>
           <div className="flex flex-wrap justify-center gap-4 relative z-10">
             <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-full font-bold hover:shadow-[0_0_30px_rgba(255,89,135,0.4)] transition-all transform hover:-translate-y-1">
               Contact Us <ArrowRight size={18} className="inline ml-2" />
             </Link>
             <Link href="/services" className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-black rounded-full font-bold transition-all shadow-sm">
               View Services
             </Link>
           </div>
         </div>
      </div>

    </div>
  );
}
