// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({

   root: './', // Tells Vite to start looking in the project root (where the config file is)
  
  // Set the base to ensure all assets are loaded from the root
  base: '/', 
  
  // Tell Vite where the main HTML file is located (in the public folder)
  build: {
    outDir: 'dist',
  },
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
});