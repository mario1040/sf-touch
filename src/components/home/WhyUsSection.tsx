import { motion } from 'framer-motion';
import { Stethoscope, Cpu, ClipboardList, Award } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const WhyUsSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Stethoscope,
      title: t.whyUs.doctorsCare.title,
      description: t.whyUs.doctorsCare.description,
    },
    {
      icon: Cpu,
      title: t.whyUs.technology.title,
      description: t.whyUs.technology.description,
    },
    {
      icon: ClipboardList,
      title: t.whyUs.customized.title,
      description: t.whyUs.customized.description,
    },
    {
      icon: Award,
      title: t.whyUs.results.title,
      description: t.whyUs.results.description,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="section-padding bg-background">
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
            {t.whyUs.subtitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mt-2">
            {t.whyUs.title}
          </h2>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-secondary mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsSection;
