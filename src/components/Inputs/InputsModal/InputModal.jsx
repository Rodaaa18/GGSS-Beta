import './InputModal.css'

const InputModal = ({
    nameLabel,
    placeHolder,
    inputId,
    value,
    action,
    onChange
}) => {


    

    return (

        <div className="inputModalContainer">

            <div className="row mb-3 inputLabelContainer">
                <label htmlFor="inputPassword3" className="col-sm-4 col-form-label">{nameLabel}:</label>
                <div className="col-sm-8">
                   {/*  <input type="text" className="inputModal" id={inputId} name={inputId} placeholder={placeHolder} value={value} onChange={(e) => onChange(e.target.checked, inputId )}/> */}
                    <input
                        type="text"
                        className="inputModal"
                        id={inputId}
                        name={inputId}
                        placeholder={placeHolder}
                        value={value}
                        // onChange={(e) => onChange(e.target.value, inputId)} // ON CHANGE NUEVO PARA LA NUEVA FUNCION (NO ANDA)
                        onChange={(e) => onChange(e.target.value, inputId)}

                    />
                </div>
            </div>

        </div>
    )
}

export default InputModal