import React from 'react'
import BasicModal from '../Modals/BasicModal'

const ButtonCallModal = ({setNameModal, nameModal, closeModal, nameButton, children, setTransition, nameModalProp, esBoton}) => {
    
    const newState = {...nameModal};
    const handleClick=()=>{
        newState[nameModalProp] = true;
        setNameModal(newState);
        setTransition(true);
    }
    
  return (
    <div>
        <button onClick={()=>{handleClick()}} className={esBoton ? "btn btn-danger" : "dropdown-item colorFont"}>
            {nameButton}
        </button>
        <BasicModal title="Modal Prueba" isOpen={nameModal[nameModalProp]}  setTransition={setTransition}>
            {children}
        </BasicModal>
    </div>
  )
}

export default ButtonCallModal