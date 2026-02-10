import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Linkedin, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

// 1. تعريف واجهة لخصائص عنصر الاتصال (Interface for Contact Item Props)
interface ContactItemProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  isLink?: boolean;
  href?: string;
}

const Footer = () => {
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about-us', label: t.nav.about },
    { href: '/services', label: t.nav.services },
    { href: '/doctors', label: t.nav.doctors },
    { href: '/offers', label: t.nav.offers },
    { href: '/contact-us', label: t.nav.contact },
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", color: "hover:bg-blue-600" },
    { icon: Instagram, href: "https://instagram.com", color: "hover:bg-pink-600" },
    { icon: Twitter, href: "https://twitter.com", color: "hover:bg-sky-500" },
    { icon: Linkedin, href: "https://linkedin.com", color: "hover:bg-blue-700" },
  ];

  return (
    <footer className="relative bg-[#020617] text-slate-300 overflow-hidden pt-20 pb-10">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      {/* 1. Gradient Orbs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-900/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3 pointer-events-none" />
      
      {/* 2. Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      <div className="container relative z-10 px-4 mx-auto">
        
        {/* ================= TOP SECTION ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Brand & Social */}
          <div className="space-y-6">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="inline-block"
            >
               <h3 className="text-3xl font-bold text-white mb-2 font-cairo flex items-center gap-2">
                 SF <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Touch</span>
                 <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
               </h3>
               <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-transparent rounded-full" />
            </motion.div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              {t.footer.aboutText || (isRTL 
                ? 'نقدم أرقى خدمات التجميل والعناية بالبشرة بأحدث التقنيات العالمية تحت إشراف نخبة من الأطباء.' 
                : 'Providing the finest beauty and skin care services with the latest international technologies under the supervision of elite doctors.')}
            </p>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 text-white ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. Quick Links (Interactive) */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              {t.footer.quickLinks}
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-500 rounded-full" />
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link to={link.href} className="group flex items-center gap-2 text-sm transition-colors hover:text-yellow-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-yellow-500 transition-colors" />
                    <span className="group-hover:translate-x-2 transition-transform duration-300 block">
                       {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              {t.footer.branches}
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-500 rounded-full" />
            </h4>
            <div className="space-y-6">
               <ContactItem 
                 icon={MapPin} 
                 title={t.footer.damietta} 
                 desc="Safwa Mall, 2nd Floor" 
               />
               <ContactItem 
                 icon={MapPin} 
                 title={t.footer.newDamietta} 
                 desc="Central Zone, 1st Floor" 
               />
               <ContactItem 
                 icon={Phone} 
                 title={isRTL ? "اتصل بنا" : "Call Us"} 
                 desc="0572260062" 
                 isLink 
                 href="tel:0572260062"
               />
            </div>
          </div>

          {/* 4. Newsletter & Hours */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
              {t.footer.workingHours}
              <span className="absolute -bottom-2 left-0 w-1/2 h-0.5 bg-yellow-500 rounded-full" />
            </h4>
            
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm mb-6">
               <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-yellow-500 mt-1" />
                  <div>
                     <p className="text-white font-bold text-sm mb-1">{isRTL ? 'ساعات العمل' : 'Opening Hours'}</p>
                     <p className="text-xs text-slate-400">{t.footer.hours}</p>
                  </div>
               </div>
               <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-yellow-500" />
                  <a href="mailto:info@sftouch.com" className="text-sm hover:text-white transition-colors">info@sftouch.com</a>
               </div>
            </div>

            {/* Newsletter Input (Optional decorative element) */}
            <div className="relative">
               <input 
                 type="email" 
                 placeholder={isRTL ? 'اشتركي في النشرة...' : 'Subscribe newsletter...'} 
                 className="w-full bg-slate-900 border border-slate-800 rounded-full py-3 px-4 text-sm text-white focus:outline-none focus:border-yellow-500 transition-colors"
               />
               <button className={`absolute top-1/2 -translate-y-1/2 bg-yellow-500 rounded-full p-2 text-black hover:bg-yellow-400 transition-colors ${isRTL ? 'left-1.5' : 'right-1.5'}`}>
                  <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
               </button>
            </div>
          </div>

        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            {t.footer.copyright}
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
             <a href="#" className="hover:text-white transition-colors">{isRTL ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
             <a href="#" className="hover:text-white transition-colors">{isRTL ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 2. استخدام الواجهة (Interface) هنا بدلاً من any
const ContactItem = ({ icon: Icon, title, desc, isLink, href }: ContactItemProps) => {
  const Content = () => (
    <div className="flex gap-4 group cursor-default">
       <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10 transition-all duration-300">
          <Icon className="w-5 h-5 text-slate-400 group-hover:text-yellow-500 transition-colors" />
       </div>
       <div>
          <p className="text-white font-bold text-sm mb-0.5 group-hover:text-yellow-500 transition-colors">{title}</p>
          <p className="text-xs text-slate-500">{desc}</p>
       </div>
    </div>
  );

  return isLink ? <a href={href} className="block">{Content()}</a> : Content();
};

export default Footer;