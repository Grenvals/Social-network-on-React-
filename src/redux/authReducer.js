import { stopSubmit } from 'redux-form';

import { authAPI, securityAPI, profileAPI } from '../api/api';
import { setSuspenseStatus, setNotification } from './notificationReducer';

// Actions
const FOLLOW = 'auth/FOLLOW';
const UNFOLLOW = 'auth/UNFOLLOW';
const SET_LOADING_STATUS = 'auth/SET_LOADING_STATUS';
const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const SET_AUTH_USER_PROFILE = 'auth/SET_AUTH_USER_PROFILE';
const SET_CAPTCHA_URL = 'auth/SET_CAPTCHA_URL';

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isLoading: true,
  users: [],
  errors: '',
  captcha: null,
  profile: null,
};

// Reducer
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'auth/SET_AUTH_USER_PROFILE': {
      return { ...state, profile: action.profile };
    }
    case 'auth/FOLLOW': {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }
    case 'auth/UNFOLLOW': {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }
    case 'auth/SET_LOADING_STATUS': {
      return {
        ...state,
        isLoading: action.loading,
      };
    }
    case 'auth/SET_AUTH_USER_DATA': {
      return {
        ...state,
        ...action.payload,
      };
    }
    case 'auth/SET_CAPTCHA_URL': {
      return {
        ...state,
        captcha: action.payload,
      };
    }
    default:
      return state;
  }
};

// Action creators
export const follow = userID => ({
  type: FOLLOW,
  userID,
});

export const unfollow = userID => {
  return {
    type: UNFOLLOW,
    userID,
  };
};

export const setLoadingStatus = loadingStatus => ({
  type: SET_LOADING_STATUS,
  loading: loadingStatus,
});

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_AUTH_USER_DATA,
    payload: { userId, email, login, isAuth },
  };
};

export const setAuthUserProfile = profile => ({
  type: SET_AUTH_USER_PROFILE,
  profile,
});

export const setCaptchaUrl = captchaUrl => {
  return {
    type: SET_CAPTCHA_URL,
    payload: captchaUrl,
  };
};

// Async
export const getAuthUserData = () => async dispatch => {
  dispatch(setSuspenseStatus(true));
  try {
    const response = await authAPI.getAuthUserData();
    if (response.data.resultCode === 0) {
      const { id, email, login } = response.data.data;
      dispatch(setAuthUserData(id, email, login, true));
      dispatch(getAuthUserProfile(id));
    }
  } catch (error) {
    dispatch(setNotification('Server: ' + error.message, true));
  } finally {
    dispatch(setSuspenseStatus(false));
  }
};

export const getAuthUserProfile = userId => async dispatch => {
  dispatch(setSuspenseStatus(true));
  try {
    const response = await profileAPI.getProfile(userId);
    dispatch(setAuthUserProfile(response));
  } catch (error) {
    dispatch(setNotification('Server: ' + error.message, true));
  } finally {
    dispatch(setSuspenseStatus(false));
  }
};

export const logIn = (
  userEmail,
  userPassword,
  userRemember,
  captcha
) => async dispatch => {
  dispatch(setSuspenseStatus(true));
  const response = await authAPI.logIn(userEmail, userPassword, userRemember, captcha);
  if (response.resultCode === 0) {
    dispatch(getAuthUserData());
  } else if (response.resultCode === 10) {
    dispatch(getCaptchaUrl()); // api captcha protection work incorrect, moved getCapcha to all errors
    const message =
      response.messages.length > 0
        ? 'Error on server: ' + response.messages[0]
        : 'Errors, your login or emails are not valid';
    dispatch(stopSubmit('Login', { _error: message }));
  } else {
    const message =
      response.messages.length > 0
        ? 'Error on server: ' + response.messages[0]
        : 'Errors, your login or emails are not valid';
    dispatch(stopSubmit('Login', { _error: message }));
  }
  dispatch(setSuspenseStatus(false));
};

export const getCaptchaUrl = () => async dispatch => {
  const response = await securityAPI.getCaptchaUrl();
  if (response.data.url.length > 0) {
    dispatch(setCaptchaUrl(response.data.url));
    console.log(response.data.url);
  }
};

export const logOut = (userEmail, userPassword, userRemember) => async dispatch => {
  dispatch(setSuspenseStatus(true));
  const response = await authAPI.logOut();
  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
  dispatch(setSuspenseStatus(false));
};

export { authReducer };
