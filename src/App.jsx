
import Home from './Routes/homepage/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ListPage from './Routes/ListPage/listPage.jsx';
import Layout from './Routes/Layout/Layout.jsx';
import Single from './Routes/singlePage/singlePage.jsx';
import Profile from './Routes/ProfilePage/Profile.jsx';

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
          element:<ListPage/>
        },
        {
          path:'/:id',
          element:<Single/>
        },
        {
          path:'/profile',
          element:<Profile/>
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
