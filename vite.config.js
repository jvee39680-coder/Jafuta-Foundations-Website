/* global process */
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'


// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/Jafuta-Foundations-Website/' : '/',
  plugins: [react(), tailwindcss()],
})
