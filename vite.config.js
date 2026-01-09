import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;

          // Core React
          if (id.includes("react") || id.includes("react-dom")) {
            return "react-vendor";
          }

          // Router
          if (id.includes("react-router")) {
            return "router-vendor";
          }

          // MUI & Emotion
          if (
            id.includes("@mui/") ||
            id.includes("@emotion/") ||
            id.includes("styled-components")
          ) {
            return "ui-vendor";
          }

          // Animations
          if (id.includes("framer-motion") || id.includes("lottie")) {
            return "motion-vendor";
          }

          // Data fetching / state
          if (
            id.includes("axios") ||
            id.includes("swr") ||
            id.includes("@reduxjs")
          ) {
            return "data-vendor";
          }

          // Everything else (keep some consolidation to avoid too many chunks)
          return "vendor";
        },
      },
    },
  },
  server: {
    host: true,
    strictPort: true,
    port: 8080,
  },
});
