import Header from './Header';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux/es/exports';
import { useEffect } from 'react';
import { getCurrentUser } from './../../redux/auth-reducer';

function HeaderContainer(props) {
    const state = useSelector(state => state.auth)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUser())
    })
    return (
        <Header isAuth={state.isAuth} login={state.login}></Header>
    )
}


export default HeaderContainer