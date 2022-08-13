import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    dataDialogs: [{ id: 1, name: "Nikita", img: "https://i.pinimg.com/236x/2c/60/cb/2c60cb34a209daa60ee0b6c53cd35688.jpg" },
    { id: 2, name: "Milena", img: "https://anime-star.ru/wp-content/uploads/2021/12/YArkie-fioletovye-avatarki-anime_08.jpg" },
    { id: 3, name: "Homyak", img: "https://www.meme-arsenal.com/memes/6eb0717c1db4fd398f312ef918b00eb3.jpg" },
    { id: 4, name: "Busya", img: "https://cdn.discordapp.com/avatars/280994603945951232/4ae6870ead41140b5741b8b240880211.webp?size=128" },
    { id: 5, name: "Danya", img: "https://bipbap.ru/wp-content/uploads/2021/07/1551512888_2-730x617.jpg" }],
    dataMessages: [{ id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Lol kekw" },
    { id: 4, message: "Kavabangaa" }],
    textFieldMessage: ""
}

const dialogsSlice = createSlice(
    {
        name: 'dialog',
        initialState: initialState,
        reducers: {
            send_message(state, action) {
                let newMessage = {
                    id: 5,
                    message: state.textFieldMessage
                };

                state.dataMessages.push(newMessage)
                state.textFieldMessage = ""
            },
            update_text_field_message(state,action){
                state.textFieldMessage = action.payload;
            }
        }
    }
)

export const {send_message, update_text_field_message} = dialogsSlice.actions
export default dialogsSlice.reducer












// //////////////////////////////////////////////////////////////////////////////////////////////!
// let UPDATE_TEXT_FIELD_MESSAGE = "UPDATE-TEXT-FIELD-MESSAGE"
// let SEND_MESSAGE = "SEND-MESSAGE"

// function dialogsReducer(state = initialState, action) {

//     switch (action.type) {
//         case SEND_MESSAGE:
//             let newMessage = {
//                 id: 5,
//                 message: state.textFieldMessage
//             };

//             state.dataMessages.push(newMessage)
//             state.textFieldMessage = ""
//             return state;

//         case UPDATE_TEXT_FIELD_MESSAGE:
//             state.textFieldMessage = action.textField;
//             return state;

//         default:
//             return state;
//     }
// }

// export function sendMessageAC() {
//     return {
//         type: SEND_MESSAGE
//     }
// }

// export function updateMessageTextAC(text) {
//     return {
//         type: UPDATE_TEXT_FIELD_MESSAGE,
//         textField: text
//     }
// }

// export default dialogsReducer