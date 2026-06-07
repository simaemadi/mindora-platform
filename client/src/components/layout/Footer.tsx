import React from "react";
import { NavLink } from "react-router-dom";
import footerIllustration from "../../assets/images/footer-illustration.png";

const footerLinks = [
  { label: "سوالات متداول", to: "/faq" },
  { label: "شرایط و قوانین", to: "/terms" },
  { label: "حریم خصوصی", to: "/privacy" }
];

const iconButtonClass =
  "flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-[#c49a4a] hover:text-[#c49a4a]";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
    <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.7" />
    <circle cx="17" cy="7" r="1" fill="currentColor" />
  </svg>
);

const TelegramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
    <path
      d="M20 5L4 11.5L10.5 13.5M20 5L15 19L10.5 13.5M20 5L10.5 13.5"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
    <path
      d="M7 10V18M7 7V7.01M11 18V10M11 13.5C11 11.6 12.3 10 14.3 10C16.3 10 17 11.4 17 13.4V18"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </svg>
);

const socialLinks = [
  { label: "Instagram", href: "#", icon: <InstagramIcon /> },
  { label: "Telegram", href: "#", icon: <TelegramIcon /> },
  { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> }
];

const Footer = () => {
  return (
    <footer dir="rtl" className="px-3 pb-4 sm:px-4 sm:pb-5">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.5rem] bg-[#121f2c] text-white shadow-2xl shadow-slate-900/20">
        <div className="relative isolate h-[230px] overflow-hidden bg-[#121f2c] px-5 sm:px-6 md:px-10 lg:px-16">
          <div className="pointer-events-none absolute inset-y-0 left-6 hidden overflow-hidden md:block md:w-[260px] lg:w-[300px] xl:w-[340px] [@media_(max-height:500px)]:hidden">
            <img
              src={footerIllustration}
              alt=""
              className="h-full w-full object-cover object-left-bottom opacity-95 brightness-110 contrast-105"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, black 0%, black 62%, rgba(0,0,0,0.85) 78%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, black 0%, black 62%, rgba(0,0,0,0.85) 78%, transparent 100%)"
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center text-center">
            <h2 className="text-[21px] font-bold leading-8 text-[#c49a4a] sm:text-[23px] md:text-[26px]">
              آماده آغاز مسیر تغییر هستید؟
            </h2>

            <p className="mt-3 max-w-xl text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">
              اگر احساس می‌کنید زمان آن رسیده که با آرامش بیشتری زندگی کنید،
            </p>

            <p className="mt-1 max-w-xl text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">
              می‌توانید اولین جلسه خود را رزرو کنید.
            </p>

            <NavLink
              to="/contact"
              className="mt-5 inline-flex w-full max-w-[230px] items-center justify-center gap-2 rounded-xl bg-[#c49a4a] px-6 py-2.5 text-xs font-semibold text-white shadow-lg shadow-[#c49a4a]/25 transition duration-300 hover:-translate-y-0.5 hover:bg-[#b78b3b] sm:text-sm"
            >
              رزرو نوبت آنلاین
              <span aria-hidden="true">◀</span>
            </NavLink>
          </div>
        </div>

        <div className="bg-[#1d2b3d] px-5 py-2 sm:px-6 md:px-10 lg:px-16">
          <div
            dir="ltr"
            className="grid gap-3 md:min-h-[34px] md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4"
          >
            <div className="order-1 flex items-center justify-center gap-3 md:justify-start">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className={iconButtonClass}
                >
                  {item.icon}
                </a>
              ))}
            </div>

            <p dir="rtl" className="order-2 text-center text-[11px] leading-6 text-slate-400 sm:text-xs">
              ۱۴۰۳ دکتر نرگس محمدی، تمام حقوق محفوظ است.
            </p>

            <div
              dir="rtl"
              className="order-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-start"
            >
              {footerLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-[11px] text-slate-300 transition hover:text-[#c49a4a] sm:text-xs"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;