
import Header from './Header';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { setAuth } from '../../redux/auth-reducer';
import { authAPI } from './../../api/api';

function HeaderContainer(props) {
    const state = useSelector(state => state.auth)
    const dispath = useDispatch();

    useEffect(() => {
        authAPI.getCurrentUser().then(
            response => {
                if (!response.data.resultCode) {
                    dispath(setAuth(response.data))
                }
            }
        )
    })
    return (
        <Header isAuth = {state.isAuth} login = {state.login}></Header>
    )
}


export default HeaderContainer