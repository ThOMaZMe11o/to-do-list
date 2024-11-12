import React from "react";

function TodoItem({ todo, removeTodo }) {
  return (
    <li className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg hover:bg-gray-50">
      <span className="text-lg">{todo.text}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="bg-red-500 text-white py-1 px-3 rounded-md hover:bg-red-600 focus:outline-none"
      >
        Remover
      </button>
    </li>
  );
}

export default TodoItem;
