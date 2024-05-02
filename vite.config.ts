import Preact from "@preact/preset-vite";
import TypeScript from "@rollup/plugin-typescript";
import { resolve } from "node:path";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: false,
    outDir: "dist/",
    minify: false,
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        /preact.*/,
        "@preact/signals",
        "clsx",
        "wouter-preact",
        "react-hot-toast",
      ],
      output: {
        entryFileNames: "[name].js",
        preserveModules: true,
      },
      preserveEntrySignatures: "strict",
    },
  },
  plugins: [
    UnoCSS(),
    Preact(),
    TypeScript({
      rootDir: resolve(__dirname, "src/"),
      declaration: true,
      declarationDir: resolve(__dirname, "dist/"),
      exclude: resolve(__dirname, "node_modules/**"),
      allowImportingTsExtensions: false,
    }),
  ],
});
