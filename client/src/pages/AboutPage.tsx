import React from "react";
import {
  CalendarDays,
  Leaf,
  ShieldCheck,
  HeartHandshake,
  Award,
  HandHeart,
  Brain,
  Heart,
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  MessageSquareText,
  BadgeCheck,
  Quote,
} from "lucide-react";

import abouttherapist from "../assets/images/about-therapist.png"
import blogDecor from  "../../public/images/blog-hero-decor.jpg";

const values = [
  {
    title: "رویکرد علمی و به‌روز",
    text: "استفاده از روش‌های معتبر و بر اساس شواهد علمی",
    icon: Leaf,
  },
  {
    title: "حفظ محرمانگی",
    text: "اطلاعات شما کاملاً محرمانه نگهداری می‌شود",
    icon: ShieldCheck,
  },
  {
    title: "همدلی و احترام",
    text: "با شنیدن بدون قضاوت در کنار شما خواهم بود",
    icon: HandHeart,
  },
  {
    title: "تخصص و تجربه",
    text: "سال‌ها تجربه بالینی در حوزه روان‌درمانی و مشاوره",
    icon: Award,
  },
  {
    title: "حمایت تا رسیدن به تغییر",
    text: "از اولین جلسه تا رسیدن به آرامش پایدار همراهتان هستم",
    icon: HeartHandshake,
  },
];

const approaches = [
  { title: "درمان شناختی رفتاری", icon: Brain },
  { title: "طرحواره درمانی", icon: Users },
  { title: "روان‌درمانی پویشی", icon: MessageSquareText },
  { title: "درمان مبتنی بر شفقت", icon: Heart },
];

const timeline = [
  {
    year: "۱۳۹۶",
    title: "دکتری روانشناسی بالینی",
    desc: "دانشگاه علوم پزشکی تهران",
  },
  {
    year: "۱۳۹۳",
    title: "کارشناسی ارشد روانشناسی بالینی",
    desc: "دانشگاه علامه طباطبایی",
  },
  {
    year: "۱۳۹۱",
    title: "کارشناسی روانشناسی",
    desc: "دانشگاه تهران",
  },
  {
    year: "۱۳۹۲",
    title: "شروع فعالیت بالینی و مشاوره",
    desc: "در مراکز درمانی و مطب شخصی",
  },
];

const educations = [
  {
    title: "دکتری روانشناسی بالینی",
    desc: "دانشگاه علوم پزشکی تهران - ۱۳۹۶",
    icon: GraduationCap,
  },
  {
    title: "کارشناسی ارشد روانشناسی بالینی",
    desc: "دانشگاه علامه طباطبایی - ۱۳۹۳",
    icon: BookOpen,
  },
  {
    title: "دوره‌های تخصصی",
    desc: "طرحواره‌درمانی، درمان مبتنی بر شفقت و CBT",
    icon: FileText,
  },
  {
    title: "کارگاه‌ها و سمینارها",
    desc: "شرکت در کارگاه‌های تخصصی داخلی و خارجی",
    icon: Users,
  },
];

const stats = [
  {
    number: "رضایت بالا",
    text: "از مراجعان",
    icon: HandHeart,
  },
  {
    number: "10+",
    text: "سال تجربه تخصصی",
    icon: BadgeCheck,
  },
  {
    number: "20+",
    text: "مقاله و فعالیت علمی",
    icon: FileText,
  },
  {
    number: "1000+",
    text: "ساعت درمان موفق",
    icon: Users,
  },
];

export default function AboutPage() {
  return (
    <main dir="rtl" className="min-h-screen bg-[#F8F4EE] text-[#0B2238]">
      {/* Hero */}
      <section className="px-6 pt-10 pb-7">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-[#E7DED2] bg-white shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[360px] overflow-hidden lg:h-[470px]">
              <img
                src={abouttherapist}
                alt="دکتر نرگس محمدی"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-white to-transparent lg:block" />
            </div>

            <div className="flex flex-col justify-center p-8 text-center lg:p-14">
              <span className="text-sm font-bold text-[#B18435]">
                درباره من
              </span>

              <h1 className="mt-4 text-3xl font-extrabold leading-[1.8] md:text-5xl">
                همراه شما در مسیر
                <br />
                سلامت روان و آرامش ذهن
              </h1>

              <div className="mx-auto mt-5 flex w-20 items-center justify-center">
                <span className="h-px w-full bg-mustard-200" />
                <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
                <span className="h-px w-full bg-mustard-200" />
              </div>

              <p className="mx-auto mt-6 max-w-xl text-base leading-9 text-[#52606D]">
                من دکتر نرگس محمدی، روانشناس بالینی و درمانگر حوزه سلامت هستم.
                هدف من کمک به شماست تا در فضایی امن و حمایتگر، به درک عمیق‌تری
                از خود برسید و کیفیت زندگی‌تان را ارتقا دهید.
              </p>

              <a
                href="/booking"
                className="mx-auto mt-8 inline-flex items-center gap-3 rounded-xl bg-[#061B2E] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#0B2A45]"
              >
                رزرو نوبت مشاوره
                <CalendarDays size={18} className="text-mustard-200" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values Row */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-7xl rounded-[26px] border border-[#E7DED2] bg-white px-5 py-7 shadow-sm">
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="relative px-4 py-3 text-center"
                >
                  {index !== values.length - 1 && (
                    <span className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-[#E7DED2] lg:block" />
                  )}

                  <Icon
                    size={42}
                    strokeWidth={1.4}
                    className="mx-auto text-mustard-200"
                  />

                  <h3 className="mt-4 font-extrabold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-7 text-[#52606D]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach + Timeline */}
      <section className="px-6 pb-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          {/* Approach */}
          <div className="rounded-[28px] border border-[#E7DED2] bg-white p-8 shadow-sm">
            <h2 className="text-center text-2xl font-extrabold">
              رویکرد درمانی من
            </h2>

            <div className="mx-auto mt-4 flex w-20 items-center justify-center">
              <span className="h-px w-full bg-mustard-200" />
              <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
              <span className="h-px w-full bg-mustard-200" />
            </div>

            <p className="mt-6 text-center leading-9 text-[#52606D]">
              من از رویکردهای علمی و مؤثر مانند درمان شناختی رفتاری، طرحواره‌درمانی،
              روان‌درمانی پویشی و رویکردهای مبتنی بر شفقت استفاده می‌کنم تا متناسب
              با نیازها و اهداف هر فرد، بهترین مسیر درمانی انتخاب شود.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {approaches.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center justify-center gap-3 rounded-xl border border-[#E7DED2] bg-[#FAF8F4] px-4 py-4"
                  >
                    <Icon size={22} className="text-mustard-200" />
                    <span className="text-sm font-bold">{item.title}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="rounded-[28px] border border-[#E7DED2] bg-white p-8 shadow-sm">
            <h2 className="text-center text-2xl font-extrabold">
              مسیر حرفه‌ای من
            </h2>

            <div className="mx-auto mt-4 flex w-20 items-center justify-center">
              <span className="h-px w-full bg-mustard-200" />
              <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
              <span className="h-px w-full bg-mustard-200" />
            </div>

            <div className="relative mx-auto mt-8 max-w-xl">
              <span className="absolute right-[86px] top-4 h-[calc(100%-32px)] w-px bg-mustard-200/50" />

              <div className="space-y-7">
                {timeline.map((item) => (
                  <div
                    key={item.title}
                    className="relative grid grid-cols-[90px_1fr] gap-6"
                  >
                    <div className="text-left text-sm font-bold text-[#B18435]">
                      {item.year}
                    </div>

                    <div className="relative">
                      <span className="absolute -right-[27px] top-1.5 h-3 w-3 rounded-full bg-mustard-200" />

                      <h3 className="font-extrabold">{item.title}</h3>
                      <p className="mt-1 text-sm text-[#52606D]">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-7xl rounded-[28px] border border-[#E7DED2] bg-white p-8 shadow-sm">
          <h2 className="text-center text-2xl font-extrabold">
            تحصیلات و دوره‌های تخصصی
          </h2>

          <div className="mx-auto mt-4 flex w-20 items-center justify-center">
            <span className="h-px w-full bg-mustard-200" />
            <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
            <span className="h-px w-full bg-mustard-200" />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {educations.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="relative text-center">
                  {index !== educations.length - 1 && (
                    <span className="absolute left-0 top-1/2 hidden h-16 w-px -translate-y-1/2 bg-[#E7DED2] lg:block" />
                  )}

                  <Icon
                    size={42}
                    strokeWidth={1.4}
                    className="mx-auto text-mustard-200"
                  />

                  <h3 className="mt-4 font-extrabold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-7 text-[#52606D]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-8">
        <div className="mx-auto max-w-7xl rounded-[24px] bg-[#061B2E] px-8 py-8 text-white shadow-xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((item, index) => {
              const Icon = item.icon;

              return (
                <div key={item.text} className="relative text-center">
                  {index !== stats.length - 1 && (
                    <span className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-white/15 lg:block" />
                  )}

                  <Icon
                    size={42}
                    strokeWidth={1.5}
                    className="mx-auto text-mustard-200"
                  />

                  <h3 className="mt-3 text-3xl font-extrabold text-mustard-200">
                    {item.number}
                  </h3>

                  <p className="mt-2 text-sm text-white/75">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="px-6 pb-10">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[26px] border border-[#E7DED2] bg-white shadow-sm lg:grid-cols-[260px_1fr_160px]">
          <div className="hidden h-full lg:block">
            <img
              src={blogDecor}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex items-center justify-center p-8 text-center">
            <p className="text-xl font-medium leading-10 text-[#0B2238]">
              باور دارم هر فردی توانایی رشد، تغییر و ساختن زندگی معنادار را دارد.
              من در این مسیر همراه شما هستم تا به نسخه‌ای بهتر از خودتان برسید.
            </p>
          </div>

          <div className="flex items-center justify-center p-8 text-mustard-200">
            <Quote size={72} strokeWidth={1.2} />
          </div>
        </div>
      </section>
    </main>
  );
}