import React from "react";
import { Quote } from "lucide-react";

import aboutImage from "../../assets/images/about-therapist.png";
import { aboutData } from "../../data/aboutData";

export default function AboutSection() {
  return (
    <section dir="rtl" className="bg-white-200 py-2 md:py-4">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-blue-100 shadow-xl md:grid-cols-2">
          
          {/* Content */}
          <div className="order-2 flex flex-col justify-center px-6 py-8 text-white md:order-1 md:px-10 lg:px-14">
            <h2 className="text-center text-2xl font-bold text-mustard-100 md:text-3xl">
              {aboutData.title}
            </h2>

            <ul className="mx-auto mt-7 w-fit space-y-3 text-cream-300 md:mx-0 md:mr-10">
              {aboutData.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm leading-7 md:text-[15px]"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mustard-100" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-start gap-4 border-t border-white/10 pt-6">
              <Quote
                size={24}
                strokeWidth={1.8}
                className="mt-1 shrink-0 text-mustard-100"
                aria-hidden="true"
              />

              <p className="text-xs leading-8 text-cream-300 md:text-sm">
                {aboutData.quote}
              </p>

              <Quote
                size={24}
                strokeWidth={1.8}
                className="mt-1 shrink-0 rotate-180 text-mustard-100"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Image */}
          <div className="order-1 min-h-[260px] md:order-2 md:min-h-[450px]">
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