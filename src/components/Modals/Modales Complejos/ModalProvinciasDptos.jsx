import { reject } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
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
  const [index, setIndex] = useState(0);
  const generalStateData = useSelector((state)=> state.generalState)
  const provinciaSelected = useSelector((state)=> state.modalState.provSelect);
  const departamentoSelected = useSelector((state)=> state.modalState.dptoSelect);
  const localidadSelected = useSelector((state)=> state.modalState.localSelect);
  const [ arrayList, setArrayList ] = useState({
  });
  

  function updateList(array, tipo){
    setArrayList({...arrayList,  array})
  }

  useEffect(()=>{
    new Promise((resolve, reject)=>{
      resolve(updateList(arrayDepartamentos, "departamentos"))
    }
    ).then(()=>{
      new Promise((resolve, reject)=>{
        resolve(updateList(arrayLocalidades, "localidades"))
    }).then(()=> updateList(arrayBarrios, "barrios"))})
  },[index])

  console.log(arrayList)


  const arrayDepartamentos = provinciaSelected && generalStateData.departamentos !== undefined && generalStateData.departamentos !== "" ? generalStateData.departamentos.filter((departamento) => departamento.idProvincia === provinciaSelected.idProvincia) : null;


  const arrayLocalidades = departamentoSelected && departamentoSelected && generalStateData.localidades !== undefined && generalStateData.localidades !== "" ? generalStateData.localidades.filter((localidad) => localidad.idDepartamento === departamentoSelected.idDepartamento) : null;


  const arrayBarrios = localidadSelected  && localidadSelected &&  generalStateData.barrios !== undefined && generalStateData.barrios !== "" ? generalStateData.barrios.filter((barrio) => barrio.idLocalidad === localidadSelected.idLocalidad) : null;


    console.log(provinciaSelected)
    console.log(arrayBarrios)

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
                <ins>{propsModal[0].nameModal}</ins>
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
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => setIndex(0)}
              >
                Provincias
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => setIndex(1)}
              >
                Departamentos
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => setIndex(2)}
              >
                Localidades
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => setIndex(3)}
              >
                Barrios
              </a>
            </li>
          </ul>
          <div className="row p-2 selectModal">
            {index === 0 && (
              <ChildProvincias
                /* value={
                  formDomicilios?.inputProvinciaDomicilios ? formDomicilios?.inputProvinciaDomicilios : empleadoUno.provincia
                }*/
                array={generalStateData.provincias !== undefined && generalStateData.provincias !== ""  ? generalStateData.provincias : []}
                disableModalButtons={disableModalButtons} 
                // array={array}
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
            )}
            {index === 1 && (
              <ChildDepartamentos
               /*  value={
                  formDomicilios?.inputDepartamentosDomicilios ? formDomicilios?.inputDepartamentosDomicilios : empleadoUno.departamento
                }
                array={ arrayDepartamentos !== null &&  arrayDepartamentos !== undefined  ? arrayDepartamentos : []} */
                // array={array}
                array={ index === 1 ? arrayDepartamentos : []}
                disableModalButtons={disableModalButtons}
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
            )}
            {index === 2 && (
              <ChildLocalidades
                /* value={
                  formDomicilios?.inputLocalidadesDomicilios ? formDomicilios?.inputLocalidadesDomicilios : empleadoUno.localidad
                }
                array={arrayLocalidades !== undefined && arrayLocalidades !== null ? arrayLocalidades : []} */
                // array={array}
                array={index === 2 ? arrayLocalidades : []}
                disableModalButtons={disableModalButtons}
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
            )}
            {index === 3 && (
              <ChildBarrios
                /* value={
                  formDomicilios?.inputBarriosDomicilios ? formDomicilios?.inputBarriosDomicilios : empleadoUno.barrio
                }
                array={arrayBarrios !== undefined && arrayBarrios !== null ? arrayBarrios : []} */
                // array={array}
                disableModalButtons={disableModalButtons}
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
                array={ index === 3 ? arrayBarrios : []}
              />
            )}
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
