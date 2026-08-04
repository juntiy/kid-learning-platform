import { defineConfig } from 'vite';

// 单文件原型（index.html 内联 CSS+JS）作为 Vite 入口。
// base 用相对路径，方便将来若改为部署 dist 也能在 GitHub Pages 子路径下正常运行。
export default defineConfig({
  base: './',
  server: {
    open: true,
    port: 5173,
    host: true
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});
