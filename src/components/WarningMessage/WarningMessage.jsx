import style from "./WarningMessage.module.css"

function WarningMessage({setWarningMessage, showWarningMessage}){

    function handleOnClickYes(){
        setWarningMessage(!showWarningMessage)
        // izbrisi item preko njegovog ID-a
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