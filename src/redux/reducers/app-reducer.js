import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser } from './auth-reducer';
import { getProfileInfo } from './profile-reducer';

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
    return async (dispatch) => {
        let responce = await dispatch(getCurrentUser())
        await dispatch(getProfileInfo(responce.data.id))
        dispatch(setInitializing())
    }
}

export const { setInitializing } = appSlice.actions
export default appSlice.reducer