// import React, { useState } from 'react'
import axios from "axios";
import swal from "sweetalert";
import { setRefetch } from "../../redux/actions/modalesActions";
import InputModal from "../Inputs/InputModal/InputModal";
import TextArea from "../Inputs/TextArea/TextArea";
import "./BasicModal.css";
const ChildModal = ({
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
  usaEstados,
  idInputTextArea,
}) => {

  async function deleteItemModal(url, id, actionActualizaDelete){
    swal({
          title: "Desea eliminar el item?",
          text: "Si confirma el item será borrado de la Base de Datos",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then( async (willDelete) => {
          if (willDelete) {
                try{
                await axios
                    .delete(`${url}/${id}`)
                    .then((res)=>{
                        if(res.status === 200){
                            swal("Item eliminado con éxito", {
                                icon: "success",
                            });
                            setDisableMOdal(true)
                            actionActualizaDelete()
                        }
                        return;
                    })
            }catch(err){
                setDisableMOdal(true)
                return swal({
                    title : "Error",
                    text : "Error al eliminar el item" + `${err}`,
                    icon : "error"
                });
            }
          } else {
            swal("Puede seguir operando");
          }
        });


  return (
    <section
      className={transition ? "transitionClassUp" : " transitionClassneDone "}
    >
        <div className='cortina'></div>
      <div className="modalBodyClass p-2">
        <div className="row p-2">
          <div className="d-flex flex-row justify-content-between align-items-center">
          <p className="h3"><ins>{propsModal.nameModal}</ins></p>
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
        <div className="row p-2 selectModal">
          <div className="col-xl-6 border border-2 p-2 ">
            <select
              className="form-select selectMenus p-0 m-0"
              multiple
              aria-label="multiple select example"
              disabled={disabled}
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
            <div className="d-flex flex-row justify-content-evenly align-items-center mt-1">
              <button
                className="btn btn-dark text-light"
                onClick={() => {
                  setDisableMOdal(false);
                }}
              >
                Agregar
              </button>
              <button
                className="btn btn-dark text-light"
                onClick={() => {
                  setModify(true);
                  setDisableMOdal(false);
                }}
              >
                Modificar
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteItemModal(url, actionActualizaDelete, id)}
              >
                Eliminar
              </button>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="d-flex flex-column justify-content-start align-items-center">
              {optionsInputs.map((option, index) => {
                return (
                  <InputModal
                    disableModal={disableModal}
                    key={index}
                    placeholder={option.placeholder}
                    nameLabel={option.label}
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
            <div className="d-flex flex-column justify-content-center align-items-center">
              {usaEstados && (
                <TextArea
                  idInput={idInputTextArea}
                  onChange={onChangeValues}
                  characterLimit={255}
                  disableModal={disableModal}
                ></TextArea>
              )}
            </div>
            <div className="d-flex flex-row-reverse w-100 ">
              <button
                className="btn btn-success m-1"
                onClick={() =>
                  functionAdd(urlApi, bodyPetition, bodyUpdate, idAModificar)
                }
              >
                Aceptar
              </button>
              <button className="btn btn-danger m-1">Cancelar</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

    
  return (
    
    <section className={transition ? 'transitionClassUp' : ' transitionClassneDone '} >
    <div className='modalBodyClass p-2' >
        <div className="row p-2">
            <div className='d-flex flex-row justify-content-between align-items-center'>
                <h3>{propsModal.nameModal}</h3>
                <button className='btn btn-outline-danger text-white fs-6 btn-md buttonModal border border-white' onClick={()=>{handleClickClose(nameModalProp); setTransition(false);}}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>            
        </div>
        <div className='row p-2 selectModal'>
            <div className='col-xl-6 border border-2 p-2 '>
                <select
                    className="form-select selectMenus p-0 m-0"
                    multiple
                    aria-label="multiple select example"
                    disabled={disabled}
                    
                    >
                    {array && array.map((op, i) => {
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
                    })
                    }
                </select>
                <div className='d-flex flex-row justify-content-evenly align-items-center mt-1'>
                    <button className='btn btn-success' onClick={()=> {setDisableMOdal(false)}}>Agregar</button>
                    <button className='btn btnModificar btn-info text-light' onClick={()=> {setModify(true);setDisableMOdal(false)}}>Modificar</button>
                    <button className='btn btn-danger' onClick={()=> functionDelete(urlApi, idAModificar)}>Eliminar</button>
                </div>
            </div>
            <div className='col-xl-6'>
                <div className='d-flex flex-column justify-content-start align-items-center'>
                    {
                        optionsInputs.map((option, index)=>{
                            return(
                                <InputModal
                                    disableModal={disableModal}
                                    key={index}
                                    placeholder={option.placeholder}
                                    nameLabel = {option.label}
                                    idInput={option.idInput}
                                    onChangeValues={onChangeValues}
                                    value={option.idInput === "masculino" ? modalValues?.masculino : modalValues?.femenino}
                                />
                            )
                        })
                    }
                </div>
                <div className='d-flex flex-column justify-content-center align-items-center'
                >
                    {
                        usaEstados && <TextArea
                        idInput={idInputTextArea}
                        onChange={onChangeValues}
                        characterLimit={255}
                        disableModal={disableModal}
                        >
                        </TextArea>
                    }


                </div>
                <div className='d-flex flex-row-reverse w-100 '>
                    <button className='btn btn-success m-1' onClick={()=>functionAdd(urlApi, bodyPetition, bodyUpdate, idAModificar)}>
                    Aceptarr
                    </button>
                    <button className='btn btn-danger m-1'>
                    Cancelar
                    </button>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default ChildModal