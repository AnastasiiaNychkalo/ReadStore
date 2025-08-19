import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import BasketProvider from "./BasketContext.tsx"
import SelectedProvider from './SelectedContent.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BasketProvider>
      <SelectedProvider>
        <App />
      </SelectedProvider>
    </BasketProvider>
  </StrictMode>,
)
