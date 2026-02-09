import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { Percent, Clock, Star, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Offers = () => {
  const { language } = useLanguage();

  const offers = [
    {
      icon: Percent,
      title: language === 'ar' ? 'خصم 20% على جلسات الليزر' : '20% Off Laser Sessions',
      description: language === 'ar'
        ? 'احصلي على خصم خاص عند حجز باقة 6 جلسات'
        : 'Get a special discount when booking a 6-session package',
      validity: language === 'ar' ? 'صالح حتى نهاية الشهر' : 'Valid until end of month',
    },
    {
      icon: Gift,
      title: language === 'ar' ? 'جلسة هيدرافيشل مجانية' : 'Free HydraFacial Session',
      description: language === 'ar'
        ? 'مع كل علاج تجميلي بقيمة 3000 جنيه أو أكثر'
        : 'With every aesthetic treatment worth 3000 EGP or more',
      validity: language === 'ar' ? 'عرض محدود' : 'Limited offer',
    },
    {
      icon: Star,
      title: language === 'ar' ? 'باقة العروسة' : 'Bridal Package',
      description: language === 'ar'
        ? 'باقة متكاملة للعناية بالبشرة والجسم قبل الزفاف'
        : 'Complete skin and body care package before the wedding',
      validity: language === 'ar' ? 'احجزي الآن' : 'Book now',
    },
    {
      icon: Clock,
      title: language === 'ar' ? 'استشارة مجانية' : 'Free Consultation',
      description: language === 'ar'
        ? 'استشارة أولية مجانية مع أطبائنا المتخصصين'
        : 'Free initial consultation with our specialist doctors',
      validity: language === 'ar' ? 'للمرضى الجدد' : 'For new patients',
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
              {language === 'ar' ? 'عروض خاصة' : 'Special Offers'}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mt-2 mb-6">
              {language === 'ar' ? 'العروض الحالية' : 'Current Offers'}
            </h1>
            <p className="text-lg text-muted-foreground">
              {language === 'ar'
                ? 'استفد من عروضنا المميزة واحصل على أفضل الخدمات بأسعار مخفضة.'
                : 'Take advantage of our special offers and get the best services at discounted prices.'
              }
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-elevated border-2 border-primary/20"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0">
                    <offer.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-secondary mb-2">
                      {offer.title}
                    </h3>
                    <p className="text-muted-foreground mb-3">
                      {offer.description}
                    </p>
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {offer.validity}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="btn-gold rounded-full px-8 py-6">
              {language === 'ar' ? 'احجز موعدك الآن' : 'Book Your Appointment'}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offers;
