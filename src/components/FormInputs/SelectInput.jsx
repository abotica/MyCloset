

function SelectInput({labelText, selectValue, selectName, onChange, optionValues, innerText, showLabel}){
    return (
        <label>
        {showLabel && labelText}
        <br />
            <select name={selectName} onChange={onChange} value={selectValue} required>
                {optionValues.map( (optValue, index) => {
                    return optValue == "" ? <option key={optValue} value={optValue} hidden>{innerText[index]}</option> : <option key={optValue} value={optValue}>{innerText[index]}</option>
                })}
            </select>
        </label>
    )
}

export default SelectInput