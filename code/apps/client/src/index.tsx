import { createRoot } from "react-dom/client";
import { Root } from "@project00/runtime-engine/components/Root";
import { StrictMode } from "react";

window.addEventListener("load", () => {
  const rootElement = document.getElementById("game");
  if (!rootElement) {
    throw new Error("Root element not found");
  }
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <Root />
    </StrictMode>,
  );
});
