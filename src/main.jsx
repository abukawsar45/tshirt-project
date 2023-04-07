import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
  createBrowserRouter,
  
} from "react-router-dom";
import './index.css'
import Home from './components/Home/Home';
import Main from './Layout/Main';
import Header from './Layout/Header';
import OrderReview from './components/OrderReview/OrderReview';
import About from './components/About/About';
import Login from './components/Login/Login';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {path: '/',
        element: <Home />,
        loader: ()=> fetch('tshirts.json')
      },
      {
        path: '/order',
        element: <OrderReview/>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {},
    ]
    // element: <Home></Home>,
    // loader: fetch('tshirt.json'),
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
