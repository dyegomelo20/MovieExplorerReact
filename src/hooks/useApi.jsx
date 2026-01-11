import apiFilme from "../axios/config";

import { useState, useEffect } from "react";



const useApi = (endpoint) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const res = await apiFilme.get(endpoint)

            setData(res.data)
            setLoading(false)
            
        } catch (error) {
            console.error("Erro ao buscar dados:", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [endpoint]);

    return { data, loading}
}

 export const useMovieApi = (filme) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async() => {
        try {
            const res = await apiFilme.get(filme)

            setData(res.data)
            setLoading(loading)

            console.log(data)
            
        } catch (error) {
            console.error("Erro ao buscar dados:", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [filme])

    return {data , loading}

}

export default useApi;


