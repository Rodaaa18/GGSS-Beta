import React from 'react'
import { useState, useEffect } from "react"
import Barrios from './SubmodalesPDLB/Barrios'
import BarriosFooter from './SubmodalesPDLB/BarriosFooter'
import Departamentos from './SubmodalesPDLB/Departamentos'
import DepartamentosFooter from './SubmodalesPDLB/DepartamentosFooter'
import Localidades from './SubmodalesPDLB/Localidades'
import LocalidadesFooter from './SubmodalesPDLB/LocalidadesFooter'
import Provincias from './SubmodalesPDLB/Provincias'
import ProvinciasFooter from './SubmodalesPDLB/ProvinciasFooter'
import './ModalPDLB.css'
import { objectProvincias, objectDeptos, objectLocalidades, objectBarrios } from '../../Navbar/Objects'

const ModalPDLB = ({idModal, nameModal, array,aDepartamentos,aProvincias,aLocalidades,aBarrios}) => {

    const [provincias, setProvincias] = useState()
    const [localidades, setLocalidades] = useState()
    const [departamentos, setDepartamentos] = useState()
    const [barrios, setBarrios] = useState()

    useEffect(() => {
        setProvincias(true)
    }, []) // SIEMPRE QUE ENTREMOS AL MODAL DE PROVINCIAS-LOCALIDADES-BARRIOS-DEPARTAMENTOS VA A INICIAR CON LA SOLAPA DE PROVINCIAS.
    

    const handleProvincias = () => {
      setProvincias(true)
      setLocalidades(false)
      setDepartamentos(false)
      setBarrios(false)
    }

    const handleLocalidades = () => {
        setLocalidades(true)
        setProvincias(false)
        setDepartamentos(false)
        setBarrios(false)
    }

    const handleDepartamentos = () => {
        setDepartamentos(true)
        setProvincias(false)
        setLocalidades(false)
        setBarrios(false)
    }

    const handleBarrios = () => {
        setBarrios(true)
        setProvincias(false)
        setDepartamentos(false)
        setLocalidades(false)
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
                            <button className="pdlbBtn" onClick={handleProvincias}>PROVINCIAS</button>
                            <button className="pdlbBtn" onClick={handleDepartamentos}>DEPARTAMENTOS</button>
                            <button className="pdlbBtn" onClick={handleLocalidades}>LOCALIDADES</button>
                            <button className="pdlbBtn" onClick={handleBarrios}>BARRIOS</button>
                        </div>


                        <div className="modal-body">

                            {
                                provincias && 
                                <Provincias aProvincias={aProvincias} placeholder={objectProvincias}/>
                            }

                            {
                                departamentos &&
                                <Departamentos aDepartamentos={aDepartamentos} placeholder={objectDeptos}/>
                            }

                            { 
                                localidades &&
                                <Localidades aLocalidades={aLocalidades} placeholder={objectLocalidades}/>
                            }

                            
                            {
                                barrios &&
                                <Barrios aBarrios={aBarrios} placeholder={objectBarrios}/>
                            }

                            


                        </div>

                        {/* POR AHORA RENDERIZO LOS BODY Y LOS FOOTER POR SEPARADO PORQUE SINO SE ROMPE TODO */}

                            {
                                provincias &&
                                <ProvinciasFooter/>
                            }

                            { 
                                localidades &&
                                <LocalidadesFooter/>
                            }

                            {
                                departamentos &&
                                <DepartamentosFooter/>
                            }

                            {
                                barrios &&
                                <BarriosFooter/>
                            }
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default ModalPDLB