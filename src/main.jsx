import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

// pages
import ErrorPages from './pages/ErrorPages.jsx'
import Home from './pages/Home.jsx'
import Search from './pages/Search.jsx'
import Multi from './pages/Multi.jsx'



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPages />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/multi/:type/:id",
        element: <Multi />
      },
      {
        path: "/search",
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
