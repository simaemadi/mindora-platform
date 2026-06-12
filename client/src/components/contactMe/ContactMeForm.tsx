import React from "react";
import { useState } from "react";
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
    ChevronDown,
    Send,
} from "lucide-react";

type ContactFormData = {
    fullName: string;
    phone: string;
    subject: string;
    time: string;
    message: string;
    accepted: boolean;
};

const initialFormData: ContactFormData = {
    fullName: "",
    phone: "",
    subject: "",
    time: "",
    message: "",
    accepted: false,
};

export default function ContactMeForm() {

    const { beforeSend, form } =
        contactPageData;

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
    const [formData, setFormData] = useState<ContactFormData>(initialFormData);
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.fullName || !formData.phone || !formData.accepted) {
            alert(form.validationMessage);
            return;
        }

        console.log("Contact Form:", formData);

        setSent(true);
        setFormData(initialFormData);
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const target = e.currentTarget;
        const { name, value } = target;

        if (target instanceof HTMLInputElement && target.type === "checkbox") {
            setFormData((prev) => ({
                ...prev,
                accepted: target.checked,
            }));
            return;
        }

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (<section className="px-6 pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[390px_1fr]">
            {/* Before Send */}
            <aside className="rounded-[28px] border border-cream-200 bg-white/80 p-8 shadow-sm">
                <h2 className="text-center text-2xl font-extrabold">
                    {beforeSend.title}
                </h2>

                <div className="mx-auto mt-5 flex w-28 items-center justify-center">
                    <span className="h-px flex-1 bg-mustard-300" />
                    <span className="mx-3 h-2 w-2 rounded-full bg-mustard-300" />
                    <span className="h-px flex-1 bg-mustard-300" />
                </div>

                <div className="mt-8 space-y-7">
                    {beforeSend.items.map((item: any) => {
                        const Icon = iconMap[item.icon as keyof typeof iconMap];

                        return (
                            <div key={item.title} className="flex gap-4">
                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-mustard-200 shadow-sm">
                                    <Icon size={26} strokeWidth={1.5} />
                                </div>

                                <div>
                                    <h3 className="font-extrabold">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-7 text-black-500">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </aside>

            {/* Form */}
            <section className="rounded-[28px] border border-cream-200 bg-white p-8 shadow-sm">
                <h2 className="text-center text-2xl font-extrabold">
                    {form.title}
                </h2>

                <div className="mx-auto mt-5 flex w-28 items-center justify-center">
                    <span className="h-px flex-1 bg-mustard-300" />
                    <span className="mx-3 h-2 w-2 rounded-full bg-mustard-300" />
                    <span className="h-px flex-1 bg-mustard-300" />
                </div>

                {sent && (
                    <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
                        {form.successMessage}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    <div className="grid gap-5 md:grid-cols-2">
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            type="text"
                            placeholder={form.placeholders.fullName}
                            className="h-14 rounded-xl border border-cream-200 bg-white px-4 text-sm outline-none transition placeholder:text-black-500 focus:border-mustard-200"
                        />

                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="tel"
                            placeholder={form.placeholders.phone}
                            className="h-14 rounded-xl border border-cream-200 bg-white px-4 text-sm outline-none transition placeholder:text-black-500 focus:border-mustard-200"
                        />
                    </div>

                    <SelectField
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        options={form.subjectOptions}
                    />

                    <SelectField
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        options={form.timeOptions}
                    />

                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={form.placeholders.message}
                        rows={6}
                        className="w-full resize-none rounded-xl border border-cream-200 bg-white px-4 py-4 text-sm leading-7 outline-none transition placeholder:text-black-500 focus:border-mustard-200"
                    />

                    <label className="flex cursor-pointer items-center gap-3 text-sm text-black-500">
                        <input
                            name="accepted"
                            checked={formData.accepted}
                            onChange={handleChange}
                            type="checkbox"
                            className="h-5 w-5 accent-mustard-200"
                        />
                        {form.privacyText}
                    </label>

                    <button
                        type="submit"
                        className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-blue-100 font-bold transition hover:bg-blue-100"
                    >
                        <Send size={20} className="text-mustard-200" />
                        <p className="!text-mustard-200">
                            {form.submitText}
                        </p>
                    </button>

                    <div className="flex h-14 w-full items-center justify-center gap-3 rounded-xl font-bold">
                        <Lock size={20} className="text-mustard-200" />
                        <p className="text-center  items-center justify-center text-sm leading-7 text-black-500">
                            {form.note}
                        </p>
                    </div>
                </form>
            </section>
        </div>
    </section>)
}

function SelectField({
    name,
    value,
    onChange,
    options,
}: {
    name: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
    options: {
        label: string;
        value: string;
    }[];
}) {
    return (
        <div className="relative">
            <select
                name={name}
                value={value}
                onChange={onChange}
                className="h-14 w-full appearance-none rounded-xl border border-cream-200 bg-white px-4 text-sm text-black-500 outline-none transition focus:border-mustard-200"
            >
                {options.map((option) => (
                    <option key={`${name}-${option.value}`} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            <ChevronDown
                size={20}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-black-500"
            />
        </div>
    );
}