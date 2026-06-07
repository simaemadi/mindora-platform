import React from "react";
import { NavLink } from "react-router-dom";

export function NavItem({
  to,
  label,
}: {
  to: string;
  label: string;
}) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "transition text-sm font-medium",
          isActive
            ? "text-[#c49a4a]"
            : "text-[#172637] hover:text-[#c49a4a]",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}