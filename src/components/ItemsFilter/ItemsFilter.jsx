import { useState } from "react"
import style from "./ItemsFilter.module.css"

function ItemsFilter(){
    const [filter, setFilter] = useState("")

    function handleOnChange(event){
        setFilter(event.target.value)
    }

return (
    <div className={style.mainDiv}>
        Filter options:
        <label>
        <input name="filter" onChange={handleOnChange} type="radio" value={"xl"}></input>
         XL
        </label>

        <label><input name="filter" onChange={handleOnChange} type="radio" value={"xxl"}></input>XXL</label>
       
        <label><input name="filter" onChange={handleOnChange} type="radio" value={"universal"}></input>Universal</label>

    </div>
)
}

export default ItemsFilter