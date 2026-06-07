import React from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";

export function HeaderActions({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean | ((p: boolean) => boolean)) => void;
}) {
  return (
    <div className="flex items-center gap-2">
      <NavLink
        to="/contact"
        className="inline-flex items-center justify-center rounded-lg bg-[#B28945]
        px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#a67a3d] lg:text-sm"
      >
        رزرو نوبت
        <CalendarDays size={16} className="mr-2" />
      </NavLink>

      <button
        onClick={() => setMobileOpen((p) => !p)}
        className="lg:hidden"
        aria-label="toggle menu"
      >
        {mobileOpen ? <X size={26} /> : <Menu size={26} />}
      </button>
    </div>
  );
}