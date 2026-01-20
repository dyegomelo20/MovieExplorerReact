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

 export const useMultiApi = (endpoint) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)

    const fetchData = async() => {
        try {
            const res = await apiFilme.get(endpoint)

            setData(res.data)
            setLoading(loading)

            
        } catch (error) {
            console.error("Erro ao buscar dados:", error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [endpoint])

    return {data , loading}

}

export const useSearchApi = (endpoint, params, query) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const fetchData = async (controller) =>{
        try {
            setLoading(true)
            const res = await apiFilme.get(endpoint, { params, signal: controller.signal})

            setData(res.data)
            setLoading(false)

        } catch (error) {
            console.log("Erro ao buscar dados:", error)
        } 
    }

    useEffect(() => {
        if (!query) return
        const controller = new AbortController()

        fetchData(controller)

        return () => {
        controller.abort()
        }

    }, [query, params?.page])

    return {data, loading}
}

export default useApi;


