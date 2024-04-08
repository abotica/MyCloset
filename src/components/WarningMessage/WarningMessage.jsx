import { useContext } from "react"
import style from "./WarningMessage.module.css"
import UrlContext from "../UrlContext"
import axios from "axios"


function WarningMessage({setWarningMessage, showWarningMessage, dataId}){
    const {URL, setItems} = useContext(UrlContext)

    function handleOnClickYes(){
        setWarningMessage(!showWarningMessage)
        console.log(URL + `/${dataId}`)
        deleteData()
    }

    async function deleteData(){
        await axios.delete(URL + `/${dataId}`)
        const result = await axios.get(URL)
        const items = result.data
        setItems([...items])
    }

    return (
        <div className={style.messageDiv}>
            Delete item?
            <div className={style.buttonsDiv}>
                <button onClick={handleOnClickYes}>Yes</button>
                <button onClick={() => setWarningMessage(!showWarningMessage)}>No</button>
            </div>
        </div>
    )
}

export default WarningMessage