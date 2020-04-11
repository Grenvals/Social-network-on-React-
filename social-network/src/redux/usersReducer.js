const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_LOADING_STATUS = 'SET_LOADING_STATUS'

let initialState = {
  users: [],
  pageSize: 7,
  totalUsersCount: 0,
  currentPage: 2,
  isLoading: true,
}

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FOLLOW': {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: true }
          }
          return u
        }),
      }
    }
    case 'UNFOLLOW': {
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userID) {
            return { ...u, followed: false }
          }
          return u
        }),
      }
    }
    case 'SET_USERS': {
      return {
        ...state,
        users: action.users,
      }
    }
    case 'SET_CURRENT_PAGE': {
      return {
        ...state,
        currentPage: action.currentPage,
      }
    }
    case 'SET_TOTAL_USERS_COUNT': {
      return {
        ...state,
        totalUsersCount: action.count,
      }
    }
    case 'SET_LOADING_STATUS': {
      return {
        ...state,
        isLoading: action.loading,
      }
    }
    default:
      return state
  }
}

export const follow = userID => ({
  type: FOLLOW,
  userID,
})
export const unfollow = userID => {
  return {
    type: UNFOLLOW,
    userID,
  }
}
export const setUsers = users => ({
  type: SET_USERS,
  users,
})
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage: currentPage,
})
export const setTotalUsersCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount,
})
export const setLoadingStatus = loadingStatus => ({
  type: SET_LOADING_STATUS,
  loading: loadingStatus,
})

export default usersReducer