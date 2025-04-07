import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Main from './Main/Main';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <h2 className=' text-center mt-20'>This is 404 not fount</h2>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      }
  ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
