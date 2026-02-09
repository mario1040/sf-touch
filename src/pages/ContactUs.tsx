import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactUs = () => {
  const { t, language } = useLanguage();

  const branches = [
    {
      name: t.footer.damietta,
      address: language === 'ar' ? 'مول صفوة، الدور الثاني' : 'Safwa Mall, 2nd Floor',
      phone: '0572260062',
      mapUrl: 'https://maps.google.com',
    },
    {
      name: t.footer.newDamietta,
      address: language === 'ar' ? 'المنطقة المركزية' : 'Central Zone',
      phone: '0572260063',
      mapUrl: 'https://maps.google.com',
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
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              {t.contact.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="card-elevated"
            >
              <h2 className="text-2xl font-bold text-secondary mb-6">
                {language === 'ar' ? 'أرسل لنا رسالة' : 'Send Us a Message'}
              </h2>
              <form className="space-y-5">
                <div>
                  <Input
                    placeholder={t.contact.name}
                    className="bg-muted border-0 py-6"
                  />
                </div>
                <div className="grid md:grid-cols-2 gap-5">
                  <Input
                    type="email"
                    placeholder={t.contact.email}
                    className="bg-muted border-0 py-6"
                  />
                  <Input
                    type="tel"
                    placeholder={t.contact.phone}
                    className="bg-muted border-0 py-6"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t.contact.message}
                    className="bg-muted border-0 min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full btn-gold rounded-full py-6">
                  <Send className="w-4 h-4 me-2" />
                  {t.contact.send}
                </Button>
              </form>
            </motion.div>

            {/* Branches */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-secondary mb-6">
                {t.footer.branches}
              </h2>
              {branches.map((branch, index) => (
                <div key={index} className="card-elevated">
                  <h3 className="text-lg font-semibold text-secondary mb-4">
                    {branch.name}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{branch.address}</span>
                    </div>
                    <div className="flex gap-3">
                      <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                      <a 
                        href={`tel:${branch.phone}`} 
                        className="text-muted-foreground text-sm hover:text-primary transition-colors"
                      >
                        {branch.phone}
                      </a>
                    </div>
                  </div>
                  <a
                    href={branch.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-4 text-primary font-medium text-sm hover:underline"
                  >
                    <MapPin className="w-4 h-4 me-1" />
                    {t.common.directions}
                  </a>
                </div>
              ))}

              {/* Working Hours */}
              <div className="card-elevated">
                <h3 className="text-lg font-semibold text-secondary mb-4">
                  {t.footer.workingHours}
                </h3>
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{t.footer.hours}</span>
                </div>
              </div>

              {/* Email */}
              <div className="card-elevated">
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                  <a 
                    href="mailto:info@sftouch.com"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    info@sftouch.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
