import style from "./Options.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark, faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import WarningMessage from "../WarningMessage/WarningMessage"
import { useRef, useState } from "react"

function Options() {
    const [showWarningMessage, setWarningMessage] = useState(false)

    function handleOnClick(){
        setWarningMessage(!showWarningMessage)
    }

    return (<>
        {showWarningMessage && <WarningMessage setWarningMessage={setWarningMessage} showWarningMessage={showWarningMessage}></WarningMessage>}
        <div className={style.optionsDiv}>
        <button disabled={showWarningMessage} className={style.options}><FontAwesomeIcon  icon={faPenToSquare} size="2xl" /></button>
        <button disabled={showWarningMessage} onClick={handleOnClick} className={style.options}><FontAwesomeIcon  icon={faCircleXmark} size="2xl" /></button>
        </div>
        </>
    )
}

export default Options