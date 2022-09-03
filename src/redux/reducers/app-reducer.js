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
        let response = await dispatch(getCurrentUser())
        if (!response.resultCode){
            await dispatch(getProfileInfo(response.data.id))
        }
        dispatch(setInitializing())
    }
}

export const { setInitializing } = appSlice.actions
export default appSlice.reducer