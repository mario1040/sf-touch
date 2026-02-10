import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, ArrowRight, Sparkles, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const CTASection = () => {
  const { t, isRTL } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  // تأثيرات التمرير (Parallax)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5, 0.8], [0.5, 1, 0]);

  // إنشاء مجموعتين من الجسيمات: قريبة (كبيرة) وبعيدة (صغيرة وضبابية)
  const fireflies = Array.from({ length: 15 });
  const starDust = Array.from({ length: 30 });

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#030712]"
    >
      
      {/* ================= 1. ATMOSPHERE (الجو العام) ================= */}
      
      {/* سديم كوني في الخلفية (Nebula) */}
      <motion.div 
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[-20%] left-[20%] w-[60vw] h-[60vw] bg-indigo-900/30 rounded-full blur-[150px] mix-blend-screen pointer-events-none"
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[-10%] right-[10%] w-[50vw] h-[50vw] bg-amber-900/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"
      />

      {/* شبكة أرضية لتعطي عمق (Grid Floor) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_60%,transparent_100%)] opacity-20 pointer-events-none" />


      {/* ================= 2. ADVANCED PARTICLES (الجسيمات المتطورة) ================= */}
      
      {/* المجموعة 1: غبار النجوم البعيد (صغير وضبابي) */}
      <div className="absolute inset-0 pointer-events-none">
        {starDust.map((_, i) => (
          <StarDustParticle key={`dust-${i}`} />
        ))}
      </div>

      {/* المجموعة 2: اليراعات القريبة (مضيئة وواضحة) */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {fireflies.map((_, i) => (
          <FireflyParticle key={`fly-${i}`} />
        ))}
      </div>


      {/* ================= 3. THE CONTENT (النص السينمائي) ================= */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-30 container px-4 flex flex-col items-center text-center"
      >
        
        {/* Glowing Badge */}
        <motion.div
           initial={{ scale: 0, rotate: -10 }}
           whileInView={{ scale: 1, rotate: 0 }}
           transition={{ type: "spring", stiffness: 200, damping: 15 }}
           className="mb-8 relative"
        >
           <div className="absolute inset-0 bg-yellow-500 blur-xl opacity-40 animate-pulse" />
           <div className="relative px-5 py-2 rounded-full border border-yellow-500/30 bg-yellow-950/30 backdrop-blur-md flex items-center gap-2">
              <Star className="w-3 h-3 text-yellow-400 fill-yellow-400 animate-spin-slow" />
              <span className="text-yellow-200 text-xs font-bold tracking-widest uppercase">
                 {isRTL ? 'المستقبل يبدأ هنا' : 'The Future Is Here'}
              </span>
           </div>
        </motion.div>

        {/* Cinematic Animated Text */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 font-cairo leading-tight tracking-tighter">
          <span className="block text-white drop-shadow-2xl">
            {isRTL ? 'امتلكي' : 'Own Your'}
          </span>
          
          {/* النص المتحرك (Aurora Text) */}
          <span className="relative inline-block mt-7">
            {/* الخلفية المشعة للنص */}
            <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-50 animate-pulse" />
            
            {/* النص الفعلي بتدرج لوني متحرك */}
            <span className="relative bg-clip-text text-transparent bg-[size:200%] animate-gradient-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-200">
               {isRTL ? 'سحر الجمال' : 'Magic Moment'}
            </span>
          </span>
        </h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-slate-400 text-lg md:text-2xl max-w-2xl mb-12 font-light leading-relaxed"
        >
          {isRTL 
            ? 'خطوة واحدة تفصلك عن النسخة الأكثر إشراقاً وثقة. دعينا نصنع تحفتك الفنية الخاصة.'
            : 'One step away from your brightest, most confident self. Let us create your own masterpiece.'}
        </motion.p>

        {/* ================= 4. MAGNETIC BUTTON (الزر المغناطيسي) ================= */}
        <div className="relative group perspective-500">
           {/* توهج خلفي للزر */}
           <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-amber-600 rounded-full blur-xl opacity-30 group-hover:opacity-60 group-hover:blur-2xl transition-all duration-500" />
           
           <a href="tel:0572260062" className="relative flex items-center justify-center gap-4 px-10 py-5 bg-gradient-to-b from-slate-900 to-black border border-yellow-500/50 rounded-full overflow-hidden group-hover:scale-105 transition-transform duration-300">
              
              {/* لمعة زجاجية تتحرك فوق الزر */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg] translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700" />
              
              {/* أيقونة الهاتف تهتز عند التحويم */}
              <Phone className="w-5 h-5 text-yellow-500 fill-yellow-500/20 group-hover:rotate-12 transition-transform" />
              
              <span className="text-white font-bold text-lg tracking-wide z-10">
                 {t.nav.bookAppointment || (isRTL ? 'احجزي استشارتك' : 'Book Consultation')}
              </span>
              
              <ArrowRight className={`w-5 h-5 text-white transition-transform duration-300 ${isRTL ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`} />
           </a>
        </div>

      </motion.div>
    </section>
  );
};

// ================= COMPONENT: FIREFLY PARTICLE (اليراعات القريبة) =================
const FireflyParticle = () => {
  // خصائص عشوائية للحركة (يمين/يسار + فوق/تحت)
  const randomXStart = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const size = Math.random() * 4 + 2; // حجم كبير نسبياً

  return (
    <motion.div
      className="absolute rounded-full bg-yellow-400 blur-[1px]" // لون ذهبي
      style={{
        left: `${randomXStart}%`,
        width: size,
        height: size,
        boxShadow: `0 0 ${size * 2}px ${size}px rgba(250, 204, 21, 0.4)` // توهج (Glow)
      }}
      animate={{
        y: ['110vh', '-10vh'], // يتحرك من أسفل الشاشة لأعلاها
        x: [0, Math.random() * 100 - 50, 0], // حركة تموجية (Sine Wave)
        opacity: [0, 1, 0.5, 1, 0], // وميض (Twinkle)
      }}
      transition={{
        duration: 15 + Math.random() * 10, // بطيء وهادئ
        repeat: Infinity,
        delay: randomDelay,
        ease: "linear",
      }}
    />
  );
};

// ================= COMPONENT: STARDUST PARTICLE (الغبار البعيد) =================
const StarDustParticle = () => {
  const randomX = Math.random() * 100;
  const randomDelay = Math.random() * 5;
  const size = Math.random() * 2 + 1; // حجم صغير

  return (
    <motion.div
      className="absolute rounded-full bg-blue-200 blur-[0.5px] opacity-20" // لون أزرق بارد للعمق
      style={{
        left: `${randomX}%`,
        width: size,
        height: size,
      }}
      animate={{
        y: ['110vh', '-10vh'],
        opacity: [0, 0.3, 0],
      }}
      transition={{
        duration: 20 + Math.random() * 15, // أبطأ جداً لأنه بعيد
        repeat: Infinity,
        delay: randomDelay,
        ease: "linear",
      }}
    />
  );
};

export default CTASection;