import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

// Load the environment variables from the .env file
dotenv.config()

if (process.env.npm_lifecycle_event === 'build' && !process.env.CI && !process.env.SHOPIFY_API_KEY) {
    throw new Error(`
        The frontend build will not work without an API key.
        Set the SHOPIFY_API_KEY environment variable when running the build command:
        SHOPIFY_API_KEY=<your-api-key> npm run build
    `)
}

process.env.VITE_SHOPIFY_API_KEY = process.env.SHOPIFY_API_KEY

const proxyOptions = {
    target: `http://127.0.0.1:${process.env.BACKEND_PORT || 8790}`, // Use default if not set
    changeOrigin: false,
    secure: true,
    ws: false,
}

const host = process.env.HOST ? process.env.HOST.replace(/https?:\/\//, '') : 'localhost'

let hmrConfig
if (host === 'localhost') {
    hmrConfig = {
        protocol: 'ws',
        host: 'localhost',
        port: 64999,
        clientPort: 64999,
    }
} else {
    hmrConfig = {
        protocol: 'wss',
        host: host,
        port: Number(process.env.FRONTEND_PORT || 443),
        clientPort: 443,
    }
}

export default defineConfig({
    root: dirname(fileURLToPath(import.meta.url)),
    plugins: [react()],
    resolve: {
        preserveSymlinks: true,
        alias: [
            {
                find: '@src/',
                replacement: path.resolve(process.cwd(), 'src') + '/',
            },
        ],
    },
    server: {
        host: 'localhost',
        port: Number(process.env.FRONTEND_PORT || 5718), // Use default if not set
        hmr: hmrConfig,
        proxy: {
            '^/(\\?.*)?$': proxyOptions,
            '^/api(/|(\\?.*)?$)': proxyOptions,
        },
    },
})
