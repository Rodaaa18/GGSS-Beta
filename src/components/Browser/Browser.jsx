//#region imports---------------------------------------
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  getEmployeById,
  getEmployeByLegajo,
  getEmployeByName,
} from "../../services/fetchAPI";
import { useDispatch, useSelector } from "react-redux";
import ButtonLarge from "../Buttons/ButtonLarge";
import "./Browser.css";
import {
  addOneEmploye,
  cleanEmploye,
  disableFunctions,
  getEmployes,
} from "../../redux/actions/employeActions";
import { GET_INPUT_VALU_BROWSER } from "../../redux/types/employeTypes";
import swal from "sweetalert";
import { actualizaCreateEstadosCiviles, actualizaDelete, actualizaUpdateEstadosCiviles, disabledInputs } from "../../redux/actions/fetchActions";
import "./Browser.css";
import {
  clearLicSelect,
  deleteDetLic,
} from "../../redux/actions/licenciasActions";
import { setRefetch } from "../../redux/actions/modalesActions";
import {
  domicilioSelected,
  recharge,
} from "../../redux/actions/domiciliosActions";
import ButtonCallReincorporacion from "../ButtonCallReincorporacion/ButtonCallReincorporacion";
import ChildModalReincorporacion from "../Modals/ChildModalReincorporacion";
import BasicModal from "../Modals/BasicModal";
import { propsModal } from "../Modals/props";
import { objectEstadosCiviles } from "../Navbar/Objects";

//#endregion imports------------------------------------

const Browser = ({
  getEmpleados,
  disable,
  setDisable,
  setValueEmpl,
  responses,
  setResponses,
  setRefectch,
  refetch,
  deleteEmploye,
  // setModify,
  agregar,
  setAgregar,
  renderButtons,
  referencias,
}) => {
  const [nameModal, setNameModal] = useState({ showModal: false });
  const [transition, setTransition] = useState(false);
  const [modalValues, setModalValues] = useState({});
  const [valueItemModal, setValueItemModal] = useState({});
  const [modify, setModify] = useState(false);
  const [disableModal, setDisableMOdal] = useState(true);
  const [disableModalButtons, setDisableModalButtons] = useState(false);
  const [reload, setReload] = useState(false);

  const [checked, setChecked] = useState(false);
  const [browser, setBrowser] = useState(responses["browser"]);
  const empleadoUno = useSelector((state) => state.employeStates.employe);
  const estados = useSelector((state) => state.generalState.estados);
  const parSueldos = useSelector((state) => state.generalState.parSueldos);
  const idEstadoSelec = empleadoUno && empleadoUno.idEstado;
  const estadoSEleccionado =
    estados && estados.find((est) => est.idEstado === idEstadoSelec);
 

    function onChangeValues(e, key, isModal) {
      const newResponse = isModal ? { ...modalValues } : { ...browser };
    
      if (isModal) {
        newResponse[key] = e;
      } else {
        if (key === "inpurLegajoBrowser") {
          if (browser?.inputApellidoNombreBrowser !== "" && e !== "") {
            newResponse.inputApellidoNombreBrowser = "";
          }
          newResponse.inpurLegajoBrowser = e;
        } else if (key === "inputApellidoNombreBrowser") {
          if (browser?.inpurLegajoBrowser !== "" && e !== "") {
            newResponse.inpurLegajoBrowser = "";
          }
          newResponse.inputApellidoNombreBrowser = e;
        }
        newResponse[key] = e;
      }
    
      if (isModal) {
        setModalValues({
          ...newResponse,
        });
      } else {
        setBrowser({
          ...newResponse,
        });
      }
    }
    


  //   function onChangeValues(e, key) {
  //     const newResponse = { ...modalValues };
  //     newResponse[key] = e;
  //     setModalValues({
  //       ...newResponse,
  //     });
  //   }
 
 
  //   function onChangeValues(e, key) {
  //   const newResponse = { ...browser };
  //   if (key === "inpurLegajoBrowser") {
  //     if (browser?.inputApellidoNombreBrowser !== "" && e !== "") {
  //       newResponse.inputApellidoNombreBrowser = "";
  //     }
  //     newResponse.inpurLegajoBrowser = e;
  //   } else if (key === "inputApellidoNombreBrowser") {
  //     if (browser?.inpurLegajoBrowser !== "" && e !== "") {
  //       newResponse.inpurLegajoBrowser = "";
  //     }
  //     newResponse.inputApellidoNombreBrowser = e;
  //   }
  //   newResponse[key] = e;
  //   setBrowser({
  //     ...newResponse,
  //   });
  // }

  useEffect(() => {
    setResponses({
      ...responses,
      browser,
    });
  }, [browser]);

  const url = "http://54.243.192.82/api/Empleados?records=100";

  const dispatch = useDispatch();

  const empleados = useSelector((state) => state.employeStates.empleados);
  const valueInputLegajo = useSelector(
    (state) => state.employeStates.formulario.inpurLegajoBrowser
  );
  const valueInputApellido = useSelector(
    (state) => state.employeStates.formulario.inputApellidoNombreBrowser
  );
  const deshabilitado = useSelector((state) => state.employeStates.disable);
  const recharged = useSelector((state) => state.domiciliosStates.recharge);

  const detalleSeleccionado = useSelector(
    (state) => state.licenciasState.detalleSelect
  );

  function onSelect(e, name, idEmpleado) {
    dispatch(recharge(!recharged));
    getEmployeById(empleados, idEmpleado).then((res) => {
      dispatch(addOneEmploye(res[0]));
    });
  }
  function onEnter(name, esLegajo, legajo) {
    dispatch(recharge(!recharged));
    if (!esLegajo) {
      getEmpleados();
    } else {
      getEmployeByLegajo(empleados, legajo).then((res) => {
        dispatch(addOneEmploye(res[0]));
      });
    }
  }

  function habilitaEdit() {
    setValueEmpl(true);
    setRefectch(!refetch);
    dispatch(cleanEmploye());
    setAgregar(true);

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );

    let formData = { ...responses.formDatosPersonales };

    const inputsArray = Object.entries(formData);

    const formDatosPersonale = inputsArray.map(([key]) => [key, ""]);

    const formDatosPersonales = Object.fromEntries(formDatosPersonale);
    setResponses({
      ...responses,
      formDatosPersonales,
    });
    setDisable(false);
  }

  function habilitaUpdate(e) {
    e.preventDefault();
    dispatch(domicilioSelected(""));
    setModify(true);
    setValueEmpl(true);
    setRefectch(!refetch);
    if (empleadoUno.iDempleado && empleadoUno.iDempleado) {
      return setDisable(false);
    }
    swal({
      title: "Error",
      text: `Debe seleccionar un empleado`,
      icon: "error",
    });
  }
  console.log(
    estadoSEleccionado?.idEstado ===
      (parSueldos && parSueldos[0]?.estadoBajaEmpleado)
  );
  console.log(parSueldos);
  /* useEffect(()=>{
    clearLegajo();
  },[browser?.inputApellidoNombreBrowser, browser?.inpurLegajoBrowser]) */



//#region    Seccion MODAL ----------------------------------------------------
const estadoCivilRef = useRef();

const urlEstadosCiviles = "http://54.243.192.82/api/EstadosCiviles";


  async function sendModalData(
    url,
    body,
    bodyUpdate,
    id,
    actualizaCreate,
    actualizaUpdate,
    valueIdUrl,
    diferentUrl
  ) {
    if (modify) {
      try {
        await axios
          .put(`${url}/${diferentUrl ? valueIdUrl : id}`, bodyUpdate)
          .then((res) => {
            if (res.status === 200) {
              setModify(false);
              setDisableMOdal(true);
              dispatch(actualizaUpdate(bodyUpdate));
              dispatch(setRefetch(refetch));
              setReload(!reload);
              return swal({
                title: "Ok",
                text: "Item actualizado con éxito",
                icon: "success",
              });
            }
            return;
          });
      } catch (err) {
        setModify(false);
        setDisableMOdal(true);
        return swal({
          title: "Error",
          text: "Error al actualizar el item" + `${err}`,
          icon: "error",
        });
      }
      return;
    }
    try {
      await axios.post(url, body).then((res) => {
        if (res.status === 200) {
          setDisableMOdal(true);
          dispatch(actualizaCreate(body));
          dispatch(setRefetch(refetch));
          setReload(!reload);
          return swal({
            title: "Ok",
            text: "Item guardado con éxito",
            icon: "success",
          });
        }
      });
    } catch (err) {
      setDisableMOdal(true);
      return swal({
        title: "Error",
        text: "Error al guardar el item " + `${err}`,
        icon: "error",
      });
    }
  }
  async function deleteItemModal(url, id, actualizaDelete) {
    swal({
      title: "Desea eliminar el item?",
      text: "Si confirma el item será borrado de la Base de Datos",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (willDelete) => {
      if (willDelete) {
        try {
          await axios.delete(`${url}/${id}`).then((res) => {
            if (res.status === 200) {
              dispatch(actualizaDelete(id));
              dispatch(setRefetch(!refetch));
              setDisableMOdal(true);
              setReload(!reload);
              return swal({
                title: "Ok",
                text: "Item eliminado con éxito",
                icon: "success",
              });
            }
            return;
          });
        } catch (err) {
          setDisableMOdal(true);
          return swal({
            title: "Error",
            text: "Error al eliminar el item" + `${err}`,
            icon: "error",
          });
        }
      } else {
        swal("Puede seguir operando");
      }
    });
  }

  const handleClickClose = (nameModalProp) => {
    let newState = { ...nameModal };

    newState[nameModalProp] = false;
    setNameModal(newState);
    setTransition(true);
  };

   //Estados Civiles
   const estadosCivilesValue = useSelector(
    (state) => state.generalState.estadosCiviles
  );

   //Estados Civiles
   const idEstadoCivil =
   (estadosCivilesValue &&
     estadosCivilesValue[estadosCivilesValue.length - 1] !== undefined &&
     estadosCivilesValue[estadosCivilesValue.length - 1].idEstadoCivil) + 1;
 const bodyEstadosCiviles = {
   idEstadoCivil: idEstadoCivil,
   masculino: modalValues?.masculino,
   femenino: modalValues?.femenino,
 };
 const bodyUpdateEstadosCiviles = {
   idEstadoCivil: valueItemModal?.idEstadoCivil,
   masculino: modalValues?.masculino,
   femenino: modalValues?.femenino,
 };

//#endregion   Seccion MODAL ----------------------------------------------------

  return (
    <>
      <div className="row gy-1 container-flex p-0 m-o ">
        {/* <InputForm nameInput="Legajo:" messageError="Solo puede contener números." placeHolder="N° Legajo" value={empData.legajo} inputId="legajo" onChange={onInputChange}/>
        <InputForm nameInput="Nombre:" messageError="Solo puede contener letras." placeHolder="Buscar Nombres" value={empData.apellido} inputId="nombreApellido"  onChange={onInputChange}/> */}
        <div className="row mt-1 p-0 m-0 ">
          <div className="container m-0 p-2">
            <input
              onChange={(e) =>
                onChangeValues(e.target.value, "inpurLegajoBrowser")
              }
              value={browser?.inpurLegajoBrowser}
              className="form__grupo__input__browser "
              type="number"
              name="inpurLegajoBrowser"
              id="inpurLegajoBrowser"
              placeholder="Ingrese Legajo "
              disabled={!disable}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  const legajo = e.target.value;
                  onEnter(null, true, legajo);
                }
              }}
            />

            <div className="row mt-1 m-0 p-0  w-100">
              <input
                onChange={(e) =>
                  onChangeValues(e.target.value, "inputApellidoNombreBrowser")
                }
                value={browser?.inputApellidoNombreBrowser}
                className="form__grupo__input__browser "
                type="text"
                name="inputApellidoNombreBrowser"
                id="inputApellidoNombreBrowser"
                placeholder="Ingrese Nombre "
                disabled={!disable}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const name = e.target.value;
                    onEnter(name, false, null);
                  }
                }}
              />
            </div>
            {/* <div className="wor mt-1 m-0 p-0 w-100">
              <label htmlFor="ordered">Ordenar:</label>
              <input type="checkbox" name="ordered" id="ordered" onChange={(e) => { setChecked(!checked); onChangeValues(e.target.checked, "ordered")}} checked={checked} />
            </div> */}
            <select
              defaultValue={[]}
              className="form-select  mt-1 selectMenu "
              multiple
              aria-label="multiple select example"
              disabled={!disable}
              onKeyDown={(e) =>
                onSelect(
                  e,
                  e.target.value.split(",")[0],
                  Number(e.target.value.split(",")[1])
                )
              }
              onKeyUp={(e) =>
                onSelect(
                  e,
                  e.target.value.split(",")[0],
                  Number(e.target.value.split(",")[1])
                )
              }
            >
              {empleados &&
                empleados?.map((emp, i) => {
                  return emp.idEstado ===
                    (parSueldos && parSueldos[0]?.estadoBajaEmpleado) ? (
                    <option
                      className="empleadoBaja"
                      key={i}
                      onClick={(e) => onSelect(e, emp.apellido, emp.iDempleado)}
                      value={`${emp.apellido},${emp.iDempleado}`}
                      apellido={emp.apellido && emp.apellido}
                      idEmpleado={emp.iDempleado && emp.iDempleado}
                    >{`${emp.apellido}, ${emp.nombres} (*)`}</option>
                  ) : (
                    <option
                      key={i}
                      onClick={(e) => onSelect(e, emp.apellido, emp.iDempleado)}
                      value={`${emp.apellido},${emp.iDempleado}`}
                      apellido={emp.apellido && emp.apellido}
                      idEmpleado={emp.iDempleado && emp.iDempleado}
                    >{`${emp.apellido}, ${emp.nombres}`}</option>
                  );
                })}
            </select>
          </div>
        </div>

        <div className="container ">
          <div className="row align-items-start">
            {renderButtons === 0 && (
              <>
                <div className="col">
                  <button
                    className={`btn btn-danger btn-sm d-flex justify-content-center m-1 align-items- newClass`}
                    onClick={habilitaEdit}
                    disabled={!disable}
                  >
                    Agregar
                  </button>
                </div>
                <div className="col">
                  <button
                    className={`btn btn-danger btn-sm d-flex justify-content-center m-1 align-items- newClass`}
                    onClick={(e) => habilitaUpdate(e)}
                    disabled={
                      estadoSEleccionado?.idEstado ===
                      (parSueldos && parSueldos[0]?.estadoBajaEmpleado)
                        ? true
                        : !disable
                    }
                  >
                    Modificar
                  </button>
                </div>
                <div className="col">
                  <button
                    className={`btn btn-danger btn-sm d-flex justify-content-center m-1 align-items- newClass`}
                    onClick={() => deleteEmploye(empleadoUno.iDempleado)}
                    disabled={
                      estadoSEleccionado?.idEstado ===
                      (parSueldos && parSueldos[0]?.estadoBajaEmpleado)
                        ? true
                        : !disable
                    }
                  >
                    Eliminar
                  </button>
                </div>
              </>
            )}
            <div>
              {renderButtons === 1 && (
                <div className="d-flex flex-row justify-content-center align-items-center w-60 btn btn-danger btn-sm ">
                  <ButtonCallReincorporacion
                  //  parameterRef={referencias.estadoCivilRef}
                   nameModal={nameModal}
                   setNameModal={setNameModal}
                   setTransition={setTransition}
                  closeModal={() => setNameModal({ showModal: false })}
                  nameButton="Reincorporación"
                  nameModalProp="showModal"
                  >
                    <ChildModalReincorporacion
                     modalValues={modalValues}
                     onChangeValues={onChangeValues}
                     valueItemModal={valueItemModal}
                     setValueItemModal={setValueItemModal}
                     nameModalProp="estadosCiviles"
                     handleClickClose={handleClickClose}
                     setTransition={setTransition}
                     array={estadosCivilesValue && estadosCivilesValue}
                     nameModal="Estados Civiles"
                     propsModal={propsModal}
                     optionsInputs={objectEstadosCiviles}
                     transition={transition}
                     functionAdd={sendModalData}
                     urlApi={urlEstadosCiviles}
                     bodyPetition={bodyEstadosCiviles}
                     bodyUpdate={bodyUpdateEstadosCiviles}
                     modify={modify}
                     setModify={setModify}
                     idAModificar={valueItemModal?.idEstadoCivil}
                     functionDelete={deleteItemModal}
                     disableModal={disableModal}
                     setDisableMOdal={setDisableMOdal}
                     actionActualizaDelete={actualizaDelete}
                     actualizaCreate={actualizaCreateEstadosCiviles}
                     actualizaUpdate={actualizaUpdateEstadosCiviles}
                     disableModalButtons={disableModalButtons}
                     setDisableModalButtons={setDisableModalButtons}
                     usaEstados={false}
                    />
                  </ButtonCallReincorporacion>
                </div>
              )}
            </div>
            {renderButtons === 2 && (
              <div className="d-flex flex-row justify-content-center align-items-center w-100">
                <button className="btn btn-danger btn-sm">
                  Baja de un Empleado
                </button>
              </div>
            )}
            {renderButtons === 3 && (
              <div className="d-flex flex-row justify-content-center align-items-center w-100">
                <button className="btn btn-danger btn-sm">
                  Cambio de Categoría
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Browser;
