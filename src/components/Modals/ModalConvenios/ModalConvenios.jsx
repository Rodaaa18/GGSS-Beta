import React from 'react'
import { useState, useEffect } from "react"
import './ModalConvenios.css'
import '../Modales.css'
import BodyConvenios from './BodyConvenios'
import BodyCategorias from './BodyCategorias'

const ModalConvenios = ({ idModal, nameModal, array, placeholder, inputsNumConvenios, placeholderCategorias, inputsNumCategorias, column }) => {

    const [convenios, setConvenios] = useState()
    const [categorias, setCategorias] = useState()

    useEffect(() => {
        setConvenios(true)
    }, [])


    const handleConvenios = () => {
        setConvenios(true)
        setCategorias(false)
    }

    const handleCategorias = () => {
        setConvenios(false)
        setCategorias(true)
    }


    return (
        <div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id={idModal} tabIndex="-1" aria-labelledby={`${idModal}Label`} aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id={`${idModal}Label`}>
                                {nameModal}
                            </h1>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="pdlbBtns">
                            <button className="pdlbBtn" onClick={handleConvenios}>CONVENIOS</button>
                            <button className="pdlbBtn" onClick={handleCategorias}>CATEGORIAS</button>
                        </div>


                        <div className="modal-body">

                            {
                                convenios &&
                                <BodyConvenios placeholder={placeholder} inputsNumConvenios={inputsNumConvenios} column={column} />
                            }

                            {
                                categorias &&
                                <BodyCategorias placeholderCategorias={placeholderCategorias} inputsNumCategorias={inputsNumCategorias} />
                            }

                        </div>

                        <div className="modal-footer" style={{display: "flex", justifyContent: "space-evenly"}}>
                            {
                                categorias &&
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                                    JERARQUÍA...
                                </button>
                            }


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

export default ModalConvenios