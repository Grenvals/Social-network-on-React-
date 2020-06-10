import { dateHandler, stringSpaceHandler } from '../utils/handlers/handlers';

import { dialogsAPI } from '../api/api';

// Actions
const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_DIALOGS_USERS_LIST = 'dialogs/SET_DIALOGS_USERS_LIST';
const SET_DIALOG_MESSAGES = 'dialogs/SET_DIALOG_MESSAGES';

const initialState = {
  dialogs: null,
  messages: null,
  newDialogMessage: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD-MESSAGE': {
      let newMessage = {
        id: 5,
        message: action.message,
      };
      return {
        ...state,
        newDialogMessage: '',
        messages: [...state.messages, newMessage],
      };
    }
    case 'dialogs/SET_DIALOGS_USERS_LIST': {
      return { ...state, dialogs: action.usersList };
    }
    case 'dialogs/SET_DIALOG_MESSAGES': {
      return { ...state, messages: action.messages };
    }
    default:
      return state;
  }
};

// Action creators
export const addMessage = message => ({
  type: ADD_MESSAGE,
  message: message,
});

export const setDialogsUsersList = usersList => ({
  type: SET_DIALOGS_USERS_LIST,
  usersList: usersList,
});

export const setDialogMessages = messages => ({
  type: SET_DIALOG_MESSAGES,
  messages: messages,
});

// Async
export const getDialogsUsersList = () => async dispatch => {
  const response = await dialogsAPI.getDialogsUsersList();
  const dialogsList = response.map(u => {
    return {
      ...u,
      userName: stringSpaceHandler(u.userName),
      lastUserActivityDate: dateHandler(u.lastUserActivityDate),
    };
  });
  dispatch(setDialogsUsersList(dialogsList));
};

export const getDialogMessages = userId => async dispatch => {
  dispatch(setDialogMessages(null));
  const response = await dialogsAPI.getDialogMessagesList(userId);
  const messages = response.items.map(u => {
    return {
      ...u,
      addedAt: dateHandler(u.addedAt),
    };
  });
  dispatch(setDialogMessages(messages));
};

export const sendMessage = (userId, message) => async dispatch => {
  const response = await dialogsAPI.sendMessage(userId, message);
  if (response.resultCode === 0) {
    dispatch(getDialogMessages(userId));
  }
};

export const startDialogWithUser = userId => async dispatch => {
  await dialogsAPI.startDialogWithUser(userId);
};

export const openDialogWithUser = userId => dispatch => {
  dispatch(getDialogsUsersList());
  dispatch(getDialogMessages(userId));
};

export default dialogsReducer;
