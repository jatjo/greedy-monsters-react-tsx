import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
    plugins: [react()],
    base: '/greedy-monsters-react-tsx/',
    server: {
        port: 3110
    }
})
