import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'

import Hero from './components/Hero.jsx'
import Technologies from './components/Technologies.jsx'
import AboutonClick from './components/AboutonClick.jsx'
import CardFlip from './components/CardFlip.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Hero/>
      },{
        path: "about",
        element: <AboutonClick />
      }
      
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)