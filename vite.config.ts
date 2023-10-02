import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'touchpoint-sdk',
      fileName: 'touchpoint-sdk',
      entry: 'src/index.ts',
      formats: ['es', 'umd'],
    },
    rollupOptions: {
      // external: /^lit/
    },
  },
})
