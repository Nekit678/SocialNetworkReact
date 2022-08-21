import Profile from "./Profile";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { setUserProfile } from "../../redux/profile-reducer";
import { useParams} from "react-router-dom";
import { profileAPI } from "../../api/api";

function ProfileContainer(props){
    const dispatch = useDispatch()
    const state = useSelector(state => state.profilePage.userProfile)
    const id = useSelector(state => state.auth.userId)

    let params = useParams()
    let userId = (params.id ? params.id:id)

    useEffect(() => {
        profileAPI.getProfileInfo(userId).then(
            response => {
                dispatch(setUserProfile(response))
            })
    }, [userId])

    return(
        <Profile state = {state}></Profile>
    )
}

export default ProfileContainer;