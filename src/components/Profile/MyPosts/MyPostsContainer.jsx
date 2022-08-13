import MyPosts from "./MyPosts";
import { add_post, update_text_field_post } from '../../../redux/profile-reducer';
import Post from "./Post/Post";

function MyPostsContainer(props) {

    let state = props.store.getState()

    let postelem = state.profilePage.dataPosts.map(post => <Post message={post.message} likesCount={post.likesCount}></Post>)

    function addPost() {
        props.store.dispatch(add_post())
    }

    function updateField(text) {
        props.store.dispatch(update_text_field_post(text))
    }

    return (<MyPosts updateField = {updateField} addPost={addPost}
        dataPosts = {state.profilePage.dataPosts}
        textFieldPost = {state.profilePage.textFieldPost}
        postelem={postelem}></MyPosts>)
}


export default MyPostsContainer