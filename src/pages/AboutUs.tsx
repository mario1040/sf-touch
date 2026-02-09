import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Target, Eye, Award } from 'lucide-react';

const AboutUs = () => {
  const { t } = useLanguage();

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
              {t.about.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.footer.aboutText}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                {t.about.vision}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.visionText}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-secondary mb-4">
                {t.about.mission}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {t.about.missionText}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="section-padding bg-muted">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-primary-foreground" />
            </div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              {t.about.founderTitle}
            </span>
            <h2 className="text-3xl font-bold text-secondary mt-2 mb-4">
              {t.about.founderName}
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {t.about.founderBio}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
