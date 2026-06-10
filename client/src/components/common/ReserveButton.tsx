import React from "react";
import type { CSSProperties, ReactNode, MouseEventHandler } from "react";
import { NavLink } from "react-router-dom";
import { CalendarDays } from "lucide-react";

type ReserveButtonProps = {
  label?: string;
  to?: string;
  icon?: ReactNode;

  bgColor?: string;
  hoverBgColor?: string;
  textColor?: string;

  height?: CSSProperties["height"];
  width?: CSSProperties["width"];
  minWidth?: CSSProperties["minWidth"];

  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function ReserveButton({
  label = "رزرو نوبت آنلاین",
  to = "/contact",
  icon = <CalendarDays size={16} strokeWidth={2} />,

  bgColor = "#102131",
  hoverBgColor = "#0d253b",
  textColor = "#FFFFFF",

  height = 56,
  width,

  className = "",
  onClick,
}: ReserveButtonProps) {
  return (
    <NavLink
      dir="rtl"
      to={to}
      onClick={onClick}
      style={
        {
          "--reserve-bg": bgColor,
          "--reserve-hover-bg": hoverBgColor,
          "--reserve-text": textColor,
          height,
          width,
        } as CSSProperties
      }
      className={`
        inline-flex items-center gap-3
        rounded-lg
        bg-[var(--reserve-bg)]        
        text-sm
        text-[var(--reserve-text)]
        shadow-lg shadow-slate-900/10
        transition
        hover:-translate-y-0.5
        hover:bg-[var(--reserve-hover-bg)]
        
        font-sans leading-none
        transition-all duration-200
        ${className}
      `}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      <span>{label}</span>
    </NavLink>
  );
}