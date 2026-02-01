import { useParams } from "react-router-dom"
import Banner from "../components/pages/multi/Banner"
import Description from "../components/pages/multi/Description"
import { useMultiApi } from "../hooks/useApi"
import "./Multi.css"
import { useEffect } from "react"


const Multi = () => {

    const {type, id} = useParams()

    const {data, loading} = useMultiApi(`${type}/${id}`)

    useEffect(() =>{
      
      if (loading){
        document.title = "Carregando..."
      } else if (data){
        document.title = `${data.title || data.name}`
      }
      if(!data){
        document.title = "Não encotrado"
      }
    }, [data, loading])

  return (
    <div>
        <Banner data={data}/>
        <Description data={data} type={type}/>
    </div>
  )
}

export default Multi