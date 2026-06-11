import React from "react";
import AboutMeSection from "../components/AboutMe/AboutMeSection";
import AboutMeValue from "../components/AboutMe/AboutMeValue";
import AboutMeApproach from "../components/AboutMe/AboutMeApproach";
import AboutMeEducation from "../components/AboutMe/AboutMeEducation";
import AboutMeQuote from "../components/AboutMe/AboutMeQuote";

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



