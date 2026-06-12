import React from "react";
import { Quote, UserCircle } from "lucide-react";

import {
  stats,
  testimonials,
  type StatItem,
  type TestimonialItem,
} from "../../data/testimonialsData";

export default function TestimonialsSection() {
  return (
    <section dir="rtl" className="bg-white-200 py-14">
      <div className="mx-auto px-5 md:px-8">
        <StatsBox />

        <div className="mt-6">
          <SectionTitle title="نظرات مراجعان" />

          <div className="mt-6 grid items-stretch gap-5 md:grid-cols-3">
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
    <div className="rounded-2xl border border-cream-300 bg-white/60 px-5 py-5 shadow-sm">
      <div className="grid grid-cols-2 gap-y-8 md:grid-cols-4 md:gap-y-0">
        {stats.map((item, index) => (
          <StatCard
            key={item.label}
            item={item}
            hasBorder={index !== stats.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function StatCard({
  item,
  hasBorder,
}: {
  item: StatItem;
  hasBorder: boolean;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`flex flex-col items-center justify-center px-4 text-center ${
        hasBorder ? "md:border-l md:border-cream-300" : ""
      }`}
    >
      <Icon size={42} strokeWidth={1.35} className="text-mustard-100" />

      <strong className="mt-4 text-2xl font-extrabold text-black-600 md:text-3xl">
        {item.value}
      </strong>

      <span className="mt-2 text-sm leading-6 text-slate-600">
        {item.label}
      </span>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-black-600 md:text-3xl">
        {title}
      </h2>

      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <span className="h-px w-7 bg-mustard-200" />
        <span className="h-2 w-2 rounded-full bg-mustard-200" />
        <span className="h-px w-7 bg-mustard-200" />
      </div>
    </div>
  );
}

function TestimonialCard({ item }: { item: TestimonialItem }) {
  return (
    <article className="relative flex h-full min-h-[290px] flex-col rounded-xl border border-cream-300 bg-white px-6 py-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-mustard-200 hover:shadow-md">
      <Quote
        size={34}
        strokeWidth={2}
        className="absolute left-6 top-5 rotate-180 text-mustard-200"
        aria-hidden="true"
      />

      <p className="flex-1 pt-8 text-sm leading-8 text-black-600">
        {item.text}
      </p>

      <div className="mt-auto flex items-center justify-end gap-3 pt-6">
        <div className="text-right">
          <h3 className="text-sm font-bold text-black-600">{item.name}</h3>
          <p className="mt-1 text-xs text-slate-500">{item.role}</p>
        </div>

        <UserCircle
          size={44}
          strokeWidth={1.3}
          className="shrink-0 text-black-500"
          aria-hidden="true"
        />
      </div>
    </article>
  );
}