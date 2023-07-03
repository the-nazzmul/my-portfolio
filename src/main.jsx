import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';
import AboutMe from './Pages/AboutMe/AboutMe';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'projects',
        element: <Projects></Projects>
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      },
      {
        path: 'about-me',
        element: <AboutMe></AboutMe>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
