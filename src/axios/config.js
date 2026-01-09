import axios from "axios"

const apiFilme = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_TOKEN}`,
        "Content-Type": "application/json",
    },
  params: {
    language: "pt-BR", // idioma
    region: "BR",      // região (resultados do Brasil)
  },

})



export default apiFilme