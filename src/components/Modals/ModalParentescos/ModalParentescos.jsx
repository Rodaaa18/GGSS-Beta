import React from 'react'
import { useEffect } from 'react';
import TextArea from '../../Inputs/TextArea/TextArea';

const ModalParentescos = ({ idModal, nameModal, array }) => {

    useEffect(()=>{

    },[array])
    return (
        <div>
            <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${idModal}Label`}>
                                {nameModal}
                            </h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="llamadaApi">

                                <label htmlFor="data">Datos: </label>
                                <br />
                                <select className="form-select row mt-1" multiple aria-label="multiple select example">
                                    {
                                        array !== undefined && array.map((op,i)=>{
                                            return(
                                                <option key={i} value="1">{op}</option>
                                            )
                                        })
                                    }
                                </select>

                                <div className="crudBtns">
                                    <button type="button" className="btn btn-success crudBtn">
                                        AGREGAR
                                    </button>
                                    <button type="button" className="btn btn-danger crudBtn">
                                        MODIFICAR
                                    </button>
                                    <button type="button" className="btn btn-danger crudBtn">
                                        ELIMINAR
                                    </button>
                                </div>

                            </div>
                            <div className="bodyInputs">
                                <label htmlFor="parentesco" style={{ marginRight: "15px" }}>Parentesco: </label>
                                <input type="text" name="parentesco" />
                                <br />
                                <input type="checkbox" name="asignacion" style={{ marginRight: "5px" }} />
                                <label htmlFor="asignacion">Genera asignacion</label>

                                <br />

                                <input type="checkbox" name="ganancias" style={{ marginRight: "5px" }} />
                                <label htmlFor="ganancias" style={{ marginRight: "15px" }}>Deduce ganancias</label>

                                <label htmlFor="importe" style={{ marginRight: "5px" }}>IMPORTE: </label>
                                <input type="number" name="importe" min="0" style={{ width: "50px" }} />
                                <br />

                                <TextArea inputName="Observaciones" />
                                <hr />
                                <div className="btnInputs">
                                    <button type="button" className="btn btn-danger btnAceptar">
                                        ACEPTAR
                                    </button>
                                    <button type="button" className="btn btn-danger">
                                        CANCELAR
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                SALIR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalParentescos;