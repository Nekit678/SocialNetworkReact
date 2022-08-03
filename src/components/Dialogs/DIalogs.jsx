import s from "./Dialogs.module.css"

function Dialogs(props) {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Nikita
                </div>
                <div className={s.dialog + ' ' + s.active}>
                    Milena
                </div>
                <div className={s.dialog}>
                    Homyak
                </div>
                <div className={s.dialog}>
                    Busya
                </div>
                <div className={s.dialog}>
                    Danya
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