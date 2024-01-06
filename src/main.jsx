import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Layout/Home/Home';
import Shop from './components/Shop/Shop';
import Order from './components/Orders/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/login/Login';
import cartLoader from './loader/cartLoader';

const router=createBrowserRouter([
  {path:'/',
  element:<Home></Home>,

  children:[
    {
      path:'/',
      element:<Shop></Shop>
    },
   { path:'/orders',
   element:<Order></Order>,
   loader:cartLoader
  },
   { path:'inventory',
   element:<Inventory></Inventory>
  },
   { path:'login',
   element:<Login></Login>
  },
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
