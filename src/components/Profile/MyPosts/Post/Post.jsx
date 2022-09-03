import s from './Post.module.css'
import React from 'react';

const Post = React.memo((props) => {
  return (
    <div className={s.item}>
      <img src={props.photo?props.photo:"https://img2.freepng.ru/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"}></img>
      {props.message}
      <div>
        <span>Like {props.likesCount}</span>
      </div>
    </div>
  );
})

export default Post;