import * as React from "react";
import { inject, observer } from "mobx-react";
import { List, Button, Typography } from "antd";
import { getTodosByFilter } from "../selectors";
import { ITodoModification } from "../../interfaces/ITodoModificationSchema";
import { ITodo } from "../../interfaces/index";

interface TodoListProps {
  todoModification?: ITodoModification;
}

@inject("todoModification")
@observer
export class TodoList extends React.PureComponent<TodoListProps> {
  componentDidMount() {
    const { getAllTodo } = this.props.todoModification!;
    getAllTodo();
  }

  handleClick = (id: string) => {
    const { deliteTodo } = this.props.todoModification!;
    deliteTodo(id);
  };

  handleClickText = (todo: ITodo) => {
    const { toggleTodo } = this.props.todoModification!;
    toggleTodo(todo._id, todo.completed);
  };

  render() {
    const { Text } = Typography;
    const { filter, todo } = this.props.todoModification!;
    const arrayTodo: ITodo[] = getTodosByFilter(todo, filter);

    return (
      <List
        dataSource={arrayTodo}
        renderItem={(todo: ITodo) => (
          <List.Item
            actions={[
              <Button type="primary" onClick={() => this.handleClickText(todo)}>
                Done
              </Button>,
              <Button type="primary" onClick={() => this.handleClick(todo._id)}>
                Delete
              </Button>
            ]}
          >
            <List.Item.Meta
              title={
                <span onClick={() => this.handleClickText(todo)}>
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
    );
  }
}
