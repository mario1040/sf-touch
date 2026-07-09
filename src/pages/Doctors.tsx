import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Stethoscope, Sparkles, Activity, CalendarCheck, Quote, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// ----------------------------------------------------------------------
// 1. Data Structure (Exactly 3 Doctors with Editorial Quotes)
// ----------------------------------------------------------------------
interface Doctor {
  id: string;
  name: string;
  nameAr: string;
  specialty: string;
  specialtyAr: string;
  quote: string;
  quoteAr: string;
  image: string;
  icon: React.ElementType;
  accent: string;
}

const doctors: Doctor[] = [
  
  {
    id: '02',
    name: 'Dr. Freehan Zakria',
    nameAr: 'د. فريحان زكريا',
    specialty: 'Dermatology & Aesthetics Consultant',
    specialtyAr: 'استشاري الجلدية والتجميل',
    quote: 'Restoring youth and vitality while preserving your unique identity.',
    quoteAr: 'نستعيد شبابكِ وحيويتكِ، مع الحفاظ التام على هويتكِ وملامحكِ الفريدة.',
    image: '/images/OES02435.jpg', // تأكد من المسار
    icon: Stethoscope,
    accent: 'from-rose-500/10 to-pink-500/0',
  },
  {
    id: '01',
    name: 'Dr. Sally Eladawy',
    nameAr: 'د. سالي العدوي',
    specialty: 'Dermatology & Laser Specialist',
    specialtyAr: 'أخصائية الأمراض الجلدية والليزر',
    quote: 'Precision in every pulse of light, revealing your flawless skin.',
    quoteAr: 'دقة متناهية في كل إجراء، لنكشف عن صفاء بشرتك الحقيقي.',
    image: '/images/OES02416.jpg', // تأكد من المسار
    icon: Sparkles,
    accent: 'from-amber-500/10 to-orange-500/0',
  },
  {
    id: '03',
    name: 'Dr. Mai Magdy',
    nameAr: 'د. مي مجدي',
    specialty: 'Clinical Nutrition Consultant',
    specialtyAr: 'استشاري التغذية العلاجية',
    quote: 'True beauty and perfect contouring always begin from within.',
    quoteAr: 'الجمال الحقيقي والقوام المثالي يبدأ دائماً من التغذية الداخلية الصحيحة.',
    image: '/images/OES02404.jpg', // تأكد من المسار
    icon: Activity,
    accent: 'from-emerald-500/10 to-teal-500/0',
  },
];

// ----------------------------------------------------------------------
// 2. Main Component
// ----------------------------------------------------------------------
const Doctors = () => {
  const { t, language, isRTL } = useLanguage();
  const [hoveredDoctor, setHoveredDoctor] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FDFCF8] selection:bg-amber-100 selection:text-amber-900">
      
      {/* ================= BACKGROUND NOISE & GLOW ================= */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] mix-blend-multiply"></div>
        {/* Soft Warm Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-200/40 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-slate-200/50 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>
      </div>

      {/* ================= HERO SECTION (Light & Elegant) ================= */}
      <section className="relative z-10 pt-40 pb-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={cn("flex flex-col items-center text-center", isRTL ? "" : "")}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-amber-600/30"></div>
              <span className="text-amber-700 text-xs font-bold tracking-[0.25em] uppercase">
                {isRTL ? 'نخبة العيادة' : 'The Pioneers'}
              </span>
              <div className="h-px w-10 bg-amber-600/30"></div>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-slate-900 leading-[1.15] font-cairo tracking-tight">
              {isRTL ? (
                <>خلف كل نتيجة مبهرة، <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-500 to-amber-600">عقل طبي استثنائي</span>
                </>
              ) : (
                <>Behind every result, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-500 to-amber-600">An Exceptional Mind</span>
                </>
              )}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* ================= DOCTORS INTERACTIVE SHOWCASE ================= */}
      <section className="relative z-10 pb-32 px-4 md:px-8">
        <div className="container mx-auto max-w-[1400px]">
          
          {/* Dynamic Flex Container */}
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 h-auto lg:h-[750px]">
            {doctors.map((doctor, index) => {
              const isHovered = hoveredDoctor === doctor.id;
              const Icon = doctor.icon;

              return (
                <motion.div
                  key={doctor.id}
                  onMouseEnter={() => setHoveredDoctor(doctor.id)}
                  onMouseLeave={() => setHoveredDoctor(null)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.15,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={cn(
                    "group relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-200/60 shadow-[0_20px_50px_rgba(15,23,42,0.05)] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                    // The magic happens here: flex-grow expands the hovered card
                    isHovered ? "lg:flex-[1.4] shadow-[0_30px_60px_rgba(15,23,42,0.1)]" : "lg:flex-1",
                    "h-[500px] lg:h-full"
                  )}
                >
                  {/* Image Background */}
                  <div className="absolute inset-0 bg-slate-100">
                    <img
                      src={doctor.image}
                      alt={isRTL ? doctor.nameAr : doctor.name}
                      className={cn(
                        "w-full h-full object-cover object-top transition-all duration-1000 ease-out",
                        // Grayscale to Color effect on hover
                        isHovered ? "grayscale-0 scale-105 opacity-100" : "grayscale opacity-80 scale-100"
                      )}
                    />
                    
                    {/* Light Frosted Overlay for text readability */}
                    <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-white via-white/80 to-transparent opacity-90 transition-opacity duration-700" />
                    
                    {/* Subtle color accent on hover */}
                    <div className={cn("absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-multiply", doctor.accent)} />
                  </div>

                  {/* Top Numbering (Watermark style) */}
                  <div className="absolute top-8 left-8 z-20">
                    <span className="text-5xl font-black text-slate-900/5 font-serif select-none transition-colors duration-500 group-hover:text-amber-900/10">
                      {doctor.id}
                    </span>
                  </div>

                  {/* Content Container (Bottom Aligned with Glassmorphism) */}
                  <div className={cn(
                    "absolute inset-x-0 bottom-0 z-20 p-8 flex flex-col justify-end transition-all duration-500",
                    isRTL ? "text-right" : "text-left"
                  )}>
                    
                    {/* Main Title Area */}
                    <div className="mb-4 relative z-30">
                      <div className={cn("flex items-center gap-3 mb-3", isRTL ? "flex-row-reverse" : "")}>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-50 border border-amber-100 text-amber-600 shadow-sm transition-transform duration-500 group-hover:scale-110">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-amber-700 font-bold text-sm tracking-wide">
                          {isRTL ? doctor.specialtyAr : doctor.specialty}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black text-slate-900 font-cairo">
                        {isRTL ? doctor.nameAr : doctor.name}
                      </h2>
                    </div>

                    {/* Hidden Details (Revealed on Hover) */}
                    <div className={cn(
                      "overflow-hidden transition-all duration-700 ease-in-out relative z-30",
                      isHovered ? "max-h-[250px] opacity-100" : "max-h-0 opacity-0 lg:opacity-0 lg:max-h-0 max-h-[250px] opacity-100"
                    )}>
                      {/* Glass Panel Effect for the expanding content */}
                      <div className="pt-5 mt-2 border-t border-slate-200">
                        <Quote className={cn("w-6 h-6 text-slate-300 mb-3", isRTL ? "ml-auto rotate-180" : "")} />
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                          {isRTL ? doctor.quoteAr : doctor.quote}
                        </p>
                        
                        <button className={cn(
                          "group/btn relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-slate-900 px-7 py-3.5 font-bold text-white shadow-lg transition-all hover:bg-amber-500 hover:shadow-amber-500/25 active:scale-95",
                          isRTL ? "flex-row-reverse" : ""
                        )}>
                          <span className="relative z-10 flex items-center gap-2">
                            <CalendarCheck className="w-4 h-4" />
                            {isRTL ? 'حجز استشارة' : 'Book Consultation'}
                          </span>
                          <ArrowRight className={cn("relative z-10 w-4 h-4 transition-transform group-hover/btn:translate-x-1", isRTL ? "rotate-180 group-hover/btn:-translate-x-1" : "")} />
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Doctors;