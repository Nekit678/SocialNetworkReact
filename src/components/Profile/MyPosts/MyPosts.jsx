import s from './MyPosts.module.css'
import Post from './Post/Post';

function MyPosts(props) {

  let postelem = props.dataPosts.map(post => <Post message={post.message} likesCount={post.likesCount}></Post>)

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