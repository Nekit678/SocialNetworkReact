import Users from "./Users";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setCurrentPage, setTotalUsersCount, setUsers, toggleFollow } from "../../redux/users-reducer";
import { useEffect } from 'react';
import axios from 'axios';



function UsersContainer(props) {

    const dispatch = useDispatch()
    const state = useSelector(state => state.usersPage)

    // let pagesCount = Math.ceil(state.totalUsersCount / state.pageSize)
    let pages = [];

    for (let i = 1; i <= 10; i++) {
        pages.push(i);
    }

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${state.currentPage}&count=${state.pageSize}`).then(
            response => {
                console.log(response)
                        dispatch(setUsers(response.data.items))
                dispatch(setTotalUsersCount(response.data.totalCount))
            })
    }, [])

    function onPageChanged(page) {
        dispatch(setCurrentPage(page))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${state.pageSize}`).then(
            response => {
                console.log(response)
                        dispatch(setUsers(response.data.items))
            })
    }


    return (
        <Users pages={pages} currentPage={state.currentPage} users={state.users} follow={(id) => dispatch(toggleFollow(id))}
            unfollow={(id) => dispatch(toggleFollow(id))} onPageChanged={onPageChanged} ></Users>
    )
}

export default UsersContainer;