import React from 'react'
import style from '../Settings.module.scss'
import facebookIcon from '../../../assets/images/contacts/facebook.svg'
import githubIcon from '../../../assets/images/contacts/github.svg'
import instagramIcon from '../../../assets/images/contacts/instagram.svg'
import twitterIcon from '../../../assets/images/contacts/twitter.svg'
import siteIcon from '../../../assets/images/contacts/site.svg'
import Head from '../../common/Head/Head'
import {
  InputItem,
  CheckboxItem,
  TextareaItem,
} from '../../common/Form/FormItem/InputItem'
import { reduxForm } from 'redux-form'
import { maxLengthCreator, required } from '../../../utils/validators/validators'

export const maxLength = maxLengthCreator(60)
export const maxLengthTextarea = maxLengthCreator(300)

const ProfileForm = ({ handleSubmit, error, pristine, submitting }) => {
  return (
    <form className={`${style.settings__form}`} onSubmit={handleSubmit}>
      <Head title="General" />
      <div className={style.settings__container}>
        <InputItem
          label="User name"
          placeholder="user name"
          name="fullName"
          validate={[required, maxLength]}
        />
        <InputItem
          label="UserId (only for read)"
          placeholder="userId"
          name="userId"
          validate={[required, maxLength]}
        />
        <CheckboxItem label="Looking for a job" name="lookingForAJob" />
        <TextareaItem
          label="Description"
          placeholder="About you"
          name="lookingForAJobDescription"
          validate={[required, maxLengthTextarea]}
        />
        <TextareaItem
          label="About me"
          placeholder="About you"
          name="aboutMe"
          validate={[required, maxLengthTextarea]}
        />
      </div>
      <Head title="Contacts" />
      <div className={style.settings__container}>
        <InputItem
          label="Github"
          placeholder="link"
          name="contacts.github"
          validate={[required, maxLength]}
          icon={githubIcon}
        />
        <InputItem
          label="Facebook"
          placeholder="link"
          name="contacts.facebook"
          validate={[required, maxLength]}
          icon={facebookIcon}
        />
        <InputItem
          label="Instagram"
          placeholder="link"
          name="contacts.instagram"
          validate={[required, maxLength]}
          icon={instagramIcon}
        />
        <InputItem
          label="Twitter"
          placeholder="link"
          name="contacts.twitter"
          validate={[required, maxLength]}
          icon={twitterIcon}
        />
        <InputItem
          label="Website"
          placeholder="link"
          name="contacts.website"
          validate={[required, maxLength]}
          icon={siteIcon}
        />
      </div>
      <div className={style.form__button}>
        {error && <span className={style.form__error}>{error}</span>}
        <button type="submit" className={style.button} disabled={pristine || submitting}>
          Save
        </button>
      </div>
    </form>
  )
}
export const ProfileReduxForm = reduxForm({
  form: 'userProfile',
})(ProfileForm)
