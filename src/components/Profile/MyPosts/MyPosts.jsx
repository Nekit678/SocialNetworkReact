import s from './MyPosts.module.css'
import React from 'react';
import { Formik } from 'formik';
import { Form } from 'formik';
import { Field } from 'formik';
import { maxLength, requiredField } from '../../../utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import { onlySpace } from './../../../utils/validators';


function PostsForm(props) {
  return (
    <div>
      <Formik initialValues={{ textPost: '' }}
        validate={values => {
          const errors = {};
          if (requiredField(values.textPost)){errors.textPost=requiredField(values.textPost)}
          if (maxLength(values.textPost,30)){errors.textPost=maxLength(values.textPost,10)}
          if (onlySpace(values.textPost)){errors.textPost=onlySpace(values.textPost)}
          
          return errors;
        }}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          props.addPost(values.textPost)
          resetForm()
          setSubmitting(false)
        }}>
        {({ isSubmitting, errors }) => (
          <Form>
            <div>
              <Field name="textPost" placeholder="Enter your post" component={Textarea} />
            </div>
            <div>
              <button disabled={isSubmitting} type="submit">Add Post</button>
            </div>
          </Form>)}

      </Formik>
    </div>
  )
}


function MyPosts(props) {

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <PostsForm addPost={props.addPost}></PostsForm>
      <div className={s.posts}>
        {props.postelem}

      </div>
    </div>
  );
}

export default MyPosts;