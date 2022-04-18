import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

const container = document.getElementById("index");
const root = createRoot(container);
root.render(<App />);
