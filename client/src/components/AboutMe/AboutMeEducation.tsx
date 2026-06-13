import React from "react";
import { educations, stats } from "../../data/aboutPageData";

export default function AboutMeEducation() {
    return (
        <section dir="rtl" className="px-4 pb-8 sm:px-6">
            <div className="mx-auto space-y-5 bg-white-200">
                {/* Education */}
                <div className="rounded-[18px] border border-cream-200 bg-white-100 px-6 py-6 shadow-sm">
                    <SectionTitle title="تحصیلات و دوره‌های تخصصی" />

                    <div className="mt-7 grid gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                        {educations.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`relative flex items-center justify-center gap-5 px-5 text-right ${index !== educations.length - 1
                                        ? "lg:border-l lg:border-cream-200"
                                        : ""
                                        }`}
                                >
                                    <Icon
                                        size={42}
                                        strokeWidth={1.4}
                                        className="shrink-0 text-mustard-200"
                                    />

                                    <div>
                                        <h3 className="text-sm font-extrabold leading-7 text-black-300">
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-xs leading-6 text-black-500">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Stats */}
                <div className="rounded-[18px] bg-black-300 px-8 py-6 text-white-100 shadow-sm">
                    <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.text}
                                    className={`relative flex justify-center px-6 ${index !== stats.length - 1
                                            ? "lg:border-l lg:border-white/20"
                                            : ""
                                        }`}
                                >
                                    <div
                                        dir="ltr"
                                        className="grid min-w-[210px] grid-cols-[56px_1fr] items-center gap-4"
                                    >
                                        <Icon
                                            size={50}
                                            strokeWidth={1.4}
                                            className="text-mustard-200"
                                        />

                                        <div dir="rtl" className="text-right">
                                            <h3 className="text-3xl font-extrabold leading-none text-mustard-200">
                                                {item.number}
                                            </h3>

                                            <p className="mt-2 text-sm font-medium leading-6 !text-white-200">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

function SectionTitle({ title }: { title: string }) {
    return (
        <div className="text-center">
            <h2 className="text-lg font-extrabold text-black-300">{title}</h2>

            <div className="mx-auto mt-3 flex w-16 items-center justify-center">
                <span className="h-px flex-1 bg-mustard-200" />
                <span className="mx-2 h-1.5 w-1.5 rounded-full bg-mustard-200" />
                <span className="h-px flex-1 bg-mustard-200" />
            </div>
        </div>
    );
}