import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './context/Redux/store'
import './index.css'
import AppRouters from './routes/AppRoutes'
import { ThemeProvider } from '@material-tailwind/react'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <ThemeProvider>
        <AppRouters />
      </ThemeProvider>
    </StrictMode>
  </Provider>
)
