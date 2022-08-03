import s from "./Dialogs.module.css"
import Dialog from "./DIalog/DIalog"
import Message from "./Message/Message"

function Dialogs(props) {
        
    let dialogelem = props.dataDialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id}></Dialog>)
    let meselem = props.dataMessages.map(mes => <Message message={mes.message}></Message>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogelem}
            </div>
            <div className={s.messages}>
                {meselem}
            </div>
        </div>
    );
}

export default Dialogs;