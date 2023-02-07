import React from 'react'
import { useSelector } from 'react-redux';
import "./Superadmin.css";

const Superadmin = () => {
    const datosPersonalesState = useSelector((state)=> state.generalState);
    //Ahora traigo los datos desde Datos PErsonales pero deberia tal vez hacer un fetch aca en el componente por si luegi
    //se requiere que se inicie directamente de superadmin si es que tiene este permiso.

    //Por otro lado luego habria que hacer el endpoint de PArSueldos para poder traer los datos y comparar con lo que
    //se selecciona aca y muestre siempre lo que esta selecionado, aparte para luego mostrar lo de aqui en los inputs.
  return (
    <div className='container-flex p-0 m-0 contenedorSuperadmin'>
        <fieldset className="border fieldSetSuper">
                <legend className="float-none w-auto contenedorFieldSet">
                    <i className="fs-5 bi-hammer "></i><span className="ms-1 d-none d-sm-inline colorFont">Superadmin</span>
                </legend> 
                <div className='row p-4'>
                    <div className='col-xl-7 border border-2 p-2'>
                        <h2>Empleados</h2>
                        <div className='d-flex flex-column justify-content-center align-items-start'>
                            <label htmlFor="estadoAltaEmpleado">Estado Predeterminado Alta de un Empleado:</label>
                            <select className="formulario-input-Estado form-select ml-0 px-0" defaultValue="" id="estadoAltaEmpleado" name="estadoAltaEmpleado">
                            <option value="">Seleccionar</option> 
                            {
                                datosPersonalesState.estados && datosPersonalesState.estados.map((item, index)=>{
                                    console.log(item)
                                    return(
                                        <option key={index} value={item.idEstado}>{item.nombreEstado}</option>
                                    )
                                })
                            }
                            </select>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-start'>
                            <label htmlFor="estadoBajaEmpleado">Estado Predeterminado Baja de un Empleado:</label>
                            <select className="formulario-input-Estado form-select ml-0 px-0" defaultValue="" id="estadoBajaEmpleado" name="estadoBajaEmpleado">
                            <option value="">Seleccionar</option> 
                            {
                                datosPersonalesState.estados && datosPersonalesState.estados.map((item, index)=>{
                                    console.log(item)
                                    return(
                                        <option key={index} value={item.idEstado}>{item.nombreEstado}</option>
                                    )
                                })
                            }
                            </select>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-start'>
                            <label htmlFor="IdTipoDocumentoPredeterminado">Tipo de Documento Predeterminado:</label>
                            <select className="formulario-input-Estado form-select ml-0 px-0" defaultValue="" id="IdTipoDocumentoPredeterminado" name="IdTipoDocumentoPredeterminado">
                            <option value="">Seleccionar</option> 
                            {
                                datosPersonalesState.tiposDocumento && datosPersonalesState.tiposDocumento.map((item,index)=>{
                                    return(
                                        <option key={index} value={item.iDtipoDocumento}>{item.tipoDocumento}</option>
                                    )
                                })
                            }
                            </select>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-start'>
                            <label htmlFor="IdTipoDocumentoSinDatos">Tipo de Documento "Sin Datos":</label>
                            <select className="formulario-input-Estado form-select ml-0 px-0" defaultValue="" id="IdTipoDocumentoSinDatos" name="IdTipoDocumentoSinDatos">
                            <option value="">Seleccionar</option> 
                            <option value="0">(Sin Datos)</option> 
                            {
                                datosPersonalesState.tiposDocumento && datosPersonalesState.tiposDocumento.map((item,index)=>{
                                    return(
                                        <option key={index} value={item.iDtipoDocumento}>{item.tipoDocumento}</option>
                                    )
                                })
                            }
                            </select>
                        </div>
                        <div className='d-flex flex-column justify-content-center align-items-start'>
                            <label htmlFor="IdPaisPredeterminado">País Predeterminado:</label>
                            <select className="formulario-input-Estado form-select ml-0 px-0" defaultValue="" id="IdPaisPredeterminado" name="IdPaisPredeterminado">
                            <option value="">Seleccionar</option> 
                            {
                                datosPersonalesState.paises && datosPersonalesState.paises.map((item,index)=>{
                                    return(
                                        <option key={index} value={item.idPais}>{item.nombrePais}</option>
                                    )
                                })
                            }
                            </select>
                        </div>
                        <fieldset className="border p-2">
                            <legend className="float-none w-auto p-2 contenedorFieldSet">
                                <i className="fs-5 bi-image "></i><span className="ms-1 d-none d-sm-inline colorFont">Foto del Empleado</span>
                            </legend> 
                            <div className='d-flex flex-row justify-content-start align-items-center'>
                                <label htmlFor="">Dimensiones Máximas</label>
                                <input className='inputAnchoAlto' type="text" name="MaxAnchoFotoEmpleado" id="MaxAnchoFotoEmpleado" />
                                <span>X</span>
                                <input className='inputAnchoAlto' type="text" name="MaxAltoFotoEmpleado" id="MaxAltoFotoEmpleado" />
                                <span>pixels (Ancho x Alto)</span>
                            </div>
                        </fieldset>
                        <fieldset className="border p-2">
                            <legend className="float-none w-auto p-2 contenedorFieldSet">
                                <i className="fs-5 bi-calendar2-date "></i><span className="ms-1 d-none d-sm-inline colorFont">Días para la finalización del Contrato</span>
                            </legend> 
                            <div className='d-flex flex-row justify-content-start align-items-center'>
                                <label className='labelDiasConotrato' htmlFor="DiasFinalizacionContrato">A partir de</label>
                                <input className='inputDiasConotrato' type="text" name="DiasFinalizacionContrato" id="DiasFinalizacionContrato" />
                                <span>días se mostrara un mensaje indicando los dias restantes del contrato.</span>
                            </div>
                        </fieldset>
                    </div>
                    <div className='col-xl-5 border border-2'>
                    <h2>Adjuntos</h2>
                    <fieldset className="border p-2">
                            <legend className="float-none w-auto p-2 contenedorFieldSet">
                                <i className="fs-5 bi-image "></i><span className="ms-1 d-none d-sm-inline colorFont">Imágenes</span>
                            </legend> 
                            <div className='d-flex flex-row justify-content-start align-items-center'>
                                <label className='labelAdjuntos' htmlFor="MaxAnchoImagenAdjunto">Dimensiones Máximas</label>
                                <input className='inputAnchoAlto' type="text" name="MaxAnchoImagenAdjunto" id="MaxAnchoImagenAdjunto" />
                                <span>X</span>
                                <input className='inputAnchoAlto' type="text" name="MaxAltoImagenAdjunto" id="MaxAltoImagenAdjunto" />
                                <span>pixels (Ancho x Alto)</span>
                            </div>
                            <div className='d-flex flex-row justify-content-start align-items-center'>
                                <label className='labelAdjuntos' htmlFor="">Resolución Máxima</label>
                                <input className='inputAnchoAlto' type="text" name="MaxResImagenAdjunto" id="MaxResImagenAdjunto" />                                
                            </div>
                        </fieldset>
                        <fieldset className="border p-2">
                            <legend className="float-none w-auto p-2 contenedorFieldSet">
                                <i className="fs-5 bi-folder2-open "></i><span className="ms-1 d-none d-sm-inline colorFont">Archivos</span>
                            </legend> 
                            <div className='d-flex flex-row justify-content-start align-items-center'>
                                <label className='labelAdjuntos' htmlFor="MaxSizeArchivoAdjunto">Tamaño Máximo</label>
                                <input className='inputAnchoAlto' type="text" name="MaxSizeArchivoAdjunto" id="MaxSizeArchivoAdjunto" />  <span>KB</span>                              
                            </div>
                        </fieldset>
                    </div>
                </div>  
        </fieldset>
    </div>
  )
}

export default Superadmin