import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const { t, isRTL } = useLanguage();

  // 1. إعدادات الحركة (هادئة وناعمة جداً)
  // تم حل مشكلة TypeScript هنا باستخدام 'as [number, number, number, number]'
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] 
      } 
    }
  };

  const container: Variants = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    // زيادة البادنج العلوي (pt-32) لضمان عدم تغطية النافبار للمحتوى
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden pt-32 pb-12 lg:pt-40">
      
      {/* ================= BACKGROUND PATTERN ================= */}
      {/* نقش نقاط خفيف جداً لإعطاء ملمس للخلفية */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] opacity-40 pointer-events-none" />
      
      {/* بقعة لونية ذهبية خفيفة جداً في الخلفية */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* ================= LEFT: TEXT CONTENT ================= */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start text-start order-2 lg:order-1"
          >
            {/* Tagline */}
            <motion.div variants={fadeUp} className="mb-4">
               <span className="px-3 py-1 rounded-full border border-slate-200 bg-slate-50 text-slate-600 text-xs font-bold tracking-wide uppercase">
                 {isRTL ? '✨ عيادة التجميل الأولى' : '✨ Premier Aesthetic Clinic'}
               </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.15] mb-6 font-cairo tracking-tight">
              {isRTL ? (
                <>
                  اكتشفي جمالكِ <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
                    الحقيقي
                  </span>
                </>
              ) : (
                <>
                  Reveal Your <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-yellow-500">
                    True Beauty
                  </span>
                </>
              )}
            </motion.h1>

            {/* Description */}
            <motion.p variants={fadeUp} className="text-lg text-slate-500 mb-8 leading-relaxed max-w-md font-medium">
              {isRTL 
                ? 'رحلة من العناية الفاخرة تبدأ هنا. نجمع بين الخبرة الطبية وأحدث التقنيات لنمنحك الثقة التي تستحقينها.'
                : 'A journey of luxury care starts here. Combining medical expertise with modern technology to give you the confidence you deserve.'}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 w-full">
              <a href="tel:0572260062">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/10 flex items-center gap-2 group active:scale-95">
                   <span className="font-bold">{t.hero.cta || (isRTL ? 'احجزي موعدك' : 'Book Appointment')}</span>
                   <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                </button>
              </a>
              
              <Link to="/services">
                <button className="px-8 py-4 text-slate-600 font-bold hover:text-slate-900 transition-colors flex items-center gap-2">
                  {t.hero.secondaryCta || (isRTL ? 'استكشفي الخدمات' : 'Explore Services')}
                </button>
              </Link>
            </motion.div>

            {/* Simple Trust Indicator */}
            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
               <div className="flex -space-x-2 rtl:space-x-reverse">
                  {[1,2,3].map(i => (
                     <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                        <img src={`https://i.pravatar.cc/100?img=${10+i}`} alt="User" className="w-full h-full object-cover opacity-80" />
                     </div>
                  ))}
               </div>
               <div className="text-sm">
                  <div className="flex items-center text-yellow-500">
                     <Star className="w-3 h-3 fill-current" />
                     <Star className="w-3 h-3 fill-current" />
                     <Star className="w-3 h-3 fill-current" />
                     <Star className="w-3 h-3 fill-current" />
                     <Star className="w-3 h-3 fill-current" />
                  </div>
                  <p className="text-slate-400 text-xs font-medium">
                     {isRTL ? 'ثقة أكثر من 5000 عميل' : 'Trusted by 5k+ Clients'}
                  </p>
               </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT: IMAGE ================= */}
          <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 1, ease: "easeOut" }}
             className="relative h-[450px] lg:h-[600px] w-full flex items-center justify-center order-1 lg:order-2"
          >
             {/* Decorative Circle behind image */}
             <div className="absolute w-[80%] h-[80%] bg-slate-100 rounded-full -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
             
             {/* Main Image Container */}
             <div className="relative w-full h-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200/50">
                <img 
                   src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop" 
                   alt="SF Touch Clinic" 
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
                
                {/* Clean Floating Badge */}
                <div className={`absolute bottom-8 ${isRTL ? 'right-8' : 'left-8'} bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/50`}>
                   <p className="text-slate-900 font-bold text-lg">100%</p>
                   <p className="text-slate-500 text-xs">{isRTL ? 'رضاء العملاء' : 'Client Satisfaction'}</p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;