import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

type Item = {
  label: string;
  to: string;
};

export function Dropdown({
  title,
  items,
  isActive,
  onNavigate,
}: {
  title: string;
  items: Item[];
  isActive: boolean;
  onNavigate?: () => void;
}) {
  return (
    <div className="group relative">
      <button
        type="button"
        className={`flex items-center gap-1 text-sm font-medium transition ${
          isActive ? "text-mustard-200" : "text-black-600 hover:text-mustard-200"
        }`}
      >
        {title}
        <ChevronDown size={16} />
      </button>

      <div
        className="invisible absolute right-0 top-full z-50 mt-2 w-60 rounded-2xl border bg-white-100 p-2
        opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100"
      >
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onNavigate}
            className={({ isActive }) =>
              `block rounded-xl px-3 py-2 text-sm transition ${
                isActive
                  ? "bg-white-100  text-mustard-200"
                  : "hover:bg-white-100 "
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}