import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about-us', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/doctors', label: t.nav.doctors },
    { href: '/offers', label: t.nav.offers },
    { href: '/contact-us', label: t.nav.contact },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              SF <span className="text-gradient-gold">Touch</span>
            </h3>
            <p className="text-secondary-foreground/70 text-sm leading-relaxed mb-6">
              {t.footer.aboutText}
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.quickLinks}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branches */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.branches}</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t.footer.damietta}</p>
                  <p className="text-xs text-secondary-foreground/60">Safwa Mall, 2nd Floor</p>
                </div>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium">{t.footer.newDamietta}</p>
                  <p className="text-xs text-secondary-foreground/60">Central Zone</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm">0572260062</p>
                  <p className="text-sm">0572260063</p>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.footer.workingHours}</h4>
            <div className="flex gap-3 mb-6">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <p className="text-sm">{t.footer.hours}</p>
            </div>
            <div className="flex gap-3">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" />
              <a 
                href="mailto:info@sftouch.com" 
                className="text-sm hover:text-primary transition-colors"
              >
                info@sftouch.com
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-sm text-secondary-foreground/60">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
