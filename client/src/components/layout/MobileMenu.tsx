import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "./Navbar";

export function MobileMenu({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="border-t bg-[#F5F0EA] lg:hidden">
      <nav className="flex flex-col p-4">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={onClose}
            className="rounded-xl px-3 py-3 transition hover:bg-white"
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}