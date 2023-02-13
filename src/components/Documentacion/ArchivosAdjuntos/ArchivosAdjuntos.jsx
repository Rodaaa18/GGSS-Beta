import React, { useState } from 'react'
import { useEffect } from 'react';
import InputForm from '../../Inputs/InputForm/InputForm';
import TextArea from '../../Inputs/TextArea/TextArea';

const ArchivosAdjuntos = ({handleClickClose, nameModalProp, transition, nameModal, disableModalButtons, setDisableMOdal, setDisableModalButtons}) => {
    const [file, setFile] = useState(null);
    const [fileArray, setFileArray] = useState(null);
    const [fileSize, setFileSize] = useState(0);
    const [ jsonArray , setJsonArray ] = useState(null);

    
    
      const handleLoad = (e) => {
        setFile(e.target.files[0]);
        const reader = new FileReader();
        reader.onload = (event) => {
          setFileArray(new Uint8Array(event.target.result));
        };
        reader.readAsArrayBuffer(file);
        
      };

      //aca tomamos el valor en KB del tamaño del archivo, hay que hacer una validacion para que cuando sea mayor al valor otorgado por
      //el superadmin, no lo deje cargar.
      //A su vez estamos convirtiendolo en array de bytes, no se si de esta forma hay que enviarlo o como binario
      useEffect(()=>{
            setFileSize(Number(file?.size) / 1024);
            toJsonByteArray(fileArray);
      },[file])

      function toJsonByteArray(array){
        const encoder = new TextEncoder();
        const jsonByteArray = encoder.encode(JSON.stringify(array));
        setJsonArray(jsonByteArray);
      }

      console.log(file)
      console.log(jsonArray)
  return (
    <section className={transition ? 'transitionClassUp' : ' transitionClassneDone '} >
        <div className='cortina'></div>
    <div className='modalBodyClass p-2' >
        <div className="row p-2">
          <div className="d-flex flex-row justify-content-between align-items-center">
          <p className="h3"><ins>{nameModal}</ins></p>
            <button
              className="btn btn-outline-danger text-white fs-6 btn-md buttonModal border border-white"
              onClick={() => {
                handleClickClose(nameModalProp);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div className="row p-2">
            <div className='col-xl-12 col-lg-12 col-md-12'>
                <table className="table table-dark  w-100">
                    <thead>
                        <tr>
                            <th>
                                Nombre
                            </th>
                            <td>
                                Observación
                            </td>                       
                        </tr>
                    </thead>
                    <tbody className="table-group-divider" id="cuerpodetabla">
                        <tr className="">
                            <th scope="row">
                                Sel.
                            </th> 
                            <td>
                                second
                            </td>                      
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className='row'>
            <div className='col-xl-7 col-lg-7 col-md-12'>
                <button className='btn btn-dark btn-sm m-1'>
                    Agregar
                </button>
                <button className='btn btn-dark btn-sm m-1'>
                    Modificar
                </button>
                <button className='btn btn-dark btn-sm m-1'>
                    Eliminar
                </button>
            </div>
            <div className='col-xl-5 col-lg-5 col-md-12 d-flex flex-row-reverse'>
                <button className='btn btn-dark btn-sm m-1'>
                    Ver
                </button>
            </div>
        </div>
        <div className='row border border-3 m-2 p-1'>
            <div className='col-xl-12'>
                <input onChange={handleLoad} type="file" className='' name="inputFile" id="inputFile" />
            </div>
            <div className='col-xl-12'>
                <InputForm idInput="nombreAdjunto" nameLabel="Nombre" />
            </div>
            <TextArea  />
            <div className='col-xl-12 d-flex flex-row-reverse'>
                <button className='btn btn-dark m-1'>
                    Aceptar
                </button>
                <button className='btn btn-dark m-1'>
                    Cancelar
                </button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ArchivosAdjuntos