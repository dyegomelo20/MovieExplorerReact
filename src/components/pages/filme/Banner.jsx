import { useMovieApi } from "../../../hooks/useApi"

const Banner = () => {

    const {data} = useMovieApi("movie/11")

    console.log(data)

    if(!data) return

  return (
    <div>Banne</div>
  )
}

export default Banner