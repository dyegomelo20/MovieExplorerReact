import { useSearchParams } from "react-router-dom"
import { useSearchApi } from "../hooks/useApi"
import estrela from "../assets/estrela.png"
import { useEffect, useState } from "react";
import CustomButton from "../components/global/CustomButton";

const Search = () => {
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [page, setPage] = useState(1)
    const {data, loading} = useSearchApi("/search/multi", {query, page}, query)

    console.log(data)
    useEffect(() => {
        setPage(1)
        console.log(page)
    }, [query])

    if (loading) return <p>Carregando...</p> 
  return (
    <div>
        <h1>Reasultados: {query}</h1>
        <div>
            <ul>
                {data.results.map((multi) => (
                    <li key={multi.id}>
                        {multi.poster_path ? <img src={`https://image.tmdb.org/t/p/w500/${multi.poster_path}`} alt="" /> : <div><p>Sem imagem</p></div>}
                        <h2>{multi.media_type === "movie" ? multi.title : multi.name}</h2>
                        <div className="classificacao">
                        <p>{multi.media_type === "movie" ? multi.release_date.slice(0, 4) : multi.first_air_date}</p>
                        <img src={estrela} alt="Estrela" className="estrela"/>
                        <p>{Math.floor(multi.vote_average * 10) / 10}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <div className="pages">
                <CustomButton onClick={() => setPage(page - 1 )} disabled={page === 1} >Anterior</CustomButton>
                <p>{page} de {data.total_pages}</p>
                <CustomButton onClick={() => setPage(page + 1)} disabled={page === data.total_pages}>Proximo</CustomButton>
            </div>
        </div>
    </div>
  )
}

export default Search