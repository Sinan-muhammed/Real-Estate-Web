import { useState } from 'react'
import Home from './Routes/homepage/Home'
import List from './Routes/listpage/ListPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Routes/Layout/Layout'
import Single from './Routes/singlePage/singlePage';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/list',
          element:<List/>
        },
        {
          path:'/:id',
          element:<Single/>
        },
        {
          path:'/list',
          element:<List/>
        }
      ]
    },
  ]);

  return (
    <>
    <RouterProvider router={router} /> 
    </>
  )
}

export default App
