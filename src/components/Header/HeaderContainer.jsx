import Header from './Header';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { getCurrentUser, logout } from './../../redux/auth-reducer';

function HeaderContainer(props) {
    const state = useSelector(state => state.auth)
    const dispatch = useDispatch();

    function logoutUser(){
        dispatch(logout())
    }
    return (
        <Header logout = {logoutUser} isAuth={state.isAuth} login={state.login}></Header>
    )
}


export default HeaderContainer