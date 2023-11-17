import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    // proxy: { '/api': 'http://localhost:3000' },
    proxy: { '/api': 'https://register-backend-vxw4.onrender.com' },
  },
  plugins: [react(), eslint()],
});
