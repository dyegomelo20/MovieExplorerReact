import { useRouteError } from "react-router-dom"

const ErrorPages = () => {
    const error = useRouteError()
 
  return (
    <div>
        <h1>Ops</h1>
        <p>temos um problemar</p>
        {error?.status && <p>Status: {error.status}</p>}
        {error?.message && <p>Mensagem: {error.message}</p>}

    </div>
  )
}

export default ErrorPages