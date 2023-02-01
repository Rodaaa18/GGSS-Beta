import React from 'react'
import Dropdown from '../../Inputs/Dropdown/Dropdown'
import InputModal from '../../Inputs/InputsModal/InputModal'
import InputNumModal from '../../Inputs/InputsModal/InputNumModal/InputNumModal'
import TextArea from '../../Inputs/TextArea/TextArea'

const BodyCategorias = ({ aCategorias, inputsNumCategorias, placeholderCategorias }) => {
    return (
        <>
            <div className="llamadaApi" style={{ height: "650px", width: "auto"}}>

                <label htmlFor="data">Datos: </label>
                <br />
                <select style={{height: "600px"}} className="form-select row mt-1 " multiple aria-label="multiple select example">
                    {
                        aCategorias !== undefined ? aCategorias.map((op, i) => {
                            return (
                                <option key={i} value="1">{op}</option>
                            )
                        }) : null
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

            <div className='bodyInputs' style={{ width: "500px" }}>
                <fieldset className='basicFieldset'>
                    <legend>AGREGAR</legend>
                    {
                        placeholderCategorias.map((p, i) => {
                            return (
                                <InputModal key={i} nameLabel={p.label} placeHolder={p.placeholder} inputId={p.label} />
                            )
                        })
                    }
                    <div>
                        {
                            inputsNumCategorias.map((p, i) => {
                                return (
                                    <div>
                                        <InputNumModal key={i} nameInput={p.label} inputId={p.label} />
                                    </div>
                                )
                            })

                        }

                        {

                        }
                    </div>

                    <Dropdown nameDropdown="Partida" />

                    <br />

                    <>
                        <label style={{ marginRight: "7px" }} htmlFor="promocionAutomatica">Promoción Automática</label>
                        <input type="checkbox" name='promocionAutomatica' />
                    </>

                    <br />
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

                </fieldset>
            </div>



        </>
    )
}

export default BodyCategorias