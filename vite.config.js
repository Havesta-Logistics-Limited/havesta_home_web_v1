import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        // manualChunks removed to prevent circular dependency issues
      },
    },
  },
  server: {
    host: true,
    strictPort: true,
    port: 8080,
  },
});
