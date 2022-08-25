import s from './MyPosts.module.css'
import React from 'react';
import { Formik } from 'formik';
import { Form } from 'formik';
import { Field } from 'formik';


function PostsForm(props) {
  return (
    <div>
      <Formik initialValues={{ textPost: '' }}
        onSubmit={(values, { resetForm }) => {
          props.addPost(values.textPost)
          resetForm()
        }}>
        <Form>
          <div>
            <Field name="textPost" placeholder="Enter your post" component="textarea" />
          </div>
          <div>
            <button name="addPost" type="submit">Add Post</button>
          </div>
        </Form>
      </Formik>
    </div>
  )
}


function MyPosts(props) {

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <PostsForm addPost = {props.addPost}></PostsForm>
      <div className={s.posts}>
        {props.postelem}

      </div>
    </div>
  );
}

export default MyPosts;