import React from "react";
import { NavLink } from "react-router-dom";
import icon from "../../assets/images/icon.png";

export function HeaderLogo() {
  return (
    <NavLink to="/" className="flex items-center gap-3 text-[#172637]">
      <img
        src={icon}
        alt="لوگوی سایت"
        className="h-14 w-14 object-contain"
      />
      <div>
        <h1 className="font-bold">دکتر نرگس محمدی</h1>
        <p className="text-xs text-slate-600">روان‌شناس بالینی</p>
      </div>
    </NavLink>
  );
}