import React from "react";
import type { LucideIcon } from "lucide-react";
import {
  Brain,
  BriefcaseBusiness,
  CheckSquare,
  CloudRain,
  GraduationCap,
  HandHeart,
  Headphones,
  HeartHandshake,
  Sprout,
  UsersRound,
} from "lucide-react";

type HelpArea = {
  title: string;
  icon: LucideIcon;
};

type WhyItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const helpAreas: HelpArea[] = [
  {
    title: "اضطراب و استرس",
    icon: Brain,
  },
  {
    title: "افسردگی",
    icon: CloudRain,
  },
  {
    title: "رشد فردی و اعتماد به نفس",
    icon: Sprout,
  },
  {
    title: "والدگری و تربیت فرزند",
    icon: UsersRound,
  },
  {
    title: "فرسودگی شغلی مدیران",
    icon: BriefcaseBusiness,
  },
  {
    title: "PTSD و تروما",
    icon: Headphones,
  },
];

const whyItems: WhyItem[] = [
  {
    title: "برنامه درمانی شخصی‌سازی شده",
    description:
      "هر فرد دنیای منحصر‌به‌فردی دارد. ما با هم مسیر مناسب با شما را طراحی می‌کنیم.",
    icon: CheckSquare,
  },
  {
    title: "همدلی و احترام",
    description:
      "فضایی امن، بدون قضاوت و مبتنی بر احترام متقابل برای شنیده‌شدن و بهبود واقعی شما.",
    icon: HeartHandshake,
  },
  {
    title: "تخصص علمی",
    description:
      "استفاده از روش‌های درمانی مطرح و مبتنی بر شواهد علمی روز دنیا برای اثربخشی بیشتر.",
    icon: GraduationCap,
  },
];

export default function SupportSections() {
  return (
    <section dir="rtl" className="bg-[#FBFAF8] py-16">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionTitle title="در چه زمینه‌هایی می‌توانم کمک کنم؟" />

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {helpAreas.map((item) => (
            <HelpAreaCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-16">
          <SectionTitle title="چرا مراجعان من را انتخاب می‌کنند؟" />

          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-0">
            {whyItems.map((item, index) => (
              <WhyChooseItem
                key={item.title}
                item={item}
                hasBorder={index !== whyItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-[#071827] md:text-3xl">
        {title}
      </h2>

      <div className="mx-auto mt-4 flex items-center justify-center gap-2">
        <span className="h-px w-7 bg-[#C49A4A]" />
        <span className="h-2 w-2 rounded-full bg-[#C49A4A]" />
        <span className="h-px w-7 bg-[#C49A4A]" />
      </div>
    </div>
  );
}

function HelpAreaCard({ item }: { item: HelpArea }) {
  const Icon = item.icon;

  return (
    <div className="group flex min-h-[150px] flex-col items-center justify-center rounded-xl border border-[#EEE7DF] bg-white px-4 py-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#D8B46A] hover:shadow-md">
      <Icon
        size={42}
        strokeWidth={1.4}
        className="text-[#8B765C] transition group-hover:text-[#B3832C]"
      />

      <h3 className="mt-5 text-sm font-semibold leading-7 text-[#071827]">
        {item.title}
      </h3>
    </div>
  );
}

function WhyChooseItem({
  item,
  hasBorder,
}: {
  item: WhyItem;
  hasBorder: boolean;
}) {
  const Icon = item.icon;

  return (
    <div
      className={`flex flex-col items-center px-6 text-center ${
        hasBorder ? "md:border-l md:border-[#E2D8C9]" : ""
      }`}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full text-[#B3832C]">
        <Icon size={48} strokeWidth={1.35} />
      </div>

      <h3 className="mt-5 text-base font-bold text-[#071827]">{item.title}</h3>

      <p className="mt-4 max-w-[280px] text-sm leading-8 text-slate-600">
        {item.description}
      </p>
    </div>
  );
}