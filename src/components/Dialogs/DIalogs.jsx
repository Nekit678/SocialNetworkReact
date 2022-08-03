import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom"

function Dialog(props) {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

function Dialogs(props) {

    let dataDialog = [
        { id: 1, name: "Nikita" },
        { id: 2, name: "Milena" },
        { id: 3, name: "Homyak" },
        { id: 4, name: "Busya" },
        { id: 5, name: "Danya" }]

    let dataMes = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Lol kekw" },
        { id: 4, message: "Kavabangaa" }]

    let dialogelem = dataDialog.map(dialog => <Dialog name={dialog.name} id={dialog.id}></Dialog>)
    let meselem = dataMes.map(mes => <Message message={mes.message}></Message>)

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