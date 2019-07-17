import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { Todo } from '../components/Todo'
import { getArrayTodosByVisibilityFilter } from '../constants/selectors'
export const TodoList = inject('todoModification')(
  observer(
    class TodoList extends Component {
      componentDidMount() {
        this.props.todoModification.getAllTodo()
      }
      handleClick = todo => () => {
        this.props.todoModification.deliteTodo(todo._id)
      }
      handleClickText = todo => () => {
        this.props.todoModification.toggleTodo(todo._id, todo.completed)
      }
      render() {
        const visibilityFilter = this.props.todoModification.filter
        const todos = this.props.todoModification.todo
        const arrayTodo = getArrayTodosByVisibilityFilter(
          todos,
          visibilityFilter
        )
        return (
          <Todo
            arrayTodo={arrayTodo}
            handleClick={this.handleClick}
            handleClickText={this.handleClickText}
          />
        )
      }
    }
  )
)
