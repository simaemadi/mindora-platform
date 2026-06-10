import React from "react";
import { supportData } from "../../data/supportSectionData";
import type { HelpArea, WhyItem } from "../../data/supportSectionData";


export default function SupportSections() {
  const { helpAreas, whyItems } = supportData;
  
  return (
    <section dir="rtl" className="bg-white-200 py-8">
      <div className="mx-auto max-w-7xl px-3 md:px-8">
        <SectionTitle title="در چه زمینه‌هایی می‌توانم کمک کنم؟" />

        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {helpAreas.map((item:any) => (
            <HelpAreaCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-6">
          <SectionTitle title="چرا مراجعان من را انتخاب می‌کنند؟" />

          <div className="mt-6 grid gap-8 md:grid-cols-3 md:gap-0">
            {whyItems.map((item:any, index:any) => (
              <WhyChooseItem
                key={item.title}
                item={item}
                hasBorder={index !== whyItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
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

function HelpAreaCard({ item }: { item: HelpArea }) {
  const Icon = item.icon;

  return (
    <div className="group flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-cream-300 bg-white px-4 py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-mustard-200 hover:shadow-md">
      <Icon
        size={42}
        strokeWidth={1.4}
        className="text-mustard-100 transition group-hover:text-mustard-100"
      />

      <h3 className="mt-5 text-sm font-semibold leading-7 text-black-600">
        {item.title}
      </h3>
    </div>
  );
}

function WhyChooseItem({
  item,
  hasBorder,
}: {
  item: WhyItem;
  hasBorder: boolean;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`flex flex-col items-center px-6 text-center ${
        hasBorder ? "md:border-l md:border-cream-300" : ""
      }`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full text-mustard-100">
        <Icon size={48} strokeWidth={1.35} />
      </div>

      <h3 className="mt-5 text-base font-bold text-black-600">{item.title}</h3>

      <p className="mt-4 max-w-[280px] text-sm leading-8 text-slate-600">
        {item.description}
      </p>
    </div>
  );
}