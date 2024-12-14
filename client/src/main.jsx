import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouters from './routes/AppRoutes'
import { ThemeProvider } from "@material-tailwind/react";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
        <AppRouters />
    </ThemeProvider>
  </StrictMode>
)
