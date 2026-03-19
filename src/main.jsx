import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Home from './Components/Home/Home.jsx'
import Apps from './Components/Apps/Apps.jsx'
import Installation from './Components/Installation/Installation.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    Component: Root,
    errorElement: <ErrorPage/>,
    children:[
      {
      index: true,
      path: "/",
      Component: Home,
      loader:()=>fetch('AppData.json'),
    },
     {
    path:'/apps',
    Component: Apps
  },
   {
    path:'/installation',
    Component: Installation
  }
    ]

  }
 
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
    
  </StrictMode>,
)
