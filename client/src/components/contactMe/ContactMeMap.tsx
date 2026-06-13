import React from "react";
import { contactPageData } from "../../data/contactPageData";
import {
    Navigation,
} from "lucide-react";


export default function ContactMeMap() {
    const { contactInfo, map } =
        contactPageData;

    const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        contactInfo.clinicAddress
    )}`;

    const googleMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
        contactInfo.clinicAddress
    )}&output=embed`;

    return (
        <section id="map" className="px-6 pb-14">
            <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] border border-cream-200 bg-white-100 shadow-sm lg:grid-cols-[1.2fr_0.8fr]">
                <div className="h-[360px] w-full">
                    <iframe
                        title={map.title}
                        src={googleMapEmbedUrl}
                        className="h-full w-full border-0"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>

                <div className="flex flex-col justify-center p-8">
                    <h2 className="text-2xl text-center font-extrabold">{map.title}</h2>

                    <div className="mx-auto mt-5 flex w-28 items-center justify-center">
                        <span className="h-px flex-1 bg-mustard-300" />
                        <span className="mx-3 h-2 w-2 rounded-full bg-mustard-300" />
                        <span className="h-px flex-1 bg-mustard-300" />
                    </div>

                    <p className="mt-6 leading-8 text-black-500">
                        {contactInfo.clinicAddress}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-4 items-center justify-center">
                        <a
                            href={googleMapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl border border-mustard-200 px-6 py-3 font-semibold text-mustard-100 transition hover:bg-mustard-200 hover:text-white"
                        >
                            {map.googleMapButton}
                            <Navigation size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}