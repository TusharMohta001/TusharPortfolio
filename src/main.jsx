import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap';

// Register the ScrollToPlugin once globally
gsap.registerPlugin(ScrollToPlugin);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
