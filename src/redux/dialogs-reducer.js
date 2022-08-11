let UPDATE_TEXT_FIELD_MESSAGE = "UPDATE-TEXT-FIELD-MESSAGE"
let SEND_MESSAGE = "SEND-MESSAGE"

function dialogsReducer(state, action) {

    switch (action.type) {
        case SEND_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.textFieldMessage
            };

            state.dataMessages.push(newMessage)
            state.textFieldMessage = ""
            return state;

        case UPDATE_TEXT_FIELD_MESSAGE:
            state.textFieldMessage = action.textField;
            return state;

        default:
            return state;
    }
}

export function sendMessageAC() {
    return {
        type: SEND_MESSAGE
    }
}

export function updateMessageTextAC(text) {
    return {
        type: UPDATE_TEXT_FIELD_MESSAGE,
        textField: text
    }
}

export default dialogsReducer