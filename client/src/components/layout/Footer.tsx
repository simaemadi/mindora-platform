import React from "react";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { CalendarDays } from "lucide-react";

import { footerData } from "../../data/footerData";
import { ReserveButton } from "../common/ReserveButton";

const iconButtonClass =
  "flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition hover:border-mustard-200 hover:text-mustard-200";

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.7"
    />
    <circle
      cx="12"
      cy="12"
      r="3.2"
      stroke="currentColor"
      strokeWidth="1.7"
    />
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

const socialIcons = {
  instagram: <InstagramIcon />,
  telegram: <TelegramIcon />,
  linkedin: <LinkedInIcon />,
} as const;

type SocialIconKey = keyof typeof socialIcons;

const isSocialIconKey = (icon: string): icon is SocialIconKey => {
  return icon in socialIcons;
};

export default function Footer() {
  const { illustration, cta, links, socials, copyright } = footerData;

  return (
    <footer dir="rtl" className="px-3 pb-4 sm:px-4 sm:pb-5">
      <div className="mx-auto max-w-screen-2xl overflow-hidden rounded-[1.5rem] bg-blue-100 text-white shadow-2xl shadow-slate-900/20">
        <div className="relative isolate h-[230px] overflow-hidden bg-blue-100 px-5 sm:px-6 md:px-10 lg:px-16">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-[155px] overflow-hidden opacity-45 sm:w-[210px] sm:opacity-65 md:w-[260px] md:opacity-95 lg:w-[300px] xl:w-[340px]">
            <img
              src={illustration}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover object-left-bottom brightness-110 contrast-105"
              style={{
                WebkitMaskImage:
                  "linear-gradient(to right, black 0%, black 55%, rgba(0,0,0,0.65) 75%, transparent 100%)",
                maskImage:
                  "linear-gradient(to right, black 0%, black 55%, rgba(0,0,0,0.65) 75%, transparent 100%)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto flex h-full max-w-3xl flex-col items-center justify-center text-center md:translate-x-14 lg:translate-x-20">
            <h2 className="text-[21px] font-bold leading-8 text-mustard-200 sm:text-[23px] md:text-[26px]">
              {cta.title}
            </h2>

            <p className="mt-3 max-w-xl text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">
              {cta.description1}
            </p>

            <p className="mt-1 max-w-xl text-xs leading-6 text-slate-300 sm:text-sm sm:leading-7">
              {cta.description2}
            </p>

            <ReserveButton
                  label="رزرو نوبت آنلاین"
                  to="/contact"
                  icon={<CalendarDays size={16} />}
                  bgColor="#B8893D"
                  hoverBgColor="#A8772F"
                  textColor="#FFFFFF"
                  height={40}
                  width={180}
                  className="rounded-lg px-5 text-[10px] my-5"
              />
          </div>
        </div>

        <div className="bg-blue-200 px-5 py-2 sm:px-6 md:px-10 lg:px-16">
          <div
            dir="ltr"
            className="grid gap-3 md:min-h-[34px] md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4"
          >
            <div className="order-1 flex items-center justify-center gap-3 md:justify-start">
              {socials.map((item) => {
                if (!isSocialIconKey(item.icon)) return null;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={iconButtonClass}
                  >
                    {socialIcons[item.icon] as ReactNode}
                  </a>
                );
              })}
            </div>

            <p
              dir="rtl"
              className="order-2 text-center text-[11px] leading-6 text-slate-400 sm:text-xs"
            >
              {copyright}
            </p>

            <nav
              dir="rtl"
              aria-label="لینک‌های فوتر"
              className="order-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-start"
            >
              {links.map((link) => (
                <NavLink
                  key={link.id}
                  to={link.to}
                  className="text-[11px] text-slate-300 transition hover:text-mustard-200 sm:text-xs"
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}