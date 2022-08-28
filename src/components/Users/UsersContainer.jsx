import Users from "./Users";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { followUser, unfollowUser, getUsers } from "../../redux/reducers/users-reducer";
import { useEffect } from 'react';
import Preloader from './../common/Preloader/Preloader';
import { getCurrentPage, getFollowingFetching, getIsFetching } from "../../redux/selectors/users-selector";
import { getPageSize, getUsersList, getTotalUsersCount } from './../../redux/selectors/users-selector';



function UsersContainer(props) {

    const dispatch = useDispatch()
    const currentPage = useSelector((state)=>getCurrentPage(state))
    const pageSize = useSelector((state) => getPageSize(state))
    const users = useSelector((state) => getUsersList(state))
    const isFetching = useSelector((state) => getIsFetching(state))
    const followingFetching = useSelector((state) => getFollowingFetching(state))
    
    // const totalUsersCount = useSelector((state) => getTotalUsersCount(state))
    // let pagesCount = Math.ceil(state.totalUsersCount / state.pageSize)
    let pages = [];

    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    }, [dispatch])

    function onPageChanged(page) {
        dispatch(getUsers(page, pageSize))
    }

    function unfollow(userId) {
        dispatch(unfollowUser(userId))
    }

    function follow(userId) {
        dispatch(followUser(userId))
    }

    return (
        <div>
            {isFetching ? <Preloader></Preloader> : <Users isFetching={isFetching} pages={pages} currentPage={currentPage}
                users={users} follow={(userId) => follow(userId)}
                unfollow={(userId) => unfollow(userId)} onPageChanged={onPageChanged} followingFetching={followingFetching} ></Users>}
        </div>
    )
}

export default UsersContainer;