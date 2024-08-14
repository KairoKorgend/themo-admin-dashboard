import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import autoprefixer from "autoprefixer";
import { exec } from "child_process";

export default defineConfig(() => {
  // Start ngrok when the Vite server starts
  const startNgrok = () => {
    const ngrok = exec("ngrok http 3000");

    ngrok.stdout.on("data", (data) => {
      console.log(`ngrok: ${data}`);
    });

    ngrok.stderr.on("data", (data) => {
      console.error(`ngrok error: ${data}`);
    });

    ngrok.on("close", (code) => {
      console.log(`ngrok process exited with code ${code}`);
    });
  };

  return {
    base: "./",
    build: {
      outDir: "build",
    },
    css: {
      postcss: {
        plugins: [autoprefixer({})],
      },
    },
    esbuild: {
      loader: "jsx",
      include: /src\/.*\.jsx?$/,
      exclude: [],
    },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        loader: {
          ".js": "jsx",
        },
      },
    },
    plugins: [react()],
    resolve: {
      alias: [
        {
          find: "public/",
          replacement: `${path.resolve(__dirname, "public")}/`,
        },
        {
          find: "src/",
          replacement: `${path.resolve(__dirname, "src")}/`,
        },
      ],
      extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".scss"],
    },
    server: {
      port: 3000,
      proxy: {
        // https://vitejs.dev/config/server-options.html
      },
      onListening: startNgrok,
    },
  };
});
