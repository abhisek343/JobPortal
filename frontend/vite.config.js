import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ required for correct JS path resolution on Netlify
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
