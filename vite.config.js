import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Portfolio/", // මෙතනට ඔයාගේ Repo එකේ නම හරියටම දෙන්න
})
