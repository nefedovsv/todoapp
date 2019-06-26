// src/components/Profile.js
import React from 'react'
import { useAuth0 } from '../react-auth0-wrapper'
import AddTodo from '../containers/AddTodo'
import TodoList from '../containers/TodoList'
import Filters from './Filters'
const Profile = () => {
  const { loading, user } = useAuth0()
  if (loading || !user) {
    return 'Loading...'
  }

  return (
    <>
      <AddTodo user={user} />
      <TodoList user={user} />
      <Filters />
    </>
  )
}

export default Profile
