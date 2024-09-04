import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Header from './Blog API/Header/Header.jsx';
import Countries from './Country rest api/practice/Countries.jsx';
import Error from './Error/Error.jsx';
import Details from './Blog API/Blogs/Details.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<Error></Error>,
    children:[
      {
        path: "/blog",
        element: <Header></Header>,
      },
      {
        path: "/blog/:id",
        element: <Details></Details>,
      },
      {
        path: "/countries",
        element: <Countries></Countries>,
      },
      
      
    ]
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
 