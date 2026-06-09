import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";

import HomePage from "../../pages/HomePage";
import AboutPage from "../../pages/AboutPage";
import ServicesPage from "../../pages/ServicesPage";
import ArticlesPage from "../../pages/ArticlesPage";
import ContactPage from "../../pages/ContactPage";
import TestApiPage from "../../pages/TestApiPage";
import ArticleDetailsPage from "../../pages/ArticleDetailsPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/test-api" element={<TestApiPage />} />
          <Route path="/articles/:slug" element={<ArticleDetailsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;