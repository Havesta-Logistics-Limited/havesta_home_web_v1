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
    outDir: "dist",
    emptyOutDir: true,
    target: "es2018",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      },
    },
    // rollupOptions: {
    //   output: {
    //     manualChunks(id) {
    //       if (!id.includes("node_modules")) return;

    //       // Core React
    //       if (id.includes("react") || id.includes("react-dom")) {
    //         return "react-vendor";
    //       }

    //       // Router
    //       if (id.includes("react-router")) {
    //         return "router-vendor";
    //       }

    //       // MUI & Emotion
    //       if (id.includes("@mui/") || id.includes("@emotion/")) {
    //         return "ui-vendor";
    //       }

    //       // Animations
    //       if (id.includes("framer-motion") || id.includes("lottie")) {
    //         return "motion-vendor";
    //       }

    //       // Data fetching / state
    //       if (id.includes("axios")) {
    //         return "data-vendor";
    //       }

    //       // Everything else (keep some consolidation to avoid too many chunks)
    //       return "vendor";
    //     },
    //   },
    // },
  }, // Added missing closing brace for build object
  server: {
    host: true,
    strictPort: true,
    port: 3001, // Changed from 3000 to 3001 to avoid port conflict
  },
}));
