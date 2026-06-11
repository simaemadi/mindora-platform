import React from "react";
import AboutMeSection from "../components/aboutMe/AboutMeSection";
import AboutMeValue from "../components/aboutMe/AboutMeValue";
import AboutMeApproach from "../components/aboutMe/AboutMeApproach";
import AboutMeEducation from "../components/aboutMe/AboutMeEducation";
import AboutMeQuote from "../components/aboutMe/AboutMeQuote";

export default function AboutPage() {
  return (
    <div className="text-4xl font-bold px-10 py-8">
      <AboutMeSection />
      <AboutMeValue />
      <AboutMeApproach />
      <AboutMeEducation /> 
      <AboutMeQuote />
    </div>
  );
}



