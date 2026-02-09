import { motion } from 'framer-motion';
import { Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';

const CTASection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="section-padding bg-gradient-to-br from-secondary via-secondary to-slate-medium">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              {isRTL ? 'جاهز لبدء رحلتك؟' : 'Ready to Start Your Journey?'}
            </h2>
            <p className="text-secondary-foreground/70 text-lg mb-8">
              {isRTL 
                ? 'احجز استشارتك اليوم واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك الجمالية.'
                : 'Book your consultation today and discover how we can help you achieve your aesthetic goals.'
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="btn-gold rounded-full text-base px-8 py-6"
              >
                <Phone className="w-5 h-5 me-2" />
                {t.nav.bookAppointment}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full text-base px-8 py-6 border-white/30 text-secondary-foreground hover:bg-white/10"
              >
                <MapPin className="w-5 h-5 me-2" />
                {t.common.directions}
              </Button>
            </div>

            <p className="text-secondary-foreground/50 text-sm mt-6">
              {isRTL ? 'أو اتصل بنا:' : 'Or call us:'} 0572260062
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
