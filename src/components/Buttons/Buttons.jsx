import React from "react";

const Buttons = ({
  type,
  onClick,
  cancelar,
  aceptar,
  disabled,
  functionSend,
  functionDelete,
  idElimiar,
  refetch,
  setRefectch,
}) => {
  const icon = type === "add" ? "./icons/add.svg" : "./icons/delete.svg";

  return (
    <>
      <div className="d-flex flex-row">
        <div className="form__grupo__icons d-flex flex-row-reverse w-100 gap-1">
          <button
            className="btn border border-danger"
            disabled={disabled}
            onClick={(e) => functionDelete(idElimiar)}
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

          <button
            className="btn border border-success"
            disabled={disabled}
            onClick={functionSend}
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
        </div>
      </div>
    </>
  );
};

export default Buttons;