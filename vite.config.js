import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/portfolio/', // reemplaza 'portfolio' con el nombre de tu repo
  plugins: [vue()],
})