import useApi from "../../../hooks/useApi"
import estrela from "../../../assets/estrela.png"
import useHorizontalDragScroll from "../../../hooks/useHorizontalDragScroll"

import "./TabSeries.css"


const TabSeries = () => {
const { data, loading } = useApi("/tv/popular")
   const dragScroll = useHorizontalDragScroll()

  
  if (loading ) return <p>Carregando...</p>
 
  return (
    <div>
      <div className="tabseries">
            <h1>Séries</h1>
            <div className="liste-series">
              <ul
             ref={dragScroll.ref}
              onMouseDown={dragScroll.onMouseDown}
              onMouseLeave={dragScroll.onMouseLeave}
              onMouseUp={dragScroll.onMouseUp}
              onMouseMove={dragScroll.onMouseMove}
           >
              {data.results.map((serie) => (
              <li key={serie.id}>
                <img src={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`} alt="" />
                <h2>{serie.name}</h2>
                <div className="classificacao">
                  <img src={estrela} alt="Estrela" className="estrela"/>
                  <p>{Math.floor(serie.vote_average * 10) / 10 }</p>
                </div>
              </li>
            ))}
            
            </ul>
            <div className="sombra"></div>
            </div>
          </div>
    </div>
  )
}

export default TabSeries