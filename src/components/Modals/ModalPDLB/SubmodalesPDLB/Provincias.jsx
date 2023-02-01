import React from 'react'
import InputModal from '../../../Inputs/InputsModal/InputModal'
import TextArea from '../../../Inputs/TextArea/TextArea'

const Provincias = ({ aProvincias, placeholder }) => {
    return (
        <>
            <div className="llamadaApi" style={{height: "300px"}}>

                <label htmlFor="data">Datos: </label>
                <br />
                <select className="form-select row mt-1 formSelectApi" multiple aria-label="multiple select example">
                    {
                        aProvincias  && aProvincias.map((prov, i) => {
                            return (
                                <option key={i} value="1">{prov}</option>
                            )
                        })
                    }
                </select>

                <div className="crudBtns">
                    <button type="button" className="btn btn-danger crudBtn">
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

                {
                    placeholder.map((p, i) => {
                        return (
                            <InputModal key={i} nameLabel={p.label} placeHolder={p.placeholder} inputId={p.label} />
                        )
                    })
                }

                <br />

                <TextArea inputName="Observaciones" />

                <hr />

                <div className="btnInputs">
                    <button type="button" className="btn btn-success btnAceptar">
                        ACEPTAR
                    </button>

                    <button type="button" className="btn btn-danger">
                        CANCELAR
                    </button>
                </div>

            </div>
        </>
    )
}

export default Provincias