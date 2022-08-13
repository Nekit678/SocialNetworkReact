import s from "./Dialogs.module.css"
import Dialog from "./DIalog/Dialog"
import Message from "./Message/Message"
import React from "react"
import { send_message, update_text_field_message } from "../../redux/dialogs-reducer"
// import { sendMessageAC, updateMessageTextAC } from "../../redux/dialogs-reducer"




function Dialogs(props) {

    function sendMessage() {
        props.dispatch(send_message())
    }
    
    function updateField(event) {
        props.dispatch(update_text_field_message(event.target.value))
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
                <textarea onChange={updateField} value={props.state.textFieldMessage}/>
                <p></p>
                <button onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;