import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { User, Stethoscope, Apple } from 'lucide-react';

interface Doctor {
  name: string;
  nameAr: string;
  specialty: string;
  specialtyAr: string;
  icon: typeof User;
}

const doctors: Doctor[] = [
  {
    name: 'Dr. Sally Eladawy',
    nameAr: 'د. سالي العدوي',
    specialty: 'Dermatology & Laser',
    specialtyAr: 'الجلدية والليزر',
    icon: Stethoscope,
  },
  {
    name: 'Dr. Freehan Zakria',
    nameAr: 'د. فريحان زكريا',
    specialty: 'Dermatology & Aesthetics',
    specialtyAr: 'الجلدية والتجميل',
    icon: Stethoscope,
  },
  {
    name: 'Dr. Mai Magdy',
    nameAr: 'د. مي مجدي',
    specialty: 'Clinical Nutrition',
    specialtyAr: 'التغذية العلاجية',
    icon: Apple,
  },
  {
    name: 'Dr. Loay Ghorab',
    nameAr: 'د. لؤي غراب',
    specialty: 'Nutrition & Body Contouring',
    specialtyAr: 'التغذية ونحت الجسم',
    icon: Apple,
  },
];

const Doctors = () => {
  const { t, language } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              {t.nav.doctors}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ar' 
                ? 'تعرف على فريقنا من الأطباء المتخصصين الذين يقدمون رعاية استثنائية.'
                : 'Meet our team of specialized doctors who deliver exceptional care.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-5">
                  <doctor.icon className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-1">
                  {language === 'ar' ? doctor.nameAr : doctor.name}
                </h3>
                <p className="text-sm text-primary font-medium">
                  {language === 'ar' ? doctor.specialtyAr : doctor.specialty}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctors;
