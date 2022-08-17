import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {

  return (
    <div>
      <ProfileInfo state = {props.state}></ProfileInfo>
      <MyPostsContainer></MyPostsContainer>
    </div>
  );
}

export default Profile;