import React from "react";
import { stats } from "./HeroData";

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 gap-y-6 sm:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className={`flex flex-col items-center gap-3 px-3 text-center ${
              index !== stats.length - 1
                ? "sm:border-l sm:border-[#d8cbb9]"
                : ""
            }`}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full text-[#B3832C]">
              <Icon />
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#071827]">
                {item.title}
              </h3>

              <p className="mt-1 text-xs leading-5 text-slate-600">
                {item.text}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}