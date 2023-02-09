import React from 'react'
import { useDispatch } from 'react-redux'
import { getDatoExtraSelected } from '../../redux/actions/extrasActions'
import "./TableBootstrap.css";

const TableExtras = ({columns, datosExtraEmpleado, descripcion, datosExtras}) => {
    const dispatch = useDispatch();
  return (
    <table class="table table-danger contDocumentacion">
        <thead>
            <tr >
                {
                    columns.map((col, i)=>{
                        return(
                            
                                <th key={i} scope="col">{col}</th>
                            
                        )
                    })
                }   
            </tr>         
        </thead>
        <tbody>
            {
                datosExtraEmpleado && datosExtraEmpleado.map((item, i)=>{
                    let resultDescripcion = descripcion && descripcion.filter((de)=> {return(de.idDatoExtra === item.idDatoExtra)});
            
                    return(
                            <tr>
                                <th scope="row"> <input type="radio" name="selectExtra" id="selectExtra" onClick={()=> {dispatch(getDatoExtraSelected(item))}} /> </th>
                                <td>{item?.fecha.substring(0, item?.fecha.length -9)}</td>
                                <td>{resultDescripcion && resultDescripcion[0]?.descripcion}</td>
                                <td>{item?.obs}</td>
                            </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default TableExtras