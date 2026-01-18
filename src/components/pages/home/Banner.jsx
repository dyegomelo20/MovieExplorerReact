import useApi from "../../../hooks/useApi"
import CustomButton from "../../global/CustomButton"
import { Navigate } from "react-router-dom"
import "./Banner.css"

const Banner = () => {

  const {data, loading} = useApi("movie/786")


  if (!data) return <p>Carregando...</p>
  return (
    <div className="banner">
        <div className="filme-text">
          <h1>{data.title}</h1>
        <p>{data.overview}</p>
        <CustomButton className={"banner-btn"}>Ver mais</CustomButton>
        </div>
        <div className="filme-img">
          <div className="sombra"></div>
          <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="" />
        </div>
    </div>
  )
}

export default Banner