import { useNavigate } from "react-router-dom"

const useNavigateApi = () => {
    const navigate = useNavigate()
    const trocaUrl = (rota) => {
        navigate(`/${rota}`)
    }

    return trocaUrl
}

export default useNavigateApi