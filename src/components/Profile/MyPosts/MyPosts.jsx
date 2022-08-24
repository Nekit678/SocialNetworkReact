import s from './MyPosts.module.css'
import React from 'react';



function MyPosts(props) {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={(event)=>{props.updateField(event.target.value)}} value={props.textFieldPost} />
        </div>
        <div>
          <button onClick={props.addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {props.postelem}

      </div>
    </div>
  );
}

export default MyPosts;