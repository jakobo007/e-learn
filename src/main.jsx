import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";

import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client';
import { ClerkProvider } from '@clerk/clerk-react'


import './App.css'
import MainLayout from "./layouts/MainLayout.jsx";
import Homepage from "./routes/Homepage.jsx";
import Courses from "./routes/Courses.jsx";
import About from "./routes/About.jsx";
import Login from "./routes/Login.jsx";
import Contact from "./routes/Contact.jsx";
import Register from "./routes/Register.jsx";


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/e-learn',
        element: <Homepage />
      },
      {
        path: '/e-learn/courses',
        element: <Courses />
      },
      {
        path: '/e-learn/about',
        element: <About />
      },
      {
        path: '/e-learn/login',
        element: <Login />
      },
      {
        path: '/e-learn/contact',
        element: <Contact />
      },
      {
        path: '/e-learn/register',
        element: <Register />
      },
      {},
    ]
  }
])

const root = document.getElementById('root')

ReactDOM.createRoot(root).render(
  <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <RouterProvider router={router} />
  </ClerkProvider>
)
