import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom"

function Dialog(props) {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/'+props.id} className={navData => navData.isActive ? s.active : s.dialog}>{props.name}</NavLink>
        </div>
    )
}

function Message(props){
    return(
        <div className={s.message}>{props.message}</div>
    )
}

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name="Nikita" id="1"></Dialog>
                <Dialog name="Milena" id="2"></Dialog>
                <Dialog name="Homyak" id="3"></Dialog>
                <Dialog name="Busya" id="4"></Dialog>
                <Dialog name="Danya" id="5"></Dialog>
            </div>
            <div className={s.messages}>
                <Message message="Hi"></Message>
                <Message message="How are you?"></Message>
                <Message message="Lol kekw"></Message>
            </div>
        </div>
    );
}

export default Dialogs;