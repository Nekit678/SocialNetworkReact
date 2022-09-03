
import { createSlice } from '@reduxjs/toolkit';
import { authAPI, securityAPI } from '../../api/api';

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false,
    captcha: null
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
                state.login = null
                state.userId = null
                state.isAuth = false
            },
            setCaptcha(state, action) {
                state.captcha = action.payload;
            },
            resetCaptcha(state,action){
                state.captcha = null
            }
        }
    }
)

export function getCurrentUser() {
    return async (dispatch) => {
        let response = await authAPI.getCurrentUser()
        if (!response.resultCode) {
            dispatch(setAuth(response.data))
        }
        return response
    }
}

export function login(formInfo, setStatus) {
    return async (dispatch) => {
        let response = await authAPI.login(formInfo)
        setStatus("")
        if (!response.resultCode) {
            dispatch(getCurrentUser())
        }
        else {
            if (response.resultCode === 10) {
                dispatch(getCaptcha())
            }
            setStatus(response.messages)
        }
        dispatch(resetCaptcha())
    }
}

export function logout() {
    return async (dispatch) => {
        let response = await authAPI.logout()
        if (!response.resultCode) {
            dispatch(resetAuth())
        }
    }
}

export function getCaptcha() {
    return async (dispatch) => {
        const response = await securityAPI.getCaptcha()
        dispatch(setCaptcha(response.url))
    }
}

export const { setAuth, resetAuth, setCaptcha, resetCaptcha} = authSlice.actions
export default authSlice.reducer