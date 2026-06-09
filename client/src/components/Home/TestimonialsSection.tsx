import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  Award,
  FileText,
  Handshake,
  Quote,
  UserCircle,
  UsersRound,
} from "lucide-react";

type StatItem = {
  value: string;
  label: string;
  icon: LucideIcon;
};

type TestimonialItem = {
  text: string;
  name: string;
  role: string;
};

const stats: StatItem[] = [
  {
    value: "1000+",
    label: "ساعت درمان موفق",
    icon: UsersRound,
  },
  {
    value: "20+",
    label: "مقاله و فعالیت علمی",
    icon: FileText,
  },
  {
    value: "10+",
    label: "سال تجربه تخصصی",
    icon: Award,
  },
  {
    value: "رضایت بالا",
    label: "از مراجعان",
    icon: Handshake,
  },
];

const testimonials: TestimonialItem[] = [
  {
    text: "جلسات خانم دکتر به من کمک کرد تا اضطراب شدیدم کمتر کنم و دوباره آرامش را تجربه کنم. رویکرد علمی و در عین حال همدلانه ایشان بی‌نظیر است.",
    name: "الهام ک",
    role: "مدیر پروژه",
  },
  {
    text: "بعد از جلسات درمان، رابطه‌ام با فرزندم خیلی بهتر شد. احساس می‌کنم ابزارهای واقعی برای والدگری آگاهانه یاد گرفتم.",
    name: "مهران م",
    role: "مادر دو فرزند",
  },
  {
    text: "خانم دکتر دانش و تجربه بالا در مسیر درمان من را مشخص کرد. جلسات منظم و پیگیری ایشان باعث بهبود قابل توجه در زندگی‌ام شد.",
    name: "رضا ف",
    role: "مدیر عامل",
  },
];

export default function TestimonialsSection() {
  return (
    <section dir="rtl" className="bg-[#FBFAF8] py-14">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <StatsBox />

        <div className="mt-12">
          <SectionTitle title="نظرات مراجعان" />

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsBox() {
  return (
    <div className="rounded-2xl border border-[#E8DDD0] bg-white/60 px-5 py-7 shadow-sm">
      <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className={`flex flex-col items-center justify-center px-4 text-center ${
                index !== stats.length - 1
                  ? "md:border-l md:border-[#E2D8C9]"
                  : ""
              }`}
            >
              <Icon size={42} strokeWidth={1.35} className="text-[#B3832C]" />

              <strong className="mt-4 text-2xl font-extrabold text-[#071827] md:text-3xl">
                {item.value}
              </strong>

              <span className="mt-2 text-sm leading-6 text-slate-600">
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-[#071827] md:text-3xl">
        {title}
      </h2>

      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <span className="h-px w-7 bg-[#C49A4A]" />
        <span className="h-2 w-2 rounded-full bg-[#C49A4A]" />
        <span className="h-px w-7 bg-[#C49A4A]" />
      </div>
    </div>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="relative rounded-xl border border-[#EEE7DF] bg-white px-6 py-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D8B46A] hover:shadow-md">
      <Quote
        size={34}
        strokeWidth={2}
        className="absolute left-6 top-5 rotate-180 text-[#C49A4A]"
      />

      <p className="min-h-[120px] pt-8 text-sm leading-8 text-[#263544]">
        {item.text}
      </p>

      <div className="mt-6 flex items-center justify-end gap-3">
        <div className="text-right">
          <h3 className="text-sm font-bold text-[#071827]">{item.name}</h3>
          <p className="mt-1 text-xs text-slate-500">{item.role}</p>
        </div>

        <UserCircle
          size={44}
          strokeWidth={1.3}
          className="text-[#B8B8B8]"
        />
      </div>
    </article>
  );
}