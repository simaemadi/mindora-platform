import React from "react";
import { CalendarDays } from "lucide-react";

export default function HeroActions() {
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center xl:justify-start">
      <a
        href="#booking"
        className="inline-flex h-14 min-w-[190px] items-center justify-center gap-3 rounded-lg bg-[#102131] px-7 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-[#0d253b]"
      >
        رزرو نوبت آنلاین
        <CalendarDays size={16} />
      </a>

      <a
        href="#about"
        className="inline-flex h-14 min-w-[170px] items-center justify-center rounded-lg border border-[#c8a86a] bg-white/40 px-7 text-sm font-semibold text-[#9B6F24] transition hover:-translate-y-0.5 hover:bg-white"
      >
        آشنایی بیشتر
      </a>
    </div>
  );
}