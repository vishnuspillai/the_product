import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    hmr: { overlay: false }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  base: process.env.NODE_ENV === 'production' ? '/the_product/' : '/',
});