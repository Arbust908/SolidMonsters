import path from 'path';
import { defineConfig } from 'vite';
import SolidJs from 'vite-plugin-solid';
import UnoCss from 'unocss/vite';

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
      '@/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    SolidJs(),
    UnoCss(),
  ],
  server: {
    port: 3366,
  },
  build: {
    target: 'esnext',
  },
});
