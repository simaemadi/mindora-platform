import React from "react";
import blogDecor from "../../../public/images/blog-hero-decor.jpg";
import { Quote } from "lucide-react";

export default function AboutMeQuote() {
    return (
        <section className="sm:px-5">
            <div className="mx-auto grid  bg-white-200 overflow-hidden rounded-[20px] border border-cream-300 bg-white-100 shadow-sm lg:grid-cols-[160px_1fr_90px]">
                <div className="hidden lg:block pl-10">
                    <img
                        src={blogDecor}
                        alt=""
                        className="h-full w-full object-cover"
                    />
                </div>

                <div className="px-5 py-7 text-center">
                    <p className="mx-auto max-w-2xl text-sm font-medium leading-8 text-black-600">
                        باور دارم هر فردی توانایی رشد، تغییر و ساختن زندگی معنادار را دارد.
                    </p>
                    <p className="mx-auto max-w-2xl text-sm font-medium leading-8 text-black-600">
                        باور دارم هر فردی توانایی رشد، تغییر و ساختن زندگی معنادار را دارد.
                    </p>
                </div>

                <div className="hidden items-center justify-center text-mustard-200 lg:flex pr-10">
                    <Quote size={46} strokeWidth={1.2} />
                </div>
            </div>
        </section>
    );
}