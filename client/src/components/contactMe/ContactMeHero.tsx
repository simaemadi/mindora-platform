import React from "react";
import { contactPageData } from "../../data/contactPageData";
import { SectionDivider } from "../common/SectionDivider";

export default function ContactMeHero() {
    const { hero } = contactPageData;
    return (
        <section className="px-6 pt-16 pb-10 text-center">
            <div className="mx-auto max-w-7xl">
                <h1 className="text-4xl font-extrabold md:text-5xl">
                    {hero.title}
                </h1>

                <div className="mx-auto mt-5 flex w-28 items-center justify-center">
                    <span className="h-px flex-1 bg-mustard-300" />
                    <span className="mx-3 h-2 w-2 rounded-full bg-mustard-300" />
                    <span className="h-px flex-1 bg-mustard-300" />
                </div>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black-500">
                    {hero.description}
                </p>
            </div>
        </section>
    )
}