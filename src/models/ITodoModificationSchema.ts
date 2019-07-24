import {ITodo} from './ITodoSchema'

export interface ITodoModification {
    todo: ITodo[]
    filter: string
    setFilter(filter: string): void
    getAllTodo(): Promise<void>
    addTodo(text: string): Promise<void>
    deliteTodo(id: string): Promise<void>
    toggleTodo(id: string, completed: boolean): Promise<void>
  }
  