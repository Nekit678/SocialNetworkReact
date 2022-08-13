import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {

  return (
    <div>
      <ProfileInfo></ProfileInfo>
      <MyPostsContainer store={props.store}></MyPostsContainer>
    </div>
  );
}

export default Profile;