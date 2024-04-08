

function FieldInput({ labelText, inputType, inputName, inputPlaceholder, inputValue, onChange, numberStep, showLabel }) {
    return (
        <label>
            {showLabel && labelText}
            <br />
            {inputType == "number" && <input value={inputValue} onChange={onChange} name={inputName} type={inputType} placeholder={inputPlaceholder} step={numberStep} required></input>}
            {inputType == "text" && <input value={inputValue} onChange={onChange} name={inputName} type={inputType} placeholder={inputPlaceholder} required></input>}
            {inputType == "color" && <input value={inputValue} onChange={onChange} name={inputName} type={inputType} required></input>}
            {inputType == "date" && <input value={inputValue} onChange={onChange} name={inputName} type={inputType} required></input>}
        </label>
    )
}

export default FieldInput