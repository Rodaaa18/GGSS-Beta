import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { selectBarrio } from '../../../../redux/actions/modalesActions';
import InputModal from '../../../Inputs/InputModal/InputModal';
import TextArea from '../../../Inputs/TextArea/TextArea';

const ChildBarrios = ({
  disableModalButtons,array,propsModal,setValueItemModal, setDisableMOdal,setDisableModalButtons ,setModify,functionDelete, urlApi, idAModificar, actionActualizaDelete, optionsInputs,onChangeValues,modalValues,usaEstados,idInputTextArea ,index
}) => {
  const dispatch = useDispatch();
  const [ arrayList, setArrayList ] = useState([]);

  function updateList(array){
    if(index === 3){
      return setArrayList(array)
    }else{
      setArrayList([])
    }
  }
  useEffect(()=>{
    updateList(array);
  },[index])
  console.log(array)
  console.log(index)
  return (
    <>
     <div className="col-xl-6 border border-2 p-2 ">
                <select
                  className="form-select selectMenus p-0 m-0"
                  multiple
                  aria-label="multiple select example"
                  disabled={disableModalButtons}
                >
                  {arrayList &&
                    arrayList.map((op, i) => {
                      return (
                        <option
                          key={i}
                          value={op && op[propsModal[3].propArrayId]}
                          onClick={() => {setValueItemModal(op); dispatch(selectBarrio(op))}}
                        >
                          {op && op[propsModal[3].propArrayOp]}
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
                    } }
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
                    } }
                  >
                    Modificar
                  </button>
                  <button
                    className="btn btn-dark"
                    disabled={disableModalButtons}
                    onClick={() => {
                      functionDelete(urlApi, idAModificar, actionActualizaDelete);
                      setDisableModalButtons(true);
                    } }
                  >
                    Eliminar
                  </button>
                </div>
              </div><div className="col-xl-6">
                  <div className="d-flex flex-column justify-content-start align-items-center">
                  <InputModal
                          disableModal={!disableModalButtons}
                          placeholder={optionsInputs[3].placeholder}
                          nameLabel={optionsInputs[3].label}
                          idInput={optionsInputs[3].idInput}
                          onChangeValues={onChangeValues}
                          value={optionsInputs[3].idInput === "masculino"
                            ? modalValues?.masculino
                            : modalValues?.femenino} />
                  </div>
                  <div
                    className="d-flex flex-column justify-content-center align-items-center"
                    disabled={!disableModalButtons}
                  >
                    {usaEstados && (
                      <TextArea
                        disableModal={!disableModalButtons}
                        idInput={idInputTextArea}
                        onChange={onChangeValues}
                        characterLimit={255}
                      ></TextArea>
                    )}
                  </div>
                </div>
    </>
  )
}

export default ChildBarrios