import s from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {
  return (
    <div>
      my posts
      <div>
        new post
      </div>
      <div className={s.posts}>
        <Post message="Hi, how are you?"></Post>
        <Post message="It is my first post!"></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  );
}

export default MyPosts;