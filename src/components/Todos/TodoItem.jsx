import React from "react";
import useStore from "../../stores/store";

export default function TodoItem({ todo }) {
  const toggleTodo = useStore((state) => state.toggleTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);

  return (
    <div className="bg-white bg-opacity-90 rounded-xl p-5 shadow-md flex items-center justify-between gap-4">
      <div
        className={`flex-1 cursor-pointer select-none ${
          todo.completed ? "line-through text-gray-400" : "text-indigo-900"
        }`}
        onClick={() => toggleTodo(todo.id)}
        title="Click to toggle complete"
      >
        {todo.text}
      </div>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-600 hover:text-red-800 font-bold text-xl"
        title="Delete todo"
      >
        &times;
      </button>
    </div>
  );
}
