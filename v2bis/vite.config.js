import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react({
        jsxRuntime: 'automatic',
        babel: {
            parserOpts: {
                plugins: ['jsx']
            }
        }
    })],
    server: {
        port: 3000,
        open: true,
    },
    build: {
        outDir: 'build',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    },
    esbuild: {
        jsx: 'automatic'
    }
})