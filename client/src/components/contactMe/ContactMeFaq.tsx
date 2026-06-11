import React from "react";
import { HelpCircle } from "lucide-react";
import { contactPageData } from "../../data/contactPageData";

export default function ContactMeCard() {
    const { contactInfo, hero, contactCards, beforeSend, form, map, faq } =
        contactPageData;


    return (
        <section className="px-6 pb-14">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-center text-2xl font-extrabold">
                    {faq.title}
                </h2>

                <div className="mx-auto mt-4 flex w-28 items-center justify-center">
                    <span className="h-px flex-1 bg-mustard-300" />
                    <span className="mx-3 h-2 w-2 rounded-full bg-mustard-300" />
                    <span className="h-px flex-1 bg-mustard-300" />
                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-3 ">
                    {faq.items.map((item: any) => (
                        <div
                            key={item.question}
                            className="bg-white p-6 md:border-l md:border-cream-300"
                        >
                            <div className="mb-4 flex items-center gap-3">
                                <HelpCircle size={22} className="text-mustard-200" />
                                <h3 className="font-extrabold">{item.question}</h3>
                            </div>

                            <p className="text-sm leading-7 text-black-500">
                                {item.answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>)
}