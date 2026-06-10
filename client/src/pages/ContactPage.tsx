"use client";

import React, { useState } from "react";
import {
  CalendarDays,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  AlertTriangle,
  Clock3,
  Lock,
  Users,
  HelpCircle,
  ChevronDown,
  Navigation,
} from "lucide-react";

const WHATSAPP_NUMBER = "989121234567";
// شماره واتساپ: با 98 شروع شود، بدون + و بدون صفر اول

const PHONE_NUMBER = "02112345678";

const CLINIC_ADDRESS =
  "تهران، خیابان شریعتی، نرسیده به پل صدر، خیابان یخچال، پلاک ۱۴۰، واحد ۳، طبقه ۲";

const WHATSAPP_MESSAGE =
  "سلام وقت بخیر، برای رزرو نوبت یا دریافت مشاوره از طریق سایت پیام می‌دهم.";

const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  CLINIC_ADDRESS
)}`;

const googleMapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  CLINIC_ADDRESS
)}&output=embed`;

const contactCards = [
  {
    title: "رزرو نوبت آنلاین",
    text: "انتخاب زمان دلخواه و دریافت تاییدیه نوبت",
    button: "رزرو نوبت",
    icon: CalendarDays,
    href: "/booking",
    external: false,
  },
  {
    title: "تماس تلفنی",
    text: "پاسخگویی در ساعات کاری مطب شنبه تا پنجشنبه",
    button: "۰۲۱-۱۲۳۴۵۶۷۸",
    icon: Phone,
    href: `tel:${PHONE_NUMBER}`,
    external: false,
  },
  {
    title: "پیام در واتساپ",
    text: "پاسخگویی در ساعات کاری از طریق واتساپ",
    button: "شروع گفتگو",
    icon: MessageCircle,
    href: whatsappUrl,
    external: true,
  },
  {
    title: "آدرس مطب",
    text: CLINIC_ADDRESS,
    button: "مشاهده نقشه",
    icon: MapPin,
    href: googleMapUrl,
    external: true,
  },
];

const beforeSendItems = [
  {
    title: "در موارد اورژانسی",
    text: "لطفاً در موارد اورژانسی با مراکز درمانی یا اورژانس ۱۱۵ تماس بگیرید.",
    icon: AlertTriangle,
  },
  {
    title: "ساعات پاسخگویی",
    text: "شنبه تا پنجشنبه، ساعت ۹ صبح تا ۴ عصر",
    icon: Clock3,
  },
  {
    title: "محرمانه بودن اطلاعات",
    text: "تمام اطلاعات شما محرمانه باقی می‌ماند و برای هماهنگی جلسه استفاده می‌شود.",
    icon: Lock,
  },
  {
    title: "زمان پاسخگویی پیام‌ها",
    text: "پیام‌ها معمولاً در کمتر از ۲۴ ساعت کاری پاسخ داده می‌شوند.",
    icon: Users,
  },
];

const faqs = [
  {
    question: "هزینه جلسات چگونه پرداخت می‌شود؟",
    answer:
      "هزینه جلسات پس از تعیین وقت و قبل از جلسه از طریق درگاه پرداخت دریافت می‌شود.",
  },
  {
    question: "آیا امکان مشاوره آنلاین وجود دارد؟",
    answer:
      "بله، در صورت نیاز امکان برگزاری جلسات آنلاین از طریق گوگل میت فراهم است.",
  },
  {
    question: "چگونه نوبت رزرو کنم؟",
    answer:
      "بهترین و سریع‌ترین راه رزرو نوبت، استفاده از سیستم نوبت‌دهی آنلاین سایت است.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    subject: "",
    time: "",
    message: "",
    accepted: false,
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e:any) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.accepted) {
      alert("لطفاً نام، شماره تماس و پذیرش قوانین را تکمیل کنید.");
      return;
    }

    console.log("Contact Form:", formData);

    setSent(true);

    setFormData({
      fullName: "",
      phone: "",
      subject: "",
      time: "",
      message: "",
      accepted: false,
    });
  };

  return (
    <main dir="rtl" className="min-h-screen bg-[#F8F4EE] text-[#0B2238]">
      {/* Hero */}
      <section className="px-6 pt-16 pb-10 text-center">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-extrabold md:text-5xl">تماس با ما</h1>

          <div className="mx-auto mt-5 flex w-20 items-center justify-center">
            <span className="h-px w-full bg-mustard-200" />
            <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
            <span className="h-px w-full bg-mustard-200" />
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#52606D]">
            برای رزرو نوبت، پرسیدن سوال درباره روند درمان یا هماهنگی جلسه
            مشاوره، می‌توانید از طریق راه‌های زیر با من در ارتباط باشید.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="px-6 pb-10">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((card) => {
            const Icon = card.icon;

            return (
              <div
                key={card.title}
                className="rounded-[26px] border border-[#E7DED2] bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center text-mustard-200">
                  <Icon size={44} strokeWidth={1.45} />
                </div>

                <h3 className="mt-5 text-xl font-extrabold">{card.title}</h3>

                <p className="mx-auto mt-4 min-h-[64px] max-w-[230px] text-sm leading-7 text-[#52606D]">
                  {card.text}
                </p>

                <a
                  href={card.href}
                  target={card.external ? "_blank" : undefined}
                  rel={card.external ? "noopener noreferrer" : undefined}
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-mustard-200 px-5 py-3 text-sm font-semibold text-[#B18435] transition hover:bg-mustard-200 hover:text-white"
                >
                  {card.button}

                  {card.title === "رزرو نوبت آنلاین" && (
                    <CalendarDays size={16} />
                  )}

                  {card.title === "تماس تلفنی" && <Phone size={16} />}

                  {card.title === "پیام در واتساپ" && (
                    <MessageCircle size={16} />
                  )}

                  {card.title === "آدرس مطب" && <MapPin size={16} />}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Form Section */}
      <section className="px-6 pb-12">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[390px_1fr]">
          {/* Before Send */}
          <aside className="rounded-[28px] border border-[#E7DED2] bg-white/80 p-8 shadow-sm">
            <h2 className="text-center text-2xl font-extrabold">
              قبل از ارسال پیام
            </h2>

            <div className="mx-auto mt-4 flex w-20 items-center justify-center">
              <span className="h-px w-full bg-mustard-200" />
              <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
              <span className="h-px w-full bg-mustard-200" />
            </div>

            <div className="mt-8 space-y-7">
              {beforeSendItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-mustard-200 shadow-sm">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>

                    <div>
                      <h3 className="font-extrabold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#52606D]">
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>

          {/* Form */}
          <section className="rounded-[28px] border border-[#E7DED2] bg-white p-8 shadow-sm">
            <h2 className="text-center text-2xl font-extrabold">فرم تماس</h2>

            <div className="mx-auto mt-4 flex w-20 items-center justify-center">
              <span className="h-px w-full bg-mustard-200" />
              <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
              <span className="h-px w-full bg-mustard-200" />
            </div>

            {sent && (
              <div className="mt-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-700">
                پیام شما با موفقیت ثبت شد.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="نام و نام خانوادگی"
                  className="h-14 rounded-xl border border-[#E7DED2] bg-white px-4 text-sm outline-none transition placeholder:text-[#9AA4AF] focus:border-mustard-200"
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="شماره تماس"
                  className="h-14 rounded-xl border border-[#E7DED2] bg-white px-4 text-sm outline-none transition placeholder:text-[#9AA4AF] focus:border-mustard-200"
                />
              </div>

              <div className="relative">
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="h-14 w-full appearance-none rounded-xl border border-[#E7DED2] bg-white px-4 text-sm text-[#52606D] outline-none transition focus:border-mustard-200"
                >
                  <option value="">موضوع درخواست</option>
                  <option value="رزرو نوبت">رزرو نوبت</option>
                  <option value="مشاوره فردی">مشاوره فردی</option>
                  <option value="مشاوره زوجین">مشاوره زوجین</option>
                  <option value="سوال درباره جلسات">سوال درباره جلسات</option>
                </select>

                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8694]"
                />
              </div>

              <div className="relative">
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="h-14 w-full appearance-none rounded-xl border border-[#E7DED2] bg-white px-4 text-sm text-[#52606D] outline-none transition focus:border-mustard-200"
                >
                  <option value="">زمان مناسب تماس</option>
                  <option value="صبح">صبح</option>
                  <option value="ظهر">ظهر</option>
                  <option value="عصر">عصر</option>
                </select>

                <ChevronDown
                  size={20}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#7A8694]"
                />
              </div>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="پیام شما"
                rows={6}
                className="w-full resize-none rounded-xl border border-[#E7DED2] bg-white px-4 py-4 text-sm leading-7 outline-none transition placeholder:text-[#9AA4AF] focus:border-mustard-200"
              />

              <label className="flex cursor-pointer items-center gap-3 text-sm text-[#52606D]">
                <input
                  name="accepted"
                  checked={formData.accepted}
                  onChange={handleChange}
                  type="checkbox"
                  className="h-5 w-5 accent-mustard-200"
                />
                با قوانین و شرایط حفظ حریم خصوصی موافقم.
              </label>

              <button
                type="submit"
                className="flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-[#061B2E] font-bold text-white transition hover:bg-[#0B2A45]"
              >
                ارسال درخواست مشاوره
                <Send size={20} className="text-mustard-200" />
              </button>

              <p className="text-center text-sm leading-7 text-[#7A8694]">
                تمام اطلاعات شما محرمانه باقی می‌ماند و فقط برای هماهنگی جلسه
                استفاده می‌شود.
              </p>
            </form>
          </section>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="px-6 pb-14">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[28px] border border-[#E7DED2] bg-white shadow-sm lg:grid-cols-[1.2fr_0.8fr]">
          <div className="h-[360px] w-full">
            <iframe
              title="آدرس مطب"
              src={googleMapEmbedUrl}
              className="h-full w-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="flex flex-col justify-center p-8">
            <h2 className="text-2xl font-extrabold">آدرس مطب</h2>

            <div className="mt-4 flex w-20 items-center">
              <span className="h-px w-full bg-mustard-200" />
              <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
              <span className="h-px w-full bg-mustard-200" />
            </div>

            <p className="mt-6 leading-8 text-[#52606D]">{CLINIC_ADDRESS}</p>

            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href={googleMapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-mustard-200 px-6 py-3 font-semibold text-[#B18435] transition hover:bg-mustard-200 hover:text-white"
              >
                مشاهده در گوگل مپ
                <Navigation size={18} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-[#061B2E] px-6 py-3 font-semibold text-white transition hover:bg-[#0B2A45]"
              >
                پیام در واتساپ
                <MessageCircle size={18} className="text-mustard-200" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 pb-14">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-2xl font-extrabold">سوالات متداول</h2>

          <div className="mx-auto mt-4 flex w-20 items-center justify-center">
            <span className="h-px w-full bg-mustard-200" />
            <span className="mx-2 h-2 w-2 rounded-full bg-mustard-200" />
            <span className="h-px w-full bg-mustard-200" />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-[22px] border border-[#E7DED2] bg-white p-6 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <HelpCircle size={22} className="text-mustard-200" />
                  <h3 className="font-extrabold">{faq.question}</h3>
                </div>

                <p className="text-sm leading-7 text-[#52606D]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}