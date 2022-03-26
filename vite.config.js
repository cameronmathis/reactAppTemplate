import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ReactAppTemplate/",
  server: {
    host: true,
    port: 8080,
  },
  plugins: [react()],
});
