import { dialogsAPI } from '../api/api';
// Actions
const ADD_MESSAGE = 'ADD-MESSAGE';
const SET_DIALOGS_USERS_LIST = 'dialogs/SET_DIALOGS_USERS_LIST';
const SET_DIALOG_MESSAGES = 'dialogs/SET_DIALOG_MESSAGES';

const initialState = {
  dialogs: [],
  messages: [],
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
    const date = u.lastUserActivityDate.split('T');
    date[1] = date[1].split('', 5).join('');
    return {
      ...u,
      userName: u.userName.split(/(?=[A-Z])/).join(' '),
      lastUserActivityDate: date.join(' '),
    };
  });
  dispatch(setDialogsUsersList(dialogsList));
};

export const getDialogMessages = userId => async dispatch => {
  const response = await dialogsAPI.getDialogMessagesList(userId);
  const messages = response.items.map(u => {
    const addedAt = u.addedAt.split('T');
    addedAt[1] = addedAt[1].split('', 5).join('');
    return {
      ...u,
      addedAt: addedAt.join(' '),
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
  dispatch(getDialogsUsersList());
  dispatch(getDialogMessages(userId));
};

export const openDialogWithUser = userId => dispatch => {
  dispatch(getDialogsUsersList());
  dispatch(getDialogMessages(userId));
};

export default dialogsReducer;
