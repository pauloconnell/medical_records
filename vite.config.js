import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  //  resolve: {
  //   alias: {
  //     // Define @ as an alias for the 'src' directory
  //     '@': path.resolve(__dirname, './src'), 
  //     // ~ alias for the project root
  //      '~': path.resolve(__dirname, './'), 
  //   },
  // },
})
