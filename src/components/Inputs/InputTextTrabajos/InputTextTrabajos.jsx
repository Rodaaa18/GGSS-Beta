import React from "react";
import Buttons from "../../Buttons/Buttons";
import "./InputTextTrabajos.css";

const InputTextTrabajos = ({
  nameLabel,
  inputId,
  onChange,
  value,
  action,
  onSend,
  onDelete,
  id,
  disable,
  type,
  cancelar,
  aceptar,
}) => {
  const icon = type === "add" ? "./icons/add.svg" : "./icons/delete.svg";

  return (
    <>
      <div className="col-xl-6 d-flex flex-row justify-content-start align-items-center mt-2">
        <label htmlFor={inputId}>{nameLabel}</label>
        <input
          disabled={disable}
          type="text"
          name={inputId}
          id={inputId}
          onChange={(e) => onChange(e.target.value, inputId)}
          value={value && value}
          className="textTrabajos formulario-input-TextTrabajo textTrabAnte"
        />
      </div>
      <div className="col-xl-4 d-flex flex-row justify-content-start align-items-center mt-2 ">
        <button
          disabled={disable}
          className="btn btn-outline-success btn-sm buttonAceptarCancelar"
          onClick={onSend}
        >
         {
            aceptar
              ? 
              <img src={"./icons/add.svg"} 
              alt={type}
              />
            : cancelar
            }
        </button>
        <button
          disabled={disable}
          className="btn btn-outline-danger btn-sm buttonAceptarCancelar"
          onClick={() => onDelete(id)}
        >
           {
            cancelar
              ? 
              <img src={icon} 
             alt={type}
              />
            : aceptar
            }
        </button>
      </div>
    </>
  );
};

export default InputTextTrabajos;
