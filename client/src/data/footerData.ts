import footerIllustration from "../assets/images/footer-illustration.png";

export type FooterLink = {
  id: string;
  label: string;
  to: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: "instagram" | "telegram" | "linkedin";
};

export const footerData = {
  illustration: footerIllustration,

  cta: {
    title: "آماده آغاز مسیر تغییر هستید؟",
    description1: "اگر احساس می‌کنید زمان آن رسیده که با آرامش بیشتری زندگی کنید،",
    description2: "می‌توانید اولین جلسه خود را رزرو کنید.",
    buttonLabel: "رزرو نوبت آنلاین",
    buttonTo: "/contact",
  },

  copyright: "دکتر نرگس محمدی، تمام حقوق محفوظ است",

  links: [
    { id: "faq", label: "سوالات متداول", to: "/faq" },
    { id: "terms", label: "شرایط و قوانین", to: "/terms" },
    { id: "privacy", label: "حریم خصوصی", to: "/privacy" },
  ] as FooterLink[],

  socials: [
    { id: "instagram", label: "Instagram", href: "#", icon: "instagram" },
    { id: "telegram", label: "Telegram", href: "#", icon: "telegram" },
    { id: "linkedin", label: "LinkedIn", href: "#", icon: "linkedin" },
  ] as SocialLink[],
};