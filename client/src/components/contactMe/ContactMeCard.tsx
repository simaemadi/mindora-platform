import React from "react";
import { contactPageData } from "../../data/contactPageData";
import {
    CalendarDays,
    MapPin,
    MessageCircle,
    Phone,
    AlertTriangle,
    Clock3,
    Lock,
    Users,
} from "lucide-react";


export default function ContactMeCard() {
    const { contactCards, contactInfo } = contactPageData;
    const iconMap = {
        calendar: CalendarDays,
        phone: Phone,
        message: MessageCircle,
        map: MapPin,
        alert: AlertTriangle,
        clock: Clock3,
        lock: Lock,
        users: Users,
    };

    const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber
        }?text=${encodeURIComponent(contactInfo.whatsappMessage)}`;

    const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        contactInfo.clinicAddress
    )}`;

    const getHref = (hrefType: string) => {
        switch (hrefType) {
            case "booking":
                return "/booking";
            case "phone":
                return `tel:${contactInfo.phoneNumber}`;
            case "whatsapp":
                return whatsappUrl;
            case "map":
                return googleMapUrl;
            default:
                return "#";
        }
    };


    return (
        <section className="px-6 pb-10">
            <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
                {contactCards.map((card: any) => {
                    const Icon = iconMap[card.icon as keyof typeof iconMap];

                    return (
                        <div
                            key={card.id}
                            className="flex h-full min-h-[350px] flex-col rounded-[26px] border border-cream-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                        >
                            <div className="mx-auto flex h-16 w-16 items-center justify-center text-mustard-200">
                                <Icon size={44} strokeWidth={1.45} />
                            </div>

                            <h3 className="mt-5 text-xl font-extrabold">
                                {card.title}
                            </h3>

                            <p className="mx-auto mt-4 max-w-[230px] text-sm leading-7 text-black-500">
                                {card.text}
                            </p>

                            <a
                                href={getHref(card.hrefType)}
                                target={card.external ? "_blank" : undefined}
                                rel={card.external ? "noopener noreferrer" : undefined}
                                className="mt-auto inline-flex w-full items-center justify-center gap-2 rounded-xl border border-mustard-200 px-5 py-3 text-sm font-semibold text-black-100 transition"
                            >
                                {card.button}
                                <Icon size={16} />
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}