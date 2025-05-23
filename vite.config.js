import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  base: '/my-blog/',
  plugins: [react(), Inspect()],
});