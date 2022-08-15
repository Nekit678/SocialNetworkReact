import Users from "./Users";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setCurrentPage, setTotalUsersCount, setUsers, toggleFollow, toggleIsFetching } from "../../redux/users-reducer";
import { useEffect } from 'react';
import axios from 'axios';
import Preloader from './../common/Preloader/Preloader';



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
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${state.currentPage}&count=${state.pageSize}`).then(
            response => {
                dispatch(setUsers(response.data.items))
                dispatch(setTotalUsersCount(response.data.totalCount))
                dispatch(toggleIsFetching(false))
            })
    }, [])

    function onPageChanged(page) {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(page))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${state.pageSize}`).then(
            response => {
                dispatch(setUsers(response.data.items))
                dispatch(toggleIsFetching(false))
            })
    }


    return (
        <div>
            {state.isFetching ? <Preloader></Preloader>: <Users isFetching={state.isFetching} pages={pages} currentPage={state.currentPage} users={state.users} follow={(id) => dispatch(toggleFollow(id))}
                    unfollow={(id) => dispatch(toggleFollow(id))} onPageChanged={onPageChanged} ></Users>}
        </div>
    )
}

export default UsersContainer;