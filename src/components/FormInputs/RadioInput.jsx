
function RadioInput({labelText, radioValues, radioLabels, onChange, radioName, item, showLabel}){
    return (
        <label>
        {showLabel && labelText}
        <br />
                {radioValues.map((radioValue, index) => {
                   return (
                    <div key={radioValue}>
                    <input
                    key={radioValue}
                    type="radio"
                    value={radioValue}
                    onChange={onChange}
                    name={radioName}// Provjerit jel ovo dole radi
                    checked={radioValue == item.onSale || radioValue == item.onSaleEdit}
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