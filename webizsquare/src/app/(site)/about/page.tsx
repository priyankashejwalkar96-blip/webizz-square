import { Target, Zap, Heart, Award, ArrowRight, CheckCircle2, Users, BarChart, Rocket } from "lucide-react";
import Link from "next/link";
import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import React from 'react';

const iconMap: any = {
  Target: Target,
  Zap: Zap,
  Heart: Heart,
  Award: Award,
};

export default async function AboutPage() {
  const payload = await getPayload({ config: configPromise })
  const aboutData = await payload.findGlobal({
    slug: 'about',
  })

  // Destructure defaults if needed
  const heroHeadline = aboutData?.heroHeadline || "About";
  const heroHighlightedWord = aboutData?.heroHighlightedWord || "Webiz Square";
  const heroDescription = aboutData?.heroDescription || "We are a team of digital marketing experts, AI engineers, and creative strategists dedicated to helping businesses achieve extraordinary growth.";
  const companyHighlightsTitle = aboutData?.companyHighlightsTitle || "Company Highlights";
  const companyHighlightsSubtitle = aboutData?.companyHighlightsSubtitle || "Rapid business growth, real results.";
  const companyStats = aboutData?.companyStats?.length ? aboutData.companyStats : [
    { value: "150+", label: "Happy Clients" },
    { value: "₹50Cr+", label: "Ad Budgets Managed" },
    { value: "300%", label: "Avg. ROI Increase" },
    { value: "4.8/5", label: "Client Rating" }
  ];
  const companyBullets = aboutData?.companyBullets?.length ? aboutData.companyBullets : [
    { text: "Strategy first, commercial focus on execution" },
    { text: "AI-powered automation & analytics" },
    { text: "Transparent reporting & measurable success" }
  ];

  const storyHeadline = aboutData?.storyHeadline || "Our";
  const storyHighlightedWord = aboutData?.storyHighlightedWord || "Story";
  const storyParagraphs = aboutData?.storyParagraphs?.length ? aboutData.storyParagraphs : [
    { text: "Webiz Square was founded with a simple belief: every business deserves access to world-class digital strategy that drives real, measurable results." },
    { text: "What started as a small team of passionate developers and marketers has grown into a full-service digital agency managing enterprise web applications and serving 150+ clients across the globe." }
  ];
  const storyHighlightText = aboutData?.storyHighlightText || "Today, we combine cutting-edge technology with proven marketing strategies to empower our clients in a fast-evolving digital landscape.";
  const storyStats = aboutData?.storyStats?.length ? aboutData.storyStats : companyStats; // default to same stats

  const valuesHeadline = aboutData?.valuesHeadline || "Our Core";
  const valuesHighlightedWord = aboutData?.valuesHighlightedWord || "Values";
  const valuesSubtitle = aboutData?.valuesSubtitle || "The principles that guide everything we do";
  const values = aboutData?.values?.length ? aboutData.values : [
    { title: "Results-Driven", description: "We measure success by the growth we deliver to our clients. ROI is at the core of what we do.", iconName: "Target" },
    { title: "Innovation First", description: "We stay ahead of the curve with cutting-edge AI technology and creative strategy.", iconName: "Zap" },
    { title: "Client-Centric", description: "Your success is our success. We build long-term partnerships, not just campaigns.", iconName: "Heart" },
    { title: "Excellence", description: "We maintain the highest standards in everything we do, from strategy to execution.", iconName: "Award" }
  ];

  const journeyHeadline = aboutData?.journeyHeadline || "Our";
  const journeyHighlightedWord = aboutData?.journeyHighlightedWord || "Journey";
  const journeySubtitle = aboutData?.journeySubtitle || "Key milestones in our growth story";
  const timeline = aboutData?.timeline?.length ? aboutData.timeline : [
    { year: "2020", title: "Founded", description: "Started with a vision to simplify digital marketing and bring engineering excellence to local businesses." },
    { year: "2021", title: "100+ Clients", description: "Reached our first major milestone, expanding our team and operational capacity." },
    { year: "2022", title: "AI Integration", description: "Pioneered AI-powered marketing solutions and automation for enterprise clients." },
    { year: "2023", title: "₹50Cr+ Managed", description: "Managed over ₹50 crores in ad budgets, solidifying our position as a top-tier agency." },
    { year: "2024", title: "Global Reach", description: "Serving 150+ international clients with award-winning software architecture and marketing." }
  ];

  const teamHeadline = aboutData?.teamHeadline || "Our";
  const teamHighlightedWord = aboutData?.teamHighlightedWord || "Team";
  const teamSubtitle = aboutData?.teamSubtitle || "A diverse team of experts working together to deliver exceptional results.";
  const teamStats = aboutData?.teamStats?.length ? aboutData.teamStats : [
    { value: "25+", label: "Expert Strategists" },
    { value: "15+", label: "AI Engineers" },
    { value: "20+", label: "Creative Team" },
    { value: "10+", label: "Support Staff" }
  ];

  const ctaHeadline = aboutData?.ctaHeadline || "Ready to Work Together?";
  const ctaSubtitle = aboutData?.ctaSubtitle || "Find out how we can help grow your business with our proven strategies and AI-powered solutions. Let's make it online.";
  const ctaButtonText = aboutData?.ctaButtonText || "Contact Us";

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
            {heroHeadline} <br className="hidden md:block"/>
            <span className="text-[#ff5987]">{heroHighlightedWord}</span>
          </h1>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-lg">
            {heroDescription}
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
                <h3 className="text-white text-2xl font-bold">{companyHighlightsTitle}</h3>
                <p className="text-gray-400 text-sm mt-1">{companyHighlightsSubtitle}</p>
             </div>
             <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-[#ff5987] border border-white/10">
               <BarChart size={18} />
             </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-8">
            {companyStats.map((stat: any, i: number) => (
             <div key={i} className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition-colors">
               <h4 className="text-2xl font-black text-[#ff5987]">{stat.value}</h4>
               <p className="text-gray-400 text-[10px] font-bold uppercase mt-1 tracking-wider">{stat.label}</p>
             </div>
            ))}
          </div>
          
          <div className="space-y-4">
            {companyBullets.map((bullet: any, i: number) => (
             <div key={i} className="flex items-center gap-3 text-gray-300 text-sm">
               <div className="w-5 h-5 rounded-full bg-[#ff5987]/20 flex items-center justify-center shrink-0">
                 <CheckCircle2 size={12} className="text-[#ff5987]" />
               </div>
               {bullet.text}
             </div>
            ))}
          </div>
        </div>
      </div>

      {/* 2. Our Story */}
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center mb-32">
        <div>
           <h2 className="text-4xl md:text-5xl font-bold mb-6">{storyHeadline} <span className="text-[#ff5987]">{storyHighlightedWord}</span></h2>
           <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
             {storyParagraphs.map((p: any, i: number) => (
               <p key={i}>{p.text}</p>
             ))}
             {storyHighlightText && (
               <p className="text-[#ff5987] font-medium border-l-4 border-[#ff5987] pl-4 italic bg-[#ff5987]/5 py-2">
                 {storyHighlightText}
               </p>
             )}
           </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {storyStats.map((stat: any, i: number) => (
           <div key={i} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 text-center flex flex-col justify-center h-48 hover:-translate-y-1 transition-transform">
              <h4 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] mb-2">{stat.value}</h4>
              <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
           </div>
          ))}
        </div>
      </div>

      {/* 3. Core Values */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{valuesHeadline} <span className="text-[#ff5987]">{valuesHighlightedWord}</span></h2>
          <p className="text-gray-500 text-lg">{valuesSubtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {values.map((val: any, i: number) => {
            const Icon = iconMap[val.iconName] || Target;
            return (
             <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center hover:shadow-xl transition-shadow">
               <div className="w-14 h-14 bg-[#ff5987]/10 rounded-2xl flex items-center justify-center text-[#ff5987] mb-6 shadow-inner">
                 <Icon size={26} />
               </div>
               <h3 className="text-xl font-bold mb-3">{val.title}</h3>
               <p className="text-gray-500 text-sm leading-relaxed">{val.description}</p>
             </div>
            )
          })}
        </div>
      </div>

      {/* 4. Journey Timeline */}
      <div className="max-w-5xl mx-auto px-6 mb-32 relative">
         <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold mb-4">{journeyHeadline} <span className="text-[#ff5987]">{journeyHighlightedWord}</span></h2>
           <p className="text-gray-500 text-lg">{journeySubtitle}</p>
         </div>

         <div className="relative pt-10 pb-10">
           {/* Vertical Line */}
           <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff5987]/0 via-[#ff5987]/30 to-[#ff5987]/0"></div>
           
           {/* Timeline Items */}
           {timeline.map((item: any, i: number) => {
             const isLeft = i % 2 === 0;
             const isLast = i === timeline.length - 1;
             return (
               <div key={i} className="flex flex-col md:flex-row items-start md:items-center justify-between mb-16 relative">
                 {isLeft ? (
                   <>
                     <div className="md:w-5/12 text-left md:text-right pl-16 md:pl-0 w-full">
                       <div className={`text-white p-6 md:p-8 rounded-[2rem] inline-block text-left w-full max-w-[340px] md:float-right border relative group ${isLast ? 'bg-gradient-to-br from-[#1c1c1c] to-[#ff5987]/20 shadow-[0_10px_40px_rgba(255,89,135,0.3)] border-[#ff5987]/50' : 'bg-[#1c1c1c] shadow-xl border-gray-800'}`}>
                         <div className="absolute top-1/2 -right-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-[#1c1c1c] hidden md:block"></div>
                         <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
                         <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                       </div>
                     </div>
                     <div className="absolute left-0 md:static md:w-2/12 flex justify-center mt-6 md:mt-0">
                       <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-[0_0_20px_rgba(255,89,135,0.6)] z-10 border-4 border-gray-50">
                         {item.year}
                       </div>
                     </div>
                     <div className="md:w-5/12 hidden md:block"></div>
                   </>
                 ) : (
                   <>
                     <div className="md:w-5/12 hidden md:block"></div>
                     <div className="absolute left-0 md:static md:w-2/12 flex justify-center mt-6 md:mt-0">
                       <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base shadow-[0_0_20px_rgba(255,89,135,0.6)] z-10 border-4 border-gray-50">
                         {item.year}
                       </div>
                     </div>
                     <div className="md:w-5/12 text-left pl-16 md:pl-0 w-full">
                       <div className={`text-white p-6 md:p-8 rounded-[2rem] inline-block text-left w-full max-w-[340px] border relative ${isLast ? 'bg-gradient-to-br from-[#1c1c1c] to-[#ff5987]/20 shadow-[0_10px_40px_rgba(255,89,135,0.3)] border-[#ff5987]/50' : 'bg-[#1c1c1c] shadow-xl border-gray-800'}`}>
                         <div className="absolute top-1/2 -left-3 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[#1c1c1c] hidden md:block"></div>
                         <h4 className="font-bold text-xl mb-2 text-white">{item.title}</h4>
                         <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                       </div>
                     </div>
                   </>
                 )}
               </div>
             )
           })}
         </div>
      </div>

      {/* 5. Team Stats */}
      <div className="max-w-7xl mx-auto px-6 mb-32 text-center">
         <h2 className="text-4xl md:text-5xl font-bold mb-4">{teamHeadline} <span className="text-[#ff5987]">{teamHighlightedWord}</span></h2>
         <p className="text-gray-500 mb-12 text-lg">{teamSubtitle}</p>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
           {teamStats.map((stat: any, i: number) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 flex flex-col items-center justify-center hover:-translate-y-2 transition-transform">
               <h4 className="text-4xl md:text-5xl font-black text-[#ff5987] mb-3">{stat.value}</h4>
               <p className="font-bold text-gray-900 mb-1 text-lg">{stat.label}</p>
            </div>
           ))}
         </div>
      </div>

      {/* 6. CTA Section */}
      <div className="max-w-5xl mx-auto px-6">
         <div className="bg-[#1c1c1c] rounded-[2.5rem] p-12 md:p-16 text-center shadow-2xl border border-gray-800 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff5987] rounded-full blur-[100px] opacity-10 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff5987] rounded-full blur-[100px] opacity-10 pointer-events-none" />
           
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">{ctaHeadline}</h2>
           <p className="text-gray-400 mb-10 text-lg max-w-xl mx-auto relative z-10">
             {ctaSubtitle}
           </p>
           <div className="flex flex-wrap justify-center gap-4 relative z-10">
             <Link href="/contact" className="px-10 py-4 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white rounded-full font-bold hover:shadow-[0_0_30px_rgba(255,89,135,0.4)] transition-all transform hover:-translate-y-1">
               {ctaButtonText} <ArrowRight size={18} className="inline ml-2" />
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
