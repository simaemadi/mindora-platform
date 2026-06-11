import React from "react";
import {
    values
} from "../../data/aboutPageData";

export default function AboutMeValue() {
    return (
        <section className="px-3 pb-5 sm:px-5 ">
            <div className="mx-auto rounded-[20px] border border-cream-300 p-4 shadow-sm bg-white-200">
                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                    {values.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="flex items-start gap-3 rounded-2xl  p-4 text-right lg:block lg:text-center"
                            >
                                <Icon
                                    size={26}
                                    strokeWidth={1.5}
                                    className="shrink-0 text-mustard-200 lg:mx-auto"
                                />

                                <div>
                                    <h3 className="text-xs font-extrabold">{item.title}</h3>
                                    <p className="mt-1 text-[11px] leading-6 text-black-500">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
