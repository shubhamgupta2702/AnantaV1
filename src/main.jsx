import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'

import Hero from './components/Hero.jsx'
import Technologies from './components/Technologies.jsx'
import AboutonClick from './components/AboutonClick.jsx'
import CardFlip from './components/CardFlip.jsx'

import CoreTeamV1 from './components/CoreTeamV1.jsx'
import Games from './components/Games.jsx'
import Gallery from './components/Gallery.jsx'



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
      },
      {
        path: "team",
        element: <CoreTeamV1/>
      },
      {
        path:"events",
        element: <Games />
      },{
        path:"eventpage",
        element:<Games/>
      },{
        path:"gallery",
        element:<Gallery/>
      }
      
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)