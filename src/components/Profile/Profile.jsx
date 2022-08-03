import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div>
      <ProfileInfo></ProfileInfo>
      <MyPosts dataPosts={props.dataPosts}></MyPosts>
    </div>
  );
}

export default Profile;