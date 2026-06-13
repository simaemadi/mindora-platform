"use client";

import React from "react";
import ContactMeHero from "../components/contactMe/ContactMeHero";
import ContactMeCard from "../components/contactMe/ContactMeCard";
import ContactMeForm from "../components/contactMe/ContactMeForm";
import ContactMeMap from "../components/contactMe/ContactMeMap";
import ContactMeFaq from "../components/contactMe/ContactMeFaq";


export default function ContactPage() {
  return (
    <div dir="rtl" className="min-h-screen bg-cream-400 text-[#0B2238]">
      <ContactMeHero />
      <ContactMeCard />
      <ContactMeForm />
      <ContactMeMap />
      <ContactMeFaq /> 
    </div>
  );
}