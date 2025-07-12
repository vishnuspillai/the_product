import react from '@vitejs/plugin-react';
({
  server: {
    hmr: { overlay: false }
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});