import "./InputLabel.css"


const InputLabel = ({
    nameLabel,
    placeholder,
    idInput,
    value,
    action,
    onChangeValues,
    disableModal
}) => {

    
    return (
        <div className="">
            <div className="row mb-1 ">
                <label for="inputPassword3" className="col-sm-2">{nameLabel}:</label>
                <div className="col-sm-7 mr-3 pl-4">
                    <input
                        type="text"
                        className="inputModal"
                        id={idInput}
                        name={idInput}
                        placeholder={placeholder}
                        value={value}
                        // onChange={(e) => onChange(e.target.value, inputId)} // ON CHANGE NUEVO PARA LA NUEVA FUNCION (NO ANDA)
                        onChange={(e) => onChangeValues(e.target.value, idInput)}
                        disabled={disableModal}
                    />
                </div>
            </div>
        </div>
    )
}

export default InputLabel