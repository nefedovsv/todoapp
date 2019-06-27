// src/components/Profile.js
import React from 'react'
import { useAuth0 } from '../react-auth0-wrapper'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import Filters from './Filters'

const Profile = props => {
  const { loading, user, getTokenSilently } = useAuth0()
  if (loading || !user) {
    return 'Loading...'
  }
  console.log(props)
  return (
    <>
      <AddTodo user={user} getTokenSilently={getTokenSilently} />
      <TodoList user={user} getTokenSilently={getTokenSilently} />
      <Filters />
    </>
  )
}

export default Profile
