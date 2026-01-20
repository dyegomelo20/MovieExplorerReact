import { Link, Navigate, useNavigate } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"
import CustomButton from "./CustomButton"

const Navbar = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault()

    if(!search) return

    navigate(`/MovieExplorerReact/search?q=${search}`)

  }

  return (
    <nav >
        <div className="logo">
            <h1><Link to={"/MovieExplorerReact"}>Filmes&Séries</Link></h1>
        </div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Buscar filme ou série" onChange={(e) => setSearch(e.target.value)} />
            <CustomButton type={"submit"}>Buscar</CustomButton>
        </form>
    </nav>
  )
}

export default Navbar