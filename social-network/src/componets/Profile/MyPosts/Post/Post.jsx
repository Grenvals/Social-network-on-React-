import React from 'react'
import style from './Post.module.scss'
import editImg from '../../../../assets/images/profile/edit.svg'
import { UserPhoto } from '../../../common/UserFoto/UserFoto'
import { LikesCount } from '../../../common/likesCount/LikesCount'

const PostItem = React.memo(props => {
  let deletePost = () => {
    props.deletePost(props.id)
  }
  return (
    <div className={style.post}>
      <div className={style.header}>
        <div className={style.logo}>
          <UserPhoto />
        </div>
        <div className="headerBlock">
          <p className={style.title}>Valentyn Dubin</p>
          <div className={style.date}>{props.date}</div>
        </div>
        <div className={style.change}>
          <img className={style.change__img} src={editImg} alt="edit" />
          <ul className={style.change__list}>
            <li className={style.change__item}>
              <button className={style.change__button} onClick={deletePost}>
                delete post
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="content">
        <p className={style.message}>{props.message}</p>
        {props.image && (
          <div className={style.preview}>
            <img src={props.image} alt="post images" />
          </div>
        )}
      </div>
      <div className="footer">
        <div className="likes">
          <LikesCount likes={props.likes} />
        </div>
      </div>
    </div>
  )
})

export default PostItem
