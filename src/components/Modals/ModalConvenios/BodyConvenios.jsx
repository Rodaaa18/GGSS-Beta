import React from 'react'
import Dropdown from '../../Inputs/Dropdown/Dropdown'
import InputModal from '../../Inputs/InputsModal/InputModal'
import InputNumModal from '../../Inputs/InputsModal/InputNumModal/InputNumModal'
import TextArea from '../../Inputs/TextArea/TextArea'
import TableReduccion from '../../Tables/TableReduccion'
import '../../Modals/Modales.css'
import '../ModalEscala/ModalEscala.css'
import './ModalConvenios.css'

const BodyConvenios = ({ placeholder, aConvenios, inputsNumConvenios, column }) => {
    return (
        <>
            <div className="llamadaApi" style={{ height: "650px", width: "auto" }}>

                <label htmlFor="data">Datos: </label>
                <br />
                <select style={{ height: "600px" }} className="form-select row mt-1 " multiple aria-label="multiple select example">
                    {
                        aConvenios !== undefined ? aConvenios.map((op, i) => {
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

            <div className="bodyInputs">

                {
                    placeholder.map((p, i) => {
                        return (
                            <div key={i}>
                                <InputModal  nameLabel={p.label} placeHolder={p.placeholder} inputId={p.label} />
                            </div>
                        )
                    })
                }

                <Dropdown nameDropdown="Partida" />

                <br />

                <fieldset className='basicFieldset'>
                    <legend>Antigüedad</legend>

                    <div className='inputNumSection'>


                        {
                            inputsNumConvenios.map((p, i) => {
                                return (
                                    <div key={i}>
                                        <InputNumModal  nameInput={p.label} inputId={p.label} />
                                    </div >
                                )
                            })

                        }

                        <label style={{ marginLeft: "30px", marginRight: "30px", textAlign: "center", position: "relative", top: "7px", right: "20px" }}>años</label>

                        <div className='radioInputs' style={{ fontSize: "12px", padding: "10px" }}>
                            <input type="number" min={"0"} style={{ width: "50px", textAlign: "center" }} />
                            <input type="radio" name="cash" style={{ marginRight: "4px", marginLeft: "12px" }} />
                            <label style={{ marginRight: "15px", textAlign: "center" }} htmlFor="importe">Importe ($)</label>
                            <input type="radio" name="cash" style={{ marginRight: "4px" }} />
                            <label style={{textAlign: "center"}} htmlFor="porcentaje">Porcentaje (%)</label>

                        </div>


                    </div>

                    <div className='tableSectionConvenios'>
                        <TableReduccion column={column} />
                        <div className="btnSection">
                            <button className='btnPlus'><b>+</b></button>
                            <button className='btnMin'><b>-</b></button>
                        </div>
                    </div>

                </fieldset>


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

export default BodyConvenios