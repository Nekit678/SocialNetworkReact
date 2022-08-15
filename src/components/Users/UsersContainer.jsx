import Users from "./Users";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setUsers, toggleFollow } from "../../redux/users-reducer";
import axios from "axios";



function UsersContainer(props) {

    const dispatch = useDispatch()
    const state = useSelector(state => state.usersPage.users)

    // if (state.length == 0)
    // {
    //     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
    //     response => {
    //         dispatch(setUsers(response.data.items))})

    // }

    return (
        <Users users={state} follow={(id) => dispatch(toggleFollow(id))}
            unfollow={(id) => dispatch(toggleFollow(id))}></Users>
    )
}

export default UsersContainer;