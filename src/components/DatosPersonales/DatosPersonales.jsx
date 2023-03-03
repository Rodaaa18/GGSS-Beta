//#region Imports

import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import DNICboBox from "../Inputs/DNICboBox/DNICboBox";
import InputButton from "../Inputs/InputButton/InputButton";
import InputCbo from "../Inputs/InputCbo/InputCbo";
import InputDate from "../Inputs/InputDate/InputDate";
import InputFile from "../Inputs/InputFile/InputFile";
import InputForm from "../Inputs/InputForm/InputForm";
import InputRadio from "../Inputs/InputRadio/InputRadio";
import "./DatosPersonales.css";
import Domicilios from "../Domicilios/Domicilios";
import generateCuil from "./funcGenerarCuil.js";
import TextArea from "../Inputs/TextArea/TextArea";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DATOS_PERSONALES } from "../../redux/types/datosPersonalesTypes";
import axios from "axios";
import {  classesTxtAreaPersonales, inputButtonClasessCUIL } from "../../classes/classes";
import { disableFunctions } from "../../redux/actions/employeActions";
import EmployeData from "../EmployeData/EmployeData";
import InputButtonCUIL from "../Inputs/InputButtonCUIL/InputButtonCUIL";

//#endregion

const DatosPersonales = ({ tabIndex ,handleTabChange, responses, setResponses, cancelar, image, disableEstado, disable, empleados, valueempl, domiciliosEmpleados, setRefectch, refetch,ImageSelectedPrevious, setImageSelectedPrevious}) => {
  //#region ---------------------------------------------------------ONCHANGE-HANDLER

  const [ formDatosPersonales, setFormDatosPersonales ] = useState(responses["formDatosPersonales"]);

  const dispatch = useDispatch();

  
  //#region ------------------------------------------------------REDUX
  const empleadoUno = useSelector((state)=> state.employeStates.employe);
  const datosPersonalesState = useSelector((state)=> state.generalState);
  const numeradores = useSelector((state)=> state.generalState.numeradores);
  
 
  
  //#endregion
  function onChangeValues(e, key){
      const newResponse = {...formDatosPersonales};
      newResponse[key] = e;
      setFormDatosPersonales({
        ...newResponse
      });
  };
  

  useEffect(() => {  
      setResponses({
        ...responses,
        formDatosPersonales
      });    
  },[formDatosPersonales]);
 
 


   function getNumeradorId(tabla){
    return numeradores && numeradores.filter((num)=>{
      return (num.tabla === tabla)
    })
  }

  
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  
  //#region ------------------------------------------------------------------------------VALIDACIONES

  const validateNumbers = (e) => {
    if (!/[0-9]/.test(e.key)) {
      swal({
        title: "Error",
        text: "Debe ingresar sólo números",
        icon: "error",
      });
      e.preventDefault();
    }
  };
  const validateNumbersDNI = (e) => {
    if (!/^([0-9]?){8}$/.test(e.key)) {
      swal({
        title: "¡Error!",
        text: `Ingrese número de DNI válido`,
        icon: "error",
      });
      e.preventDefault();
    }
  };
  const validateTexts = (e) => {
    if (!/^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(e.key)) {
      swal({
        title: "Error",
        text: "Debe ingresar sólo letras",
        icon: "error",
      });
      e.preventDefault();
    }
  };
  const validateEmails = (e) => {
    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(e.key)) {
      swal({
        title: "Error",
        text: "Debe ingresar un email válido",
        icon: "error",
      });
      e.preventDefault();
    }
  };

  
  

  function cancelButton(){
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
    if(formDatosPersonales && formDatosPersonales){
      const inputsArray = Object.entries(formDatosPersonales);

      const clearInputs = inputsArray.map(([key])=> [key, '']);

      const inputsJson = Object.fromEntries(clearInputs);

      setFormDatosPersonales(inputsJson);
    }
    dispatch(disableFunctions(false));
     
  }

  
  return (
      //#region Menú Principal

    <>
      <EmployeData responses={responses} image={image} /><div className="Lateral-Derecho">
        <div className="accordion" id="accordionExample" onClick={handleTabChange(0)}>
          <div className="accordion-item">
            <h4 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
              >
                Datos Personales
              </button>
            </h4>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <section className="container">
                  <div className="row">
                    <div className="formulario__grupo"></div>
                    <form action="" className="form__datos__personales ">
                      <div className="row row-cols-12">
                        <div className="segunda__columna col-xl-4 col-lg-4 col-md-4">
                          {
                            //#endregion
                          }
                          <InputForm
                            value={valueempl ? formDatosPersonales?.numLegajo : empleadoUno.legajo}
                          
                            idInput="numLegajo"
                            messageError="Solo puede contener números."
                            placeHolder="N° Legajo"
                            disabled={disable}
                            onChange={onChangeValues}
                            nameLabel="Legajo"
                            validateNumbers={validateNumbers}
                            numbers={true}
                            cancelar={cancelar} 
                            obligatorio ={true}
                            />
                          <InputForm
                            value={valueempl ? formDatosPersonales?.apellidoInput  : empleadoUno.apellido}
                           
                            idInput="apellidoInput"
                            messageError="Solo puede contener letras."
                            placeHolder="Ingrese Apellidos"
                            disabled={disable}
                            onChange={onChangeValues}
                            nameLabel="Apellidos"
                            validateLetters={validateTexts}
                            numbers={false} 
                            obligatorio ={true}
                            />
                          <InputForm
                            value={valueempl ? formDatosPersonales?.nombresInput  : empleadoUno.nombres}
                           
                            action={ADD_DATOS_PERSONALES}
                            idInput="nombresInput"
                            messageError="Solo puede contener letras."
                            placeHolder="Ingrese Nombres"
                            disabled={disable}
                            onChange={onChangeValues}
                            nameLabel="Nombres"
                            validateLetters={validateTexts}
                            numbers={false} 
                            obligatorio ={true}
                            />
                          <DNICboBox
                            value={valueempl ? formDatosPersonales?.documentoInput  : empleadoUno.nroDocumento}
                          
                            action={ADD_DATOS_PERSONALES}
                            idInput="documentoInput"
                            messageError="Solo puede contener números, sin puntos."
                            placeHolder="23456789"
                            array={datosPersonalesState.tiposDocumento && datosPersonalesState.tiposDocumento !== "" ? datosPersonalesState.tiposDocumento : ["no entro"]}
                            propArrayOp="tipoDocumento"
                            propArrayId="iDtipoDocumento"
                            disabled={disable}
                            nameLabel="D.N.I."
                            onChange={onChangeValues}
                            selectedId="dniSelected"
                            idSelected={formDatosPersonales?.dniSelected && formDatosPersonales?.dniSelected  !== "" ? formDatosPersonales?.dniSelected && formDatosPersonales?.dniSelected : empleadoUno.iDtipoDocumento}
                         
                            validateNumbersDNI={validateNumbersDNI}
                            obligatorio ={true}
                            />
                       {/*    <InputButton
                            value={valueempl ? formDatosPersonales?.inputCuil  : empleadoUno.cuil}
                            console.log("🚀 ~ file: DatosPersonales.jsx:232 ~ DatosPersonales ~ empleadoUno", empleadoUno)
                            action={ADD_DATOS_PERSONALES}
                            id="inputCuil"
                            clasess={inputButtonClasessCUIL}
                            nameInput="inputCuil"
                            nameLabel="C.U.I.L"
                            nameButton="Generar"
                            placeholder="##-########-#"
                            idModal="modalCuil"
                            disabled={disable}
                            onChange={onChangeValues}
                            datosPersonalesValue={formDatosPersonales?.inputCuil && formDatosPersonales?.inputCuil}
                            funcionCuil={generateCuil}
                            nroDocumento={formDatosPersonales?.documentoInput && formDatosPersonales?.documentoInput}
                            genre={formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo}
                            usaCuil={true}
                            swal={swal} 
                            obligatorio ={true}
                            /> */}
                            <InputButtonCUIL
                             value={valueempl ? formDatosPersonales?.inputCuil  : empleadoUno.cuil}
                       
                             action={ADD_DATOS_PERSONALES}
                             idInput="inputCuil"
                             nameInput="inputCuil"
                            nameLabel="C.U.I.L"
                            nameButton="Generar"
                            placeholder="##-########-#"
                             disabled={disable}
                             datosPersonalesValue={formDatosPersonales?.inputCuil && formDatosPersonales?.inputCuil}
                             onChange={onChangeValues}
                             validateLetters={validateTexts}
                             nroDocumento={formDatosPersonales?.documentoInput && formDatosPersonales?.documentoInput}
                            genre={formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo}
                            usaCuil={true}
                            funcionCuil={generateCuil}
                            swal={swal} 
                             numbers={false} 
                             obligatorio ={true}
                             formDatosPersonales ={formDatosPersonales}
                             setFormDatosPersonales={setFormDatosPersonales}
                            />
                          <InputForm
                            value={valueempl ? formDatosPersonales?.telefonoInput  : empleadoUno.telFijo}
                           
                            action={ADD_DATOS_PERSONALES}
                            nameInput="telefonoInput"
                            idInput="telefonoInput"
                            messageError="Solo puede contener números."
                            placeHolder="11352458965"
                            disabled={disable}
                            onChange={onChangeValues}
                            nameLabel="Telefono"
                            datosPersonalesValue={formDatosPersonales?.telefonoInput && formDatosPersonales?.telefonoInput}
                            validateNumbers={validateNumbers}
                            numbers={true} 
                            
                            />
                          <InputCbo
                            value={empleadoUno && empleadoUno
                          
                              
                              ? empleadoUno.iDestadoCivil
                              : null}
                           
                            action={ADD_DATOS_PERSONALES}
                            sexo={empleadoUno && empleadoUno ? empleadoUno.sexo : formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo}
                           
                           
                            nameButton="..."
                            nameLabel="Estado Civil"
                            array={datosPersonalesState.estadosCiviles && datosPersonalesState.estadosCiviles && datosPersonalesState.estadosCiviles !== "" ? datosPersonalesState.estadosCiviles : ["no entro"]}
                            propArrayOp="masculino"
                            propArrayOpFem="femenino"
                            idSelected={formDatosPersonales?.estadoCivilInput ? formDatosPersonales?.estadoCivilInput : empleadoUno.iDestadoCivil}
                           
                            valueId="idEstadoCivil"
                            propArray="Casado"
                            display={false}
                            idModal="EstadoCivil"
                            disabled={(formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo === "") ? disableEstado : disable}
                            nameInput="estadoCivilInput"
                            idInput="estadoCivilInput"
                            onChange={onChangeValues} 
                            obligatorio ={true}
                            />
                          <InputCbo
                            value={empleadoUno && empleadoUno
                            
                             
                              ? empleadoUno.idNacionalidad
                              : null}
                              
                            action={ADD_DATOS_PERSONALES}
                            sexo={empleadoUno && empleadoUno ? empleadoUno.sexo : formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo}
                       
                        
                            nameButton="..."
                            nameLabel="Nacionalidad"
                            array={datosPersonalesState.paises !== undefined && datosPersonalesState.paises !== "" ? datosPersonalesState.paises : ["Nacionalidad"]}
                            propArrayOp="nacionalidad_masc"
                            propArrayOpFem="nacionalidad_fem"
                            idSelected={formDatosPersonales?.nacionalidadesInput ? formDatosPersonales?.nacionalidadesInput : empleadoUno.iDnacionalidad}
                           
                            valueId="idPais"
                            propArray="Casado"
                            display={false}
                            idModal="nacionalidades"
                            disabled={disable}
                            idInput="nacionalidadesInput"
                            onChange={onChangeValues} 
                            obligatorio ={true}
                            />
                        </div>
                        <div className="tercera_columna col-xl-4 col-lg-4 col-md-4">
                          <InputCbo
                            value={empleadoUno !== undefined
                             
                              ? empleadoUno.idEstado
                              : null}
                            
                            action={ADD_DATOS_PERSONALES}
                            sexo=""
                            nameButton="..."
                            nameLabel="Estado"
                            array={datosPersonalesState.estados !== undefined && datosPersonalesState.estados !== "" ? datosPersonalesState.estados : []}
                            propArrayOp="nombreEstado"
                            propArrayOpFem="nombreEstado"
                            idSelected={formDatosPersonales?.estadosEmpleados ? formDatosPersonales?.estadosEmpleados : empleadoUno.idEstado}
                         
                            valueId="idEstado"
                            masculinos=""
                            femeninos=""
                            onChange={onChangeValues}
                            display={false}
                            idInput="estadosEmpleados"
                            idModal="estadosEmpleados"
                            disabled={disable} 
                            obligatorio ={true}
                            />
                          <InputRadio
                            value={formDatosPersonales?.inputSexo ? formDatosPersonales?.inputSexo : empleadoUno.sexo}
                      
                            action={ADD_DATOS_PERSONALES}
                            nameFirst="Masculino"
                            nameSecond="Femenino"
                            nameLabel="Sexo"
                            idInput="inputSexo"
                            disabled={disable}
                            onChange={onChangeValues}
                            datosPersonalesValue={formDatosPersonales?.inputSexo && formDatosPersonales?.inputSexo} 
                            obligatorio ={true}
                            nameThird="Otro"
                            />
                          <InputDate
                            value={formDatosPersonales?.inputDateNac ? formDatosPersonales?.inputDateNac : empleadoUno?.fechaNacimiento?.substring(0, empleadoUno.fechaNacimiento.length -9)}
                      
                            
                            action={ADD_DATOS_PERSONALES}
                            nameInput="Nacimiento"
                            disabled={disable}
                            idInput="inputDateNac"
                            onChange={onChangeValues} />
                          <InputForm
                            value={formDatosPersonales?.movil ? formDatosPersonales?.movil : empleadoUno.movil}
                  
                            action={ADD_DATOS_PERSONALES}
                            nameInput="movil"
                            idInput="movil"
                            messageError="Solo puede contener números."
                            placeHolder="Ingrese su celular"
                            disabled={disable}
                            nameLabel="Celular"
                            onChange={onChangeValues}
                            validateNumbers={validateNumbers}
                            numbers={true} />
                          <InputForm
                            value={formDatosPersonales?.email ? formDatosPersonales?.email : empleadoUno.email}
                 
                            action={ADD_DATOS_PERSONALES}
                            nameInput="email"
                            idInput="email"
                            messageError="Ingrese un email válido."
                            placeHolder="correo@correo.com.ar"
                            disabled={disable}
                            nameLabel="Email"
                            onChange={onChangeValues}
                            validateEmails={validateEmails}
                            numbers={false}
                            email={true} />
                          <InputCbo
                            value={formDatosPersonales?.inputSexo ? formDatosPersonales?.inputSexo : empleadoUno.idPaisdeOrigen}
                  
                            action={ADD_DATOS_PERSONALES}
                            sexo=""
                            nameButton="..."
                            nameLabel="País O"
                            array={datosPersonalesState.paises !== undefined && datosPersonalesState.paises !== "" ? datosPersonalesState.paises : []}
                            propArrayOp="nombrePais"
                            propArrayOpFem="nombrePais"
                            idSelected={formDatosPersonales?.paisOrigenInput ? formDatosPersonales?.paisOrigenInput : empleadoUno.idPaisOrigen}
                           
                            valueId="idPais"
                            masculinos=""
                            femeninos=""
                            display={false}
                            idModal="paisOrigenInput"
                            disabled={disable}
                            idInput="paisOrigenInput"
                            onChange={onChangeValues} 
                            obligatorio ={true}
                            />
                          <InputCbo
                            value={formDatosPersonales?.estudiosInput ? formDatosPersonales?.estudiosInput : empleadoUno.idEstudios}
                     
                            action={ADD_DATOS_PERSONALES}
                            sexo=""
                            nameButton="..."
                            nameLabel="Estudios"
                            array={datosPersonalesState.estudios !== undefined && datosPersonalesState.estudios !== "" ? datosPersonalesState.estudios : []}
                            propArrayOp="estudiosNivel"
                            propArrayOpFem="estudiosNivel"
                            idSelected={formDatosPersonales?.estudiosInput ? formDatosPersonales?.estudiosInput : empleadoUno.iDestudios}
                            
                            valueId="iDestudios"
                            masculinos=""
                            femeninos=""
                            display={false}
                            idModal="Estudios"
                            disabled={disable}
                            idInput="estudiosInput"
                            onChange={onChangeValues}
                            obligatorio ={true}
                            />
                          <TextArea
                            inputName="Observaciones"
                            idInput="observacionesEstudios"
                            maxLength="255"
                            value={formDatosPersonales?.observacionesEstudios ? formDatosPersonales?.observacionesEstudios : empleadoUno.obsEstudios}
                            clasess={classesTxtAreaPersonales}
                            disabled={disable}
                            action={ADD_DATOS_PERSONALES}
                            onChange={onChangeValues} />
                        </div>



                        <div className="col-xl-3 col-lg-3 col-md-3 colImagen">
                          <InputFile
                            ImageSelectedPrevious={ImageSelectedPrevious}
                            setImageSelectedPrevious={setImageSelectedPrevious}
                            inputName="Arrastre su imagen"
                            disabled={disable}
                            imagen={empleadoUno?.imagen}
                            onChange={onChangeValues}
                            idInput="inputImage"
                            action={ADD_DATOS_PERSONALES} 
                            setRefectch={setRefectch}
                            refetch={refetch}
                            setResponses={setResponses}
                            responses={responses}
                            />
                        </div>
                      </div>
                    </form>
                  </div>
                </section>
              </div>
            </div>
          </div>
          <Domicilios tabIndex={tabIndex} handleTabChange={handleTabChange} setRefectch={setRefectch} refetch={refetch} domiciliosEmpleados={domiciliosEmpleados} onChangeValues={onChangeValues} formDatosPersonales={formDatosPersonales} setFormDatosPersonales={setFormDatosPersonales} disabled={disable} deshabilitar={disable} responses={responses} setResponses={setResponses} />
        </div>
        <div className="d-flex justify-content-end">
          
        </div>
      </div></>
  );
};
export default DatosPersonales;
