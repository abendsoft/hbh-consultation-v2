import { defineConfig } from "vite";
import shopify from "vite-plugin-shopify";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "node:path";

export default defineConfig({
  resolve: {
    alias: {
      "@@": resolve("resources/js"),
      "@modules": resolve("frontend/modules"),
    },
  },
  server: {
    fs: {
      allow: ["./extension-frontend", "node_modules"],
    },
  },
  plugins: [
    shopify({
      themeRoot: "extensions/theme-extension",
      sourceCodeDir: "extension-frontend",
      entrypointsDir: "extension-frontend/entrypoints",
    }),
    react(),
    tsconfigPaths(),
  ],
});
