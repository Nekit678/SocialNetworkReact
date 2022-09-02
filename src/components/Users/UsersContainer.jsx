import Users from "./Users";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { followUser, unfollowUser, getUsers } from "../../redux/reducers/users-reducer";
import { useEffect } from 'react';
import Preloader from './../common/Preloader/Preloader';
import {getUsersPageInfo} from './../../redux/selectors/users-selector';
import Paginator from './../common/Paginator/Paginator';


function UsersContainer(props) {

    const dispatch = useDispatch()
    const usersPageInfo = useSelector(getUsersPageInfo)

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
            <Paginator totalCount={usersPageInfo.totalUsersCount} pageSize={usersPageInfo.pageSize}
            currentPage={usersPageInfo.currentPage} onPageChanged={onPageChanged}></Paginator>
            {usersPageInfo.isFetching ? <Preloader></Preloader> : <Users follow={(userId) => follow(userId)} unfollow={(userId) => unfollow(userId)}
            users = {usersPageInfo.users} followingFetching = {usersPageInfo.followingFetching} ></Users>}
        </div>
    )
}

export default UsersContainer;