import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import "./Buttons.css";

const ButtonCallModal = ({ idModal, nameButton, useNavbar, useButton ,disabled, disableButton, className}) => {
  const [actualClass, setActualClass] = useState("");

  useEffect(()=>{
    usedClasses(useNavbar,useButton, disableButton);
  },[])

  function usedClasses(useNavbar, useButton, disableButton){
      if(useNavbar){
        return setActualClass("dropdown-item btnCallModal");
      }else if(useButton){
        return setActualClass("tercero btn btn-validacion btn-outline-danger btn-sm ml-2 btnCallModal");
      }else if(disableButton){
        return setActualClass(className)
      }
      else{
        return setActualClass("btn btn-danger btnCallModal");
      }
  }
  return (
    <>
      <button type="button" className={actualClass}  data-bs-toggle="modal" data-bs-target={`#${idModal}`} disabled={disabled}>
        {nameButton.toString()}
      </button>
    </>
  )
}

export default ButtonCallModal;