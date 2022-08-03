import s from "./Dialogs.module.css"
import { NavLink } from "react-router-dom"

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsdialogs}>
                <div className={s.dialog}>
                <NavLink to='/dialogs/1' className={navData => navData.isActive ? s.active : s.dialog}>Nikita</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/2' className={navData => navData.isActive ? s.active : s.dialog}>Milena</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/3' className={navData => navData.isActive ? s.active : s.dialog}>Homyak</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/4' className={navData => navData.isActive ? s.active : s.dialog}>Busya</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/5' className={navData => navData.isActive ? s.active : s.dialog}>Danya</NavLink>
                </div>
            </div>
            <div className={s.messages}>
               <div className={s.message}>Hi</div>
               <div className={s.message}>How are you?</div>
               <div className={s.message}>Lol kekw</div>
            </div>
        </div>
    );
}

export default Dialogs;