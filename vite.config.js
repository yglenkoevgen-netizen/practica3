import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = "practica3"; 
export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, 
});