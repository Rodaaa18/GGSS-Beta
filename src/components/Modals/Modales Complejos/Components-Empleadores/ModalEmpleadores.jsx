import React from "react";
import InputCbo from "../../../Inputs/InputCbo/InputCbo";
import InputFormPiso from "../../../Inputs/InputForm/InputFormPiso";
import InputModal from "../../../Inputs/InputModal/InputModal";
import InputNumero from "../../../Inputs/InputNumero/InputNumero";
import TextArea from "../../../Inputs/TextArea/TextArea";
import TablaDomicilios from "../../../Tables/TablaDomicilios";
import { CheckDate } from "../../CheckDate";
import { InputCboChild } from "../../InputCboChild";
import { InputCboEmp } from "./InputCbo/InputCboEmp";
import InputFormPisoEmp from "./InputFormPisoEmp/InputFormPisoEmp";
import InputLabel from "./InputLabel/InputLabel";
import "./ModalEmpleadores.css";

export const ModalEmpleadores = ({
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
  columns,
  refetch,
  setRefectch,
}) => {
  return (
    <section
      className={transition ? "transitionClassUp" : " transitionClassneDone "}
    >
      <div className="cortinaEmpleadores"></div>
      <div className="modalBodyClassEmpleadores p-2">
        <div className="row p-2">
          <div className="d-flex flex-row justify-content-between align-items-center">
            {/* Nombre Modal */}
            <p className="h3">
              <ins>{propsModal.nameModal}</ins>
            </p>
            {/* Clic "X" Cerrar */}
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
        {/* Select y Botones */}
        <div className="row p-2 selectModalEmpleadores">
          <div className="col-xl-6 border border-2 p-2 ">
            <select
              className="form-select selectMenusEmpleadores p-0 m-0"
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
                  functionDelete(urlApi, idAModificar, actionActualizaDelete);
                  setDisableModalButtons(true);
                }}
              >
                Eliminar
              </button>
            </div>
          </div>

          {/* Inputs y Labels*/}
          <div className="col-xl-6">
            <div
            //  className="d-flex flex-column justify-content-start align-items-center"
            >
              {optionsInputs.map((option, index) => {
                return (
                  <InputLabel
                    disableModal={!disableModalButtons}
                    key={index}
                    placeholder={option.placeholder}
                    nameLabel="Empleadores"
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
            <div
              // className="d-flex flex-column justify-content-start align-items-center"
              disabled={!disableModalButtons}
            >
              {optionsInputs.map((option, index) => {
                return (
                  <InputCboEmp
                    disabled={!disableModalButtons}
                    placeholder={option.placeholder}
                    nameLabel="Alicuota"
                    idInput={option.idInput}
                  />
                );
              })}
            </div>
            <div
              // className="d-flex flex-column justify-content-start align-items-center"
              disabled={!disableModalButtons}
            >
              {optionsInputs.map((option, index) => {
                return (
                  <InputCboEmp
                    disabled={!disableModalButtons}
                    placeholder={option.placeholder}
                    nameLabel="Banco"
                    idInput={option.idInput}
                  />
                );
              })}
            </div>
            <div
            //  className="d-flex flex-column justify-content-start align-items-center"
            >
              <InputLabel
                nameLabel="Cuit"
                disableModal={!disableModalButtons}
              />
            </div>
            <div
              // className="d-flex flex-column justify-content-start align-items-center"
              disabled={!disableModalButtons}
            >
              {optionsInputs.map((option, index) => {
                return (
                  <InputCboEmp
                    disabled={!disableModalButtons}
                    placeholder={option.placeholder}
                    nameLabel="Partida"
                    idInput={option.idInput}
                  />
                );
              })}
            </div>
            {/* Area Domicilios */}
            <section className="border">
              {" "}
              Domicilios
              <div className="row">
                <div className="">
                  <input
                    type="checkbox"
                    name="inputPredeterminado"
                    // checked={!checked}
                    // value ={formDomicilios?.inputPredeterminado ? formDomicilios?.inputPredeterminado : false  }
                    id="inputPredeterminado"
                    // onChange={(e)=>handleChangePredeterminado(e, "inputPredeterminado" )}
                  />
                  <label className="ml-2" htmlFor="predeterminado">
                    Predeterminado
                  </label>
                </div>
                {
                  //#endregion
                }
                <div className="row">
                  <div className="d-flex flex-column col-xl-7  inputCalle">
                    <InputCboEmp
                      // clasess={inputClassCalleDomicilios}
                      // value={formDomicilios?.inputCalleDomicilios ? formDomicilios?.inputCalleDomicilios : empleadoUno.calle}
                      // action={ADD_DOMICILIOS}
                      sexo=""
                      nameButton="..."
                      nameLabel="Calle"
                      // array={generalStateData.calles !== null && generalStateData.calles !== "" ? generalStateData.calles : ["calle", "calle"]}
                      propArrayOp="calle"
                      propArrayOpFem="calle"
                      // propArray={empleadoDomicilio !== undefined && empleadoDomicilio !== null ? empleadoDomicilio.idCalle : null}
                      // idSelected={formDomicilios?.inputCalleDomicilios ? formDomicilios?.inputCalleDomicilios : empleadoUno.calle}
                      masculinos=""
                      femeninos=""
                      display={false}
                      idModal="calles"
                      disabled={disabled}
                      nameInput="inputCalleDomicilios"
                      idInput="inputCalleDomicilios"
                      onChange={onChangeValues}
                      valueId="idCalle"
                      obligatorio={true}
                    />
                  </div>
                  <div className="d-flex flex-column col-xl-4 inputNumeroEmpleadores">
                    <InputNumero
                      nameInput="inputNumCalle"
                      // action={ADD_DOMICILIOS}
                      // array={paises !== null ? paises : []}
                      // generalState = {domicilios}
                      // setGeneralState = {setDomicilios}
                      placeHolder="N° Calle"
                      nameCheck="Fijar"
                      defaultChecked=""
                      display={true}
                      //value={numCalleSelected !== undefined && numCalleSelected !== null ? numCalleSelected.toString() : domiciliosState.inputNumCalle}
                      disabled={disabled}
                      idInput="inputNumCalle"
                      // nameLabel="N°"
                      onChange={onChangeValues}
                      // inputValueState={formDomicilios?.inputNumCalle ? formDomicilios?.inputNumCalle : empleadoUno.nroCalle}
                    />
                  </div>
                  <div className="row">
                    <div>
                       <InputFormPisoEmp
                        // value={
                        // formDomicilios?.inputPisoCalle ? formDomicilios?.inputPisoCalle : empleadoUno.pisoCalle
                        // }
                        nameInput="inputPisoCalle"
                        idInput="inputPisoCalle"
                        messageError="Solo puede contener números."
                        placeHolder="Piso Dpto"
                        disabled={disabled}
                        // generalState={setDomicilios}
                        // action={ADD_DOMICILIOS}
                        onChange={onChangeValues}
                        nameLabel="Piso/Dpto/
                          Ofic/Torre"
                        numbers={true}
                      />
                    </div>
                    <div 
                    className="d-flex flex-column ml-2 inputBarrioEmp"
                    >
                    <InputCboEmp
                        // value={
                        //   formDomicilios?.inputLocalidadesDomicilios ? formDomicilios?.inputLocalidadesDomicilios : empleadoUno.localidad
                        // }
                        // action={ADD_DOMICILIOS}
                        sexo=""
                        nameButton="..."
                        nameLabel="Barrio"
                        // array={arrayLocalidades !== undefined && arrayLocalidades !== null ? arrayLocalidades : []}
                        propArrayOp="localidad"
                        propArrayOpFem="localidad"
                        masculinos=""
                        femeninos=""
                        // idSelected={formDomicilios?.inputDepartamentosDomicilios ? formDomicilios?.inputDepartamentosDomicilios : empleadoUno.localidad}
                        // display={false}
                        idModal="pdlb"
                        disabled={disabled}
                        nameInput="inputLocalidadesDomicilios"
                        idInput="inputLocalidadesDomicilios"
                        onChange={onChangeValues}
                        // provinciaAction = {selectedOptionBarrio}
                        valueId="idLocalidad"
                        obligatorio={true}
                        placeHolder="N° Calle"
                        nameCheck="Fijar"
                        defaultChecked=""
                        display={true}
                      />
                    </div>
                    <div>
                      <InputCbo
                        // value={
                        //   formDomicilios?.inputLocalidadesDomicilios ? formDomicilios?.inputLocalidadesDomicilios : empleadoUno.localidad
                        // }
                        // action={ADD_DOMICILIOS}
                        sexo=""
                        nameButton="..."
                        nameLabel="Localidad"
                        // array={arrayLocalidades !== undefined && arrayLocalidades !== null ? arrayLocalidades : []}
                        propArrayOp="localidad"
                        propArrayOpFem="localidad"
                        masculinos=""
                        femeninos=""
                        // idSelected={formDomicilios?.inputDepartamentosDomicilios ? formDomicilios?.inputDepartamentosDomicilios : empleadoUno.localidad}
                        display={false}
                        idModal="pdlb"
                        disabled={disabled}
                        nameInput="inputLocalidadesDomicilios"
                        idInput="inputLocalidadesDomicilios"
                        onChange={onChangeValues}
                        // provinciaAction = {selectedOptionBarrio}
                        valueId="idLocalidad"
                        obligatorio={true}
                      />
                    </div>
                    <div>
                      <InputCbo
                        // value={
                        //   formDomicilios?.inputDepartamentosDomicilios ? formDomicilios?.inputDepartamentosDomicilios : empleadoUno.departamento
                        // }
                        // action={ADD_DOMICILIOS}
                        sexo=""
                        nameButton="..."
                        nameLabel="Departamento"
                        // array={ arrayDepartamentos !== null &&  arrayDepartamentos !== undefined  ? arrayDepartamentos : []}
                        propArrayOp="departamento"
                        propArrayOpFem="departamento"
                        //propArray={provinciaDepartamento !== undefined && provinciaDepartamento !== null ? provinciaDepartamento.toString() : null}
                        masculinos=""
                        femeninos=""
                        // idSelected={formDomicilios?.inputDepartamentosDomicilios ? formDomicilios?.inputDepartamentosDomicilios : empleadoUno.departamento}
                        display={false}
                        idModal="pdlb"
                        disabled={disabled}
                        nameInput="inputDepartamentosDomicilios"
                        idInput="inputDepartamentosDomicilios"
                        onChange={onChangeValues}
                        // provinciaAction = {selectedOptionDpto}
                        valueId="idDepartamento"
                        obligatorio={true}
                      />
                    </div>
                    <div>
                      <InputCbo
                        // value={
                        //   formDomicilios?.inputProvinciaDomicilios ? formDomicilios?.inputProvinciaDomicilios : empleadoUno.provincia
                        // }
                        // action={ADD_DOMICILIOS}
                        sexo=""
                        nameButton="..."
                        nameLabel="Provincia"
                        // array={generalStateData.provincias !== undefined && generalStateData.provincias !== ""  ? generalStateData.provincias : []}
                        propArrayOp="provincia"
                        propArrayOpFem="provincia"
                        masculinos=""
                        femeninos=""
                        // idSelected={formDomicilios?.inputProvinciaDomicilios ? formDomicilios?.inputProvinciaDomicilios : empleadoUno.provincia}
                        display={false}
                        idModal="pdlb"
                        disabled={disabled}
                        nameInput="inputProvinciaDomicilios"
                        idInput="inputProvinciaDomicilios"
                        onChange={onChangeValues}
                        // provinciaAction = {selectedOption}
                        valueId="idProvincia"
                        obligatorio={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div
              // className="d-flex flex-column justify-content-center align-items-center"
              disabled={!disableModalButtons}
            >
              ACA VA LA TABLA DOMICILIOS
              {/* <TablaDomicilios 
                    // columns={columns} 
                    // empleadoSelect={empleadoUno && empleadoUno} 
                    // value={ empleadoDomicilio && empleadoDomicilio }
                      // refetch={refetch}
                      // setRefectch={setRefectch}
                  /> */}
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
      </div>
    </section>
  );
};
