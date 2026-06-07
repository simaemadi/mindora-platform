import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/Footer";
import Header from "../../components/layout/Header";

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 ">
      <Header />

      <main className="min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default PublicLayout;