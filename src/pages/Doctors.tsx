import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Stethoscope, Apple, CalendarCheck, Share2, Linkedin, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Doctor {
  id: number;
  name: string;
  nameAr: string;
  specialty: string;
  specialtyAr: string;
  image: string; // رابط الصورة
  icon: React.ElementType;
}

const doctors: Doctor[] = [
  {
    id: 1,
    name: 'Dr. Sally Eladawy',
    nameAr: 'د. سالي العدوي',
    specialty: 'Dermatology & Laser Specialist',
    specialtyAr: 'أخصائية الأمراض الجلدية والليزر',
    // صورة تخيلية (استبدلها بصورة الدكتورة الحقيقية)
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop', 
    icon: Stethoscope,
  },
  {
    id: 2,
    name: 'Dr. Freehan Zakria',
    nameAr: 'د. فريحان زكريا',
    specialty: 'Dermatology & Aesthetics Consultant',
    specialtyAr: 'استشاري الجلدية والتجميل',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop',
    icon: Stethoscope,
  },
  {
    id: 3,
    name: 'Dr. Mai Magdy',
    nameAr: 'د. مي مجدي',
    specialty: 'Clinical Nutrition Consultant',
    specialtyAr: 'استشاري التغذية العلاجية',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop',
    icon: Apple,
  },
  {
    id: 4,
    name: 'Dr. Loay Ghorab',
    nameAr: 'د. لؤي غراب',
    specialty: 'Body Contouring & Nutrition Expert',
    specialtyAr: 'خبير التغذية ونحت القوام',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop',
    icon: Apple,
  },
];

const Doctors = () => {
  const { t, language, isRTL } = useLanguage();

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-[#05151F]">
        {/* الخلفية المزخرفة */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3"></div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-yellow-500 text-xs font-bold tracking-wider uppercase mb-6 backdrop-blur-md">
              {isRTL ? 'فريقنا الطبي' : 'Our Medical Team'}
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-cairo">
              {isRTL ? 'نخبة من' : 'Elite of'} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                {isRTL ? 'أفضل الأطباء' : 'Best Doctors'}
              </span>
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              {isRTL 
                ? 'فريق متكامل من الاستشاريين والأخصائيين ذوي الخبرة، يجمعون بين العلم والفن لتقديم أفضل النتائج.'
                : 'A complete team of experienced consultants and specialists, combining science and art to deliver the best results.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= DOCTORS GRID ================= */}
      <section className="py-24 bg-slate-50 relative">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <DoctorCard key={doctor.id} doctor={doctor} index={index} isRTL={isRTL} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ================= DOCTOR CARD COMPONENT =================
const DoctorCard = ({ doctor, index, isRTL }: { doctor: Doctor, index: number, isRTL: boolean }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-white rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-yellow-500/10 transition-all duration-500"
    >
      {/* 1. Image Container */}
      <div className="relative h-[400px] w-full overflow-hidden bg-slate-200">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
        
        <img 
          src={doctor.image} 
          alt={isRTL ? doctor.nameAr : doctor.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Social Icons (Appear on Hover) */}
        <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 delay-100">
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-colors">
            <Linkedin className="w-4 h-4" />
          </button>
          <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-yellow-500 hover:text-black transition-colors">
            <Instagram className="w-4 h-4" />
          </button>
        </div>

        {/* Badge (Specialty Icon) */}
        <div className={`absolute top-4 left-4 z-20 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-yellow-400 group-hover:bg-yellow-500 group-hover:text-black transition-all duration-300`}>
           <doctor.icon className="w-6 h-6" />
        </div>
      </div>

      {/* 2. Text Content (Floating Up) */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-1 font-cairo">
            {isRTL ? doctor.nameAr : doctor.name}
          </h3>
          <p className="text-sm text-yellow-400 font-medium mb-4 opacity-90">
            {isRTL ? doctor.specialtyAr : doctor.specialty}
          </p>
          
          {/* Action Button (Hidden initially, appears on hover) */}
          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
            <div className="overflow-hidden">
               <Button className="w-full rounded-full bg-white text-black hover:bg-yellow-500 font-bold mt-2">
                 <CalendarCheck className="w-4 h-4 me-2" />
                 {isRTL ? 'حجز موعد' : 'Book Appointment'}
               </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Border Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500/50 rounded-[2rem] transition-colors duration-500 pointer-events-none z-30" />
    </motion.div>
  );
};

export default Doctors;