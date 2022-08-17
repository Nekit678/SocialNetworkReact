import axios from "axios";
import Profile from "./Profile";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setUserProfile } from "../../redux/profile-reducer";

function ProfileContainer(props){
    const dispatch = useDispatch()
    const state = useSelector(state => state.profilePage.userProfile)

    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(
            response => {
                dispatch(setUserProfile(response.data))
            })
    }, [])

    return(
        <Profile state = {state}></Profile>
    )
}

export default ProfileContainer;