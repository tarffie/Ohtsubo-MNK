// code from chatgpt 
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Specify output folder for built assets
    rollupOptions: {
      output: {
        manualChunks: undefined // Keep everything in a single bundle if you prefer
      }
    }
  },
  server: {
    port: 3000, // Port for dev server
    strictPort: true, // Prevent fallback to other ports
    open: true, // Automatically open in browser
  },
  preview: {
    port: 5000, // Port for Vite's preview server (optional)
  }
});
