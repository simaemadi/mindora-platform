import React from "react";
import { NavLink } from "react-router-dom";
import { siteInfo } from "../../data/siteInfo";

export function HeaderLogo() {
  return (
    <NavLink to="/" className="flex items-center gap-3 text-slate-900">
      <img
        src={siteInfo.logo}
        alt={siteInfo.logoAlt}
        className="h-14 w-14 object-contain"
      />

      <div className="text-white-100"> {/* class div delete*/}
        <h1 className="font-bold">{siteInfo.doctorName}</h1>
        <p className="text-xs">{siteInfo.specialty}</p>  
        {/* text-slate-600 */}
      </div>
    </NavLink>
  );
}