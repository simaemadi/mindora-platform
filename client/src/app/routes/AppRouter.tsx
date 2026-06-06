import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ServicesPage from "../../pages/ServicesPage";
import BlogPage from "../../pages/BlogPage";
import ContactPage from "../../pages/ContactPage";
import TestApiPage from "../../pages/TestApiPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test-api" element={<TestApiPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;