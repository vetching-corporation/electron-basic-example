import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rendererPath = resolve(__dirname, "./src");
const rendererBuildOutputDirectory = resolve(__dirname, "./app/renderer");

export default defineConfig(() => {
  return {
    mode: "production",
    base: "./", // Base public path when served in development or production.
    root: rendererPath, // Project root directory (where index.html is located).
    envDir: `${__dirname}`, // .env 파일은 프로젝트 루트에 위치하도록 한다.
    build: {
      outDir: rendererBuildOutputDirectory,
      emptyOutDir: true,
      minify: "terser",
    },
    plugins: [
      react({
        include: "**/*.tsx",
        exclude: /\.test\.(t|j)sx?$/,
      }),
    ],
  };
});
