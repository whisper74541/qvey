import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/root.css'
import './css/reset.css'
import './css/global.css'
import App from './App.tsx'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>
)
