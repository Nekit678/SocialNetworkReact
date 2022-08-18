import axios from "axios";
import Profile from "./Profile";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams, useSearchParams } from "react-router-dom";

function ProfileContainer(props){
    const dispatch = useDispatch()
    const state = useSelector(state => state.profilePage.userProfile)
    const id = useSelector(state => state.auth.userId)

    let params = useParams()
    let userId = (params.id ? params.id:id)

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then(
            response => {
                dispatch(setUserProfile(response.data))
            })
    }, [userId])

    return(
        <Profile state = {state}></Profile>
    )
}

export default ProfileContainer;