import React, { useState } from 'react'
import './TextArea.css'


const TextArea = ({ characterLimit = 255, onChange,idInput, disableModal }) => {
    const [input, setInput] = useState('');

    function handleChange(event) {
        const newInput = event.target.value;
        setInput(newInput);
        onChange(event.target.value,idInput )
      }
    
      const charactersLeft = characterLimit - input.length;

   
return (
    <>

<div class="count-container">
        <form>
          <div class="input-group contTxtArea">
            <div className="form__grupo__label pl-1 mt-3">
              <label
                className="form__grupo__label__label m-0"
                htmlFor="legajo"
              >
                Observaciones
              </label>
              <div className="input-group">
                <textarea
                  disabled={disableModal}
                  placeholder="Ingrese Observaciones "
                  maxLength={characterLimit}
                  id={idInput}
                  name={idInput}
                  className="bg-white w-100 form-control text-black fs-6 pt-0 pb-0"
                  onChange={handleChange}
                  value={input}
                  cols="51" 
                  rows="6"
                />
               {/* (caracteres_restantes < 10) ? "Contador de caracteres: " + caracteres_restantes : "" */}
               
               
                <div class="input-msg text-black">
                  {/* Character Count: {input.length} */}
                  {/* Characters left: {charactersLeft} */}
                  </div>
                {charactersLeft < 15 && (
                  <p className="text-red">Sólo quedan {charactersLeft} caracteres</p>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
)
}

export default TextArea





