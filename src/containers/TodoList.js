import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllTodo } from '../action/getAllTodo'
import { Todo } from '../components/Todo'
import { deliteTodo } from '../action/deliteTodo'
import { toggleTodo } from '../action/toggleTodo'
import { getArrayTodosByVisibilityFilter } from '../reducers/selectors'
class TodoList extends Component {
  componentDidMount() {
    this.props.getAllTodo()
  }
  handleClick = todo => () => {
    this.props.deliteTodo(todo._id)
  }
  handleClickText = todo => () => {
    this.props.toggleTodo(todo._id, todo.completed)
  }
  render() {
    const { arrayTodo } = this.props
    return (
      <Todo
        arrayTodo={arrayTodo}
        handleClick={this.handleClick}
        handleClickText={this.handleClickText}
      />
    )
  }
}
const mapStateToProps = store => {
  const { visibilityFilter } = store
  const { todos } = store
  const arrayTodo = getArrayTodosByVisibilityFilter(todos, visibilityFilter)
  return { arrayTodo }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllTodo: () => dispatch(getAllTodo()),
    deliteTodo: id => dispatch(deliteTodo(id)),
    toggleTodo: (id, completed) => dispatch(toggleTodo(id, completed)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
