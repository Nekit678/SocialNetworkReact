import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {

  return (
    <div>
      <ProfileInfo updateStatus = {props.updateStatus} status={props.status} state = {props.state}></ProfileInfo>
      <MyPostsContainer></MyPostsContainer>
    </div>
  );
}

export default Profile;