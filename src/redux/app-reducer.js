
import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from './../api/api';
import { getCurrentUser } from './auth-reducer';

let initialState = {
    initializing: false
}

const appSlice = createSlice(
    {
        name: "app",
        initialState: initialState,
        reducers: {
            setInitializing(state, action) {
                state.initializing = true
            }
        }
    }
)

export function init() {
    return (dispatch) => {
        dispatch(getCurrentUser()).then(() => dispatch(setInitializing()))
    }
}

export const { setInitializing} = appSlice.actions
export default appSlice.reducer