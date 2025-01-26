import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import inspect from 'vite-plugin-inspect';
import { VitePWA } from 'vite-plugin-pwa';
import { imagetools } from "vite-imagetools";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    inspect(),
    imagetools(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'favicon.svg'],
      manifest: {
        name: 'Esaaka Clothing',
        short_name: 'Esaaka Clothing',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicon-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'web-app-manifest-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'web-app-manifest-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  server: {
    proxy: {
      "/.netlify/functions": {
        target: "http://localhost:8888",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  assetsInclude: ["**/*.svg"],
});
