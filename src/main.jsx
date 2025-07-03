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
        path: '/',
        element: <Homepage />
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/courses',
        element: <Courses />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/register',
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
