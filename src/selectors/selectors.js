import { createSelector } from 'reselect';

// Auth
export const getAuthUserId = state => {
  return state.auth.userId;
};

export const getIsAuth = state => {
  return state.auth.isAuth;
};

export const getAuthCaptcha = state => {
  return state.auth.captcha;
};

export const getAuthProfile = state => {
  return state.auth.profile;
};

export const getAuthLogin = state => {
  return state.auth.login;
};

// Notifications
export const getNotifications = state => {
  return state.notifications.notifications;
};

export const getNotificationsIsSuspense = state => {
  return state.notifications.isSuspense;
};

// Profile
export const getProfileInfo = state => {
  return state.profilePage.profile;
};

export const getProfileStatus = state => {
  return state.profilePage.status;
};

export const getProfilePosts = state => {
  return state.profilePage.posts;
};

// Users
const getUsersSelector = state => {
  return state.usersPage.users;
};

export const getUsers = createSelector(getUsersSelector, users => {
  return users;
});

export const getPageSize = state => {
  return state.usersPage.pageSize;
};

export const getTotalUsersCount = state => {
  return state.usersPage.totalUsersCount;
};

export const getCurrentPage = state => {
  return state.usersPage.currentPage;
};

export const getIsLoading = state => {
  return state.usersPage.isLoading;
};

export const getFollowingInProgress = state => {
  return state.usersPage.followingInProgress;
};

export const getPagPortionNumber = state => {
  return state.usersPage.pagPortionNumber;
};

// Dialogs
export const getDialogs = state => {
  return state.dialogsPage.dialogs;
};

export const getDialogMessagesList = state => {
  return state.dialogsPage.messages;
};

// News
export const getNewsHeadlines = state => {
  return state.news.headlines;
};

export const getNewsArticlesList = state => {
  return state.news.articles;
};

export const getNewsTotalResults = state => {
  return state.news.totalResults;
};

export const getNewsPageSize = state => {
  return state.news.pageSize;
};

export const getNewsCurrentPage = state => {
  return state.news.currentPage;
};

export const getNewsCategoryList = state => {
  return state.news.categoryList;
};

export const getNewsCurrentCategory = state => {
  return state.news.currentCategory;
};

export const getNewsPagPortionNumber = state => {
  return state.news.pagPortionNumber;
};

export const getNewsError = state => {
  return state.news.error;
};
