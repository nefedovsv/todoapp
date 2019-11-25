import React from "react";
import { AddTodo } from "../AddTodo";
import { TodoList } from "../TodoList";
import { Filters } from "../Filters";
import styles from "./TodoPage.module.css";

export const TodoPage = () => {
  return (
    <div className={styles.image}>
      <div className={styles.root}>
        <AddTodo />
        <TodoList />
        <div className={styles.filters}>
          <Filters />
        </div>
      </div>
    </div>
  );
};
