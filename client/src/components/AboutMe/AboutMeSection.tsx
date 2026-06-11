import React from "react";
import { CalendarDays } from "lucide-react";

import aboutImage from "../../assets/images/about-therapist.png";
import { aboutData } from "../../data/aboutData";
import { ReserveButton } from "../common/ReserveButton";

export default function AboutMeSection() {
  const { title, heading, description, buttonText, buttonLink } =
    aboutData.aboutMeData;

  return (
    <section className="bg-white-200 py-2 md:pb-4">
      <div className="mx-auto px-5 md:px-8">
        <div className="grid overflow-hidden rounded-3xl bg-blue-100 shadow-xl md:grid-cols-2">
          {/* Image */}
          <div className="order-2 min-h-[260px] md:min-h-[450px]">
            <img
              src={aboutImage}
              alt="دکتر روان‌شناس بالینی"
              className="h-full w-full object-cover object-center"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="order-1 flex flex-col justify-center px-6 py-10 text-center md:px-10 lg:px-14">
            <span
              className="text-sm font-bold tracking-wide"
              style={{ color: "#D8A84F" }}
            >
              {title}
            </span>

            <h2
              className="mt-5 text-xl font-extrabold leading-[2] md:text-2xl md:leading-[1.8]"
              style={{ color: "#FFFFFF" }}
            >
              {heading}
            </h2>

            <div className="mx-auto mt-5 flex w-28 items-center justify-center">
              <span className="h-px flex-1 bg-mustard-300" />
              <span className="mx-3 h-2 w-2 rounded-full bg-mustard-300" />
              <span className="h-px flex-1 bg-mustard-300" />
            </div>

            <p
              className="mx-auto mt-7 max-w-xl text-sm font-medium leading-8 md:text-[15px] md:leading-9"
              style={{ color: "rgba(255,255,255,0.88)" }}
            >
              {description}
            </p>

            <div className="mt-9 flex justify-center">
              <ReserveButton
                label={buttonText}
                to={buttonLink}
                icon={<CalendarDays size={16} />}
                bgColor="#B8893D"
                hoverBgColor="#A8772F"
                textColor="#FFFFFF"
                height={40}
                width={180}
                className="my-5 rounded-lg px-5 text-[10px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}