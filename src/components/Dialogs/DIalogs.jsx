import s from "./Dialogs.module.css"
import Dialog from "./DIalog/Dialog"
import Message from "./Message/Message"

function Dialogs(props) {
        
    let dialogelem = props.state.dataDialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} img={dialog.img}></Dialog>)
    let meselem = props.state.dataMessages.map(mes => <Message message={mes.message}></Message>)

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