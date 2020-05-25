import React from 'react'
import style from '../Settings.module.scss'
import { InputItem } from '../../common/Form/FormItem/InputItem'
import { maxLengthCreator, required } from '../../../utils/validators/validators'
import { reduxForm } from 'redux-form'
import { UserProfilePhoto } from '../../common/UserFoto/UserFoto'
import { Button } from '../../common/Buttons/Buttons'
import { Head } from '../../common/Head/Head'

export const maxLength = maxLengthCreator(100)

const StatusForm = ({
  handleSubmit,
  error,
  pristine,
  submitting,
  photo,
  updateUserPhoto,
}) => {
  return (
    <div className="">
      <Head title="Previev settings" />
      <div className={style.settings__container}>
        <div className="">
          <UserProfilePhoto
            isLoggedUser={true}
            photo={photo}
            updateUserPhoto={updateUserPhoto}
          />
        </div>

        <form
          className={`${style.settings__form} ${style.settings__form_inline}`}
          onSubmit={handleSubmit}
        >
          <InputItem
            label="Status"
            placeholder="user status"
            name="status"
            validate={[required, maxLength]}
          />
          <Button name={'Save'} disabled={pristine || submitting} />
        </form>
      </div>
    </div>
  )
}
export const StatusReduxForm = reduxForm({
  form: 'userStatus',
})(StatusForm)
