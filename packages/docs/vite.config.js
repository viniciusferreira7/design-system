/// <reference types="vite/client" />

import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'

export const defineConfig({
  plugins:[react()]
})