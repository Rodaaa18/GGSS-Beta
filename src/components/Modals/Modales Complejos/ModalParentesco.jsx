import React from "react";
import InputModal from "../../Inputs/InputModal/InputModal";
import TextArea from "../../Inputs/TextArea/TextArea";

export const ModalParentesco = ({
  nameModalProp,
  disabled,
  array,
  propsModal,
  optionsInputs,
  transition,
  setTransition,
  handleClickClose,
  functionAdd,
  functionUpdate,
  functionDelete,
  valueItemModal,
  setValueItemModal,
  onChangeValues,
  modalValues,
  urlApi,
  bodyPetition,
  bodyUpdate,
  setModify,
  modify,
  idAModificar,
  disableModal,
  setDisableMOdal,
  actionActualizaDelete,
  actualizaCreaFormasdePago,
  actualizaModificarFormasdePago,
  idInputTextArea,
  disableModalButtons,
  setDisableModalButtons,
  usaEstados,
  usaCheck,
  nameInputCheck,
  nameInputCheckTwo,
  checked,
  nameLabelValorDeduccion,
  actualizaDeleteParentesco,
  actualizaCreaParentesco,
  actualizaModificarParentesco,
}) => {
  return (
    <section
      className={transition ? "transitionClassUp" : " transitionClassneDone "}
    >
      <div className="cortina"></div>
      <div className="modalBodyClass p-2">
        <div className="row p-2">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <p className="h3">
              <ins>{propsModal.nameModal}</ins>
            </p>
            <button
              className="btn btn-outline-danger text-white fs-6 btn-md buttonModal border border-white"
              onClick={() => {
                handleClickClose(nameModalProp);
                setTransition(false);
              }}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        </div>
        <div className="row p-2 selectModal">
          <div className="col-xl-6 border border-2 p-2 ">
            <select
              className="form-select selectMenus p-0 m-0"
              multiple
              aria-label="multiple select example"
              disabled={disableModalButtons}
            >
              {array &&
                array.map((op, i) => {
                  return (
                    <option
                      key={i}
                      value={op && op[propsModal.propArrayId]}
                      onClick={() => setValueItemModal(op)}
                      // si se rompe el abm comentar esta linea y descomentar la de abajo
                      //onClick={() => dispatch(dispatchGetID(op[propArrayId]))}
                    >
                      {op && op[propsModal.propArrayOp]}
                    </option>
                  );
                })}
            </select>
            <div className="d-flex flex-row justify-content-evenly align-items-center mt-1 ">
              <button
                className="btn btn-dark text-light"
                disabled={disableModalButtons}
                onClick={() => {
                  setDisableMOdal(false);
                  setDisableModalButtons(true);
                }}
              >
                Agregar
              </button>
              <button
                className="btn btn-dark text-light"
                disabled={disableModalButtons}
                onClick={() => {
                  setModify(true);
                  setDisableMOdal(false);
                  setDisableModalButtons(true);
                }}
              >
                Modificar
              </button>
              <button
                className="btn btn-dark"
                disabled={disableModalButtons}
                onClick={() => {
                  functionDelete(
                    urlApi,
                    idAModificar,
                    actionActualizaDelete,
                    actualizaDeleteParentesco
                  );
                  setDisableModalButtons(true);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="d-flex flex-column justify-content-start align-items-center">
              {optionsInputs.map((option, index) => {
                return (
                  <InputModal
                    disableModal={!disableModalButtons}
                    key={index}
                    placeholder={option.placeholder}
                    nameLabel={option.label}
                    idInput={option.idInput}
                    onChangeValues={onChangeValues}
                    value={
                      option.idInput === "masculino"
                        ? modalValues?.masculino
                        : modalValues?.femenino
                    }
                  />
                );
              })}
            </div>
            <div class="form-check p-0">
              <label class="form-check-label" for="flexCheckDefault">
                {nameInputCheck}
              </label>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center ">
              <input
                className="form-check-input "
                type="checkbox"
                id="flexCheckChecked"
                checked={checked}
                disabled={disabled}
              />
            </div>
            <div class="form-check p-0">
              <label class="form-check-label" for="flexCheckDefault">
                {nameInputCheckTwo}
              </label>
            </div>
            <div className="d-flex flex-row justify-content-start align-items-center ">
              <input
                className="form-check-input "
                type="checkbox"
                id="flexCheckChecked"
                checked={checked}
                disabled={disabled}
              />
            </div>
            <div className="">
              <label for="inputPassword3" className="col-sm-4 col-form-label">
                {nameLabelValorDeduccion}
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="inputModal"
                  // id={idInputValorDeducciones}
                  // name={idInput}
                  // placeholder={placeholder}
                  // value={value}
                  // onChange={(e) => onChange(e.target.value, inputId)} // ON CHANGE NUEVO PARA LA NUEVA FUNCION (NO ANDA)
                  // onChange={(e) => onChangeValues(e.target.value, idInput)}
                  // disabled={disableModal}
                />
              </div>
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              disabled={!disableModalButtons}
            >
              {usaEstados && (
                <TextArea
                  disableModal={!disableModalButtons}
                  idInput={idInputTextArea}
                  onChange={onChangeValues}
                  characterLimit={255}
                ></TextArea>
              )}
            </div>
            <div className="d-flex flex-row-reverse w-100 ">
              <button
                className="btn btn-dark m-1"
                disabled={!disableModalButtons}
                onClick={() => {
                  functionAdd(
                    urlApi,
                    bodyPetition,
                    bodyUpdate,
                    idAModificar,
                    actualizaCreaFormasdePago,
                    actualizaModificarFormasdePago,
                    actualizaCreaParentesco,
                    actualizaModificarParentesco
                  );
                  setDisableModalButtons(false);
                }}
              >
                Aceptar
              </button>
              <button
                className="btn btn-dark m-1"
                disabled={!disableModalButtons}
                onClick={() => {
                  setDisableModalButtons(false);
                }}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
