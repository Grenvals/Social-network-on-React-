import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { getNotifications, getNotificationsIsSuspense } from '../../selectors/selectors';
import { Notification } from './Notification/Notification';

import style from './Notifications.module.scss';

const Notifications = ({ notifications, isSuspense }) => {
  const notificationsList = notifications.map(n => (
    <CSSTransition key={n.id} timeout={1600} classNames="notificationItem">
      <Notification key={n.id} message={n.message} error={n.error} />
    </CSSTransition>
  ));
  return (
    <div className={style.notifications}>
      <ul className={style.notifications__list}>
        <TransitionGroup className={style.notifications__list}>
          {notificationsList}
        </TransitionGroup>
      </ul>
      <TransitionGroup>
        {isSuspense && (
          <CSSTransition timeout={300} classNames="notificationItem">
            <div className={style.notifications__suspense}>
              <div className={style.notifications__loader}></div>
              <span className={style.notifications__descr}>Connecting to server</span>
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    notifications: getNotifications(state),
    isSuspense: getNotificationsIsSuspense(state),
  };
};

const NotificationsContainer = connect(mapStateToProps, {})(Notifications);

export { NotificationsContainer as Notifications };
