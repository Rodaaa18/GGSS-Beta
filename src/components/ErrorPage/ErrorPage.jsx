import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = ({ error, statusCode }) => {
  return (
    <div className="d-flex mt-5 pt-5 container align-text-center justify-content-center text-center ">
      <div className="row align-items-center">
        <div className="col align-text-center  ">
          <h1 className="error-code align-items-center text-danger">
          Error al Autentificar el Usuario {statusCode ? statusCode : 'ERROR en STATUS CODE'}
          </h1>
          <p className="error-message">{error  }</p>
          <Link to="/" className='btn btn-outline-success btn-lg'>Volver a intentarlo</Link>
              {/*<a href={redirectLink} className="btn btn-danger"> Go to Login </a> */}
        </div>
      </div>
    </div>
)
}
export default ErrorPage




// <div className='container d-flex flex-column justify-content-center align-items-center h-100'>
//     <div className='row h-100'>
//         <div className='col-12 d-flex flex-column justify-content-center align-items-center'>
            // <h1>Error al Autentificar el Usuario</h1>
            // <Link to="/" className='btn btn-outline-success btn-lg'>Volver a intentarlo</Link>
//         </div>
//     </div>
// </div>