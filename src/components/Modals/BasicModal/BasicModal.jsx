// import React, { useEffect } from "react";
import TextArea from "../../Inputs/TextArea/TextArea";
import "./BasicModal.css";
import "../Modales.css";
import InputModal from "../../Inputs/InputsModal/InputModal";
import Dropdown from "../../Inputs/Dropdown/Dropdown";
import InputDate from "../../Inputs/InputDate/InputDate";
import InputNumModal from "../../Inputs/InputsModal/InputNumModal/InputNumModal";
import Checkbox from "../../Inputs/Checkbox/Checkbox";
import CheckboxNum from "../../Inputs/CheckboxNum/CheckboxNum";
import { useDispatch, useSelector } from "react-redux";
import { CANCEL_MODALS } from "../../../redux/types/modalesTypes";
import { useState, useEffect } from "react";
import axios from "axios";
import swal from "sweetalert";

const BasicModal = ({
  idModal,
  nameModal,
  nameOptionModal,
  array,
  textArea,
  placeholder,
  dropdown,
  inputDate,
  inputNum,
  inputNumName,
  relacion,
  nameRelacion,
  hasCheckbox,
  checkboxObject,
  checkboxNumObject,
  textAreaObject,
  hasCheckBoxNum,
  propArrayOp,
  propArrayId,
  action,
  opcionSelected,
  inputIdCompare,
  firstOptionCompare,
  secondOptionCompare,
  urlApi,
  idApi,
  bodyPet,
  dispatchAddAction,
  dispatchDeleteAction,
  dispatchPutAction,
  dispatchGetID,
  resp,
  onChange,
  valueCheckbox,
  valueCheckboxNum,
  valueNumCheck,
  valueObs,
  refetch,
  setRefetch,
  modalDataInputs,
  // setRes,
  // postFn
}) => {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false);

  const [toModify, setToModify] = useState(false);

  // function onSelect(action, payload) {
  //   dispatch(action(payload));
  //   dispatch(dispatchGetID(payload[propArrayId]))
  // }

  function onCancel(e, name) {
    setDisabled(false);
    dispatch({
      type: CANCEL_MODALS,
      payload: "",
    });
  }

  async function agregar() {
    setDisabled(!disabled);
  }
  function modificar() {
    setDisabled(!disabled);
    setToModify(!toModify);
  }

  const deleteOption = async (id) => {
    // le pasamos de param el idApi cuando ejecutamos la funcion en el boton delete
    try {
      await axios.delete(`${urlApi}/${id}`).then((res) => {
        dispatch(dispatchDeleteAction(id));
        swal({
          title: "Ok",
          text: "Eliminado con éxito",
          icon: "success",
        });
        setRefetch(!refetch); // resetea la lista
      });
    } catch (err) {
      swal({
        title: "Error",
        text: err,
        icon: "error",
      });
    }
  };

  async function aceptar(id) {
    try {
      if (!toModify) {
        await axios.post(urlApi, bodyPet).then((res) => {
          if (res.status === 200) {
            console.log(res);
            dispatch(dispatchAddAction(resp.modalDataInputs));
            setRefetch(!refetch); // resetea la lista

            return swal({
              title: "Ok",
              text: "Agregado con éxito",
              icon: "success",
            });
          }
        });
      } else {
        await axios
          .delete(`${urlApi}/${id}`) // elimina el valor seleccionado
          .then((res) => {
            axios
              .post(urlApi, bodyPet) // y agrega otro con otro nombre
              .then((res) => {
                if (res.status === 200) {
                  dispatch(dispatchPutAction(resp.modalDataInputs));
                  swal({
                    title: "Ok",
                    text: "Modificado con éxito",
                    icon: "success",
                  });
                  setRefetch(!refetch); // resetea la lista
                }
              });
          });
      }
    } catch (err) {
      swal({
        title: "Error",
        text: err.toString(),
        icon: "error",
      });
    }
  }



  const opcionesApi = array;

  return (
    <div>
      <div
        className="modal fade"
        id={idModal}
        tabIndex="-1"
        aria-labelledby={`${idModal}Label`}
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`${idModal}Label`}>
                {nameModal}
              </h1>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="llamadaApi">
                {relacion && (
                  <>
                    {" "}
                    <Dropdown nameDropdown={nameRelacion} /> <br />{" "}
                  </>
                )}

                <label htmlFor="data">Datos: </label>
                <br />
                <select
                  className="form-select row mt-1 selectOptions"
                  multiple
                  aria-label="multiple select example"
                  disabled={disabled}
                >
                  {array &&
                    array.map((op, i) => {
                      return (
                        <option
                          key={i}
                          value={op && op[propArrayId]}
                          // onClick={() => onSelect(action, op)}  // si se rompe el abm comentar esta linea y descomentar la de abajo
                          onClick={() =>
                            dispatch(dispatchGetID(op[propArrayId]))
                          }
                        >
                          {op && op[propArrayOp]}
                        </option>
                      );
                    })}
                </select>

                <div className="crudBtns">
                  <button
                    type="button"
                    className="btn btn-danger crudBtn"
                    onClick={agregar}
                  >
                    AGREGAR
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger crudBtn"
                    onClick={modificar}
                  >
                    MODIFICAR
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger crudBtn"
                    onClick={() => {
                      dispatch(setRefetch(!refetch));
                      deleteOption(idApi);
                    }}
                  >
                    ELIMINAR
                  </button>
                </div>
              </div>

              <div className="bodyInputs">
                {placeholder.map((p, i) => {
                  return (
                    <InputModal
                      key={i}
                      placeHolder={p.placeholder}
                      nameLabel={p.label}
                      inputId={p.idInput}
                      value={
                        p.idInput === inputIdCompare
                          ? firstOptionCompare
                          : secondOptionCompare
                      }
                      onChange={onChange}
                      // action={GET_ESTADOSCIVILES}
                      // opcionSelected={opcionSelected}
                    />
                  );
                })}

                {inputNum && <InputNumModal nameInput={inputNumName} />}

                {hasCheckbox &&
                  checkboxObject?.map((p, i) => {
                    // console.log(typeof(p.label))
                    return (
                      <Checkbox
                        key={i}
                        nameCheckbox={p.label}
                        inputId={p.idInput}
                        onChange={onChange}
                        value={valueCheckbox}
                      />
                    );
                  })}

                {hasCheckBoxNum &&
                  checkboxNumObject?.map((p, i) => {
                    // console.log(typeof(p.label))
                    return (
                      <CheckboxNum
                        key={i}
                        nameCheckbox={p.label}
                        nameInputNum={p.labelNum}
                        inputId={p.idInput}
                        inputNumId={p.idInputNum}
                        onChange={onChange}
                        valueCheck={valueCheckboxNum}
                        valueNum={valueNumCheck}
                      />
                    );
                  })}

                {dropdown && <Dropdown nameDropdown="Partida" />}

                {/* HAY ALGO DEL INPUTDATE QUE ESTA DESACOMODANDO LA ALINEACION, CAMBIAR */}
                {inputDate && <InputDate nameInput="Vencimiento" />}

                <br />
                {textArea &&
                  textAreaObject?.map((p, i) => {
                    return (
                      <TextArea
                        key={i}
                        inputName={p.label}
                        onChange={onChange}
                        inputId={p.idInput}
                        value={valueObs}
                      />
                    );
                  })}

                <hr />

                <div className="btnInputs">
                  <button
                    type="button"
                    className="btn btn-success btnAceptar"
                    onClick={() => aceptar(idApi)}
                  >
                    ACEPTAR
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={(e) => onCancel(e)}
                  >
                    CANCELAR
                  </button>
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                SALIR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicModal;
