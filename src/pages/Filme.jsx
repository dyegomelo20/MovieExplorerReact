import { useMovieApi } from "../hooks/useApi"
import { useParams, } from "react-router-dom"
import Banner from "../components/pages/filme/Banner"
import Description from "../components/pages/filme/description"

import "./Filme.css"

const Filme = () => {
  const {data} = useMovieApi("movie/11")
  

  return (
    <div>
        <Banner data={data} />
        <Description data={data} />
    </div>
  )
}

export default Filme