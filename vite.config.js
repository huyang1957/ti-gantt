import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
import path from "path";
 
// https://vitejs.dev/config/
const pathSrc = path.resolve(__dirname, "src");
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'index.html', // 入口文件路径
    },
  },
  plugins: [vue()],
  optimizeDeps: {
    include: [
      'dayjs',
      'dayjs/plugin/isSameOrAfter',
      'dayjs/plugin/isSameOrBefore',
    ],
  },
  resolve: {
    alias: {
      "@": pathSrc,
    },
  },
});