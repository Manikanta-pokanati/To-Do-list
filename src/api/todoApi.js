const TODOS_KEY = "my_todo_app_todos";

// Simulate network latency
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchTodos = async () => {
  await delay(500);
  const todos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
  return todos;
};

export const addTodoApi = async (text) => {
  await delay(300);
  const todos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
  const newTodo = { id: Date.now(), text, completed: false };
  todos.push(newTodo);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  return newTodo;
};

export const toggleTodoApi = async (id) => {
  await delay(300);
  let todos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
  todos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  return todos.find((todo) => todo.id === id);
};

export const deleteTodoApi = async (id) => {
  await delay(300);
  let todos = JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
  todos = todos.filter((todo) => todo.id !== id);
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  return id;
};
