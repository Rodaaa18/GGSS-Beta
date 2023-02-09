import React from 'react'
import { useDispatch } from 'react-redux'
import { getDatoExtraSelected } from '../../redux/actions/extrasActions'
import "./TableBootstrap.css";

const TableExtras = ({columns, datosExtraEmpleado, descripcion}) => {
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
                    // console.log(item)
                    return(
                            <tr>
                                <th scope="row"> <input type="radio" name="selectExtra" id="selectExtra" onClick={()=> {dispatch(getDatoExtraSelected(item))}} /> </th>
                                <td>{item?.fecha.substring(0, item?.fecha.length -9)}</td>
                                <td>{descripcion[0].descripcion}</td>
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