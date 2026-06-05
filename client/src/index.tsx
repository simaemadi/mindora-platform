import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🧠 Mindora Platform</h1>
      <p>React is working correctly 🚀</p>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(<App />);