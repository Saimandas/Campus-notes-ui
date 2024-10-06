import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy:{
      "/api":{
          target: 'https://campusnotes-backend-1.onrender.com/api/v1',
          changeOrigin: true,
          secure:true
      }
    }
  },
  plugins: [react()],
})
