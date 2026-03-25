import {  StrictMode } from 'react'
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
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => fetch('AppData.json'),
      },
      {
        path: 'apps',
        element: <Apps />,
        loader: async () => {
          const res = await axios.get("/AppData.json");
          return res.data;
        },
      },
      {
        path: 'app/:appId',
        element: <AppDetails />,
        loader: async ({ params }) => {
          const res = await axios.get('/AppData.json');
          return res.data.find(
            (p) => p.id === parseInt(params.appId)
          );
        },
      },
      {
        path: 'installation',
        element: <Installation />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />

  </StrictMode>,
)
