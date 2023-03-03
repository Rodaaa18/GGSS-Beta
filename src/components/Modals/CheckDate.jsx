import React from 'react'
import { useState } from 'react'

export const CheckDate = ({
    nameInput,
    display,
    checked,
    value,
    disabled,
    idInputCheck,
    onChange,
    disableModal,
    }) => 
{
  console.log(checked)
  const [disable, setDisable ] = useState(false)
  return (
    <div className="col-sm-11 formulario__grupo__inputs mt-2">
        <div class=" form-check p-0">
        <label class="form-check-label" for="flexCheckDefault">
          {nameInput}
        </label>
        </div>
      <div className="col-sm-11 d-flex flex-row justify-content-sm-between align-items-center ">
        <input
          className="col-sm-6 form-check-input "
          type="checkbox"
          id="flexCheckChecked"
          checked={checked}
          onChange={(e) => onChange(e.target.checked, "flexCheckChecked" )}
          disabled={disableModal}
          onClick={()=> setDisable(!checked)}
        />
        <input

          id={idInputCheck}
          className="col-sm-11 classDate "
          name={idInputCheck}
          type="date"
          value={value}
          disabled={!checked}
          onChange={(e) => onChange(e.target.value, idInputCheck )}
        />
      </div>













    </div>
  )
}
