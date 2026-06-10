import React from "react";
import { CalendarDays } from "lucide-react";
import { ReserveButton } from "../common/ReserveButton";

export default function HeroActions() {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center xl:justify-start">
      
      <a
        href="#about"
        className="inline-flex h-14 min-w-[170px] items-center justify-center rounded-lg border border-mustard-200 bg-white/40 px-7 text-sm font-semibold text-mustard-100 transition hover:-translate-y-0.5 hover:bg-white"
      >
        آشنایی بیشتر
      </a>
      <ReserveButton
        label="رزرو نوبت آنلاین"
        to="/contact"
        bgColor="#102131"
        hoverBgColor="#0d253b"
        textColor="#FFFFFF"
        height={56}
        width={190}
        className="justify-center px-7  font-semibold"
      />

    </div>
  );
}