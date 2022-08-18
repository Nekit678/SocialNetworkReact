
import Header from './Header';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import axios from 'axios';
import { setAuth } from '../../redux/auth-reducer';

function HeaderContainer(props) {
    const state = useSelector(state => state.auth)
    const dispath = useDispatch();

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(
            response => {
                if (!response.data.resultCode) {
                    dispath(setAuth(response.data.data))
                }
            }
        )
    })
    return (
        <Header isAuth = {state.isAuth} login = {state.login}></Header>
    )
}


export default HeaderContainer