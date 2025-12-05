import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    host:true
  },
   build: {
    // Increase the warning limit to 2 MB
    chunkSizeWarningLimit: 2000
  }
})
