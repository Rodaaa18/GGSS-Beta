import React from 'react'
import InputModal from '../../../Inputs/InputModal/InputModal';
import TextArea from '../../../Inputs/TextArea/TextArea';

const ChildLocalidades = ({
  disableModalButtons,array,propsModal,setValueItemModal, setDisableMOdal,setDisableModalButtons ,setModify,functionDelete, urlApi, idAModificar, actionActualizaDelete, optionsInputs,onChangeValues,modalValues,usaEstados,idInputTextArea
}) => {
  return (
        <>
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
                    } }
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
                    } }
                  >
                    Modificar
                  </button>
                  <button
                    className="btn btn-dark"
                    disabled={disableModalButtons}
                    onClick={() => {
                      functionDelete(urlApi, idAModificar, actionActualizaDelete);
                      setDisableModalButtons(true);
                    } }
                  >
                    Eliminar
                  </button>
                </div>
              </div><div className="col-xl-6">
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
                          value={option.idInput === "masculino"
                            ? modalValues?.masculino
                            : modalValues?.femenino} />
                      );
                    })}
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
                </div>
    </>
  )
}

export default ChildLocalidades