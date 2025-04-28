import React, { useState } from "react";
import useStore from "../../stores/store";

export default function TodoList() {
  const todos = useStore((state) => state.todos);
  const addTodo = useStore((state) => state.addTodo);
  const toggleTodo = useStore((state) => state.toggleTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);

  const [text, setText] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text.trim());
    setText("");
  };

  return (
    <div className="container">
      <h2 className="todo-header">Your Tasks</h2>
      <form className="todo-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          spellCheck="false"
        />
        <button type="submit" className="primary">ADD</button>
      </form>
      {todos.length === 0 && (
        <p style={{ color: "var(--text-muted)", textAlign: "center", marginTop: "1rem" }}>
          No tasks yet, add some!
        </p>
      )}
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-card">
            <div
              className={`todo-text ${todo.completed ? "completed" : ""}`}
              onClick={() => toggleTodo(todo.id)}
              title="Toggle Complete"
            >
              {todo.text}
            </div>
            <div className="todo-actions">
              <button className="btn-toggle" onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? "Undo" : "Done"}
              </button>
              <button className="btn-delete" onClick={() => deleteTodo(todo.id)} title="Delete Task">
                &times;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
