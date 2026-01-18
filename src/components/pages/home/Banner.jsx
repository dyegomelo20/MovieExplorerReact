import useApi from "../../../hooks/useApi"
import CustomButton from "../../global/CustomButton"
import "./Banner.css"
import useNavigateApi from "../../../hooks/useNavigateApi"

const Banner = () => {
  const navigateApi = useNavigateApi()

  const handleClink = (id) => {
    
    navigateApi(`multi/movie/${id}`)

  }

  const {data, loading} = useApi("movie/140607")


  if (loading) return <p>Carregando...</p>
  return (
    <div className="banner">
        <div className="filme-text">
          <h1>{data.title}</h1>
        <p>{data.overview}</p>
        <CustomButton className={"banner-btn"} onClick={() => handleClink(data.id)}>Ver mais</CustomButton>
        </div>
        <div className="filme-img">
          <div className="sombra"></div>
          <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`} alt="" />
        </div>
    </div>
  )
}

export default Banner