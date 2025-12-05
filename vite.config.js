import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/

// const HeavyComponent = React.lazy(() => import('./HeavyComponent'));

export default defineConfig({
  plugins: [react(),tailwindcss()],
  server:{
    host:true
  },
   build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        }
      }
    }
  }
})
