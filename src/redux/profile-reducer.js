import { createSlice } from '@reduxjs/toolkit'

let initialState = {
    dataPosts: [{ id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It is my first post!", likesCount: 28 }],
    textFieldPost: ""
}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: initialState,
        reducers: {
            add_post(state, action) {
                let newPost = {
                    id: 5,
                    message: state.textFieldPost,
                    likesCount: 0
                };

                state.dataPosts.unshift(newPost);
                state.textFieldPost = ""
            },
            update_text_field_post(state, action) {
                state.textFieldPost = action.payload;
            }
        }
    }
)

export const { add_post, update_text_field_post } = profileSlice.actions

export default profileSlice.reducer














////////////////////////////////////////////////////////////////////////////////////////////////////////////!
// let ADD_POST = "ADD-POST"
// let UPDATE_TEXT_FIELD_POST = "UPDATE-TEXT-FIELD-POST"

// export default function profileReducer(state=initialState, action) {

//     switch (action.type) {
//         case ADD_POST:
//             let newPost = {
//                 id: 5,
//                 message: state.textFieldPost,
//                 likesCount: 0
//             };

//             state.dataPosts.push(newPost);
//             state.textFieldPost = ""
//             return state;

//         case UPDATE_TEXT_FIELD_POST:
//             state.textFieldPost = action.textField;
//             return state;

//         default:
//             return state;
//     }
// }

// export function addPostAC() {
//     return {
//         type: ADD_POST
//     }
// }

// export function updatePostTextAC(text) {
//     return {
//         type: UPDATE_TEXT_FIELD_POST,
//         textField: text
//     }
// }

