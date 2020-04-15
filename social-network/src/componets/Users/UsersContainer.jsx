// import React from 'react'
import { connect } from 'react-redux'
import  UsersContainerAPI from './UsersContainerAPI'
import {followUser, unfollowUser, setCurrentPage, getUsers} from '../../redux/usersReducer'

let mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    followingInProgress: state.usersPage.followingInProgress, 
  }
}

const UsersContainer = connect(mapStateToProps, {
  setCurrentPage,
  getUsers,
  followUser, 
  unfollowUser,
})(UsersContainerAPI)

export default UsersContainer
