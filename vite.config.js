import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    base: '/ReactAppTemplate/',
    server: {
        host: true,
        port: 80,
    },
    plugins: [react()],
});
