import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: [".preview.metainside.io"],
    watch: {
      // Ignore large directories to prevent file watcher issues
      ignored: [
        "**/node_modules/**",
        "**/ignition/deployments/**",
        "**/artifacts/**",
        "**/cache/**",
      ],
    },
  },
  plugins: [react()],
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
});
