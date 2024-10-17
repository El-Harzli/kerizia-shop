import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './global.css'


createRoot(document.getElementById('root')).render(
    <App />
)