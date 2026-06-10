import React from "react";
import { Link } from "react-router-dom";
import type { HeaderMenuItem } from "../../data/headerMenuItem"

type MobileMenuProps = {
  items: HeaderMenuItem[];
  onClose: () => void;
};

export function MobileMenu({ items, onClose }: MobileMenuProps) {
  return (
    <nav className="border-t border-slate-200 bg-cream-100 px-4 py-4 lg:hidden">
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            onClick={onClose}
            className="text-sm font-medium text-slate-700"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}