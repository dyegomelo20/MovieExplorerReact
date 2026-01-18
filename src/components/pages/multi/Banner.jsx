const Banner = ({data}) => {

    if(!data) return

  return (
    <div className="movie-poster">
        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="" />
    </div>
  )
}

export default Banner