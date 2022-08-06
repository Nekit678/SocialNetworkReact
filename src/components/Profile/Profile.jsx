import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
  return (
    <div>
      <ProfileInfo></ProfileInfo>
      <MyPosts dataPosts={props.state.dataPosts} addPost = {props.addPost} textFieldPost = {props.state.textFieldPost} updateTextFieldPost = {props.updateTextFieldPost}></MyPosts>
    </div>
  );
}

export default Profile;