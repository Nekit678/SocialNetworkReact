import s from "./Dialogs.module.css"
import React from "react"

function Dialogs(props) {

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogelem}
            </div>
            <div className={s.messages}>
                {props.meselem}
                <p></p>
                <textarea onChange={(event)=>{props.updateField(event.target.value)}} value={props.textFieldMessage}/>
                <p></p>
                <button onClick={props.sendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;