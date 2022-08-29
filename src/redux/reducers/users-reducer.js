import { createSlice } from '@reduxjs/toolkit'
import { followAPI, usersAPI } from '../../api/api';

let initialState = {
    users: [],
    totalUsersCount: 100,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    followingFetching: []
}

const usersSlice = createSlice(
    {
        name: 'users',
        initialState: initialState,
        reducers: {
            toggleFollow(state, action) {
                let user = state.users.find(item => item.id === action.payload);
                user.followed = !user.followed
            },
            setUsers(state, action) {
                state.users = [...action.payload]
            },
            setCurrentPage(state, action) {
                state.currentPage = action.payload
            },
            setTotalUsersCount(state, action) {
                state.totalUsersCount = action.payload
            },
            toggleIsFetching(state, action) {
                state.isFetching = action.payload
            },
            toggleFollowingFetching(state, action) {
                action.payload.operation ?
                    state.followingFetching.push(action.payload.id) :
                    state.followingFetching = state.followingFetching.filter(id => id !== action.payload.id)
            }
        }
    }
)


export function getUsers(currentPage, pageSize) {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let response = await usersAPI.getUsers(currentPage, pageSize)
        dispatch(setUsers(response.items))
        dispatch(setTotalUsersCount(response.totalCount))
        dispatch(toggleIsFetching(false))

    }
}


export function followUnfollowUser(userId, apiMethod) {
    return async (dispatch) => {
        dispatch(toggleFollowingFetching({ operation: true, id: userId }));
        let response = await apiMethod(userId)
        if (!response.data.resultCode) {
            dispatch(toggleFollow(userId))
        }
        dispatch(toggleFollowingFetching({ operation: false, id: userId }))
    }
}

export function unfollowUser(userId) {
    return async (dispatch) => {
        dispatch(followUnfollowUser(userId, followAPI.unfollow))
    }
}

export function followUser(userId) {
    return async (dispatch) => {
        dispatch(followUnfollowUser(userId, followAPI.follow))
    }
}

export const { toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingFetching } = usersSlice.actions
export default usersSlice.reducer