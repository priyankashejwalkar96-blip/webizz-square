import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const formData = new FormData(e.currentTarget);
      const payload = {
        name: formData.get('name') as string,
        phone: formData.get('phone') as string,
        email: formData.get('email') as string,
        serviceInterested: formData.get('serviceNeeded') as string,
        message: formData.get('message') as string,
        sourceType: 'quote_form',
        landingPage: typeof window !== 'undefined' ? window.location.pathname : '',
      };

      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit quote request');
      }

      // Track in dataLayer for Google Analytics / GTM (Section 13 specification)
      if (typeof window !== 'undefined' && (window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: 'generate_lead',
          form_name: 'quote_modal',
          service: payload.serviceInterested,
        });
      }

      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 2500);
    } catch (err: any) {
      setErrorMessage(err.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center z-[101] p-4 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden pointer-events-auto relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>

              {/* Header */}
              <div className="px-8 pt-8 pb-6 border-b border-gray-100">
                <h3 className="text-2xl font-bold text-black mb-2">Get a Free Quote</h3>
                <p className="text-gray-500 text-sm">Fill out the form below and our team will get back to you within 24 hours.</p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                {isSuccess ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    className="py-12 flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                      <Send size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-black mb-2">Request Sent!</h4>
                    <p className="text-gray-500">We've received your details and will be in touch shortly.</p>
                  </motion.div>
                ) : (
                  <>
                    {errorMessage && (
                      <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 rounded-xl">
                        {errorMessage}
                      </div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Name</label>
                        <input name="name" required type="text" placeholder="John Doe" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5987]/20 focus:border-[#ff5987] transition-all text-black" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Phone</label>
                        <input name="phone" required type="tel" placeholder="+1 (555) 000-0000" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5987]/20 focus:border-[#ff5987] transition-all text-black" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Email</label>
                      <input name="email" required type="email" placeholder="john@company.com" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5987]/20 focus:border-[#ff5987] transition-all text-black" />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Service Needed</label>
                      <select name="serviceNeeded" required defaultValue="" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5987]/20 focus:border-[#ff5987] transition-all text-black appearance-none">
                        <option value="" disabled>Select a service...</option>
                        <option value="Website Development">Website Development</option>
                        <option value="Mobile Application">Mobile Application Development</option>
                        <option value="ERP Software">ERP Software Development</option>
                        <option value="SEO">Search Engine Optimization</option>
                        <option value="Other">Other IT Services</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Message</label>
                      <textarea name="message" rows={3} placeholder="Tell us about your project requirements..." className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff5987]/20 focus:border-[#ff5987] transition-all text-black resize-none" />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#ff5987] to-[#ff3b6a] text-white py-4 rounded-xl font-bold text-[15px] hover:shadow-[0_10px_30px_rgba(255,89,135,0.4)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <>Submit Request <Send size={18} /></>
                      )}
                    </button>
                  </>
                )}
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
