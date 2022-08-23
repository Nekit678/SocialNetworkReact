import Dialogs from "./Dialogs";
import { send_message, update_text_field_message } from "../../redux/dialogs-reducer"
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';

import React, { useEffect } from "react"
import {useNavigate} from 'react-router-dom'

function DialogsContainer(props) {

    const state = useSelector(state => state.dialogsPage)
    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.isAuth)

    let dialogelem = state.dataDialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id} img={dialog.img}></Dialog>);
    let meselem = state.dataMessages.map(mes => <Message key={mes.id} message={mes.message}></Message>);

    let navigate = useNavigate()

    useEffect(()=>{
        if (!isAuth){
            navigate("/login", {replace:true})
        }
    },[isAuth])

    return (
        <Dialogs updateField={(text) => dispatch(update_text_field_message(text))}
            sendMessage={(t) => dispatch(send_message())}
            textFieldMessage={state.textFieldMessage}
            dialogelem={dialogelem}
            meselem={meselem} isAuth = {isAuth}></Dialogs>
    )
}

export default DialogsContainer;

// function DialogsContainer1(props) {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();


//                 function sendMessage() {
//                     store.dispatch(send_message())
//                 }

//                 function updateField(text) {
//                     store.dispatch(update_text_field_message(text))
//                 }
//             }}
//         </StoreContext.Consumer>
//     )
// }
