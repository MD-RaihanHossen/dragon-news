import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Router/Router.jsx'
import GoogleAuth from './Authentication/GoogleAuth.jsx'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleAuth>
      <RouterProvider router={Router}>
      </RouterProvider>
    </GoogleAuth>
  </StrictMode>,
)
