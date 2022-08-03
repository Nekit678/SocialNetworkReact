import s from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {

  let dataPosts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It is my first post!", likesCount: 28 }]

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={dataPosts[0].message} likesCount={dataPosts[0].likesCount}></Post>
        <Post message={dataPosts[1].message} likesCount={dataPosts[1].likesCount}></Post>
        <Post message="Hi, how are you?" likesCount='0'></Post>
        <Post message="It is my first post!" likesCount='23'></Post>

      </div>
    </div>
  );
}

export default MyPosts;