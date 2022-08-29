import { createSlice } from '@reduxjs/toolkit'
import { profileAPI } from '../../api/api';

let initialState = {
    userProfile: null,
    dataPosts: [{ id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It is my first post!", likesCount: 28 }],
    textFieldPost: "",
    status: ""
}

const profileSlice = createSlice(
    {
        name: 'profile',
        initialState: initialState,
        reducers: {
            add_post(state, action) {
                let newPost = {
                    id: 5,
                    message: action.payload,
                    likesCount: 0
                };
                state.dataPosts.unshift(newPost);
            },
            setUserProfile(state, action) {
                state.userProfile = { ...action.payload }
            },
            setStatus(state, action) {
                state.status = action.payload
            }
        }
    }
)

export function getProfileInfo(userId) {
    return async (dispatch) => {
        let response = await profileAPI.getProfileInfo(userId)
        dispatch(setUserProfile(response))
    }
}


export function getUserStatus(userId) {
    return async (dispatch) => {
        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response))
    }

}


export function updateStatus(status) {
    return async (dispatch) => {
        let response = await profileAPI.updateStatus(status)
        if (!response.resultCode) {
            dispatch(setStatus(status))
        }
    }

}



export const { add_post, setUserProfile, setStatus } = profileSlice.actions

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

