import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {

  return (
    <div>
      <ProfileInfo></ProfileInfo>
      <MyPosts dataPosts={props.state.dataPosts}></MyPosts>
    </div>
  );
}

export default Profile;