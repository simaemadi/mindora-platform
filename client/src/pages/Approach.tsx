"use client";

import React from "react";
import {
  CalendarDays,
  BookOpen,
  ShieldCheck,
  Sprout,
  ClipboardCheck,
  MessageCircle,
  CheckCircle2,
  XCircle,
  Heart,
  Brain,
  Smile,
  Flower2,
  Leaf,
  UserCheck,
  Sparkles,
} from "lucide-react";

const principles = [
  {
    title: "درمان مبتنی بر شواهد",
    text: "تمام مداخلات بر پایه پژوهش‌های علمی و رویکردهای معتبر روانشناسی انجام می‌شود.",
    icon: BookOpen,
  },
  {
    title: "رابطه درمانی امن",
    text: "احترام، پذیرش و محرمانگی اساس همکاری درمانی ماست.",
    icon: ShieldCheck,
  },
  {
    title: "رشد پایدار",
    text: "هدف تنها حل مشکل فعلی نیست؛ بلکه ایجاد مهارت‌هایی برای تمام مراحل زندگی است.",
    icon: Sprout,
  },
];

const processSteps = [
  {
    number: "01",
    title: "ارزیابی اولیه",
    text: "شناخت دقیق تجربه‌ها، دغدغه‌ها و اهداف شما",
  },
  {
    number: "02",
    title: "طراحی مسیر درمان",
    text: "تعیین اهداف و انتخاب رویکرد مناسب برای شما",
  },
  {
    number: "03",
    title: "جلسات درمانی",
    text: "کار روی الگوهای فکری، هیجانی و رفتاری در جلسات منظم",
  },
  {
    number: "04",
    title: "تثبیت تغییرات",
    text: "ایجاد مهارت‌های پایدار و استمرار رشد در زندگی",
  },
];

const approaches = [
  {
    title: "CBT",
    subtitle: "درمان شناختی رفتاری",
    text: "برای شناسایی و تغییر الگوهای فکری ناکارآمد و بهبود احساسات و رفتارها.",
    icon: Heart,
  },
  {
    title: "ACT",
    subtitle: "درمان مبتنی بر پذیرش و تعهد",
    text: "افزایش انعطاف‌پذیری روانی و زندگی بر اساس ارزش‌های فردی.",
    icon: Flower2,
  },
  {
    title: "Schema Therapy",
    subtitle: "طرحواره درمانی",
    text: "شناخت و تغییر الگوهای عمیق و تکرارشونده در احساسات و روابط.",
    icon: Sparkles,
  },
  {
    title: "Trauma Therapy",
    subtitle: "درمان تروما و PTSD",
    text: "پردازش تجربه‌های آسیب‌زا و کاهش واکنش‌های هیجانی و تنش بدنی.",
    icon: Brain,
  },
  {
    title: "Mindfulness",
    subtitle: "ذهن‌آگاهی",
    text: "تقویت حضور در لحظه و کاهش استرس از طریق تمرین‌های ذهن‌آگاهی.",
    icon: UserCheck,
  },
  {
    title: "Emotion Focused",
    subtitle: "درمان متمرکز بر هیجان",
    text: "درک و تنظیم هیجان‌ها برای بهبود روابط و افزایش سلامت هیجانی.",
    icon: Smile,
  },
];

const includedItems = [
  "گوش دادن فعال و بدون قضاوت",
  "تدوین الگوهای فکری و رفتاری",
  "آموزش مهارت‌ها و راهکارهای کاربردی",
  "برنامه‌ریزی و پیگیری عملی",
];

const notIncludedItems = [
  "قضاوت یا برچسب‌زنی",
  "تصمیم‌گیری به جای شما",
  "توصیه‌کردن‌های یک‌طرفه",
  "تضمین نتایج یا تغییرات فوری",
];

export default function ApproachPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F8F4EE] text-[#0B2238]">
      {/* Hero */}
      <section className="px-6 pt-12 pb-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[30px] bg-white/70 px-8 py-12 lg:grid-cols-2 lg:px-16">
          <div>
            <div className="mb-7 flex w-24 items-center">
              <span className="h-px flex-1 bg-mustard-200" />
              <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
              <span className="h-px flex-1 bg-mustard-200" />
            </div>

            <h1 className="text-4xl font-extrabold leading-[1.8] md:text-5xl">
              رویکرد درمانی من
            </h1>

            <p className="mt-6 max-w-xl text-base font-medium leading-9 text-[#263849]">
              درمان برای من تنها علائم کاهش نیست؛ فرصتی است برای شناخت عمیق‌تر
              خود، بازسازی الگوهای ناکارآمد و ساختن زندگی‌ای که با ارزش‌ها،
              هدف‌ها و احساس امنیت شما همسو باشد.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/booking"
                className="inline-flex items-center gap-3 rounded-xl bg-black-300 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0B2A45]"
              >
                رزرو نوبت آنلاین
                <CalendarDays size={18} className="text-mustard-200" />
              </a>

              <a
                href="/services"
                className="inline-flex items-center gap-3 rounded-xl border border-mustard-200 px-6 py-3.5 text-sm font-bold text-mustard-100 transition hover:bg-mustard-200 hover:text-white"
              >
                آشنایی با خدمات
              </a>
            </div>
          </div>

          <div className="relative flex min-h-[360px] items-center justify-center">
            <div className="absolute h-72 w-72 rounded-[45%] bg-cream-100" />
            <div className="absolute right-24 top-20 h-32 w-32 rounded-full bg-[#F8F4EE]" />
            <div className="absolute left-20 top-28 grid grid-cols-5 gap-2 opacity-50">
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className="h-1.5 w-1.5 rounded-full bg-mustard-200"
                />
              ))}
            </div>

            <div className="relative flex h-72 w-72 items-center justify-center rounded-full text-mustard-200">
              <Leaf size={190} strokeWidth={1.1} />
            </div>

            <div className="absolute bottom-10 left-20 h-24 w-32 rounded-[50%] bg-cream-200" />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="px-6 pb-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-[26px] border border-cream-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-cream-200 bg-[#FAF8F4] text-mustard-200">
                  <Icon size={40} strokeWidth={1.4} />
                </div>

                <h3 className="mt-6 text-xl font-extrabold">{item.title}</h3>

                <p className="mt-4 text-sm leading-8 text-black-500">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold">فرآیند درمان</h2>

          <div className="mx-auto mt-4 flex w-20 items-center justify-center">
            <span className="h-px w-full bg-mustard-200" />
            <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
            <span className="h-px w-full bg-mustard-200" />
          </div>

          <div className="relative mt-12 grid gap-8 md:grid-cols-4">
            <span className="absolute left-0 right-0 top-6 hidden h-px bg-mustard-200/60 md:block" />

            {processSteps.map((step) => (
              <div key={step.number} className="relative text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-mustard-200 bg-white text-sm font-extrabold text-mustard-100 shadow-sm">
                  {step.number}
                </div>

                <h3 className="mt-6 text-lg font-extrabold">{step.title}</h3>

                <p className="mx-auto mt-3 max-w-[220px] text-sm leading-7 text-black-500">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold">
            رویکردهای درمانی
          </h2>

          <div className="mx-auto mt-4 flex w-20 items-center justify-center">
            <span className="h-px w-full bg-mustard-200" />
            <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
            <span className="h-px w-full bg-mustard-200" />
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {approaches.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-[22px] border border-cream-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#FAF8F4] text-mustard-200">
                    <Icon size={34} strokeWidth={1.4} />
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold">{item.title}</h3>
                    <p className="mt-1 font-bold text-[#263849]">
                      {item.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-black-500">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expectations */}
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-extrabold">
            چه انتظاری از جلسات داشته باشیم؟
          </h2>

          <div className="mx-auto mt-4 flex w-20 items-center justify-center">
            <span className="h-px w-full bg-mustard-200" />
            <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
            <span className="h-px w-full bg-mustard-200" />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <div className="rounded-[26px] border border-cream-200 bg-white p-8 shadow-sm">
              <h3 className="text-center text-2xl font-extrabold">
                جلسات شامل
              </h3>

              <ul className="mt-7 space-y-4">
                {includedItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      size={22}
                      className="shrink-0 text-mustard-200"
                    />
                    <span className="font-medium text-[#263849]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[26px] border border-cream-200 bg-white p-8 shadow-sm">
              <h3 className="text-center text-2xl font-extrabold">
                جلسات شامل نیست
              </h3>

              <ul className="mt-7 space-y-4">
                {notIncludedItems.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <XCircle size={22} className="shrink-0 text-[#7A8694]" />
                    <span className="font-medium text-[#263849]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}