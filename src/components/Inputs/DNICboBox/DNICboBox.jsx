import React, { useEffect, useState } from "react";
import "./DNICboBox.css";
const DNICboBox = ({  messageError, placeHolder, array, value , disabled, idInput, nameLabel, onChange, selectedId, propArray, action, validateNumbersDNI,propArrayOp,propArrayId, idSelected, obligatorio}) => {


  const [valor, setValor] = useState("");
  
  
  useEffect(()=>{
    setValor(value);
  },[value])


  return (
    <div className="formulario__grupo">
      <div className="">
        <label className="formulario-label-DNI mt-2 ml-4">{nameLabel}</label>
      </div>
      <div className="">
        <select disabled={disabled} defaultValue="" className={obligatorio ? "formulario-input-DNI  ml-0 px-0 obligatorio" : "formulario-input-DNI ml-0 px-0"} id={selectedId} name={selectedId} onChange={(e)=> onChange(e.target.value, selectedId)}>
          <option value="">Seleccionar</option>
          <option value="0">(Sin Definir)</option>
          {array && array.map((op, i) => {


            return (Number(idSelected) === op[propArrayId] ? <option selected key={i} value={op[propArrayId]}>{op[propArrayOp]}</option> : <option key={i} value={op[propArrayId]}>{op[propArrayOp]}</option>);
          })}
        </select>
      </div>
      <div className="ml-3">
        <input
          type="text"
          id={idInput}
          maxLength="8"
          name={idInput}
          className={obligatorio && !valor ? "formulario-input-DNI  mx-1 obligatorio" : "formulario-input-DNI  mx-1"}
          placeholder={placeHolder}
          value={ valor}
          disabled={disabled}
          onChange={(e)=> onChange(e.target.value,idInput)}
          onKeyPress={(e)=>validateNumbersDNI(e)}
        ></input>
      </div>
      <div className="form__grupo__icon">
        <i className="fas fa-times-circle"></i>
      </div>
      <div className="form__grupo__error">
        <p>{messageError}</p>
      </div>
    </div>
  );
};

export default DNICboBox;
