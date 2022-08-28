import Users from "./Users";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { followUser, unfollowUser, getUsers } from "../../redux/reducers/users-reducer";
import { useEffect } from 'react';
import Preloader from './../common/Preloader/Preloader';
import {getUsersPageInfo} from './../../redux/selectors/users-selector';



function UsersContainer(props) {

    const dispatch = useDispatch()
    const usersPageInfo = useSelector(getUsersPageInfo)
    
    // const totalUsersCount = useSelector((state) => getTotalUsersCount(state))
    // let pagesCount = Math.ceil(state.totalUsersCount / state.pageSize)
    let pages = [];

    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    useEffect(() => {
        dispatch(getUsers(usersPageInfo.currentPage, usersPageInfo.pageSize))
    }, [dispatch])

    function onPageChanged(page) {
        dispatch(getUsers(page, usersPageInfo.pageSize))
    }

    function unfollow(userId) {
        dispatch(unfollowUser(userId))
    }

    function follow(userId) {
        dispatch(followUser(userId))
    }

    return (
        <div>
            {usersPageInfo.isFetching ? <Preloader></Preloader> : <Users isFetching={usersPageInfo.isFetching} pages={pages} currentPage={usersPageInfo.currentPage}
                users={usersPageInfo.users} follow={(userId) => follow(userId)}
                unfollow={(userId) => unfollow(userId)} onPageChanged={onPageChanged} followingFetching={usersPageInfo.followingFetching} ></Users>}
        </div>
    )
}

export default UsersContainer;