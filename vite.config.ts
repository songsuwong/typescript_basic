import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import * as dotenv from 'dotenv'

// https://vite.dev/config/
console.log(fileURLToPath(new URL('./src', import.meta.url)))
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  define: {
    'process.env': {
      NODE_ENV: process.env.NODE_ENV,
      ...dotenv.config({
        path:
          process.env.NODE_ENV === 'development'
            ? '.env.development'
            : '.env.production',
      }).parsed,
    },
  },
})
