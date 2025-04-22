import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // Add this import
import oxide from '@tailwindcss/oxide'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), oxide()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        require('autoprefixer'),
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // this enables @ to refer to /src
    },
  },
})
