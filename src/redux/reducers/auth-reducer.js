
import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../../api/api';

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
            },
            resetAuth(state, action) {
                state.email = null
                state.login = String(Math.random())
                // state.userId = null
                // state.isAuth = false
            }
        }
    }
)

export function getCurrentUser() {
    return async (dispatch) => {
        let response = await authAPI.getCurrentUser()
        if (!response.resultCode) {
            dispatch(setAuth(response.data))
            return response
        }
    }
}

export function login(formInfo, setStatus) {
    return async (dispatch) => {
        let response = await authAPI.login(formInfo)
        setStatus("")
        if (!response.resultCode) {
            dispatch(getCurrentUser())
        }
        else (
            setStatus(response.messages)
        )
    }
}

export function logout() {
    return async (dispatch) => {
        // let response = await authAPI.logout()
        // if (!response.resultCode) {
        //     dispatch(resetAuth())
        // }
        dispatch(resetAuth())
    }
}

export const { setAuth, resetAuth } = authSlice.actions
export default authSlice.reducer