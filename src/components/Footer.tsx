import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { SiSnapchat } from "react-icons/si";
import { useLanguage } from "@/context/LanguageContext";

// 1. تعريف واجهة لخصائص عنصر الاتصال (Interface for Contact Item Props)
interface ContactItemProps {
  icon: React.ElementType;
  title: string;
  desc: string;
  isLink?: boolean;
  href?: string;
}

const Footer = () => {
  const SnapchatIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M12.062 14.509c.813 0 1.637-.151 2.379-.427.323-.12.607-.226.786-.251.277-.04.417.151.341.352-.163.453-.189.966-.138 1.456.05 4.382 3.197 4.975 4.902 4.975.29 0 .542-.012.766-.025.163-.012.276-.05.276-.176v-.063c-.013-.025-.013-.075-.025-.138a3.178 3.178 0 0 0-.251-.892c-.101-.214-.239-.364-.402-.452-.301-.164-.816-.301-1.38-.44-1.38-.326-1.506-.703-1.48-1.042.012-.138.075-.251.15-.351.176-.239.528-.44.904-.59.715-.277 1.556-.402 2.392-.402.665 0 1.255.076 1.706.202l.063.024c.05.013.113.025.138.013.063-.025.101-.063.113-.101.063-.339.063-.79.063-1.167 0-.301-.013-.59-.038-.853a4.269 4.269 0 0 0-.54-1.682c-.088-.163-.226-.264-.414-.276-.414-.025-1.08-.076-1.782-.126-.452-.037-.929-.075-1.342-.163-.264-.063-.515-.176-.716-.364a1.036 1.036 0 0 1-.276-.452c-.063-.201-.038-.414.075-.59.088-.151.214-.276.352-.377a7.276 7.276 0 0 1 1.029-.652c.289-.151.527-.415.653-.728.163-.39.175-.841.138-1.28l-.013-.151c-.025-.264-.037-.552-.05-.853-.138-2.611-1.142-4.995-2.824-6.664C16.273 1.017 14.24.15 11.968.15c-2.284 0-4.33 .867-5.912 2.447-1.681 1.67-2.686 4.053-2.81 6.664-.013.301-.025.59-.051.853l-.012.151c-.038.44-.025.891.138 1.28.126.314.364.577.653.728a7.276 7.276 0 0 1 1.029.652c.138.101.264.226.352.377.113.176.138.39.075.59-.063.189-.176.352-.314.477-.201.176-.452.289-.715.352-.414.088-.891.126-1.343.163-.702.05-1.368.101-1.782.126-.188.012-.326.113-.414.276a4.269 4.269 0 0 0-.54 1.682c-.025.263-.038.552-.038.853 0 .377 0 .828.063 1.167.012.038.05.076.113.101.025.012.088 0 .138-.013l.063-.024c.452-.126 1.042-.202 1.707-.202.828 0 1.669.125 2.392.402.376.15.728.351.903.59.076.1.138.213.151.351.025.339-.101.716-1.481 1.042-.565.139-1.079.276-1.38.44-.163.088-.301.238-.402.452a3.178 3.178 0 0 0-.251.892c-.012.063-.012.113-.025.138v.063c0 .126.113.164.276.176.226.013.477.025.766.025 1.706 0 4.853-.593 4.902-4.975.05-.49-.025-1.003-.138-1.456-.076-.201.063-.392.341-.352.176.025.46.131.786.251.741.276 1.566.427 2.379.427z" />
  </svg>
);
  const TiktokIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);
  const { t, isRTL } = useLanguage();

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about-us", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/doctors", label: t.nav.doctors },
    { href: "/offers", label: t.nav.offers },
    { href: "/contact-us", label: t.nav.contact },
  ];
  

  const socialLinks = [
    
    {
      icon: Facebook,
      href: "https://www.facebook.com/sftouchclinic",
      color: "hover:bg-blue-600",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/sf_touch_clinic",
      color: "hover:bg-pink-600",
    },
    /* { icon: Twitter, href: "https://twitter.com", color: "hover:bg-sky-500" }, */
    {
      icon: TiktokIcon,
      href: "https://www.tiktok.com/@sf_touch_clinic", // استبدله برابط حسابكم الفعلي
      color: "hover:bg-zinc-900 border-zinc-700", 
    },
    {
      icon: SiSnapchat,
      href: "https://www.snapchat.com/add/sf_touchclinic",
      color: "hover:bg-yellow-400 hover:text-black", // التعديل هنا لضمان وضوح الأيقونة باللون الأسود عند تمرير الماوس
    },
  ];

  // مصفوفة أرقام الهواتف الجديدة مع التنسيق الجمالي لكل رقم
  const phoneNumbers = [
    { display: "010 3174 6006", value: "01031746006" },
    { display: "+20 155 800 8978", value: "+201558008978" },
    { display: "010 0690 1892", value: "01006901892" },
    { display: "+20 15 0365 6589", value: "+201503656589" },
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
                SF{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                  Touch
                </span>
                <Sparkles className="w-5 h-5 text-yellow-500 animate-pulse" />
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-yellow-500 to-transparent rounded-full" />
            </motion.div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              {t.footer.aboutText ||
                (isRTL
                  ? "نقدم أرقى خدمات التجميل والعناية بالبشرة بأحدث التقنيات العالمية تحت إشراف نخبة من الأطباء."
                  : "Providing the finest beauty and skin care services with the latest international technologies under the supervision of elite doctors.")}
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
                  <Link
                    to={link.href}
                    className="group flex items-center gap-2 text-sm transition-colors hover:text-yellow-400"
                  >
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

              {/* قسم أرقام الهواتف الإبداعي والمطور */}
              <div className="flex gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10 transition-all duration-300 shrink-0">
                  <Phone className="w-5 h-5 text-slate-400 group-hover:text-yellow-500 transition-colors" />
                </div>
                <div className="space-y-2 flex-1">
                  <p className="text-white font-bold text-sm group-hover:text-yellow-500 transition-colors">
                    {isRTL ? "أرقام الحجز والاستفسار" : "Booking & Support"}
                  </p>
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-2">
                    {phoneNumbers.map((phone, idx) => (
                      <a
                        key={idx}
                        href={`tel:${phone.value}`}
                        dir="ltr"
                        className="text-xs text-slate-400 hover:text-yellow-400 flex items-center gap-1.5 transition-colors group/num duration-200 font-mono tracking-wider justify-start"
                      >
                        <span className="w-1 h-1 rounded-full bg-slate-600 group-hover/num:bg-yellow-500 transition-colors shrink-0" />
                        <span>{phone.display}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
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
                  <p className="text-white font-bold text-sm mb-1">
                    {isRTL ? "ساعات العمل" : "Opening Hours"}
                  </p>
                  <p className="text-xs text-slate-400">{t.footer.hours}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-yellow-500" />
                <a
                  href="mailto:info@sftouch.com"
                  className="text-sm hover:text-white transition-colors"
                >
                  info@sftouch.com
                </a>
              </div>
            </div>

            {/* Newsletter Input */}
            <div className="relative">
              <input
                type="email"
                placeholder={
                  isRTL ? "اشتركي في النشرة..." : "Subscribe newsletter..."
                }
                className="w-full bg-slate-900 border border-slate-800 rounded-full py-3 px-4 text-sm text-white focus:outline-none focus:border-yellow-500 transition-colors"
              />
              <button
                className={`absolute top-1/2 -translate-y-1/2 bg-yellow-500 rounded-full p-2 text-black hover:bg-yellow-400 transition-colors ${isRTL ? "left-1.5" : "right-1.5"}`}
              >
                <ArrowRight
                  className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM BAR ================= */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="https://tungsten-media.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-500 hover:text-yellow-400 transition-colors inline-flex items-center gap-1 group"
          >
            <span>{t.footer.copyright}</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
          </a>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">
              {isRTL ? "سياسة الخصوصية" : "Privacy Policy"}
            </a>
            <a href="#" className="hover:text-white transition-colors">
              {isRTL ? "الشروط والأحكام" : "Terms & Conditions"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// 2. استخدام الواجهة (Interface) هنا بدلاً من any
const ContactItem = ({
  icon: Icon,
  title,
  desc,
  isLink,
  href,
}: ContactItemProps) => {
  const Content = () => (
    <div className="flex gap-4 group cursor-default">
      <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-yellow-500/50 group-hover:bg-yellow-500/10 transition-all duration-300">
        <Icon className="w-5 h-5 text-slate-400 group-hover:text-yellow-500 transition-colors" />
      </div>
      <div>
        <p className="text-white font-bold text-sm mb-0.5 group-hover:text-yellow-500 transition-colors">
          {title}
        </p>
        <p className="text-xs text-slate-500">{desc}</p>
      </div>
    </div>
  );

  return isLink ? (
    <a href={href} className="block">
      {Content()}
    </a>
  ) : (
    Content()
  );
};

export default Footer;
