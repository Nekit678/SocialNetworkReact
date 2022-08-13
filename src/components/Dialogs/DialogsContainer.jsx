import Dialogs from "./DIalogs";
import { send_message, update_text_field_message } from "../../redux/dialogs-reducer"
import Dialog from "./DIalog/Dialog";
import Message from "./Message/Message";
import StoreContext from "../../StoreContext";

function DialogsContainer(props) {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let dialogelem = state.dialogsPage.dataDialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} img={dialog.img}></Dialog>);
                let meselem = state.dialogsPage.dataMessages.map(mes => <Message message={mes.message}></Message>);

                function sendMessage() {
                    store.dispatch(send_message())
                }
            
                function updateField(text) {
                    store.dispatch(update_text_field_message(text))
                }

                return <Dialogs updateField={updateField} sendMessage={sendMessage}
                    textFieldMessage={state.dialogsPage.textFieldMessage}
                    dialogelem={dialogelem}
                    meselem={meselem}></Dialogs>
            }}
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;