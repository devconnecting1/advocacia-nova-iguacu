import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// Base do GitHub Pages para repositório de projeto:
// https://<usuario>.github.io/advocacia-nova-iguacu/
export default defineConfig({
  base: "/advocacia-nova-iguacu/",
  plugins: [react(), tailwindcss()],
});
