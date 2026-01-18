import { useNavigate } from "react-router-dom"

const useNavigateApi = () => {
    const navigate = useNavigate()
    const trocaUrl = (rota) => {
        navigate(`/MovieExplorerReact/${rota}`)
    }

    return trocaUrl
}

export default useNavigateApi