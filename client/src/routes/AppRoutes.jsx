// src/AppRouters.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
])

const AppRouters = () => {
  return <RouterProvider router={Router} />
}

export default AppRouters
