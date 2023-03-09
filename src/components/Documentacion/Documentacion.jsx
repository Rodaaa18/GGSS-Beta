import React, { useEffect, useState } from 'react'
import InputButtonLiquidacion from '../Inputs/InputButton/InputButtonLiquidacion'
import InputDate from '../Inputs/InputDate/InputDate'
import TextArea from '../Inputs/TextArea/TextArea'
import EmployeData from '../EmployeData/EmployeData';
import CheckLabel from '../Inputs/CheckLabel/CheckLabel';
import TableBasic1 from '../Tables/TableBasic1';
import ButtonCancelarAceptar from '../Buttons/ButtonCancelarAceptar';
import InputDateDocs from '../Inputs/InputDateDocs/InputDateDocs';
import { useDispatch, useSelector } from 'react-redux';
import { AXIOS_ERROR, SET_LOADING } from '../../redux/types/fetchTypes';
import { addDocumentacionEmpleados, addNewDoc, deleteDocu } from '../../redux/actions/fetchActions';
import axios from 'axios';
import { cleanIdsDoc, deleteDocuEmpleado, getInputValue, getOneDocumento, saveIds } from '../../redux/actions/documentacionActions';
import { inputButtonClasess, inputButtonClasessDocumentacion } from '../../classes/classes';
import { GET_INPUT_VALUE } from '../../redux/types/documentacionTypes';
import swal from 'sweetalert';
import { setRefetch } from '../../redux/actions/modalesActions';

const Documentacion = ({responses, setResponses, disable, setRefectch, refetch}) => {
    const empleadoUno = useSelector((state)=> state.employeStates.employe);

    const columns = ["Seleccionar" ,"Fecha", "Vencimiento", "Documento", "Liq", "Observaciones", "Incluir Cuota"]
    const dispatch = useDispatch();
    const [ disableI, setDisableI] = useState(true);
    const [ formDocumentacion, setFormDocumentacion ] = useState(responses["formDocumentacion"]);
    const [ body , setBody ] = useState(0);

    const urlDocPost= `http://54.243.192.82/api/EmpleadosDocumentacion?id=${empleadoUno.iDempleado}`;
    const urlPost = "http://54.243.192.82/api/EmpleadosDocumentacion"
    const documentacionSeleccionada = useSelector((state)=> state.documentacionState.documentacionSeleccionada);

    function onChangeValues(e, key){
        const newResponse = {...formDocumentacion};
        newResponse[key] = e;
        setFormDocumentacion({
            ...newResponse
        });
    };
    useEffect(() => {
        setResponses({
          ...responses,
          formDocumentacion
        });      
    },[formDocumentacion]);
    
    useEffect(()=>{
        
    },[])
    
    const documentacionEmpleados = useSelector((state)=> state.generalState.documentacionEmpleados);

    const documentaciones = useSelector((state)=> state.documentacionState.domiciliosDelEmpleado);
    const refetching = useSelector((state)=> state.modalState.refetch);
    //const datosFormulario = useSelector((state)=> state.documentacionState.formulario);

    /* const documentacionDelEmpleado = empleadoUno && documentacionEmpleados && documentacionEmpleados.filter((doc)=> {return(doc.idEmpleado === empleadoUno.iDempleado)}); */

    const documentacionDelEmpleado = useSelector((state)=> state.documentacionState.documentacionDelEmpleado);

 

    let bodyPetition = {        
        "fecha": formDocumentacion?.inputDatePresentacion,
        "idEmpleado": empleadoUno.iDempleado,
        "idDocumentacion": Number(formDocumentacion?.inputSelectDocumentacion),
        "rutaAdjunto": "",
        "obs": formDocumentacion?.textAreaDocumentacion,
        "fechaVencimiento": (formDocumentacion?.inputDateVencimiento) ? (formDocumentacion?.inputDateVencimiento) : null,
        "generaLiquidacion": formDocumentacion?.inputCheckLiquidacion,
        "incluirCuotaAlimentaria": formDocumentacion?.inputIncluirCuotaAlim
    }
   

    function sendDataDoc(){
        if(empleadoUno.iDempleado && empleadoUno.iDempleado){
            setBody(((documentacionEmpleados && documentacionEmpleados[documentacionEmpleados.length -1] !== undefined && (documentacionEmpleados[documentacionEmpleados.length -1].idEmpleadoDocumentacion))+1))
            try{
                axios.post(urlPost, bodyPetition)
                .then((res)=>{
                    if(res.status === 200){
                        dispatch(addNewDoc(res.data))
                    setRefectch(!refetch)
                    dispatch(setRefetch(!refetching))
                        return swal({
                            title: "Ok",
                            text: "Documentacion agregada con éxito",
                            icon: "success",
                        })
                    }
                    return;
                })
            }catch(err){
                return swal({
                    title: "Error",
                    text: "Error al crear la Documentacion del Empleado",
                    icon: "error",
                })
            }
        }
        else
        return swal({
            title: "Error",
            text: "Debe seleccionar un Empleado",
            icon: "error",
        })
        
    }

    function deleteData(id){
        dispatch(deleteDocuEmpleado(id))
        dispatch(saveIds(id))
    }
    
return (
    <div className='container'>
        <div className='row containerContainer'>
            <EmployeData />
        </div>
        <div className='row'>
            <div className='col-xl-12'>
                <InputDateDocs nameInput="Fecha Presentación" idInput="inputDatePresentacion" display={false} onChange={onChangeValues} action={GET_INPUT_VALUE} disabled={disable} value={formDocumentacion?.inputDatePresentacion && formDocumentacion?.inputDatePresentacion} />
            </div>
            <div className='col-xl-12'>
                <InputDate disabled={disable} nameInput="Fecha Vencimiento" disable={disableI} setDisable={setDisableI} idInput="inputDateVencimiento" display={true}  onChange={onChangeValues} action={GET_INPUT_VALUE} actionReset={getInputValue} value={formDocumentacion?.inputDateVencimiento && formDocumentacion?.inputDateVencimiento} valueCheck={formDocumentacion?.inputCheckDocusDate && formDocumentacion?.inputCheckDocusDate} idInputCheck="inputCheckDocusDate" />
            </div>
            <div className='col-xl-12'>
                <InputButtonLiquidacion
                    clasess={inputButtonClasessDocumentacion}
                    // nameButton="..."
                    nameLabel="Documentación"
                    placeholder="Documentación"
                    array={documentaciones && documentaciones}
                    propArrayOp="documentacion1"
                    propIdOption="idDocumentacion"
                    idInput="inputSelectDocumentacion"
                    onChange={onChangeValues}
                    action={GET_INPUT_VALUE}
                    value={formDocumentacion?.inputSelectDocumentacion && formDocumentacion?.inputSelectDocumentacion}
                    disabled={disable}
                />
            </div>
            <div className='col-xl-12'>
                <TextArea disableModal={disable} inputName="Observaciones " onChange={onChangeValues} idInput="textAreaDocumentacion" value={formDocumentacion?.textAreaDocumentacion && formDocumentacion?.textAreaDocumentacion} disabled={disable} />
            </div>
            <div className='col-xl-12 contDocumentacion'>
                <CheckLabel idInput="inputCheckLiquidacion" nameLabel="Se tiene en cuenta en la Liquidación (Sólo si se cumplen las condiciones necesarias)"  onChange={onChangeValues} action={GET_INPUT_VALUE} value={formDocumentacion?.inputCheckLiquidacion && formDocumentacion?.inputCheckLiquidacion} disabled={disable} />
            </div>
            <div className='col-xl-12 contDocumentacion'>
                <CheckLabel idInput="inputIncluirCuotaAlim" nameLabel="Incluir en cuota Alimentaria"  onChange={onChangeValues} action={GET_INPUT_VALUE} value={formDocumentacion?.inputIncluirCuotaAlim && formDocumentacion?.inputIncluirCuotaAlim} disabled={disable} />
            </div>
            <div className='col-xl-12 contDocumentacion'>
                <ButtonCancelarAceptar idElimiar={documentacionSeleccionada.idEmpleadoDocumentacion && documentacionSeleccionada.idEmpleadoDocumentacion} cancelar="-" aceptar="+" functionSend={sendDataDoc} functionDelete={deleteData} disabled={disable} />
                <TableBasic1  refetch={refetch} setRefetch={setRefectch} columns={columns} value={documentacionDelEmpleado}  documentaciones={documentaciones} disabled={disable} />
            </div>
        </div>
    </div>
)
}

export default Documentacion