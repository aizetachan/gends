import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
            include: ['src/components/**/*', 'src/hooks/**/*', 'src/utils/**/*', 'src/index.ts'],
            exclude: ['src/**/*.stories.tsx', 'src/stories/**/*'],
        }),
    ],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'StudiogenUI',
            formats: ['es', 'cjs'],
            fileName: (format) => `index.${format === 'es' ? 'mjs' : 'js'}`,
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'react/jsx-runtime'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    'react/jsx-runtime': 'jsxRuntime',
                },
                assetFileNames: (assetInfo) => {
                    if (assetInfo.name === 'style.css') return 'styles.css';
                    return assetInfo.name || '';
                },
            },
        },
        cssCodeSplit: false,
        sourcemap: true,
    },
});
