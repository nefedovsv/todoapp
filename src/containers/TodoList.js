import React, { Component } from 'react'
import { connect } from 'react-redux'
import { inject, observer } from 'mobx-react'
import { getAllTodo } from '../action/todo'
import { deliteTodo } from '../action/todo'
import { toggleTodo } from '../action/todo'
import { Todo } from '../components/Todo'
import { getArrayTodosByVisibilityFilter } from '../reducers/selectors'
const TodoList = inject('todoModification')(
  observer(
    class TodoList extends Component {
      componentDidMount() {
        this.props.getAllTodo()
        this.props.todoModification.getAllTodo()
        //console.log(this.props.todoModification.actualAuthention)
      }
      handleClick = todo => () => {
        this.props.deliteTodo(todo._id)
      }
      handleClickText = todo => () => {
        this.props.toggleTodo(todo._id, todo.completed)
      }
      render() {
        console.log(this.props.todoModification.actualAuthention)
        //const { arrayTodo } = this.props
        return (
          <Todo
            arrayTodo={this.props.todoModification.actualAuthention}
            handleClick={this.handleClick}
            handleClickText={this.handleClickText}
          />
        )
      }
    }
  )
)
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
