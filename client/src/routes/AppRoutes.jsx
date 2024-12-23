import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Auth/Login'
import Register from '../Pages/Auth/Register'
import BlogList from '../Pages/BlogList'
import Recipies from '../Pages/Recipes'
import CategoriesPage from '../Pages/CaregoriesPage'
import RecipeDetails from '../Pages/RecipeDetail'
import ContactUs from '../Pages/ContactUs/ContactUs'
import Landing from '../Pages/Landing'
import AboutUs from '../Pages/AboutUs'
import BlogDetails from '../Pages/BlogDetails';
const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Landing />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
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
        path: '/blog',
        element: <BlogList />,
      },
      {
        path: '/about',
        element: <AboutUs />,
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
        path: '/contact',
        element: <ContactUs />,
      },
      {
        path: '/blog/blogDetail/:id',
        element: <BlogDetails />,
      },
    ],
  },
])

const AppRouters = () => {
  return <RouterProvider router={Router} />
}

export default AppRouters
