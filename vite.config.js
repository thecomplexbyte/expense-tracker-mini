import { defineConfig } from 'vite'
import symfony from 'vite-plugin-symfony'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    plugins: [
        tailwindcss(),
        symfony({
            publicDirectory: 'public',
            buildDirectory: 'build',
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                app: './assets/app.js'
            }
        }
    },
    server: {
        host: true,
        port: 5173,
        strictPort: true,
        hmr: {
            host: 'localhost',
            port: 5173,
        },
    },
});
