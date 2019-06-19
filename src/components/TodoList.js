import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllTodo } from '../action/getAllTodo'
import { deliteTodo } from '../action/deliteTodo'
class TodoList extends Component {
  componentDidMount() {
    this.props.getAllTodo()
  }
  handleClick = todo => () => {
    this.props.deliteTodo(todo._id)
  }
  render() {
    const { arrayTodo } = this.props
    return (
      <div>
        {arrayTodo.map(todo => (
          <div key={todo._id}>
            <span> {todo.todoText} </span>
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
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
