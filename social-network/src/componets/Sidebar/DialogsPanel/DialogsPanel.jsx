import { NavLink } from 'react-router-dom';
import React from 'react';
import UserItem from './UserItem/UserItem';
import style from './DialogsPanel.module.scss';

export const DialogsPanel = props => {
  let userItem = props.state
    .slice(0, 5)
    .map(u => (
      <UserItem
        key={u.id}
        id={u.id}
        userLogo={u.photos.small}
        userName={u.userName}
        newMessagesCount={u.newMessagesCount}
        openDialogWithUser={props.openDialogWithUser}
      />
    ));
  return (
    <div className={style.dialogsPanel}>
      <h2 className={style.dialogsPanel__title}>Dialods</h2>
      <ul className={style.dialogsPanel__list}>
        {userItem}
        <NavLink className={style.dialogsPanel__button} to={'/dialogs/'} exact>
          <div className={style.dialogsPanel__dots}></div>
        </NavLink>
      </ul>
    </div>
  );
};
