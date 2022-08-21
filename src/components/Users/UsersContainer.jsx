import Users from "./Users";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setCurrentPage, setTotalUsersCount, setUsers, toggleFollow, toggleIsFetching } from "../../redux/users-reducer";
import { useEffect } from 'react';
import Preloader from './../common/Preloader/Preloader';
import { followAPI, usersAPI } from './../../api/api';



function UsersContainer(props) {

    const dispatch = useDispatch()
    const state = useSelector(state => state.usersPage)

    // let pagesCount = Math.ceil(state.totalUsersCount / state.pageSize)
    let pages = [];

    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    useEffect(() => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(state.currentPage,state.pageSize).then(
            response => {
                dispatch(setUsers(response.items))
                dispatch(setTotalUsersCount(response.totalCount))
                dispatch(toggleIsFetching(false))
            })
    }, [])

    function onPageChanged(page) {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        usersAPI.getUsers(page,state.pageSize).then(
            response => {
                dispatch(setUsers(response.items))
                dispatch(toggleIsFetching(false))
            })
    }


    function unfollow(userId) {
        followAPI.unfollow(userId).then(
            response => {
                if (!response.data.resultCode) {
                    dispatch(toggleFollow(userId))
                }
            })
    }

    function follow(userId) {
        followAPI.follow(userId).then(
            response => {
                if (!response.data.resultCode) {
                    dispatch(toggleFollow(userId))
                }
            })
    }


    return (
        <div>
            {state.isFetching ? <Preloader></Preloader> : <Users isFetching={state.isFetching} pages={pages} currentPage={state.currentPage}
                users={state.users} follow={(userId) => follow(userId)}
                unfollow={(userId) => unfollow(userId)} onPageChanged={onPageChanged} ></Users>}
        </div>
    )
}

export default UsersContainer;