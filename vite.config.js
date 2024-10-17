import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue";
 
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: 'index.html', // 入口文件路径
    },
  },
  plugins: [vue()],
});