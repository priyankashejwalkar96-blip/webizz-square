"use client";

import { motion } from "motion/react";
import * as Icons from "lucide-react";
import { CheckCircle2, Shield, Zap, Layout } from "lucide-react";
import Link from "next/link";

export default function ServiceClient({ service }: { service: any }) {
  const iconName = service.icon || "Layout";
  const Icon = (Icons as any)[iconName] || Layout;

  return (
    <div className="pt-24 pb-24 min-h-screen">
      <div className="relative h-[60vh] min-h-[500px] flex items-center">
        <div className="absolute inset-0">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/30" />
        </div>
        
        <div className="max-w-[1400px] mx-auto px-6 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white mb-6">
              <Icon size={16} className="text-[#ff5987]" />
              <span className="text-sm font-semibold tracking-wide uppercase">Our Services</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {service.description}
            </p>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-[0_10px_25px_rgba(255,89,135,0.4)] transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Project <Icons.ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Why Choose Our <span className="text-[#ff5987]">{service.title}</span> Services?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We combine industry best practices with cutting-edge technology to deliver solutions that not only meet your current needs but also scale with your future growth. Our team of experts works closely with you to ensure every aspect of the project aligns with your business goals.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {service.features?.map((feature: string, index: number) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 size={24} className="text-[#ff5987] shrink-0" />
                  <span className="font-semibold text-gray-800 dark:text-gray-200">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4 pt-8">
              <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 text-center border border-gray-100 dark:border-white/10">
                <Shield className="w-12 h-12 text-[#ff5987] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Secure & Reliable</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Built with enterprise-grade security standards.</p>
              </div>
              <div className="bg-gradient-to-br from-[#ff5987] to-[#ff3b6a] rounded-3xl p-8 text-center text-white shadow-xl shadow-[#ff5987]/20">
                <Zap className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="font-bold mb-2">Fast Performance</h3>
                <p className="text-sm text-white/80">Optimized for maximum speed and efficiency.</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-3xl p-8 text-center text-white shadow-xl">
                <h3 className="text-4xl font-black mb-2 text-[#ff5987]">100%</h3>
                <p className="text-sm text-gray-400">Client Satisfaction</p>
              </div>
              <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 text-center border border-gray-100 dark:border-white/10">
                <Layout className="w-12 h-12 text-[#ff5987] mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Modern Stack</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">Using the latest technologies and frameworks.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
