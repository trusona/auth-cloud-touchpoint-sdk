import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    emptyOutDir: false,
    /**
     * lib declares this as a library instead of an application.
     * entry is required since the library cannot use HTML as entry.
     * https://vitejs.dev/config/build-options.html#build-lib
     */
    lib: {
      fileName: 'index',
      entry: 'src/index.ts',
      formats: ['es'],
    },
    /**
     * Option if we want to support older bundle formats:
     *     lib: {
     *       fileName: 'index',
     *       entry: 'src/index.ts',
     *       formats: ['es', 'umd'],
     *       name: 'trusona'
     *     },
     */
    rollupOptions: {
      // external: /^lit/
    },
  },
})
