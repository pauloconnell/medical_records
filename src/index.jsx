import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { applyPolyfills, defineCustomElements } from "h8k-components/loader/index.mjs";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

applyPolyfills().then(() => {
    defineCustomElements(window);
});
