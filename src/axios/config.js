import axios from "axios"

const apiFilme = axios.create({
    baseURL: import.meta.env.VITE_TMDB_API,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        "Content-Type": "application/json",
    },
  params: {
    language: "pt-BR", 
    region: "BR",      
  },

})



export default apiFilme