import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages用の設定
  // ユーザーサイト (username.github.io) の場合は '/' のままでOK
  // プロジェクトサイト (username.github.io/repo-name) の場合は '/repo-name/' に変更
  base: '/Portfolio/',
})
