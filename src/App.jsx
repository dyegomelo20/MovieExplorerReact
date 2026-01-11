import { Outlet } from 'react-router-dom'
import './App.css'
import Filme from './pages/Filme'
import Home from './pages/home'
import Navbar from './components/global/Navbar'


function App() {

  return (
    <>
    <Navbar />
      <Outlet />
    </>
  )
}

export default App
