import { ADD_CARGOS, ADD_ESTADOS, ADD_ESTADOSCIVILES, ADD_ESTUDIOS, ADD_PAISES, ADD_TIPOSDOCUMENTO, AXIOS_ERROR, SET_LOADING, ADD_TAREASDESEMPEÑADAS, ADD_PARENTESCOS, ADD_FORMASPAGO, ADD_MODOSCONTRATACION, ADD_MODOSLIQUIDACION, ADD_EMPLEADORES, ADD_DOMICLIOS, ADD_CALLES, ADD_DEPARTAMENTOS, ADD_LOCALIDADES, ADD_PROVINCIAS, ADD_BARRIOS, ADD_FAMILIARES, ADD_NEW_FAMILIAR, DELETE_ONE_FAMILIAR, ADD_CONVENIOS, ADD_CATEGORIAS, ADD_AGRUPAMIENTOS, ADD_CENTRO_COSTO, ADD_SECTOR_DEPTO, ADD_OBRAS_SOCIALES, ADD_LUGARES_DE_PAGO, ADD_BANCOS, ADD_DIRECCIONES, ADD_SINDICATOS, ADD_ESQUEMAS, ADD_NEW_ESCI, ADD_NEW_ESTUDIO, DELETE_ESCI, GET_ID_ESCI, GET_ID_ESTUDIO, DELETE_ESTUDIO, ADD_NEW_TIPODOC, GET_ID_TIPODOC, DELETE_TIPODOC, PUT_ESCI, PUT_ESTUDIO, PUT_TIPODOC, ADD_NEW_PARENTESCO, GET_ID_PARENTESCO, DELETE_PARENTESCO, PUT_PARENTESCO, ADD_NEW_ESTADO, GET_ID_ESTADO, DELETE_ESTADO, PUT_ESTADO, ADD_NEW_FORMAPAGO, GET_ID_FORMAPAGO, DELETE_FORMAPAGO, PUT_FORMAPAGO, ADD_NEW_CARGO, GET_ID_CARGO, DELETE_CARGO, PUT_CARGO, ADD_NEW_TAREA, GET_ID_TAREA, DELETE_TAREA, PUT_TAREA, ADD_CONCEPTOS, ADD_LICENCIAS_EMPLEADOS, UPDATE_LICENCIA, ADD_NEW_LICENCIA, DELETE_LICENCIA, ADD_INSTRUM_LEGALES, ADD_DATOS_EXTRAS, ADD_DOCU_EMPL, ADD_NUMERADORES, DISABLED_INPUTS, ADD_NEW_DOC, DELETE_DOC, ADD_ADIC_LIQUIDACION, ADD_ONE_DE, DELETE_DOMICILIO, SAVE_DATOS_EXTRAS_EMPLEADOS, DELETE_DATO_EXTRA_EMP, ACTUALIZA_DELETE, SAVE_TOKEN, SAVE_ERROR, SAVE_STATUS_CODE, ACTUALIZA_DELETE_FORMAS_PAGO, ACTUALIZA_CREATE_FORMAS_PAGO, ACTUALIZA_UPDATE_FORMAS_PAGO} from "../types/fetchTypes";
import { GET_TANTERIORES } from "../types/trabajosAnteriores";

export const initialState = {
    loading: false, 
    data : "",   
    estados : "",
    estadosCiviles : "",
    nacionalidades : "",
    paises : "",
    estudios : "",
    tiposDocumento : "",
    cargos: "",
    tareasDesempeñadas : "",
    parentescos : "",
    formasDePago : "",
    modosContratacion : "",
    modosLiquidacion : "",
    empleadores : "",
    domicilios : "",
    calles : "",
    departamentos : "",
    provincias : "",
    localidades : "",
    barrios : "",    
    error : false,
    familiares : "",
    convenios : "",
    categorias : "",
    agrupamientos : "",
    centroCosto : "",
    sectorDepto : "",
    obrasSociales : "",
    lugaresDePago : "",
    bancos : "",
    direcciones : "",
    sindicatos : "",
    esquemas : "",
    documentacionEmpleados : "",
    numeradores : "",
    disabled : true,
    datosExtras : "",
    instrumLegales : "",
    idEstadoCivil : 0,
    idEstudio : 0,
    idTipoDoc : 0,
    idParentesco : 0,
    idEstado : 0,
    idFormaPago : 0,
    conceptosXesquemas : "",
    idCargo : 0,
    idTarea : 0,
    conceptos : "",
    trabajosAnteriores : "",
    licenciasEmpleados : "",
    datosExtrasPorEmpleadosSelect : "",
    token : "",
    errorMessage : "",
    statusCode : ""
}

export const fetchReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_LOADING :
            return{
                loading : true,
                error: false,
                data : {}
            };
        case ADD_ESTADOS : {
            return{
                ...state,
                loading: false,
                estados : action.payload
            }
        }
        case ADD_ESTADOSCIVILES : {
            return{
                ...state,
                loading: false,
                estadosCiviles : action.payload
            }
        }
        case ADD_PAISES : {
            return{
                ...state,
                loading: false,
                paises : action.payload
            }
        }
        case ADD_ESTUDIOS : {
            return{
                ...state,
                loading: false,
                estudios : action.payload 
            }
        }
        case ADD_TIPOSDOCUMENTO : {
            
            return{
                ...state,
                loading: false,
                tiposDocumento : action.payload 
            }
        }
        case ADD_CARGOS : {
            return{
                ...state,
                loading: false,
                cargos : action.payload
            }
        }
        case ADD_TAREASDESEMPEÑADAS : {
            return{
                ...state,
                loading: false,
                tareasDesempeñadas : action.payload
            }
        }
        case ADD_PARENTESCOS : {
            return{
                ...state,
                loading: false,
                parentescos : action.payload
            }
        }
        case ADD_FORMASPAGO : {
            return{
                ...state,
                loading: false,
                formasDePago : action.payload
            }
        }
        case ADD_MODOSCONTRATACION : {
            return{
                ...state,
                loading: false,
                modosContratacion : action.payload
            }
        }
        case SAVE_TOKEN : {
            return{
                ...state,
                token : action.payload
            }
        }
        case ADD_MODOSLIQUIDACION : {
            return{
                ...state,
                loading: false,
                modosLiquidacion : action.payload
            }
        }
        case ADD_EMPLEADORES : {
            return{
                ...state,
                loading: false,
                empleadores : action.payload
            }
        }
        case ADD_BARRIOS : {
            return{
                ...state,
                loading: false,
                barrios : action.payload
            }
        }
        case ADD_DOMICLIOS : {
            return{
                ...state,
                loading: false,
                domicilios : action.payload
            }
        }
        case DELETE_DOMICILIO : {
            return {
                ...state,
                domicilios : state.domicilios && state.domicilios.filter((dom)=> dom.idDomicilio !== action.payload)
            }
        }
        case ADD_CALLES : {
            return{
                ...state,
                loading: false,
                calles : action.payload
            }
        }
        case ADD_DEPARTAMENTOS : {
            return{
                ...state,
                loading: false,
                departamentos : action.payload
            }
        }
        // case ACTUALIZA_DELETE_ESTADOS_CIVILES : {
        //      return{
        //         ...state, 
        //         estadosCiviles : state.estadosCiviles && state.estadosCiviles.filter((estadoCivil) => estadoCivil.idEstadoCIvil !== action.payload) 
        //     }
        // }
        case ADD_LOCALIDADES : {
            return{
                ...state,
                loading: false,
                localidades : action.payload
            }
        }
        case ADD_PROVINCIAS : {
            return{
                ...state,
                loading: false,
                provincias : action.payload
            }
        }
        case ADD_FAMILIARES: {
            return{
                ...state,
                loading: false,
                familiares : action.payload
            }
        }
        case ADD_NEW_FAMILIAR: {
            return {
                ...state.familiares,
                familiares :  action.payload
            }
        }
        case ADD_LICENCIAS_EMPLEADOS : {
            return{
                ...state,
                licenciasEmpleados : action.payload
            }
        }
        case DELETE_ONE_FAMILIAR : {
            return{
                ...state.familiares,
                familiares : state.familiares.filter((fam)=> fam.iDfamiliares !== action.payload)
            }
        }
        case ADD_CONVENIOS : {
            return {
                ...state,
                convenios : action.payload
            }
        }
        case ADD_CATEGORIAS : {
            return {
                ...state,
                categorias : action.payload
            }
        }
        case AXIOS_ERROR : 
            return{
                error: true,
                loading : false,
                data: {}
            } 
        case ADD_AGRUPAMIENTOS : {
            return {
                ...state,
                agrupamientos : action.payload
            }
        }
        case ADD_CENTRO_COSTO : {
            return {
                ...state,
                centroCosto : action.payload
            }
        }
        case ADD_SECTOR_DEPTO : {
            return {
                ...state,
                sectorDepto : action.payload
            }
        }
        case ADD_OBRAS_SOCIALES : {
            return {
                ...state,
                obrasSociales : action.payload
            }
        }
        case ADD_LUGARES_DE_PAGO :
            return {
                ...state,
                lugaresDePago : action.payload
            }
        /* case ADD_BANCOS : {
            return{
                ...state,
                bancos : action.payload
            }
        } */
    case ADD_BANCOS: {
      return {
        ...state,
        bancos: action.payload,
      };
    }
    case ADD_DIRECCIONES: {
      return {
        ...state,
        direcciones: action.payload,
      };
    }
    case ADD_SINDICATOS: {
      return {
        ...state,
        sindicatos: action.payload,
      };
    }
    case ADD_ESQUEMAS: {
      return {
        ...state,
        esquemas: action.payload,
      };
    }
    case DISABLED_INPUTS: {
      return {
        ...state,
        disabled: action.payload,
      };
    }
    case ADD_NUMERADORES: {
      return {
        ...state,
        numeradores: action.payload,
      };
    }
    case ADD_DOCU_EMPL: {
      return {
        ...state,
        documentacionEmpleados: action.payload,
      };
    }
    case GET_TANTERIORES: {
      return {
        ...state,
        trabajosAnteriores: action.payload,
      };
    }
    case ADD_NEW_LICENCIA: {
      return {
        ...state,
        licenciasEmpleados: [...state.licenciasEmpleados, action.payload],
      };
    }
    case UPDATE_LICENCIA: {
      const newLicencia = { ...action.payload };
      return {
        ...state.licenciasEmpleados,
        licenciasEmpleados: state.licenciasEmpleados.filter(
          (licencia) =>
            licencia.idLicenciaEmpleado === newLicencia.idLicenciaEmpleado
        ),
      };
    }
    case DELETE_LICENCIA: {
      return {
        ...state,
        licenciasEmpleados: state.licenciasEmpleados.filter(
          (lic) => lic.idLicenciaEmpleado !== action.payload
        ),
      };
    }

    case ADD_NEW_DOC: {
      return {
        ...state,
        documentacionEmpleados: [
          ...state.documentacionEmpleados,
          action.payload,
        ],
      };
    }
    case DELETE_DOC: {
      return {
        ...state,
        documentacionEmpleados: state.documentacionEmpleados.filter(
          (docu) => docu.idEmpleadoDocumentacion !== action.payload
        ),
      };
    }
    case ADD_ADIC_LIQUIDACION: {
      return {
        ...state,
        conceptosXesquemas: action.payload,
      };
    }
    case ADD_ONE_DE: {
      return {
        ...state,
        datosExtras: [...state.datosExtras, action.payload],
      };
    }
    // --------------- POST REDUX ---------------
    case ADD_NEW_ESCI: {
      return {
        ...state.estadosCiviles,
        estadosCiviles: [...state.estadosCiviles, action.payload],
      };
    }

    case ADD_NEW_ESTUDIO: {
      return {
        ...state,
        estudios: action.payload,
      };
    }

    case ADD_NEW_TIPODOC: {
      return {
        ...state,
        tiposDocumento: action.payload,
      };
    }
    case ADD_DATOS_EXTRAS: {
      return {
        ...state,
        datosExtras: action.payload,
      };
    }
    case ADD_INSTRUM_LEGALES: {
      return {
        ...state,
        instrumLegales: action.payload,
      };
    }
    case ADD_NEW_PARENTESCO: {
      return {
        ...state,
        parentescos: action.payload,
      };
    }
    case ADD_CONCEPTOS: {
      return {
        ...state,
        conceptos: action.payload,
      };
    }

    case ADD_NEW_ESTADO: {
      return {
        ...state,
        estados: [...state.estados, action.payload],
      };
    }

    case ADD_NEW_FORMAPAGO : {
        return {
            ...state,
            formasDePago: [...state.formasDePago, action.payload]
        }
    }
    case SAVE_DATOS_EXTRAS_EMPLEADOS: {
      return {
        ...state,
        datosExtrasPorEmpleadosSelect: action.payload,
      };
    }
    case DELETE_DATO_EXTRA_EMP: {
      return {
        ...state,
        datosExtrasPorEmpleadosSelect:
          state.datosExtrasPorEmpleadosSelect.filter(
            (de) => de.idEmpleadoDatoExtra !== action.payload
          ),
      };
    }

    // --------------- DELETE REDUX ---------------

    case GET_ID_ESCI: {
      return {
        ...state,
        idEstadoCivil: action.payload,
      };
    }
    case DELETE_ESCI: {
      return {
        ...state,
        estadosCiviles: state.estadosCiviles.filter(
          (esCi) => esCi.idEstadoCivil !== action.payload
        ),
      };
    }

    case GET_ID_ESTUDIO: {
      return {
        ...state,
        idEstudio: action.payload,
      };
    }
    case DELETE_ESTUDIO: {
      return {
        ...state,
        estudios: state.estudios.filter(
          (estudio) => estudio.idEstudio !== action.payload
        ),
      };
    }

    case GET_ID_TIPODOC: {
      return {
        ...state,
        idTipoDoc: action.payload,
      };
    }
    case DELETE_TIPODOC: {
      return {
        ...state,
        tiposDocumento: state.tiposDocumento.filter(
          (doc) => doc.idTipoDoc !== action.payload
        ),
      };
    }

    case GET_ID_PARENTESCO: {
      return {
        ...state,
        idParentesco: action.payload,
      };
    }
    case DELETE_PARENTESCO: {
      return {
        ...state,
        parentescos: state.parentescos.filter(
          (parent) => parent.idParentesco !== action.payload
        ),
      };
    }

    case GET_ID_ESTADO: {
      return {
        ...state,
        idEstado: action.payload,
      };
    }
    case DELETE_ESTADO: {
      return {
        ...state,
        estados: state.estados.filter(
          (estado) => estado.idEstado !== action.payload
        ),
      };
    }

    case GET_ID_FORMAPAGO: {
      return {
        ...state,
        idFormaPago: action.payload,
      };
    }
    case DELETE_FORMAPAGO: {
      return {
        ...state,
        formasDePago: state.formasDePago.filter(
          (forma) => forma.idFormaPago !== action.payload
        ),
      };
    }

    case GET_ID_CARGO: {
      return {
        ...state,
        idCargo: action.payload,
      };
    }
    case DELETE_CARGO: {
      return {
        ...state,
        cargos: state.cargos.filter(
          (cargo) => cargo.idCargo !== action.payload
        ),
      };
    }

    case GET_ID_TAREA: {
      return {
        ...state,
        idTarea: action.payload,
      };
    }
    case DELETE_TAREA: {
      return {
        ...state,
        tareasDesempeñadas: state.tareasDesempeñadas.filter(
          (tarea) => tarea.idTarea !== action.payload
        ),
      };
    }

    // --------------- PUT REDUX ---------------

    case PUT_ESCI: {
      return {
        ...state,
        estadosCiviles: state.estadosCiviles.filter(
          (esCi) => esCi.idEstadoCivil !== action.payload
        ),
      };
    }

    case PUT_ESTUDIO: {
      return {
        ...state,
        estudios: state.estudios.filter(
          (estudio) => estudio.idEstudio !== action.payload
        ),
      };
    }

    case PUT_TIPODOC: {
      return {
        ...state,
        tiposDocumento: state.tiposDocumento.filter(
          (doc) => doc.idTipoDoc !== action.payload
        ),
      };
    }

    case PUT_PARENTESCO: {
      return {
        ...state,
        parentescos: state.parentescos.filter(
          (paren) => paren.idParentesco !== action.payload
        ),
      };
    }

    case PUT_ESTADO: {
      return {
        ...state,
        estados: [...state.estados, action.payload],
      };
    }
    //Estados Civiles
    case ACTUALIZA_DELETE: {
      return {
        ...state,
        estadosCiviles:
          state.estadosCiviles &&
          state.estadosCiviles.filter(
            (estadoCivil) => estadoCivil.idEstadoCivil !== action.payload
          ),
      };
    }
    // case ACTUALIZA_MODIFICAR_ESCI: {
    //     return {
    //       ...state,
    //       estadosCiviles:
    //         state.estadosCiviles &&
    //         state.estadosCiviles.filter(
    //           (estadoCivil) => estadoCivil.idEstadoCivil !== action.payload
    //         ),
    //     };
    //   }

    //Formas de Pago
    case ACTUALIZA_DELETE_FORMAS_PAGO: {
      const id = state.formasDePago.findIndex((item)=> item.iDformadePago === action.payload.iDformadePago)
        const updateList = [...state.formasDePago]
        updateList[id] = action.payload
        return {
            ...state,
            formasDePago:   
                updateList
        }
    }

    case ACTUALIZA_CREATE_FORMAS_PAGO: {
      return {
        ...state,
        formasDePago: [...state.formasDePago, action.payload],
      }
    }

    case ACTUALIZA_UPDATE_FORMAS_PAGO: {
      const id = state.formasDePago.findIndex((item)=> item.iDformadePago === action.payload.iDformadePago)
        const updateList = [...state.formasDePago]
        updateList[id] = action.payload
        return {
            ...state,
            formasDePago:   
                updateList
        }
      }

        // case ADD_NEW_ESTUDIO : {
        //     return {
        //         ...state,
        //         estudios: action.payload
        //     }
        // }

        // case ADD_NEW_TIPODOC : {
        //     return {
        //         ...state,
        //         tiposDocumento:  action.payload
        //     }
        // }
        // case ADD_DATOS_EXTRAS : {
        //     return {
        //         ...state,
        //         datosExtras : action.payload
        //     }
        // }
        // case ADD_INSTRUM_LEGALES : {
        //     return {
        //         ...state,
        //         instrumLegales : action.payload
        //     }
        // }
        // case ADD_NEW_PARENTESCO : {
        //     return {
        //         ...state,
        //         parentescos:  action.payload
        //     }
        // }
        // case ADD_CONCEPTOS :{
            
        //     return{
        //         ...state,
        //         conceptos : action.payload
        //     }
        // }

        // case ADD_NEW_ESTADO : {
        //     return {
        //         ...state,
        //         estados: [...state.estados, action.payload]
        //     }
        // }

        // case ADD_NEW_FORMAPAGO : {
        //     return {
        //         ...state,
        //         formasDePago: [...state.formasDePago, action.payload]
        //     }
        // }
        // case SAVE_DATOS_EXTRAS_EMPLEADOS : {
   
        //     return{
        //         ...state,
        //         datosExtrasPorEmpleadosSelect : action.payload
        //     }
        // }
        // case DELETE_DATO_EXTRA_EMP : {
        //     return{
        //         ...state,
        //         datosExtrasPorEmpleadosSelect : state.datosExtrasPorEmpleadosSelect.filter((de)=> de.idEmpleadoDatoExtra !== action.payload)
        //     }
        // }


        // --------------- DELETE REDUX ---------------

//         case GET_ID_ESCI : {
//             return {
//                 ...state,
//                 idEstadoCivil : action.payload
//             }
//         }
//         case DELETE_ESCI : {
//             return {
//                 ...state,
//                 estadosCiviles : state.estadosCiviles.filter((esCi) => esCi.idEstadoCivil !== action.payload)
//             } 
//         }
        
//         case GET_ID_ESTUDIO : {
//             return {
//                 ...state,
//                 idEstudio : action.payload
//             }
//         }
//         case DELETE_ESTUDIO : {
//             return {
//                 ...state,
//                 estudios : state.estudios.filter((estudio) => estudio.idEstudio !== action.payload)
//             }
//         }

//         case GET_ID_TIPODOC : {
//             return {
//                 ...state,
//                 idTipoDoc : action.payload
//             }
//         }
//         case DELETE_TIPODOC : {
//             return {
//                 ...state,
//                 tiposDocumento : state.tiposDocumento.filter((doc) => doc.idTipoDoc !== action.payload)
//             }
//         }

//         case GET_ID_PARENTESCO : {
//             return {
//                 ...state,
//                 idParentesco : action.payload
//             }
//         }
//         case DELETE_PARENTESCO : {
//             return {
//                 ...state,
//                 parentescos: state.parentescos.filter((parent) => parent.idParentesco !== action.payload )
//             }
//         }

//         case GET_ID_ESTADO : {
//             return {
//                 ...state,
//                 idEstado : action.payload
//             }
//         }
//         case DELETE_ESTADO : {
//             return {
//                 ...state,
//                 estados: state.estados.filter((estado) => estado.idEstado !== action.payload)
//             }
//         } 

//         case GET_ID_FORMAPAGO : {
//             return {
//                 ...state,
//                 idFormaPago : action.payload
//             }
//         }
//         case DELETE_FORMAPAGO : {
//             return {
//                 ...state,
//                 formasDePago: state.formasDePago.filter((forma) => forma.idFormaPago !== action.payload)
//             }
//         }

//         case GET_ID_CARGO : {
//             return {
//                 ...state,
//                 idCargo : action.payload
//             }
//         }
//         case DELETE_CARGO : {
//             return {
//                 ...state,
//                 cargos: state.cargos.filter((cargo) => cargo.idCargo !== action.payload)
//             }
//         }

//         case GET_ID_TAREA : {
//             return {
//                 ...state,
//                 idTarea: action.payload
//             }
//         }
//         case DELETE_TAREA : {
//             return {
//                 ...state,
//                 tareasDesempeñadas: state.tareasDesempeñadas.filter((tarea) => tarea.idTarea !== action.payload)
//             }
//         }

        
//         // --------------- PUT REDUX ---------------

//         case PUT_ESCI : {
//             return {
//                 ...state,
//                 estadosCiviles : state.estadosCiviles.filter((esCi) => esCi.idEstadoCivil !== action.payload),
//             }
//         }

//         case PUT_ESTUDIO : {
//             return {
//                 ...state,
//                 estudios : state.estudios.filter((estudio) => estudio.idEstudio !== action.payload),
//             }
//         }

//         case PUT_TIPODOC : {
//             return {
//                 ...state,
//                 tiposDocumento : state.tiposDocumento.filter((doc) => doc.idTipoDoc !== action.payload),
//             }
//         }

//         case PUT_PARENTESCO : {
//             return {
//                 ...state,
//                 parentescos : state.parentescos.filter((paren) => paren.idParentesco !== action.payload),
//             }
//         }

//         case PUT_ESTADO : {
//             return {
//                 ...state,
//                 estados: [...state.estados, action.payload]
//             }
//         }
// //Estados Civiles
//         case ACTUALIZA_DELETE : {
//             return {
//                 ...state, estadosCiviles : state.estadosCiviles && state.estadosCiviles.filter((estadoCivil) => estadoCivil.idEstadoCivil !== action.payload)
//             }
//         }
        case SAVE_ERROR: {
            return {
                ...state,
                errorMessage: action.payload
            }
        }
        case SAVE_STATUS_CODE : {
            return {
                ...state,
                statusCode: action.payload
            }
        }
        
            default : return state;
    }
};
