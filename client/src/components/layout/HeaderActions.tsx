import React from "react";
import { CalendarDays, Menu, X } from "lucide-react";
import { ReserveButton } from "../common/ReserveButton";

export function HeaderActions({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (v: boolean | ((p: boolean) => boolean)) => void;
}) {
  return (
    <div className="flex items-center gap-2">
    <ReserveButton
      label="رزرو نوبت آنلاین"
      to="/contact"
      icon={<CalendarDays size={16} />}
      bgColor="#B8893D"
      hoverBgColor="#A8772F"
      textColor="#FFFFFF"
      height={40}
      width={140}
        className="
          bg-mustard-100
          text-white
          hover:bg-mustard-200
          rounded-lg
          px-3
          text-[10px]
          font-small
          tracking-[-0.01em]
          whitespace-nowrap
          gap-2
        "
    />

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