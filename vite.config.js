import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "analyze" &&
      visualizer({
        filename: "dist/bundle-report.html",
        open: true,
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
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
    port: 3000, // Changed from 8080 to 3000 to avoid port conflict
  },
}));
