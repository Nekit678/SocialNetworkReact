import s from "./Dialogs.module.css"
import Dialog from "./DIalog/Dialog"
import Message from "./Message/Message"
import React from "react"
import { updateMessageTextAC } from "../../redux/state"

let newMessageElement = React.createRef()
function sendMessage() {
    alert(newMessageElement.current.value)
}

function Dialogs(props) {
    
    function updateField() {
        props.dispatch(updateMessageTextAC())
    }

    let dialogelem = props.state.dataDialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} img={dialog.img}></Dialog>)
    let meselem = props.state.dataMessages.map(mes => <Message message={mes.message}></Message>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogelem}
            </div>
            <div className={s.messages}>
                {meselem}
                <p></p>
                <textarea onChange={updateField} value={props.state.textFieldMessage} ref={newMessageElement} />
                <p></p>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;