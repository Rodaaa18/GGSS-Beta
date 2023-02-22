import React, { useState } from "react";
import InputModal from "../../Inputs/InputModal/InputModal";
import TextArea from "../../Inputs/TextArea/TextArea";
import ChildBarrios from "./ChildsModalPDLB/ChildBarrios";
import ChildDepartamentos from "./ChildsModalPDLB/ChildDepartamentos";
import ChildLocalidades from "./ChildsModalPDLB/ChildLocalidades";
import ChildProvincias from "./ChildsModalPDLB/ChildProvincias";
// import { Link } from 'react-router-dom';
// import ButtonCallModal from '../../ButtonCallModal/ButtonCallModal';
// import InputModal from '../../Inputs/InputModal/InputModal';
// import TextArea from '../../Inputs/TextArea/TextArea';

export const ModalProvinciasDptos = ({
  nameModal,
  setNameModal,
  nameModalProp,
  setTransition,
  nameButton,
  children,
  modalValues,
  onChangeValues,
  valueItemModal,
  setValueItemModal,
  handleClickClose,
  array,
  propsModal,
  optionsInputs,
  transition,
  functionAdd,
  urlApi,
  bodyPetition,
  bodyUpdate,
  idAModificar,
  actualizaCreaFormasdePago,
  actualizaModificarFormasdePago,
  functionDelete,
  actionActualizaDelete,
  usaEstados,
  idInputTextArea,
  setDisableModalButtons,
  disableModalButtons,
  setDisableMOdal,
  setModify,
}) => {
  const [ index, setIndex ] = useState(0);

  return (
    <div>
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
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" onClick={()=> setIndex(1)}>Provincias</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" onClick={()=> setIndex(2)}>Localidades</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" onClick={()=> setIndex(3)}>Departamentos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" onClick={()=> setIndex(4)}>Barrios</a>
          </li>
        </ul>
        <div className="row p-2 selectModal">
          {
            index === 1 &&  <ChildProvincias  
                              disableModalButtons={disableModalButtons}
                              array = {array}
                              propsModal={propsModal}
                              setValueItemModal={setValueItemModal}
                              setDisableMOdal={setDisableMOdal}
                              setDisableModalButtons={setDisableModalButtons}
                              setModify={setModify}
                              functionDelete={functionDelete}
                              urlApi={urlApi}
                              idAModificar={idAModificar}
                              actionActualizaDelete={actionActualizaDelete}
                              optionsInputs={optionsInputs}
                              usaEstados={usaEstados}
                              idInputTextArea={idInputTextArea}
                              onChangeValues={onChangeValues}
                              modalValues={modalValues}
                            />
          }
          {
            index === 2 && <ChildDepartamentos 
                            />
          }
          {
            index === 3 && <ChildLocalidades 
                            />
          }
          {
            index === 4 && <ChildBarrios 
                            />
          }
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
                                actualizaModificarFormasdePago
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
      </section>
    </div>
  );
};
