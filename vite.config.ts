import Preact from "@preact/preset-vite";
import TypeScript from "@rollup/plugin-typescript";
import { resolve } from "path";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "es6",
    outDir: "dist/",
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "sscreator-ui",
      fileName: "sscreator-ui",
      formats: ["es"],
    },
  },
  plugins: [
    UnoCSS(),
    Preact(),
    TypeScript({
      target: "es6",
      rootDir: resolve(__dirname, "src/"),
      declaration: true,
      declarationDir: resolve(__dirname, "dist/"),
      exclude: resolve(__dirname, "node_modules/**"),
      allowImportingTsExtensions: false,
    }),
  ],
});
