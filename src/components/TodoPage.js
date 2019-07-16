import React from 'react'
import { AddTodo } from '../containers/AddTodo'
import { TodoList } from '../containers/TodoList'
import { Filters } from '../containers/Filters'
import styles from './Styles/TodoPage.module.css'
export const TodoPage = () => {
  return (
    <div className={styles.image}>
      <div className={styles.root}>
        <AddTodo />
        <TodoList />
        <div className={styles.filters}>
          <Filters />
        </div>
      </div>
    </div>
  )
}
