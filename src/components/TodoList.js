import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllTodo } from '../action/getAllTodo'
import { deliteTodo } from '../action/deliteTodo'
import { toggleTodo } from '../action/toggleTodo'
class TodoList extends Component {
  componentDidMount() {
    this.props.getAllTodo()
  }
  handleClick = todo => () => {
    this.props.deliteTodo(todo._id)
  }
  handleClickText = todo => () => {
    this.props.toggleTodo(todo._id)
  }
  render() {
    const { arrayTodo } = this.props
    return (
      <div>
        {arrayTodo.map(todo => (
          <div key={todo._id}>
            {todo && todo.completed ? 'СДЕЛАНО ' : ''}
            <span onClick={this.handleClickText(todo)}>
              {todo.todoText}
            </span>{' '}
            <button onClick={this.handleClick(todo)}> Удалить </button>
          </div>
        ))}
      </div>
    )
  }
}
const mapStateToProps = store => {
  return {
    arrayTodo: store.todos,
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getAllTodo: () => dispatch(getAllTodo()),
    deliteTodo: id => dispatch(deliteTodo(id)),
    toggleTodo: id => dispatch(toggleTodo(id)),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
