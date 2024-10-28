import React from "react";
import { createRoot } from "react-dom/client";
import App from  "./components/App"
import styles from "./global.scss"
// Render your React component instead
const root = createRoot(document.getElementById("app"));
root.render(<App />);
