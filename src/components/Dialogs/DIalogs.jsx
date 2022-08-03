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

    let data = [
        { id: 1, name: "Nikita" },
        { id: 2, name: "Milena" },
        { id: 3, name: "Homyak" },
        { id: 4, name: "Busya" },
        { id: 5, name: "Danya" }]

    let dataMes = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Lol kekw" },
        { id: 4, message: "Kavagangaa" }]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={data[0].name} id={data[0].id}></Dialog>
                <Dialog name={data[1].name} id={data[1].id}></Dialog>
                <Dialog name="Milena" id="2"></Dialog>
                <Dialog name="Homyak" id="3"></Dialog>
                <Dialog name="Busya" id="4"></Dialog>
                <Dialog name="Danya" id="5"></Dialog>
            </div>
            <div className={s.messages}>
                <Message message={dataMes[0].message}></Message>
                <Message message={dataMes[1].message}></Message>
                <Message message={dataMes[2].message}></Message>
                <Message message="How are you?"></Message>
                <Message message="Lol kekw"></Message>
            </div>
        </div>
    );
}

export default Dialogs;