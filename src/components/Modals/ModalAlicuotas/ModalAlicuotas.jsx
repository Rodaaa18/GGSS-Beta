import React from 'react'

const ModalAlicuotas = ({ idModal, nameModal, array }) => {
    return (
        <div>
            <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
                <div className="modal-dialog modal-xl">
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
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
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
                                <label htmlFor="detalle" style={{ marginRight: "15px" }}>Detalle: </label>
                                <input type="text" name="detalle" />
                                <br />
                                <label htmlFor="alicuota" style={{ marginRight: "15px" }}>Alicuota: </label>
                                <input type="number" name="alicuota" min={"0"} />
                                <br />
                                <input type="checkbox" name="nCuit" style={{ marginRight: "5px" }} />
                                <label htmlFor="nCuit">Pide Nº CUIT</label>

                                <br />
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

export default ModalAlicuotas;