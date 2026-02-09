import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Apple, Scissors } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const ServicesSection = () => {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      icon: Sparkles,
      title: t.services.dermatology.title,
      description: t.services.dermatology.description,
      href: '/services/dermatology-laser',
      gradient: 'from-primary/20 to-primary/5',
    },
    {
      icon: Apple,
      title: t.services.nutrition.title,
      description: t.services.nutrition.description,
      href: '/services/nutrition-contouring',
      gradient: 'from-accent/20 to-accent/5',
    },
    {
      icon: Scissors,
      title: t.services.hair.title,
      description: t.services.hair.description,
      href: '/services/hair-restoration',
      gradient: 'from-secondary/20 to-secondary/5',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            {t.services.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
            {t.services.title}
          </h2>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div key={service.href} variants={itemVariants}>
              <Link
                to={service.href}
                className="card-elevated group block h-full bg-background"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  {t.services.learnMore}
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'me-2 rtl-flip' : 'ms-2'}`} />
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
