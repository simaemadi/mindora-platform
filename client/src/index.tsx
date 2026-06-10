import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./app/routes/AppRouter";
import "./index.css";
import "@fontsource/estedad/400.css";
import "@fontsource/estedad/500.css";
import "@fontsource/estedad/600.css";
import "@fontsource/estedad/700.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<AppRouter />);