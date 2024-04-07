import { useId } from "react"
import style from "./ItemsInput.module.css"

function ItemsInput(){
    const id = useId()
return(
    <div className={style.mainDiv}>
        <form className={style.form}>
            <select>

            </select>
            <br/>
            <select>

            </select>
            <br/>
            <input type="color"></input>

        </form>
    </div>
)
}

export default ItemsInput