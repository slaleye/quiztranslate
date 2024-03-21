import React from "react";
import { createRoot } from "react-dom";
import App from "./App";

// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<App />);