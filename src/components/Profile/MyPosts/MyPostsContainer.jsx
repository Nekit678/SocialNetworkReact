import MyPosts from "./MyPosts";
import { add_post } from '../../../redux/reducers/profile-reducer';
import Post from "./Post/Post";
import { useDispatch, useSelector } from "react-redux/es/exports";

function MyPostsContainer(props) {
    const state = useSelector(state => state.profilePage)
    const dispatch = useDispatch()

    let postelem = state.dataPosts.map(post => <Post message={post.message} likesCount={post.likesCount}></Post>)

    return (
        <MyPosts textFieldPost={state.textFieldPost} postelem={postelem}
            addPost={(textPost) => dispatch(add_post(textPost))}></MyPosts>
    )
}

export default MyPostsContainer



// function MyPostsContainer1(props) {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState();

//                 function addPost() {
//                     store.dispatch(add_post())
//                 }

//                 function updateField(text) {
//                     store.dispatch(update_text_field_post(text))
//                 }

//                 let postelem = state.profilePage.dataPosts.map(post => <Post message={post.message} likesCount={post.likesCount}></Post>);

//                 return <MyPosts updateField={updateField} addPost={addPost}
//                     textFieldPost={state.profilePage.textFieldPost}
//                     postelem={postelem}></MyPosts>
//             }
//             }
//         </StoreContext.Consumer>)
// }




