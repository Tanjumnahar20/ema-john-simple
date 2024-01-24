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
import Checkout from './components/checkout/Checkout';
import SignUp from './components/Signup/SignUp';
import AuthProvider from './components/Context/AuthProvider';
import PrivateRoute from './components/routes/PrivateRoute';

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
  {
   path:'/checkout',
   element:<PrivateRoute><Checkout></Checkout></PrivateRoute>
  },
   { path:'inventory',
   element:<PrivateRoute><Inventory></Inventory></PrivateRoute>
  },
   { path:'login',
   element:<Login></Login>
  },
  {
    path:'signup',
    element:<SignUp></SignUp>
  }
  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>

    </AuthProvider>
  </React.StrictMode>,
)
