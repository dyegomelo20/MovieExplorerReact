import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

// pages
import ErrorPages from './pages/ErrorPages.jsx'
import Home from './pages/home.jsx'
import Search from './pages/Search.jsx'
import Multi from './pages/Multi.jsx'



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
        path: "/MovieExplorerReact/multi/:type/:id",
        element: <Multi />
      },
      {
        path: "/MovieExplorerReact/search",
        element: <Search />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
