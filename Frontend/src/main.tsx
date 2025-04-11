import { createRoot } from "react-dom/client";
import "antd/dist/reset.css"; // novo padrão de reset do Ant Design
import App from "./App.tsx";
import "./index.css"; // ✅ Importando Tailwind globalmente

createRoot(document.getElementById("root")!).render(
      <App />
);
