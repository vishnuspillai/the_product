import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/the_product/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
