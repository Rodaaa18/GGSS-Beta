import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import swal from 'sweetalert';
import { inputButtonClasessExtras, inputButtonClasessExtrasAfectaciones, inputButtonClasessExtrasInstrum } from '../../classes/classes'
import { deleteDatoExtraEmpl, saveIdDe } from '../../redux/actions/extrasActions';
import { addDatosExtras, addInstrumLegales, addOneDatoExtra } from '../../redux/actions/fetchActions';
import { GET_INPUT_VALUES_EXTRAS } from '../../redux/types/extrasTypes';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import ButtonCancelarAceptar from '../Buttons/ButtonCancelarAceptar';
import EmployeData from '../EmployeData/EmployeData'
import CheckLabel from '../Inputs/CheckLabel/CheckLabel';
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputDate from '../Inputs/InputDate/InputDate';
import TextArea from '../Inputs/TextArea/TextArea';
import TableExtras from '../Tables/TableExtras';
import "./Extras.css";

const Extras = ({responses, setResponses, disable, setRefetch, refetch}) => {

    const columns = ["Seleccionar","Fecha", "Descripción", "Observaciones"]
    const dispatch = useDispatch();
    const [ formDatosExtras, setFormDatosExtras ] = useState(responses["formDatosExtras"]);
    const deshabilitar = useSelector((state)=> state.employeStates.disable);
    const empleadoUno = useSelector((state) => state.employeStates.employe);
    const datosExtras = useSelector((state)=> state.generalState.datosExtras);
    const instrumLegales = useSelector((state)=> state.generalState.instrumLegales);
    const datoExtraSelected = useSelector((state)=> state.extrasState.datoExtra);
    //const datosExtraEmpleado = useSelector((state)=>state.generalState.datosExtrasPorEmpleadosSelect);
    const datosExtraEmpleado = useSelector((state)=> state.extrasState.datosExtrasEmp);

    const descripcion = datosExtras && datosExtras.filter((de)=> de.idDatoExtra === datoExtraSelected?.idDatoExtra);
    
    const urlPetition = `http://54.243.192.82/api/GuardarDatosExtras/0?Fecha=${formDatosExtras?.inputFechaExtras}&IdEmpleado=${empleadoUno.iDempleado}&IdDatoExtra=${formDatosExtras?.inputDatosExtrasCbo}&Obs=${formDatosExtras?.inputTextExtras}`
   
    const nueva = `http://54.243.192.82/api/GuardarDatosExtras/0?Fecha=${formDatosExtras?.inputFechaExtras}&IdEmpleado=${empleadoUno.iDempleado}&IdDatoExtra=${formDatosExtras?.inputDatosExtrasCbo}&Obs=${formDatosExtras?.inputTextExtras}`

    async function sendData(){
      if(empleadoUno){
        try{
          await axios.post(urlPetition)
          .then((res)=>{
         
            setRefetch(!refetch)
          })
        }catch(err){
          return swal({
              title: "Error",
              text: `Error al insertar el Dato Extra, error: ${err}`,
              icon: "error",
        })
        }
      }else{
        return swal({
          title: "Error",
          text: `Debe seleccionar un Empleado`,
          icon: "error",
        })
      }
      
      
    }


    async function deleteDatoExtra(id){
        dispatch(deleteDatoExtraEmpl(id));
        dispatch(saveIdDe(id));
      
    }
    

    function onChangeValues(e, key){
        const newResponse = {...formDatosExtras};
        newResponse[key] = e;
        setFormDatosExtras({
          ...newResponse
        });
    };

  
  
    useEffect(() => {    
        setResponses({
          ...responses,
          formDatosExtras
        });    
    },[formDatosExtras]);

  function onChange(e, action) {
    dispatch(
      {
        type: action,
        payload : {name : e.target.name, value : e.target.value}
      });    
  }

  

  return (
    <section className='sectionExtras'><div className='container'>
          <div className='row'>
              <EmployeData />
          </div>
      </div>
      <div className='container-flex  border-top-0 p-0'>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button acordeonOption" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <p className="tituloAcordeon p-0 m-0">Datos Extras</p>
              </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <div className='row  mt-1'>
                    <div className='col-xl-12'>
                        <InputButtonLiquidacion
                        class='fs-5' 
                        idInput="inputDatosExtrasCbo" 
                        nameButton="..." 
                        onChange={onChangeValues} 
                        value={formDatosExtras?.inputDatosExtrasCbo && formDatosExtras?.inputDatosExtrasCbo}
                        propArrayOp="descripcion"
                        array={datosExtras && datosExtras}
                        propIdOption="idDatoExtra"
                        nameLabel="Datos Extras" 
                        action={GET_INPUT_VALUES_EXTRAS} 
                        clasess={inputButtonClasessExtras}
                        disabled={disable} />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-xl-6'>
                    <div className="formulario__grupo__inputs ">
                      <div className="form-check p-0 mt-2">
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                          Fecha
                        </label>
                      </div>
                      <div className="d-flex flex-row justify-content-start align-items-center">
                          
                          <input id="inputFechaExtras" className="secondCheckNacExtras" name="inputFechaExtras" type="date" value={formDatosExtras?.inputFechaExtras && formDatosExtras?.inputFechaExtras} disabled={disable} onChange={(e)=>onChangeValues(e.target.value, "inputFechaExtras")} />
                          
                      </div>
                  </div>
                       {/*  <InputDate valueCheck={true} value={formDatosExtras?.inputFechaExtras && formDatosExtras?.inputFechaExtras} onChange={onChangeValues} idInput="inputFechaExtras" nameInput="Fecha" action={GET_INPUT_VALUES_EXTRAS} disabled={disable} /> */}
                    </div>
                </div>
                <div className='row'>
                      <div className='col-xl-12 fs-6 '>
                          <TextArea onChange={onChangeValues} idInput="inputTextExtras" value={formDatosExtras?.inputTextExtras && formDatosExtras?.inputTextExtras} inputName="Observaciones" action={GET_INPUT_VALUES_EXTRAS} disabled={disable} />
                          <ButtonCancelarAceptar cancelar="-" aceptar="+" idElimiar={datoExtraSelected.idEmpleadoDatoExtra} functionDelete={deleteDatoExtra} functionSend={sendData} disabled={disable} />
                          <TableExtras descripcion={descripcion} disabled={disable} datosExtraEmpleado={datosExtraEmpleado && datosExtraEmpleado} columns={columns} />
                      </div>
                </div>
            </div>
          </div>
        </div>
       {/*  <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Adscripto
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inpútAdscriptoExtras" nameLabel="Adscripto" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                        <InputButtonLiquidacion nameButton="..." nameLabel="Instrum. Legal" id="inputInstrumLegal" clasess={inputButtonClasessExtrasInstrum} onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                    </div>
                    <div className='divObservaciones'>
                        <TextArea idInput="inputTextExtrasAdscripto" inputName="Observaciones" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                    </div>

              </div>
              <div className='linea' />
              <div className='row'>
                    <div className='col-xl-12 d-flex flex-row justify-content-start align-items-center'>
                        <CheckLabel idInput="inputAfectacionesExtras" nameLabel="Afectaciones" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />
                        <InputButtonLiquidacion nameButton="..." nameLabel="Instrum. Legal" id="inputInstrumLegalAfectaciones" action={GET_INPUT_VALUES_EXTRAS} clasess={inputButtonClasessExtrasInstrum} onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacion'>
                        <InputButtonLiquidacion nameButton="..." nameLabel="Sector" id="inputSectorExtras" action={GET_INPUT_VALUES_EXTRAS} clasess={inputButtonClasessExtrasAfectaciones} onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacion'>
                        <InputButtonLiquidacion nameButton="..." nameLabel="Direcciones" id="inputDireccionesExtras" action={GET_INPUT_VALUES_EXTRAS} clasess={inputButtonClasessExtrasAfectaciones} onChange={onChange} />
                    </div>
                    <div className='divObservacionesAfectacionObs '>
                        <TextArea idInput="inputTextExtrasAfectaciones" inputName="Observaciones" onChange={onChange} action={GET_INPUT_VALUES_EXTRAS} />                          
                    </div>
                    
              </div>
              </div>
            </div>
          </div>  */}        
        </div>
      </div>
      </section>  
  )
}

export default Extras