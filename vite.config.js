import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
              @import "src/assets/style/0_config/_variables.scss";
              @import "src/assets/style/0_config/_layout.scss";
             
            `,
      },
    },
  },
});
