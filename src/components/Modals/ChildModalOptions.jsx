import { classesTxtAreaModal } from "../../classes/classes";
import InputModal from "../Inputs/InputModal/InputModal";
import TextArea from "../Inputs/TextArea/TextArea";
import "./BasicModal.css";
import { CheckDate } from "./CheckDate";
import { InputCboChild } from "./InputCboChild";
const ChildModalOptions = ({
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
  actualizaDeleteFormasdePago,
  actualizaCreaFormasdePago,
  actualizaModificarFormasdePago,
  actualizaDeleteCargos,
  actualizaCreaCargos,
  actualizaModificarCargos,
  actualizaDeleteTareas,
  actualizaCreaTareas,
  actualizaModificarTareas,
  actualizaDeleteModContratacion,
  actualizaCreaModContratacion,
  actualizaModificarModContratacion,
  idInputTextArea,
  disableModalButtons,
  setDisableModalButtons,
  usaEstados,
  usaCheck,
  actualizaCreate,
  actualizaUpdate,
  checked
}) => {
  return (
    <section
      className={transition ? "transitionClassUp" : " transitionClassneDone "}
    >
      <div className="cortina"></div>
      <div className="modalBodyClass">
        <div className="row p-2 titleBg">
          <div className="d-flex flex-row justify-content-between align-items-center">
            <p className="h3">
              <ins>{propsModal.nameModal}</ins>
            </p>
            <button
              className="btn btn-outline-danger text-white fs-6 btn-md buttonModal border border-dark"
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
                    actualizaDeleteFormasdePago,
                    actualizaDeleteCargos,
                    actualizaDeleteTareas,
                    actualizaDeleteModContratacion,
                    );
                  setDisableModalButtons(true);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="bodyInputsOptions">
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
            <div className="col-xl">
              <div
                className="d-flex flex-column justify-content-start align-items-center"
                disabled={!disableModalButtons}
              >
                {/* {optionsInputs.map((option, index) => {
                  return (
                    <InputCboChild
                      disabled={!disableModalButtons}
                      placeholder={option.placeholder}
                      nameLabel={option.label}
                      idInput={option.idInput}
                    />
                  );
                })} */}
              </div>
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              disabled={!disableModalButtons}
            >
              {usaCheck && (
                <CheckDate
                  disableModal={!disableModalButtons}
                  idInputCheck="fechaVto"
                  nameInput="Vencimiento"
                  onChange={onChangeValues}
                  checked={checked}
                ></CheckDate>
              )}
            </div>
            <div
              className="d-flex flex-column justify-content-center align-items-center"
              disabled={!disableModalButtons}
            >
              {usaEstados && (
                <TextArea
                clasess={classesTxtAreaModal}
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
                    actualizaCreate, 
                    actualizaUpdate
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

export default ChildModalOptions;
