import React from 'react'

const ErrorPage = ({ error, statusCode }) => {
  return (
    <div className="d-flex mt-5 pt-5 container align-text-center justify-content-center text-center ">
      <div className="row align-items-center">
        <div className="col align-text-center  ">
          <h1 className=" align-items-center text-danger">
          Error al Autentificar el Usuario {statusCode ? statusCode : '500 Server Error'}
          </h1>
          <p className="">{ error }</p>
          <a target='_blank' href="https://www.google.com/" className='btn btn-outline-danger btn-lg' >Volver a intentarlo</a>
        </div>
      </div>
    </div>
)
}
export default ErrorPage;