import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Components/Root/Root.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Home from './Components/Home/Home.jsx'
import Apps from './Components/Apps/Apps.jsx'
import Installation from './Components/Installation/Installation.jsx'
import axios from 'axios'
import AppDetails from './Components/AppDetails/AppDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
        loader: () => fetch('AppData.json')
      },
      {
        path: '/apps',
        Component: Apps,
        loader: async () => {
          const res = await axios.get("/AppData.json");
          return res.data;
        },

      },
      {
        path: 'app/:id',
        Component: AppDetails,
        loader:async({params})=>{
          const res=await axios.get('/AppData.json');
          const app=res.data.find((p)=>p.id===parseInt(params.id));
          
          return app;
        }, 
       
      }
    ]

  }

])
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
