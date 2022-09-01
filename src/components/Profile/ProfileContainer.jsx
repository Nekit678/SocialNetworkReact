import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { useParams } from "react-router-dom";
import { add_post, getProfileInfo, getUserStatus, updateStatus } from './../../redux/reducers/profile-reducer';
import withAuthRedirect from './../../hoc/withAuthRedirect';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';
import Post from './MyPosts/Post/Post';
import { getProfilePageInfo } from '../../redux/selectors/profile-selector';

function ProfileContainer(props) {
    const dispatch = useDispatch()
    const profilePageInfo = useSelector(getProfilePageInfo)
    const id = useSelector(state => state.auth.userId)

    let params = useParams()
    let userId = (params.id ? params.id : id)

    useEffect(() => {
        dispatch(getProfileInfo(userId))
        dispatch(getUserStatus(userId))
    }, [userId, dispatch])

    function updateUserStatus(status) {
        dispatch(updateStatus(status))
    }

    let postelem = profilePageInfo.dataPosts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount}></Post>)

    return (
        <div>
            <ProfileInfo updateStatus={updateUserStatus} status={profilePageInfo.userStatus} userProfile={profilePageInfo.userProfile}></ProfileInfo>
            <MyPosts postelem={postelem} addPost={(textPost) => dispatch(add_post(textPost))}></MyPosts>
        </div>

    )
}

let ProfileContainerAuth = withAuthRedirect(ProfileContainer)

export default ProfileContainerAuth;