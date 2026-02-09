import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Sparkles, Zap, Syringe, Sun, Target, Waves } from 'lucide-react';

const DermatologyLaser = () => {
  const { language } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      title: language === 'ar' ? 'علاج البشرة' : 'Skin Treatment',
      description: language === 'ar' 
        ? 'علاجات متقدمة لحب الشباب والتصبغات والندبات'
        : 'Advanced treatments for acne, pigmentation, and scars',
    },
    {
      icon: Zap,
      title: language === 'ar' ? 'إزالة الشعر بالليزر' : 'Laser Hair Removal',
      description: language === 'ar'
        ? 'تقنية Motus Pro للإزالة الآمنة والدائمة'
        : 'Motus Pro technology for safe, permanent removal',
    },
    {
      icon: Syringe,
      title: language === 'ar' ? 'البوتوكس والفيلر' : 'Botox & Fillers',
      description: language === 'ar'
        ? 'حقن تجميلية لتجديد شباب الوجه'
        : 'Aesthetic injectables for facial rejuvenation',
    },
    {
      icon: Sun,
      title: language === 'ar' ? 'علاج التصبغات' : 'Pigmentation Treatment',
      description: language === 'ar'
        ? 'تقنيات متطورة لتوحيد لون البشرة'
        : 'Advanced techniques for even skin tone',
    },
    {
      icon: Target,
      title: language === 'ar' ? 'علاج حب الشباب' : 'Acne Treatment',
      description: language === 'ar'
        ? 'برامج علاجية شاملة للحصول على بشرة صافية'
        : 'Comprehensive programs for clear skin',
    },
    {
      icon: Waves,
      title: language === 'ar' ? 'شد البشرة' : 'Skin Tightening',
      description: language === 'ar'
        ? 'تقنيات RF لشد البشرة بدون جراحة'
        : 'RF techniques for non-surgical skin tightening',
    },
  ];

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {language === 'ar' ? 'خدماتنا' : 'Our Services'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-6">
              {language === 'ar' ? 'الجلدية والليزر' : 'Dermatology & Laser'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'علاجات متقدمة للبشرة تقدمها أيدي أطباء متخصصين باستخدام أحدث التقنيات.'
                : 'Advanced skin treatments delivered by specialist doctors using the latest technologies.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-5">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default DermatologyLaser;
