import "./polyfill.ts";
import "./global.d.ts";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Buffer } from "buffer";
import CardanoProvider from "./context/CardanoContext.tsx";
window.Buffer = Buffer;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CardanoProvider>
      <App />
    </CardanoProvider>
  </StrictMode>
);
