import axios from "axios";
import React, { useEffect, useState } from "react";
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
import { disabledInputs } from "../../redux/actions/fetchActions";
import "./Browser.css";
import {
  clearLicSelect,
  deleteDetLic,
} from "../../redux/actions/licenciasActions";
import { setRefetch } from "../../redux/actions/modalesActions";
import { recharge } from "../../redux/actions/domiciliosActions";

const Browser = ({ getEmpleados, disable, setDisable, setValueEmpl, responses, setResponses, setRefectch, refetch, deleteEmploye,setModify, agregar , setAgregar  }) => {
  const [checked, setChecked] = useState(false);
  const [ browser, setBrowser ] = useState(responses["browser"]);

  function onChangeValues(e, key){
    const newResponse = {...browser};
    newResponse[key] = e;
    setBrowser({
      ...newResponse
    });
};
  
  useEffect(() => {  
    setResponses({
      ...responses,
      browser
    });    
},[browser]);


  const url = "http://54.243.192.82/api/Empleados?records=100";

  const dispatch = useDispatch();

  const empleados = useSelector((state) => state.employeStates.empleados);
  const valueInputLegajo = useSelector(
    (state) => state.employeStates.formulario.inpurLegajoBrowser
  );
  const valueInputApellido = useSelector(
    (state) => state.employeStates.formulario.inputApellidoNombreBrowser
  );
  const empleadoUno = useSelector((state) => state.employeStates.employe);
  const deshabilitado = useSelector((state) => state.employeStates.disable);
  const recharged = useSelector((state)=> state.domiciliosStates.recharge);
  

 

  const detalleSeleccionado = useSelector(
    (state) => state.licenciasState.detalleSelect
  );

  function onSelect(e, name, idEmpleado) {
    dispatch(recharge(!recharged))
    getEmployeById(empleados, idEmpleado).then((res) => {
      
      dispatch(addOneEmploye(res[0]));
    });
  }
  function onEnter(name, esLegajo, legajo){
    dispatch(recharge(!recharged))
    if(!esLegajo){
      getEmpleados()
    }else{
      getEmployeByLegajo(empleados, legajo).then((res) => {
      
        dispatch(addOneEmploye(res[0]));
      });
    }
    
  }
  

  function habilitaEdit() {
    setValueEmpl(true)
    setRefectch(!refetch)
    dispatch(cleanEmploye())
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
      formDatosPersonales})
    setDisable(false);

  }

  function habilitaUpdate(e) {
    e.preventDefault();
    setModify(true);
    setValueEmpl(true)
    setRefectch(!refetch)
    if (empleadoUno.iDempleado && empleadoUno.iDempleado) {
      return setDisable(false);
    }
    swal({
      title: "Error",
      text: `Debe seleccionar un empleado`,
      icon: "error",
    });
  }
  function clearLegajo(){
    if(browser?.inputApellidoNombreBrowser)
    {
      const newResponse = {...browser};
      newResponse["inpurLegajoBrowser"] = "";
      let inputValue = document.querySelector("#inpurLegajoBrowser");
      inputValue.value = "";
      setBrowser({
        ...newResponse
      });
      setResponses({
        ...responses,
        browser
      });
    }
  }
  useEffect(()=>{
    clearLegajo();
  },[browser?.inputApellidoNombreBrowser])
  
  return (
    <>
      <div className="row gy-1 container-flex p-0 m-o ">
        {/* <InputForm nameInput="Legajo:" messageError="Solo puede contener números." placeHolder="N° Legajo" value={empData.legajo} inputId="legajo" onChange={onInputChange}/>
        <InputForm nameInput="Nombre:" messageError="Solo puede contener letras." placeHolder="Buscar Nombres" value={empData.apellido} inputId="nombreApellido"  onChange={onInputChange}/> */}
        <div className="row mt-1 p-0 m-0 ">
          <div className="container m-0 p-2">
            <input
              onChange={(e) => onChangeValues(e.target.value, "inpurLegajoBrowser")}
              value={browser?.inpurLegajoBrowser}
              className="form__grupo__input__browser "
              type="number"
              name="inpurLegajoBrowser"
              id="inpurLegajoBrowser"
              placeholder="Ingrese Legajo "
              disabled={!disable}
              onKeyDown={(e)=>{
                if(e.key === 'Enter'){
                  const legajo = e.target.value;
                  onEnter(null, true, legajo)
                }
              }}
              
            />

            <div className="row mt-1 m-0 p-0  w-100">
              <input
                onChange={(e) => onChangeValues(e.target.value, "inputApellidoNombreBrowser")}
                value={browser?.inputApellidoNombreBrowser}
                className="form__grupo__input__browser "
                type="text"
                name="inputApellidoNombreBrowser"
                id="inputApellidoNombreBrowser"
                placeholder="Ingrese Nombre "
                disabled={!disable}
                onKeyDown={(e)=>{
                  if(e.key === 'Enter'){
                    const name = e.target.value;
                    onEnter(name, false, null)
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
              onKeyDown={(e)=> onSelect(e,e.target.value.split(',')[0],Number(e.target.value.split(',')[1]))}
              onKeyUp={(e)=> onSelect(e,e.target.value.split(',')[0],Number(e.target.value.split(',')[1]))}
            >
              {empleados &&
                empleados?.map((emp, i) => {
                  return (
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
                disabled={!disable}
              >
                Modificar
              </button>
            </div>
            <div className="col">
              <button
                className={`btn btn-danger btn-sm d-flex justify-content-center m-1 align-items- newClass`}
                onClick={() => deleteEmploye(empleadoUno.iDempleado)}
                disabled={!disable}
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Browser;