import React, { useCallback, useState } from "react";
import { useLocation } from "react-router-dom";

import { navItems, servicesLinks, resourcesLinks } from "./Navbar";

import { NavItem } from "./NavItem";
import { Dropdown } from "./Dropdown";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderActions } from "./HeaderActions";
import { MobileMenu } from "./MobileMenu";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
      <header
        dir="rtl"
        className="border-b border-slate-200 bg-[#F3E9E2]"
      >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        <HeaderLogo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <NavItem to="/" label="خانه" />
          <NavItem to="/about" label="درباره من" />

          <Dropdown
            title="خدمات"
            items={servicesLinks}
            isActive={location.pathname.startsWith("/services")}
          />

          <NavItem to="/approach" label="رویکرد درمانی" />
          <NavItem to="/articles" label="مقالات" />

          <Dropdown
            title="منابع"
            items={resourcesLinks}
            isActive={["/faq", "/terms", "/privacy"].some((x) =>
              location.pathname.startsWith(x)
            )}
          />

          <NavItem to="/contact" label="تماس با من" />
        </nav>

        <HeaderActions
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      </div>

      {mobileOpen && <MobileMenu onClose={closeMobile} />}
    </header>
  );
}