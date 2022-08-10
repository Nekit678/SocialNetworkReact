import s from './MyPosts.module.css'
import Post from './Post/Post';
import React from 'react';

function MyPosts(props) {

  let postelem = props.dataPosts.map(post => <Post message={post.message} likesCount={post.likesCount}></Post>)

  let newPostElement = React.createRef();

  function addPost() {
    props.dispatch({type:"ADD-POST"})
  }

  function updateField() {
    props.dispatch({type: "UPDATE-TEXT-FIELD-POST", textField: newPostElement.current.value})
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