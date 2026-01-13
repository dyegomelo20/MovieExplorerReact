import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

// pages
import ErrorPages from './pages/ErrorPages.jsx'
import Home from './pages/home.jsx'
import Filme from './pages/Filme.jsx'



const router = createBrowserRouter([
  {
    path: "/MovieExplorerReact",
    element: <App />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/MovieExplorerReact",
        element: <Home />
      },
      {
        path: "/MovieExplorerReact/filme/:id",
        element: <Filme />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
