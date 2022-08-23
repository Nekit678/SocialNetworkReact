import Profile from "./Profile";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useParams } from "react-router-dom";
import { getProfileInfo } from './../../redux/profile-reducer';
import {useNavigate} from 'react-router-dom'

function ProfileContainer(props) {

    const isAuth = useSelector(state => state.auth.isAuth)
    let navigate = useNavigate()

    const dispatch = useDispatch()
    const state = useSelector(state => state.profilePage.userProfile)
    const id = useSelector(state => state.auth.userId)

    let params = useParams()
    let userId = (params.id ? params.id : id)

    useEffect(() => {
        dispatch(getProfileInfo(userId))
        if (!isAuth){
            navigate("/login", {replace:true})
        }
    }, [userId,isAuth])

    return (
        <Profile state={state}></Profile>
    )
}

export default ProfileContainer;