import "./ModalTrailer.css"
import { useMultiApi } from "../../../hooks/useApi"
import { useEffect, useState } from "react"

const ModalTrailer = ({id, type, ativo, onClose}) => {
    const {data} = useMultiApi(`${type}/${id}/videos`)
    
    const [trailer, setTrailer] = useState(null)

    useEffect(() => {
    if (data?.results?.length > 0) {
      setTrailer(data.results[0])
    }
    }, [data])

    if (!trailer) return null

  return (
    <div className='overlay' onClick={onClose}>
        <div className={`modal ${ativo}`} onClick={(e) => e.stopPropagation()}>
            <iframe  src={`https://www.youtube.com/embed/${trailer.key}`} frameborder="0" width="98%" height="450px" ></iframe>
        </div>
    </div>
  )
}

export default ModalTrailer