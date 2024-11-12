import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, removeTodo }) {
  return (
    <ul className="space-y-4 mt-6 w-full max-w-md">
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
}

export default TodoList;
