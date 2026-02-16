import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X, Phone, Globe, MapPin, Clock, ArrowRight, ChevronDown, Zap, Activity, ScanFace } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext'; 
import { cn } from '@/lib/utils'; 

// ----------------------------------------------------------------------
// 1. زر "Book Appointment" مع تأثير اللمعان
// ----------------------------------------------------------------------
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

const ShimmerButton = ({ className, children, variant = 'primary', ...props }: ButtonProps) => (
  <button
    className={cn(
      "relative group overflow-hidden rounded-full font-bold transition-all duration-300 active:scale-95",
      variant === 'primary' 
        ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40" 
        : "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50",
      className
    )}
    {...props}
  >
    <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />
    <span className="relative z-20 flex items-center justify-center gap-2">
      {children}
    </span>
  </button>
);

// ----------------------------------------------------------------------
// 2. المكون الرئيسي (Navbar)
// ----------------------------------------------------------------------
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // States for Dropdowns
  const [isServicesHovered, setIsServicesHovered] = useState(false); // Desktop Hover
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // Mobile Accordion

  const location = useLocation();
  const { scrollY } = useScroll();
  const { language, setLanguage, t, isRTL } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  useMotionValueEvent(scrollY, "change", (latest) => {
    const scrolled = latest > 20;
    if (scrolled !== isScrolled) setIsScrolled(scrolled);
  });

  useEffect(() => { 
    setIsOpen(false); 
    setIsMobileServicesOpen(false); // Close sub-menu on page change
  }, [location.pathname]);

  // تعريف التخصصات الفرعية
  const serviceSubLinks = [
    { 
      id: 'dermatology', 
      label: language === 'en' ? 'Dermatology' : 'الجلدية والتجميل', 
      icon: ScanFace,
      href: '/services/dermatology-laser' // يذهب للقسم المحدد
    },
    { 
      id: 'laser', 
      label: language === 'en' ? 'Laser Clinic' : 'عيادة الليزر', 
      icon: Zap,
      href: '/services/hair-restoration' 
    },
    { 
      id: 'nutrition', 
      label: language === 'en' ? 'Nutrition & Body' : 'التغذية ونحت القوام', 
      icon: Activity,
      href: '/services/nutrition-contouring' 
    },
  ];

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/about-us', label: t.nav.about },
    { href: '/services', label: t.nav.services, hasDropdown: true }, // Added Flag
    { href: '/doctors', label: t.nav.doctors },
    { href: '/offers', label: t.nav.offers },
    { href: '/contact-us', label: t.nav.contact },
  ];

  return (
    <>
      {/* ======================= TOP BAR ======================= */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 bg-[#0B1120] text-slate-300 text-[11px] sm:text-xs font-medium tracking-wide border-b border-white/5"
        initial={{ height: 'auto', opacity: 1, y: 0 }}
        animate={{ 
          height: isScrolled ? 0 : '40px', 
          opacity: isScrolled ? 0 : 1,
          y: isScrolled ? -40 : 0
        }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      >
        <div className="container mx-auto px-4 sm:px-6 h-full flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:0572260062" className="flex items-center gap-2 hover:text-yellow-500 transition-colors group">
              <div className="p-1 rounded-full bg-white/5 group-hover:bg-yellow-500/10 transition-colors">
                <Phone className="w-3 h-3 text-yellow-500" />
              </div>
              <span>0572260062</span>
            </a>
            <span className="hidden md:flex items-center gap-2">
              <MapPin className="w-3 h-3 text-slate-500" /> 
              {language === 'en' ? 'Damietta, Safwa Mall' : 'دمياط، الصفوة مول'}
            </span>
          </div>
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-slate-500" /> 
                10:00 AM - 10:00 PM
             </span>
             <button onClick={toggleLanguage} className="lg:hidden text-xs font-bold text-white hover:text-yellow-500">
                {language === 'en' ? 'AR' : 'EN'}
             </button>
          </div>
        </div>
      </motion.div>

      {/* ======================= NAVBAR ======================= */}
      <motion.header
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)",
          isScrolled ? "top-4" : "top-[40px]" 
        )}
      >
        <div className={cn(
          "mx-auto transition-all duration-500 flex items-center justify-between",
          isScrolled 
            ? "container max-w-5xl bg-white/80 backdrop-blur-xl shadow-2xl shadow-slate-200/50 rounded-full px-4 py-2 border border-white/40 ring-1 ring-slate-900/5" 
            : "container bg-transparent px-4 sm:px-6 py-5 border-b border-transparent"
        )}>
          
          {/* LOGO */}
          <Link to="/" className="relative z-10 flex items-center gap-2 group">
             <motion.div 
               layout 
               className={cn("relative transition-all duration-300", isScrolled ? "w-24" : "w-32")}
             >
                <img src="/images/logo.png" alt="SF Touch" className="w-full h-auto object-contain" />
             </motion.div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-100/50 p-1.5 rounded-full border border-white/50 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              
              // Special Logic for Services Dropdown
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => setIsServicesHovered(true)}
                    onMouseLeave={() => setIsServicesHovered(false)}
                  >
                     <Link
                      to={link.href}
                      className={cn(
                        "relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full z-10 flex items-center gap-1",
                        isActive || isServicesHovered ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
                      )}
                    >
                      {link.label}
                      <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", isServicesHovered ? "rotate-180" : "")} />
                      {isActive && !isServicesHovered && (
                        <motion.div layoutId="nav-pill" className="absolute inset-0 bg-white shadow-sm rounded-full -z-10 border border-slate-200/50" />
                      )}
                    </Link>

                    {/* Desktop Dropdown Menu */}
                    <AnimatePresence>
                      {isServicesHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-56"
                        >
                          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden p-2">
                             {serviceSubLinks.map((subItem) => (
                               <Link
                                 key={subItem.id}
                                 to={subItem.href}
                                 className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 text-slate-600 hover:text-slate-900 transition-colors group"
                               >
                                  <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-yellow-100 group-hover:text-yellow-600 transition-colors">
                                     <subItem.icon className="w-4 h-4" />
                                  </div>
                                  <span className="text-sm font-medium">{subItem.label}</span>
                               </Link>
                             ))}
                          </div>
                        </motion.div> 
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Normal Links
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full z-10",
                    isActive ? "text-slate-900" : "text-slate-500 hover:text-slate-900"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white shadow-sm rounded-full -z-10 border border-slate-200/50"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ACTIONS */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="hidden lg:flex items-center gap-2 px-3 py-2 rounded-full text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'en' ? 'AR' : 'EN'}</span>
            </button>
            <ShimmerButton className={cn(isScrolled ? "px-5 py-2 text-xs" : "px-6 py-2.5 text-sm")}>
              {t.nav.bookAppointment}
            </ShimmerButton>
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden p-2.5 text-slate-800 bg-white rounded-full shadow-sm border border-slate-100 active:scale-90 transition-transform"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* ======================= MOBILE MENU ======================= */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 lg:hidden"
            />
            
            <motion.div
              initial={{ x: isRTL ? '-100%' : '100%' }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? '-100%' : '100%' }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} h-full w-[85%] max-w-[320px] bg-white z-50 lg:hidden shadow-2xl flex flex-col border-l border-slate-100`}
            >
              {/* Menu Header */}
              <div className="p-6 flex justify-between items-center border-b border-slate-50">
                <div className="w-24 opacity-80 grayscale hover:grayscale-0 transition-all">
                   <img src="/images/logo.png" alt="SF Touch" />
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-50 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Menu Links */}
              <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
                {navLinks.map((link, i) => {
                  
                  // Mobile Dropdown Logic
                  if (link.hasDropdown) {
                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + (i * 0.05) }}
                        className="bg-slate-50/50 rounded-2xl overflow-hidden"
                      >
                         <div className="flex items-center justify-between p-4 cursor-pointer" onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}>
                            <span className={cn("text-base font-medium", location.pathname === link.href ? "text-slate-900" : "text-slate-600")}>
                               {link.label}
                            </span>
                            <ChevronDown className={cn("w-4 h-4 text-slate-400 transition-transform duration-300", isMobileServicesOpen ? "rotate-180" : "")} />
                         </div>

                         {/* Sub-menu Animation */}
                         <AnimatePresence>
                           {isMobileServicesOpen && (
                             <motion.div
                               initial={{ height: 0, opacity: 0 }}
                               animate={{ height: 'auto', opacity: 1 }}
                               exit={{ height: 0, opacity: 0 }}
                               className="overflow-hidden"
                             >
                                <div className="px-4 pb-4 space-y-1">
                                   {serviceSubLinks.map((subLink) => (
                                      <Link
                                        key={subLink.id}
                                        to={subLink.href}
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-white text-slate-500 hover:text-slate-900 transition-all text-sm"
                                      >
                                         <subLink.icon className="w-4 h-4" />
                                         {subLink.label}
                                      </Link>
                                   ))}
                                   <Link
                                      to="/services"
                                      onClick={() => setIsOpen(false)}
                                      className="flex items-center gap-2 p-3 mt-2 text-xs font-bold text-yellow-600 uppercase tracking-wider justify-center bg-yellow-50 rounded-xl"
                                   >
                                      {language === 'en' ? 'View All Services' : 'عرض كل الخدمات'}
                                      <ArrowRight className="w-3 h-3" />
                                   </Link>
                                </div>
                             </motion.div>
                           )}
                         </AnimatePresence>
                      </motion.div>
                    );
                  }

                  // Standard Mobile Links
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + (i * 0.05) }}
                    >
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                          "group flex items-center justify-between p-4 rounded-2xl text-base font-medium transition-all duration-300",
                          location.pathname === link.href 
                            ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20" 
                            : "text-slate-600 hover:bg-slate-50"
                        )}
                      >
                        <span>{link.label}</span>
                        {location.pathname === link.href && <ArrowRight className="w-4 h-4" />}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Menu Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 space-y-4">
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span>Language</span>
                    <button onClick={toggleLanguage} className="font-bold text-slate-900 px-3 py-1 bg-white rounded-md border shadow-sm">
                       {language === 'en' ? 'Arabic' : 'English'}
                    </button>
                  </div>
                  <ShimmerButton className="w-full py-4 text-base">
                     {t.nav.bookAppointment}
                  </ShimmerButton>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;