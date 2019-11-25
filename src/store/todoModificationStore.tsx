import { observable, action, runInAction } from "mobx";
import { api } from "../constants/api";
import { FilterType } from "../interfaces/index";
import { ITodo } from "../interfaces/index";
import { ITodoModification } from "../interfaces/ITodoModificationSchema";

export class TodoModification implements ITodoModification {
  @observable todo: ITodo[] = [];
  @observable filter: string = FilterType.all;

  @action.bound
  setFilter(filter: string): void {
    this.filter = filter;
  }

  @action.bound
  async getAllTodo(): Promise<void> {
    try {
      const data: ITodo[] = await api.get("users/");
      runInAction(() => {
        this.todo = data;
      });
    } catch (error) {
      runInAction(() => {
        this.todo = [];
      });
    }
  }

  @action.bound
  async addTodo(text: string): Promise<void> {
    try {
      const data: ITodo[] = await api.post("users/", text);
      this.todo = this.todo.concat(data);
    } catch (error) {
      this.todo = [];
    }
  }

  @action.bound
  async deliteTodo(id: string): Promise<void> {
    try {
      api.delite("users/", id);
      const resultDelite: ITodo[] = this.todo.filter(item => item._id !== id);
      this.todo = resultDelite;
    } catch (error) {
      this.todo = [];
    }
  }
  @action.bound
  async toggleTodo(id: string, completed: boolean): Promise<void> {
    try {
      api.put("users/", id, completed);
      const resultToggle: ITodo[] = this.todo.map(item =>
        item._id === id ? { ...item, completed: !completed } : item
      );
      this.todo = resultToggle;
    } catch (error) {
      this.todo = [];
    }
  }
}
