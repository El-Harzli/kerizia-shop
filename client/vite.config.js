import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from other devices
    port: 5174,      // Port number (default for Vite)
  },
  resolve: {
    alias: {
      '@src' : '/src',
      '@assets': '/src/assets',
      '@components' : '/src/components',
      '@layout' : '/src/components/layout',
      '@ui' : '/src/components/ui',
      '@utils' : '/src/utils',
      '@hooks' : '/src/hooks',
      '@context' : '/src/context',
      '@pages' : '/src/pages',

    },
  },
});
