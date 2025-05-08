import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import wasm from "vite-plugin-wasm";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), wasm()],
  resolve: {
    alias: {
      buffer: "buffer",
      crypto: "crypto-browserify",
    },
  },
  build: {
    target: "es2020",
  },
  server: {
    proxy: {
      "/bf": {
        rewrite: (path) => path.replace(/^\/bf/, ""),
        target: "https://cardano-preview.blockfrost.io/api/v0",
        changeOrigin: true,
        headers: {
          project_id: "previewnOasOUIU1qb9mtCd26tCsM3IvCTrhBhB",
        },
      },
    },
  },
});
