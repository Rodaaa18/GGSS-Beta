import React from 'react'
import { useSelector } from 'react-redux';

const ErrorPage = ({message, statusCode}) => {


  console.log(message)
  console.log(statusCode)

  return (
    <div className="d-flex mt-5 pt-5 container align-text-center justify-content-center text-center ">
      <div className="row align-items-center">
        <div className="col align-text-center  ">
          <h1 className=" align-items-center text-danger">
          Error al Autentificar el Usuario {statusCode ? statusCode : '500 Server Error'}
          </h1>
          <p className="">{ message }</p>
          <a target='_blank' href="http://www.loginweb.ggmm.com.ar/" className='btn btn-outline-danger btn-lg' >Volver</a>
        </div>
      </div>
    </div>
)
}
export default ErrorPage;
