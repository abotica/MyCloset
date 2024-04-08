import style from "./Options.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleCheck, faCircleXmark, faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import WarningMessage from "../WarningMessage/WarningMessage"
import { useRef, useState } from "react"
import { faXmark } from "@fortawesome/free-solid-svg-icons"

function Options({dataId, setEditField, editField, handlePutRequest}) {
    const [showWarningMessage, setWarningMessage] = useState(false)

    function handleOnClickDelete(){
        setWarningMessage(!showWarningMessage)
    }

    function handleOnClickEdit(){
        setEditField(!editField)
    }


    return (<>
        {showWarningMessage && <WarningMessage setWarningMessage={setWarningMessage} showWarningMessage={showWarningMessage} dataId={dataId}></WarningMessage>}
        <div className={style.optionsDiv}>
        {editField ? <button disabled={showWarningMessage} onClick={() => {handleOnClickEdit(); handlePutRequest()}} className={style.options}><FontAwesomeIcon  icon={faCircleCheck} size="2xl" /></button> : <button disabled={showWarningMessage} onClick={handleOnClickEdit} className={style.options}><FontAwesomeIcon  icon={faPenToSquare} size="2xl" /></button>}
        {!editField && <button disabled={showWarningMessage} onClick={handleOnClickDelete} className={style.options}><FontAwesomeIcon  icon={faXmark} size="2xl" /></button>}
        {editField && <button disabled={showWarningMessage} onClick={handleOnClickEdit} className={style.options}><FontAwesomeIcon  icon={faCircleXmark} size="2xl" /></button>}
        </div>
        </>
    )
}

export default Options