import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import CategoriesPage from '../Pages/Categories/CaregoriesPage';
import BlogList from '../Pages/BlogList';
import BlogDetails from '../Pages/BlogDetails';
import Recipies from '../Pages/Recipes';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
    path: '/recipes',
    element: <Recipies />,
  },
  {
    path: '/recipes/:id',
    element: <CategoriesPage />,
  },
  {
    path: '/blog',
    element: <BlogList />,
  },
  {
    path: '/blog/blogDetail/:id',
    element: <BlogDetails />,
  },
]);

const AppRouters = () => {
  return <RouterProvider router={Router} />;
};

export default AppRouters;
