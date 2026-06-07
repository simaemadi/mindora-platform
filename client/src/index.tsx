import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./app/routes/AppRouter";
import "./index.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<AppRouter />);