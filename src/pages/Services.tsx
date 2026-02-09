import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowRight, Sparkles, Apple, Scissors } from 'lucide-react';

const Services = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      title: t.services.dermatology.title,
      description: t.services.dermatology.description,
      href: '/services/dermatology-laser',
      features: isRTL 
        ? ['علاج البشرة', 'إزالة الشعر بالليزر', 'الحقن التجميلية', 'الفيلر والبوتوكس']
        : ['Skin Treatment', 'Laser Hair Removal', 'Aesthetic Injectables', 'Fillers & Botox'],
    },
    {
      icon: Apple,
      title: t.services.nutrition.title,
      description: t.services.nutrition.description,
      href: '/services/nutrition-contouring',
      features: isRTL
        ? ['خطط غذائية مخصصة', 'سمارت ليبو', 'أوندا كولويفز', 'نحت الجسم']
        : ['Custom Diet Plans', 'Smart Lipo', 'Onda Coolwaves', 'Body Sculpting'],
    },
    {
      icon: Scissors,
      title: t.services.hair.title,
      description: t.services.hair.description,
      href: '/services/hair-restoration',
      features: isRTL
        ? ['زراعة الشعر', 'علاج تساقط الشعر', 'بي آر بي للشعر', 'الميزوثيرابي']
        : ['Hair Transplant', 'Hair Loss Treatment', 'Hair PRP', 'Mesotherapy'],
    },
  ];

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
              {t.services.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.services.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  to={service.href}
                  className="card-elevated group flex flex-col md:flex-row gap-6 items-start"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-semibold text-secondary mb-2">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-muted-foreground"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className={`w-5 h-5 text-primary flex-shrink-0 group-hover:translate-x-2 transition-transform ${isRTL ? 'rtl-flip' : ''}`} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
