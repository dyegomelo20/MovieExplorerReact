import { Link, Navigate } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <nav >
        <div className="logo">
            <h1><Link>filmes&Séries</Link></h1>
        </div>
        <form>
            <input type="text" placeholder="Buscar filme ou série" />
            <CustomButton>Buscar</CustomButton>
        </form>
    </nav>
  )
}

export default Navbar