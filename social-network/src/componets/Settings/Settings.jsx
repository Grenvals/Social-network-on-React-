import React from 'react'
import style from './Settings.module.scss'
import background from '../../assets/images/settings/settings-bg.jpg'
import Preloader from '../common/Preloader/Preloader'
import { StatusReduxForm } from './StatusReduxForm/StatusReduxForm'
import { ProfileReduxForm } from './ProfileReduxForm/ProfileReduxForm'
import { HeadImage } from '../common/Head/Head'

const Settings = props => {
  if (!props.profile || !props.status) {
    return <Preloader />
  } else {
    const initialData = {
      status: props.status,
    }
    const onSubmit = formData => {
      props.updateUserStatus(formData.status)
    }
    const onProfileSubmit = formData => {
      props.updateUserProfile(props.profile.userId, formData)
    }
    return (
      <div className={style.settings}>
        <HeadImage image={background} />
        <StatusReduxForm
          initialValues={initialData}
          onSubmit={onSubmit}
          photo={props.profile.photos.large}
          updateUserPhoto={props.updateUserPhoto}
        />
        <ProfileReduxForm initialValues={props.profile} onSubmit={onProfileSubmit} />
      </div>
    )
  }
}

export default Settings
