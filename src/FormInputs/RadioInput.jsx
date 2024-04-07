
function RadioInput({labelText, radioValues, radioLabels, onChange, radioName, item}){
    return (
        <label>
        {labelText}
        <br />
                {radioValues.map((radioValue, index) => {
                   return (
                    <div key={radioValue}>
                    <input
                    key={radioValue}
                    type="radio"
                    value={radioValue}
                    onChange={onChange}
                    name={radioName}
                    checked={radioValue == item.onSale}
                    required
                    ></input>
                    {radioLabels[index]}
                </div>
                   )
                    
                    
                })}  
        </label>
    )
}

export default RadioInput