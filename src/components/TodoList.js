import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllTodo } from '../action/getAllTodo'

class TodoList extends Component {
  componentDidMount() {
    this.props.getAllTodo()
  }
  render() {
    const { arrayTodo } = this.props
    return arrayTodo.map(todo => (
      <div key={todo._id}>
        <p>{todo.todoText}</p>
      </div>
    ))
  }
}
const mapStateToProps = store => {
  return {
    arrayTodo: store.todos,
  }
}
export default connect(
  mapStateToProps,
  { getAllTodo }
)(TodoList)
