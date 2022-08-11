import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';
import { addPostAC, updatePostTextAC } from '../../../redux/profile-reducer';


function MyPosts(props) {

  let postelem = props.dataPosts.map(post => <Post message={post.message} likesCount={post.likesCount}></Post>)

  let newPostElement = React.createRef();

  function addPost() {
    props.dispatch(addPostAC())
  }

  function updateField() {
    props.dispatch(updatePostTextAC(newPostElement.current.value))
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={updateField} ref={newPostElement} value={props.textFieldPost} />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postelem}

      </div>
    </div>
  );
}

export default MyPosts;