import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/global/Navbar'
import Footer from './components/global/Footer'


function App() {

  return (
    <>
    <Navbar />
      <Outlet />
    <Footer />
    </>
  )
}

export default App
