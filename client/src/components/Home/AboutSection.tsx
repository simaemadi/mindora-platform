import React from "react";
import { CheckCircle2, Quote } from "lucide-react";

import aboutImage from "../../assets/images/about-therapist.png";

const aboutItems = [
  "دکتری روان‌شناسی بالینی",
  "پژوهشگر حوزه نوروفیدبک و PTSD",
  "نویسنده کتاب و مدرس دانشگاه",
  "دارای مقاله‌های علمی داخلی و بین‌المللی",
  "بیش از ۱۰ سال تجربه درمان فردی و گروهی",
];

export default function AboutSection() {
  return (
    <section dir="rtl" className="bg-[#FBFAF8] py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-[#071827] shadow-xl md:grid-cols-2">
          
          {/* Content */}
          <div className="order-2 flex flex-col justify-center px-7 py-10 text-white md:order-1 md:px-12 lg:px-16">
            <span className="mb-3 text-sm font-medium text-[#C49A4A]">
              درباره من
            </span>

            <h2 className="text-2xl font-extrabold leading-10 md:text-3xl">
              همراهی علمی، انسانی و امن در مسیر درمان
            </h2>

            <ul className="mt-7 space-y-4">
              {aboutItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm leading-7 text-slate-100 md:text-base"
                >
                  <CheckCircle2
                    size={18}
                    strokeWidth={2}
                    className="shrink-0 text-[#C49A4A]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-5">
              <Quote
                size={28}
                strokeWidth={2}
                className="mb-3 rotate-180 text-[#C49A4A]"
              />

              <p className="text-sm leading-8 text-slate-100 md:text-base">
                باور دارم روان‌درمانی زمانی مؤثر است که تخصص علمی، رابطه انسانی
                و احساس امنیت در کنار یکدیگر قرار بگیرند.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 min-h-[320px] md:order-2 md:min-h-[520px]">
            <img
              src={aboutImage}
              alt="دکتر روان‌شناس بالینی"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}