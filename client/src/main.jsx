import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SearchProvider } from './context/SearchContext'
import './index.css'
import AppRouters from './routes/AppRoutes'
import { ThemeProvider } from '@material-tailwind/react'
createRoot(document.getElementById('root')).render(
  <SearchProvider>
    <StrictMode>
      <ThemeProvider>
        <AppRouters />
      </ThemeProvider>
    </StrictMode>
  </SearchProvider>
)
