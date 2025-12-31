import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/vishal_chettri_portfolio/', // Must match your GitHub repo name
  plugins: [react()],
  server: {
    port: 3000
  }
})

