import s from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts() {

  let dataPosts = [
    { id: 1, message: "Hi, how are you?", likesCount: 12 },
    { id: 2, message: "It is my first post!", likesCount: 28 }]
  
    let postelem = dataPosts.map(post=><Post message={post.message} likesCount={post.likesCount}></Post>)

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
        {postelem}

      </div>
    </div>
  );
}

export default MyPosts;