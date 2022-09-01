import s from './Post.module.css'
import React from 'react';

const Post = React.memo((props) => {
  return (
    <div className={s.item}>
      <img src='https://android-obzor.com/wp-content/uploads/2022/02/5-1.jpg'></img>
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
})

export default Post;