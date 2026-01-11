import useApi from "../../../hooks/useApi"
import estrela from "../../../assets/estrela.png"
import "./TabFilmes.css"
import useHorizontalDragScroll from "../../../hooks/useHorizontalDragScroll"

const TabFilmes = () => {
  const { data, loading } = useApi("/movie/popular")
   const dragScroll = useHorizontalDragScroll()

  

  

  if (loading ) return <p>Carregando...</p>
 
  return (
    <div className="tabfilmes">
      <h1>Filmes Populares</h1>
      <div className="liste-filmes">
        <ul
       ref={dragScroll.ref}
        onMouseDown={dragScroll.onMouseDown}
        onMouseLeave={dragScroll.onMouseLeave}
        onMouseUp={dragScroll.onMouseUp}
        onMouseMove={dragScroll.onMouseMove}
     >
        {data.results.map((filme) => (
        <li key={filme.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt="" />
          <h2>{filme.title}</h2>
          <div className="classificacao">
            <p>{filme.release_date.slice(0, 4)}</p>
            <img src={estrela} alt="Estrela" className="estrela"/>
            <p>{Math.floor(filme.vote_average * 10) / 10}</p>
          </div>
        </li>
      ))}
      
      </ul>
      <div className="sombra"></div>
      </div>
    </div>
  )
}

export default TabFilmes