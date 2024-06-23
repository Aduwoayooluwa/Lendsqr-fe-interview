/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: './src/test/setup.ts',
    include: ['**/*.{test,spec}.{ts,tsx}'],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/style/variables.scss";`
      }
    }
  }
})
