import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Zap, Activity, ScanFace, Waves, Smartphone } from 'lucide-react';
import { cn } from '@/lib/utils'; // تأكد من وجود هذا الملف أو استخدم دالة دمج كلاسات بسيطة

// 1. تعريف نوع البيانات (Interface) لضمان خلو الكود من الأخطاء
interface Technology {
  id: number;
  name: string;
  description: string;
  arabicDescription: string;
  image: string; // مسار الصورة
  icon: React.ElementType; // الأيقونة
}

const TechnologiesSection = () => {
  const { t, isRTL } = useLanguage();

  // 2. البيانات (يمكنك تغيير النصوص هنا)
  const technologies: Technology[] = [
    {
      id: 1,
      name: 'Deka Again',
      description: 'Fastest Laser Hair Removal',
      arabicDescription: 'الأسرع والأقوى لإزالة الشعر',
      image: '/technologies/deka.png',
      icon: Zap,
    },
    {
      id: 2,
      name: 'Motus Pro',
      description: 'Pain-free Alexandrite Laser',
      arabicDescription: 'ليزر ألكسندريت بدون ألم',
      image: '/technologies/motus.png',
      icon: Sparkles,
    },
    {
      id: 3,
      name: 'Smart Lipo',
      description: 'Laser Body Sculpting',
      arabicDescription: 'نحت القوام وشفط الدهون',
      image: '/technologies/smart-lipo.png',
      icon: Activity,
    },
    {
      id: 4,
      name: 'Onda Coolwaves',
      description: 'Localized Fat Reduction',
      arabicDescription: 'تفتيت الدهون الموضعية',
      image: '/technologies/onda.png',
      icon: Waves,
    },
    {
      id: 5,
      name: 'Schwarzy',
      description: 'Muscle Toning & Building',
      arabicDescription: 'بناء العضلات وشد الجسم',
      image: '/technologies/schwarzy.png',
      icon: Activity,
    },
    {
      id: 6,
      name: 'Morpheus8',
      description: 'RF Microneedling',
      arabicDescription: 'نضارة وشد البشرة العميقة',
      image: '/technologies/morpheus.png',
      icon: ScanFace,
    },
  ];

  // تكرار القائمة 3 مرات لضمان حركة لا نهائية ناعمة
  const duplicatedTech = [...technologies, ...technologies, ...technologies];

  return (
    <section className="relative py-24 bg-[#05151F] overflow-hidden">
      
      {/* ================= BACKGROUND EFFECTS (تأثيرات الخلفية) ================= */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 brightness-100 mix-blend-overlay"></div>
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-yellow-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* ================= HEADER SECTION ================= */}
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-yellow-500 font-bold tracking-widest text-xs uppercase border border-yellow-500/20 py-1 px-3 rounded-full bg-yellow-500/5 backdrop-blur-sm">
            {isRTL ? 'تكنولوجيا عالمية' : 'World Class Tech'}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight font-cairo">
            {isRTL ? 'أحدث الأجهزة' : 'Our Advanced'}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
              {isRTL ? ' الطبية' : ' Technologies'}
            </span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base">
            {isRTL 
              ? 'نستخدم أحدث ما توصلت إليه التكنولوجيا لضمان أفضل النتائج' 
              : 'Utilizing state-of-the-art equipment for guaranteed results.'}
          </p>
        </motion.div>
      </div>

      {/* ================= INFINITE MARQUEE (الشريط المتحرك) ================= */}
      <div className="relative w-full">
        {/* Gradients on sides to fade elements out */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#05151F] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#05151F] to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden py-4">
          <motion.div
            className="flex gap-6 px-4"
            // الحركة السحرية: نغير الاتجاه بناءً على اللغة
            animate={{
              x: isRTL ? ['-50%', '0%'] : ['0%', '-50%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40, // سرعة الحركة (كلما زاد الرقم، أبطأ الحركة)
                ease: "linear",
              },
            }}
            // يوقف الحركة عند وضع الماوس
            whileHover={{ animationPlayState: 'paused' }} 
            style={{ width: 'max-content' }}
          >
            {duplicatedTech.map((tech, index) => (
              <TechCard key={`${tech.id}-${index}`} tech={tech} isRTL={isRTL} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ================= CARD COMPONENT (تصميم الكارت) =================
const TechCard = ({ tech, isRTL }: { tech: Technology, isRTL: boolean }) => {
  const Icon = tech.icon;

  return (
    <div className="group relative w-[280px] h-[360px] flex-shrink-0 cursor-pointer">
      
      {/* 1. Glass Container */}
      <div className="absolute inset-0 bg-white/[0.03] backdrop-blur-md rounded-3xl border border-white/10 transition-all duration-500 group-hover:bg-white/[0.08] group-hover:border-yellow-500/50 group-hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] group-hover:-translate-y-2 overflow-hidden">
        
        {/* 2. Content */}
        <div className="h-full flex flex-col p-6 relative z-10">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-4">
            <div className="p-2.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-yellow-500 text-slate-300 group-hover:text-black transition-colors duration-300">
              <Icon className="w-5 h-5" />
            </div>
            {/* رقم تسلسلي جمالي */}
            <span className="text-[10px] font-mono text-slate-600 group-hover:text-yellow-500 transition-colors">
              DEV-0{tech.id}
            </span>
          </div>

          {/* Image Placeholder area */}
          <div className="flex-1 flex items-center justify-center relative my-2">
            {/* Glow effect behind image */}
            <div className="absolute inset-0 bg-yellow-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <img 
              src={tech.image} 
              alt={tech.name}
              className="relative w-full h-full object-contain drop-shadow-lg grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
              onError={(e) => {
                // في حالة عدم وجود صورة، نعرض أيقونة كبيرة كبديل
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement?.classList.add('fallback-icon');
              }}
            />
            {/* Fallback Icon if image fails */}
            <Icon className="hidden fallback-icon:block w-20 h-20 text-white/5 absolute" />
          </div>

          {/* Footer Text */}
          <div className="mt-auto border-t border-white/5 pt-4">
            <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors font-cairo">
              {tech.name}
            </h3>
            <p className="text-xs text-slate-400 mt-1 font-medium group-hover:text-white/80 transition-colors">
              {isRTL ? tech.arabicDescription : tech.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesSection;