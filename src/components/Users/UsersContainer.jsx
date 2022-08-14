import Users from "./Users";
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { toggleFollow } from "../../redux/users-reducer";



function UsersContainer(props){
    
    const state = useSelector(state => state.usersPage.users)
    const dispatch = useDispatch()


    return (
        <Users users = {state} follow = {(id) => dispatch(toggleFollow(id))}
        unfollow = {(id) => dispatch(toggleFollow(id))}></Users>
    )
}

export default UsersContainer;