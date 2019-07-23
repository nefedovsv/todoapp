import * as React from 'react'
import { inject, observer } from 'mobx-react'
import { List, Button, Typography } from 'antd'
import { getArrayTodosByVisibilityFilter } from '../constants/selectors'
import { ITodoModification } from '../store/mobxStore'

interface ITodo {
          _id: string;
          completed: boolean;
          userName: string;
          data: string;
        }
interface TodoListProps {
  todoModification?: ITodoModification
}
@inject('todoModification')  
@observer
export class TodoList extends  React.Component<TodoListProps> {
      componentDidMount() {
        const {getAllTodo} = this.props.todoModification!;
        getAllTodo()
      }
      handleClick = (todo:any) => () => {                       //разобраться почему any
        const {deliteTodo} = this.props.todoModification!;
        deliteTodo(todo._id)
      } 
      handleClickText = (todo:any)=> () => {                      //разобраться почему any
        const {toggleTodo} = this.props.todoModification!;
        toggleTodo(todo._id, todo.completed)
      }
       render() {
        const { Text } = Typography
        const {filter} = this.props.todoModification!
        const {todo} = this.props.todoModification!
        const arrayTodo:ITodo[]|undefined = getArrayTodosByVisibilityFilter(
          todo,
          filter
        )
        return (
          <List
            dataSource={arrayTodo}
            renderItem={todo => (
              <List.Item
                actions={[
                  <Button type="primary" onClick={this.handleClickText(todo)}>
                    Сделано
                  </Button>,
                  <Button type="primary" onClick={this.handleClick(todo)}>
                    Удалить
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  title={
                    <span onClick={this.handleClickText(todo)}>
                      {todo && todo.completed ? (
                        <Text delete> {todo.data} </Text>
                      ) : (
                        <Text> {todo.data} </Text>
                      )}
                    </span>
                  }
                />
              </List.Item>
            )}
          />
        )
      }
    }
