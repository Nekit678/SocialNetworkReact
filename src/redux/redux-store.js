import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/app-reducer'
import authReducer from './reducers/auth-reducer'
import dialogsReducer from './reducers/dialogs-reducer'
import profileReducer from './reducers/profile-reducer'
import sidebarReducer from './reducers/sidebar-reducer'
import usersReducer from './reducers/users-reducer'

let store = configureStore({
    reducer: {
        profilePage: profileReducer,
        dialogsPage: dialogsReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer,
        app: appReducer
    }
})

window.store = store;

export default store;