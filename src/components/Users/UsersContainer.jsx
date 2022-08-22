import Users from "./Users";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { followUser, unfollowUser, getUsers } from "../../redux/users-reducer";
import { useEffect } from 'react';
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
        dispatch(getUsers(state.currentPage, state.pageSize))
    }, [])

    function onPageChanged(page) {
        dispatch(getUsers(page, state.pageSize))
    }

    function unfollow(userId) {
        dispatch(unfollowUser(userId))
    }

    function follow(userId) {
        dispatch(followUser(userId))
    }

    return (
        <div>
            {state.isFetching ? <Preloader></Preloader> : <Users isFetching={state.isFetching} pages={pages} currentPage={state.currentPage}
                users={state.users} follow={(userId) => follow(userId)}
                unfollow={(userId) => unfollow(userId)} onPageChanged={onPageChanged} followingFetching={state.followingFetching} ></Users>}
        </div>
    )
}

export default UsersContainer;