import MyPosts from "./MyPosts";
import { add_post, update_text_field_post } from '../../../redux/profile-reducer';
import Post from "./Post/Post";
import StoreContext from "../../../StoreContext";

function MyPostsContainer(props) {
    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();

                function addPost() {
                    store.dispatch(add_post())
                }

                function updateField(text) {
                    store.dispatch(update_text_field_post(text))
                }

                let postelem = state.profilePage.dataPosts.map(post => <Post message={post.message} likesCount={post.likesCount}></Post>);

                return <MyPosts updateField={updateField} addPost={addPost}
                    textFieldPost={state.profilePage.textFieldPost}
                    postelem={postelem}></MyPosts>
            }
            }
        </StoreContext.Consumer>)
}


export default MyPostsContainer