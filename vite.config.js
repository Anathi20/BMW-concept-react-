import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    // Add packages here if Vite's dep optimizer causes missing chunk errors
    exclude: [],
  },
  plugins: [tailwindcss(),react(),],
})
