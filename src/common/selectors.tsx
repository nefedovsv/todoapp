import { FilterType } from "../interfaces";
import { ITodo } from "../interfaces/index";

export const getTodosByFilter = (todo: ITodo[], filter: string) => {
  switch (filter) {
    case FilterType.completed:
      return todo.filter(todo => todo.completed);
    case FilterType.incomplete:
      return todo.filter(todo => !todo.completed);
    case FilterType.all:
    default:
      return todo;
  }
};
