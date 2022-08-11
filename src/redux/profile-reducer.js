let ADD_POST = "ADD-POST"
let UPDATE_TEXT_FIELD_POST = "UPDATE-TEXT-FIELD-POST"

function profileReducer(state, action) {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.textFieldPost,
                likesCount: 0
            };

            state.dataPosts.push(newPost);
            state.textFieldPost = ""
            return state;

        case UPDATE_TEXT_FIELD_POST:
            state.textFieldPost = action.textField;
            return state;

        default:
            return state;
    }
}

export function addPostAC() {
    return {
        type: ADD_POST
    }
}

export function updatePostTextAC(text) {
    return {
        type: UPDATE_TEXT_FIELD_POST,
        textField: text
    }
}

export default profileReducer