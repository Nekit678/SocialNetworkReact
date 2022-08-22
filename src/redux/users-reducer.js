import { createSlice } from '@reduxjs/toolkit'
import { followAPI, usersAPI } from './../api/api';

let initialState = {
    users: [
        // {
        //     id: 1, photoUrl: "https://i.pinimg.com/236x/2c/60/cb/2c60cb34a209daa60ee0b6c53cd35688.jpg", followed: false, fullName: "Nikita", status: "Just Lena",
        //     location: { city: "Omsk", country: "Russia" }
        // },
        // {
        //     id: 2, photoUrl: "https://anime-star.ru/wp-content/uploads/2021/12/YArkie-fioletovye-avatarki-anime_08.jpg", followed: true, fullName: "Milena", status: "I am Mommy!",
        //     location: { city: "Kormilovka", country: "Russia" }
        // },
        // {
        //     id: 3, photoUrl: "https://www.meme-arsenal.com/memes/6eb0717c1db4fd398f312ef918b00eb3.jpg", followed: true, fullName: "Homyak", status: "I like food!",
        //     location: { city: "Omsk", country: "Russia" }
        // }
    ],
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


export function getUsers(currentPage,pageSize){
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        usersAPI.getUsers(currentPage, pageSize).then(
            response => {
                dispatch(setUsers(response.items))
                dispatch(setTotalUsersCount(response.totalCount))
                dispatch(toggleIsFetching(false))
            })
    }
}


export function unfollowUser(userId){
    return (dispatch) =>{
        dispatch(toggleFollowingFetching({operation:true,id:userId}))
        followAPI.unfollow(userId).then(
            response => {
                if (!response.data.resultCode) {
                    dispatch(toggleFollow(userId))
                }
                dispatch(toggleFollowingFetching({operation:false,id:userId}))
            })
    }
}

export function followUser(userId){
    return (dispatch) =>{
        dispatch(toggleFollowingFetching({operation:true,id:userId}))
        followAPI.follow(userId).then(
            response => {
                if (!response.data.resultCode) {
                    dispatch(toggleFollow(userId))
                }
                dispatch(toggleFollowingFetching({operation:false,id:userId}))
            })
    }
}

export const { toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingFetching } = usersSlice.actions
export default usersSlice.reducer