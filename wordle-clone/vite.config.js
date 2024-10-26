import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/foo': 'https://cs35l-group26-1.onrender.com',
      '/api': {
        target: 'https://cs35l-group26.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
