import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Clock, ArrowRight, Sparkles, SendHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

const ContactUs = () => {
  const { t, language, isRTL } = useLanguage();
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const branches = [
    {
      id: '01',
      name: t.footer?.damietta || (isRTL ? 'فرع دمياط' : 'Damietta Branch'),
      address: isRTL ? 'مول صفوة، الدور الثاني' : 'Safwa Mall, 2nd Floor',
      phone: '0572260062',
      mapUrl: 'https://maps.google.com',
    },
    {
      id: '02',
      name: t.footer?.newDamietta || (isRTL ? 'فرع دمياط الجديدة' : 'New Damietta'),
      address: isRTL ? 'المنطقة المركزية' : 'Central Zone',
      phone: '0572260063',
      mapUrl: 'https://maps.google.com',
    },
  ];

  // Animation variants for staggered elegant entrance
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF7] relative overflow-hidden pt-36 pb-32 selection:bg-amber-100 selection:text-amber-900 font-cairo">
      
      {/* ================= PURE LIGHT AESTHETICS ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Soft Grain */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.015] mix-blend-multiply" />
        
        {/* Elegant Luminous Orbs */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-amber-100/50 via-orange-50/20 to-transparent rounded-full blur-[100px] opacity-70 -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-100 via-stone-100/40 to-transparent rounded-full blur-[100px] opacity-80 translate-y-1/4 -translate-x-1/4" />
        
        {/* Fine Grid Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        
        {/* ================= MINIMALIST HERO ================= */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="text-center mb-20 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center gap-3 mb-6 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-amber-700 text-[11px] font-bold tracking-[0.25em] uppercase">
              {isRTL ? 'خدمة العملاء والحجوزات' : 'Concierge & Booking'}
            </span>
            <Sparkles className="w-4 h-4 text-amber-500" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight">
            {isRTL ? (
              <>نحن أقرب إليكِ <br /> <span className="font-light text-slate-500 italic">مما تتخيلين</span></>
            ) : (
              <>We are closer <br /> <span className="font-light text-slate-500 italic">than you think</span></>
            )}
          </h1>
        </motion.div>

        {/* ================= ASYMMETRICAL LUXURY GRID ================= */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* ----- LEFT COLUMN: Branches & Direct Contact (Col 5) ----- */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className={cn("lg:col-span-5 flex flex-col gap-6", isRTL ? "lg:order-2" : "lg:order-1")}
          >
            {/* Branches Cards */}
            {branches.map((branch, index) => (
              <div 
                key={index} 
                className={cn(
                  "group relative bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all duration-500 hover:shadow-[0_20px_60px_rgb(0,0,0,0.06)] hover:border-amber-100 overflow-hidden",
                  isRTL ? "text-right" : "text-left"
                )}
              >
                {/* Elegant Number Watermark */}
                <div className={cn(
                  "absolute -top-6 text-[8rem] font-black text-slate-50 font-serif leading-none select-none pointer-events-none transition-colors duration-500 group-hover:text-amber-50/50",
                  isRTL ? "-left-6" : "-right-6"
                )}>
                  {branch.id}
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{branch.name}</h3>
                  
                  <div className="space-y-5">
                    {/* Address Line */}
                    <div className={cn("flex items-start gap-4", isRTL ? "flex-row-reverse" : "")}>
                      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-amber-50 group-hover:text-amber-600">
                        <MapPin className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <div>
                        <p className="text-slate-600 font-medium leading-relaxed">{branch.address}</p>
                        <a 
                          href={branch.mapUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={cn("inline-flex items-center gap-1.5 mt-2 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors uppercase tracking-wider", isRTL ? "flex-row-reverse" : "")}
                        >
                          {t.common?.directions || (isRTL ? 'الخريطة والاتجاهات' : 'Map & Directions')}
                          <ArrowRight className={cn("w-3.5 h-3.5", isRTL ? "rotate-180" : "")} />
                        </a>
                      </div>
                    </div>

                    {/* Phone Line */}
                    <div className={cn("flex items-center gap-4", isRTL ? "flex-row-reverse" : "")}>
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 transition-colors group-hover:bg-amber-50 group-hover:text-amber-600">
                        <Phone className="w-5 h-5 stroke-[1.5]" />
                      </div>
                      <a href={`tel:${branch.phone}`} className="text-slate-600 font-medium hover:text-slate-900 transition-colors text-lg" dir="ltr">
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Connect Card */}
            <div className={cn(
              "bg-slate-900 text-white p-8 rounded-[2rem] shadow-xl relative overflow-hidden",
              isRTL ? "text-right" : "text-left"
            )}>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-transparent opacity-50" />
              <div className="relative z-10 space-y-6">
                <div className={cn("flex items-center gap-4", isRTL ? "flex-row-reverse" : "")}>
                  <Clock className="w-6 h-6 text-amber-400 stroke-[1.5] shrink-0" />
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{t.footer?.workingHours || (isRTL ? 'ساعات العمل' : 'Working Hours')}</p>
                    <p className="font-bold tracking-wide">{t.footer?.hours || '10:00 AM - 10:00 PM'}</p>
                  </div>
                </div>
                <div className="h-px w-full bg-white/10" />
                <div className={cn("flex items-center gap-4", isRTL ? "flex-row-reverse" : "")}>
                  <Mail className="w-6 h-6 text-amber-400 stroke-[1.5] shrink-0" />
                  <div>
                    <p className="text-slate-400 text-sm mb-1">{isRTL ? 'البريد الإلكتروني' : 'Email Address'}</p>
                    <a href="mailto:info@sftouch.com" className="font-bold tracking-wide hover:text-amber-400 transition-colors">info@sftouch.com</a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ----- RIGHT COLUMN: The High-End Stationery Form (Col 7) ----- */}
          <motion.div 
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              "lg:col-span-7 bg-white/60 backdrop-blur-3xl border border-white p-10 sm:p-14 lg:p-16 rounded-[2.5rem] shadow-[0_20px_80px_rgba(15,23,42,0.04)]",
              isRTL ? "lg:order-1 text-right" : "lg:order-2 text-left"
            )}
          >
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                {language === 'ar' ? 'أرسلي استفساركِ' : 'Send an Inquiry'}
              </h2>
              <p className="text-slate-500 font-medium leading-relaxed max-w-md">
                {language === 'ar' 
                  ? 'فريقنا الطبي والمنسقون مستعدون لتلقي رسالتك، وسنقوم بالرد في أقرب وقت لتحديد موعدك.' 
                  : 'Our medical team and coordinators are ready to receive your message and will reply shortly.'}
              </p>
            </div>

            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              
              {/* Form Input Generator */}
              {[
                { id: 'name', type: 'text', label: t.contact?.name || (isRTL ? 'الاسم بالكامل' : 'Full Name') },
                { id: 'phone', type: 'tel', label: t.contact?.phone || (isRTL ? 'رقم الهاتف' : 'Phone Number') },
                { id: 'email', type: 'email', label: t.contact?.email || (isRTL ? 'البريد الإلكتروني' : 'Email Address') },
              ].map((field) => (
                <div key={field.id} className="relative group">
                  <input 
                    type={field.type}
                    placeholder=" "
                    onFocus={() => setFocusedInput(field.id)}
                    onBlur={() => setFocusedInput(null)}
                    className={cn(
                      "peer w-full bg-transparent border-b border-slate-200 py-3 text-lg text-slate-900 focus:outline-none placeholder-transparent relative z-10",
                      isRTL ? "text-right" : "text-left"
                    )}
                  />
                  {/* Floating Label */}
                  <label className={cn(
                    "absolute top-3 text-slate-400 transition-all duration-300 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-600 peer-focus:font-bold peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 pointer-events-none z-0",
                    isRTL ? "right-0" : "left-0"
                  )}>
                    {field.label}
                  </label>
                  {/* Animated Focus Line */}
                  <div className={cn(
                    "absolute bottom-0 h-[2px] bg-amber-500 transition-all duration-500 ease-out z-20",
                    focusedInput === field.id ? "w-full opacity-100" : "w-0 opacity-0",
                    isRTL ? "right-0" : "left-0"
                  )} />
                </div>
              ))}

              {/* Message Textarea */}
              <div className="relative group pt-4">
                <textarea 
                  placeholder=" "
                  rows={3}
                  onFocus={() => setFocusedInput('message')}
                  onBlur={() => setFocusedInput(null)}
                  className={cn(
                    "peer w-full bg-transparent border-b border-slate-200 py-3 text-lg text-slate-900 focus:outline-none placeholder-transparent resize-none relative z-10",
                    isRTL ? "text-right" : "text-left"
                  )}
                />
                <label className={cn(
                  "absolute top-7 text-slate-400 transition-all duration-300 peer-focus:top-0 peer-focus:text-xs peer-focus:text-amber-600 peer-focus:font-bold peer-placeholder-shown:top-7 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 pointer-events-none z-0",
                  isRTL ? "right-0" : "left-0"
                )}>
                  {t.contact?.message || (isRTL ? 'رسالتك أو تفاصيل الحجز...' : 'Your Message or Booking Details...')}
                </label>
                <div className={cn(
                  "absolute bottom-1 h-[2px] bg-amber-500 transition-all duration-500 ease-out z-20",
                  focusedInput === 'message' ? "w-full opacity-100" : "w-0 opacity-0",
                  isRTL ? "right-0" : "left-0"
                )} />
              </div>

              {/* Elegant Submit Button */}
              <div className={cn("pt-4", isRTL ? "text-right" : "text-left")}>
                <button type="submit" className={cn(
                  "group/submit relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-slate-900 px-10 py-4 font-bold text-white transition-all hover:bg-amber-500 hover:shadow-[0_10px_40px_rgba(245,158,11,0.3)] active:scale-95 w-full sm:w-auto",
                  isRTL ? "flex-row-reverse" : ""
                )}>
                  <span className="relative z-10 tracking-wide">
                    {t.contact?.send || (isRTL ? 'إرسال الرسالة' : 'Send Message')}
                  </span>
                  <SendHorizontal className={cn(
                    "relative z-10 w-5 h-5 transition-transform duration-300 group-hover/submit:translate-x-1", 
                    isRTL ? "rotate-180 group-hover/submit:-translate-x-1" : ""
                  )} />
                </button>
              </div>

            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;