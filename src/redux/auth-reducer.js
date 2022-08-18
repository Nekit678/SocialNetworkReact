
import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    userId: null,
    login:null,
    email:null,
    isAuth: false
}

const authSlice = createSlice(
    {
        name: "auth",
        initialState: initialState,
        reducers:{
            setAuth(state,action)
            {
                state.email = action.payload.email
                state.login = action.payload.login
                state.userId = action.payload.id
                state.isAuth = true
            }
        }
    }
)


export const {setAuth} = authSlice.actions
export default authSlice.reducer