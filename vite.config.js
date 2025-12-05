import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
``

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    host:true
  },
   build: {
    chunkSizeWarningLimit: 2000, // in KB, e.g., 2000 KB = 2 MB
  },
})
