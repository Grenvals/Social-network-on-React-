import React from 'react'
import style from './NewPostForm.module.scss'
import { Field, reduxForm, reset } from 'redux-form'
import { required, maxLengthCreator } from '../../../../utils/validators/validators'
import { Textarea } from '../../../common/Form/FormControls/FormControls'
import { Button } from '../../../Buttons/Buttons'

const maxLength = maxLengthCreator(10)

const NewPostCreateForm = props => {
  return (
    <form onSubmit={props.handleSubmit} className={style.newPost}>
      <Field
        className={style.newPost__message}
        placeholder="Write your messаge hier"
        name={'user_post_message'}
        component={Textarea}
        validate={[required, maxLength]}
      />
      <Button />
    </form>
  )
}
const AddNewPostReduxForm = reduxForm({
  form: 'NewPost',
})(NewPostCreateForm)

export const NewPostForm = props => {
  const onSubmit = (formData, dispatch) => {
    props.addPost(formData.user_post_message)
    dispatch(reset('NewPost'))
  }
  return <AddNewPostReduxForm onSubmit={onSubmit} />
}

export default NewPostForm
