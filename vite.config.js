import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite';
// https://vitejs.dev/config/

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  // import.meta.env.VITE_NAME available here with: process.env.VITE_NAME
  // import.meta.env.VITE_PORT available here with: process.env.VITE_PORT

  return defineConfig({
    plugins: [react()],
    base: process.env.VITE_BASE_URL,
    server: {
      port: process.env.VITE_PORT,
    },
  });
}