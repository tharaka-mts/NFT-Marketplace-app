import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/NFT-Marketplace-app/",
  plugins: [react()],
});
