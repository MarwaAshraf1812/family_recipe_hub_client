import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'
import BlogList  from '../Pages/BlogList';
import Recipies from '../Pages/Recipes'
import CategoriesPage from '../Pages/CaregoriesPage';
import RecipeDetails from '../Pages/RecipeDetail';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element:<Login/> ,
  },
  {
    path: '/register',
    element:<Register/> ,
  },
  {
    path: '/categories',
    element: <CategoriesPage />,
  },
  {
    path: '/categories/:id',
    element: <CategoriesPage />,
  },
  {
    path: '/recipes',
    element: <Recipies />,
  },
  {
    path: '/recipes/:id',
    element: <RecipeDetails />,
  },
  {
    path: '/blog',
    element: <BlogList />,
  }
])

const AppRouters = () => {
  return <RouterProvider router={Router} />
}

export default AppRouters
