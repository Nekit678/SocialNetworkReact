
import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from './../api/api';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authSlice = createSlice(
    {
        name: "auth",
        initialState: initialState,
        reducers: {
            setAuth(state, action) {
                state.email = action.payload.email
                state.login = action.payload.login
                state.userId = action.payload.id
                state.isAuth = true
            }
        }
    }
)

export function getCurrentUser() {
    return (dispatch) => {
        authAPI.getCurrentUser().then(
            response => {
                if (!response.resultCode) {
                    dispatch(setAuth(response.data))
                }
            }
        )
    }
}

export function login(formInfo){
    return (dispatch)=>{
        authAPI.login(formInfo).then(
            response =>{
                if (!response.resultCode){
                    dispatch(getCurrentUser())
                }
            }
        )
    }
}

export const { setAuth } = authSlice.actions
export default authSlice.reducer