import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root.jsx';
import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Sarvices from './Component/Sarvices/Sarvices.jsx';
import Profile from './Component/Profile/Profile.jsx';
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import AnotherComponent from './Component/AnotherComponent/AnotherComponent.jsx';
import Authentication from './Component/Authentication/Authentication.jsx';
import PrivateRouter from './Component/PrivateRouter/PrivateRouter.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Error from './Component/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('fackData.json')
      },
      {
        path: '/anothercomponent/:id',
        element: <PrivateRouter><AnotherComponent></AnotherComponent></PrivateRouter>,
        loader: () => fetch('fackData.json')
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "/Service",
        element: <Sarvices></Sarvices>
      },
      {
        path: "/profile",
        element: <PrivateRouter><Profile></Profile></PrivateRouter>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authentication>
      <RouterProvider router={router} />
    </Authentication>
  </StrictMode>,
)
