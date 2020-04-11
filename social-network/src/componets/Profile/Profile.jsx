import React from 'react'
import style from './Profile.module.scss'
import MyPostsContainer from './MyPosts/MyPostsContainer'
import UserInfo from './UserInfo/UserInfo'
import Preloader from '../common/Preloader/Preloader'

const Profile = props => {
  console.log(props)
  if (!props.profile) {
    return <Preloader />
  } else {
    return (
      <div className={`${style.profile} ${style.nav}`}>
        <UserInfo profile={props.profile}/>
        <MyPostsContainer />
      </div>
    )
  }
 
}

export default Profile
