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
            ? "text-mustard-200"
            : "text-white-100 hover:text-mustard-200",  //text-black-600
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );
}