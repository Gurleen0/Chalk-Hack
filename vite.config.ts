import { defineConfig } from "vite";
// These imports need to be installed and configured:
// npm install @vitejs/plugin-react-swc path lovable-tagger
import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": "./src",
    },
  },
}));
