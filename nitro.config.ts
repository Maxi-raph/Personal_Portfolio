import { defineConfig } from 'nitro'

export default defineConfig({
  preset: process.env.NODE_ENV === 'production' ? 'vercel' : 'node-server',
  serverDir: './server',
  dev: true,
})