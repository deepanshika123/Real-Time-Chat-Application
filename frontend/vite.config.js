// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


// vite.config.js
export default {
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000", // backend ka URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
};
