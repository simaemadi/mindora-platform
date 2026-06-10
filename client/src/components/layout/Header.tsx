import React from "react";
import { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

import { headerMenu } from "../../data/headerMenuItem";

import { NavItem } from "./NavItem";
import { Dropdown } from "./Dropdown";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderActions } from "./HeaderActions";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
  }, []);

  const isDropdownActive = (item: (typeof headerMenu)[number]) => {
    return (
      location.pathname.startsWith(item.to) ||
      item.children?.some((child) => location.pathname.startsWith(child.to))
    );
  };

  return (
    <header dir="rtl" className="border-b border-slate-200 bg-cream-100">
      <div className="mx-auto flex h-20 mx-auto items-center justify-between px-4">
        <HeaderLogo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {headerMenu.map((item:any) => {
            if (item.children?.length) {
              return (
                <Dropdown
                  key={item.id}
                  title={item.label}
                  items={item.children}
                  isActive={true}
                />
              );
            }

            return (
              <NavItem
                key={item.id}
                to={item.to}
                label={item.label}
              />
            );
          })}
        </nav>

        <HeaderActions
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      </div>

      {mobileOpen && (
        <MobileMenu
          items={headerMenu}
          onClose={closeMobile}
        />
      )}
    </header>
  );
}