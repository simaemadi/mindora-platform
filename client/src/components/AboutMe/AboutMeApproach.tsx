import React from "react";
import { approaches, timeline } from "../../data/aboutPageData";

export default function AboutMeApproach() {
  return (
    <section dir="rtl" className="px-4 pb-6 sm:px-6">
      <div className="mx-auto grid gap-5 lg:grid-cols-2 bg-white-200">
        {/* Timeline */}
        <Card title="مسیر حرفه‌ای من" className="lg:order-1">
          <div className="relative mx-auto mt-2 max-w-[430px]">
            <span className="absolute right-[86px] top-3 h-[calc(100%-24px)] w-px bg-mustard-200/70" />

            <div className="space-y-5">
              {timeline.map((item) => (
                <div
                  key={item.title}
                  className="relative grid grid-cols-[70px_28px_1fr] items-start gap-3"
                >
                  <div className="pt-0.5 text-left text-sm font-extrabold text-mustard-100">
                    {item.year}
                  </div>

                  <div className="relative flex justify-center pt-2">
                    <span className="relative z-10 h-3 w-3 rounded-full bg-mustard-200 ring-4 ring-white" />
                  </div>

                  <div className="text-right">
                    <h3 className="text-sm font-extrabold leading-7 text-black-300">
                      {item.title}
                    </h3>

                    <p className="text-xs leading-6 text-black-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Approach */}
        <Card title="رویکرد درمانی من" className="lg:order-2">
          <p className="mx-auto max-w-xl text-center text-sm leading-8 text-black-500">
            من از رویکردهای علمی و مؤثر مانند درمان شناختی رفتاری، طرحواره‌درمانی،
            روان‌درمانی پویشی و رویکردهای مبتنی بر شفقت استفاده می‌کنم تا متناسب
            با نیازها و اهداف هر فرد، بهترین مسیر درمانی را انتخاب کنیم.
          </p>

          <div className="mx-auto mt-7 grid max-w-[560px] gap-4 sm:grid-cols-2">
            {approaches.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex min-h-[58px] items-center justify-center gap-4 rounded-xl border border-cream-200 bg-white-100 px-5 py-3 shadow-[0_10px_30px_rgba(6,27,46,0.03)]"
                >
                  <Icon
                    size={25}
                    strokeWidth={1.45}
                    className="shrink-0 text-mustard-200"
                  />

                  <span className="text-sm font-medium text-black-600">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
}

function Card({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`min-h-[340px] rounded-[22px] border border-cream-200 bg-white-100 px-6 py-7 shadow-[0_18px_55px_rgba(6,27,46,0.04)] ${className}`}
    >
      <SectionTitle title={title} />
      <div className="mt-6">{children}</div>
    </div>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-extrabold text-black-300">{title}</h2>

      <div className="mx-auto mt-3 flex w-16 items-center justify-center">
        <span className="h-px flex-1 bg-mustard-200" />
        <span className="mx-2 h-1.5 w-1.5 rounded-full bg-mustard-200" />
        <span className="h-px flex-1 bg-mustard-200" />
      </div>
    </div>
  );
}