import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div>
      <nav style={styles.nav}>
        <h2>Mindora</h2>

        <div style={styles.links}>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              ...styles.link,
              color: isActive ? "#4ade80" : "white"
            })}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            style={({ isActive }) => ({
              ...styles.link,
              color: isActive ? "#4ade80" : "white"
            })}
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            style={({ isActive }) => ({
              ...styles.link,
              color: isActive ? "#4ade80" : "white"
            })}
          >
            Services
          </NavLink>

          <NavLink
            to="/blog"
            style={({ isActive }) => ({
              ...styles.link,
              color: isActive ? "#4ade80" : "white"
            })}
          >
            Blog
          </NavLink>

          <NavLink
            to="/contact"
            style={({ isActive }) => ({
              ...styles.link,
              color: isActive ? "#4ade80" : "white"
            })}
          >
            Contact
          </NavLink>
        </div>
      </nav>

      <main style={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

const styles: any = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "15px 20px",
    background: "#111",
    color: "white",
    alignItems: "center"
  },
  links: {
    display: "flex",
    gap: "15px"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500"
  },
  main: {
    padding: "20px",
    minHeight: "80vh"
  },
  footer: {
    textAlign: "center",
    padding: "15px",
    background: "#f2f2f2"
  }
};

export default PublicLayout;