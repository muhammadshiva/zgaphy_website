import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),
            '@/Components': path.resolve(__dirname, 'resources/js/Components'),
            '@/lib/utils': path.resolve(__dirname, 'resources/js/lib/utils'),
            '@/Components/ui': path.resolve(__dirname, 'resources/js/Components/ui'),
            '@/lib': path.resolve(__dirname, 'resources/js/lib'),
            '@/hooks': path.resolve(__dirname, 'resources/js/hooks'),
        },
    },
});
