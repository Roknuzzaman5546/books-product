import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import MainLayout from './Main/MainLayout';
import Wishlist from './Pages/Wishlist';
import BookDetail from './Pages/BookDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <h2 className=' text-center mt-20'>This is 404 not fount</h2>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path:"/wishlist",
        element: <Wishlist></Wishlist>
      },
      {
        path: "/book/:id",
        element: <BookDetail></BookDetail>
      }
  ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
