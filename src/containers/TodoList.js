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
  handleClick = (todo, getTokenSilently) => () => {
    this.props.deliteTodo(todo._id, getTokenSilently)
  }
  handleClickText = (todo, getTokenSilently) => () => {
    this.props.toggleTodo(todo._id, todo.completed, getTokenSilently)
  }

  render() {
    const { arrayTodo } = this.props
    const { getTokenSilently } = this.props
    return (
      <Todo
        getTokenSilently={getTokenSilently}
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
    deliteTodo: (id, token) => dispatch(deliteTodo(id, token)),
    toggleTodo: (id, completed, token) =>
      dispatch(toggleTodo(id, completed, token)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
