import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='container d-flex flex-column justify-content-center align-items-center h-100'>
        <div className='row h-100'>
            <div className='col-12 d-flex flex-column justify-content-center align-items-center'>
                <h1>Error al Autentificar el Usuario</h1>
                <Link to="/" className='btn btn-outline-success btn-lg'>Volver a intentarlo</Link>
            </div>
        </div>
    </div>
  )
}

export default ErrorPage