import create from "zustand";

const usersDB = {
  alice: { password: "alice123", todos: [] },
  bob: { password: "bob123", todos: [] },
};

const useStore = create((set, get) => ({
  user: null, // { username: "alice" }
  todos: [],
  login: (username, password) => {
    if (usersDB[username] && usersDB[username].password === password) {
      set({ user: { username }, todos: usersDB[username].todos });
      return true;
    }
    return false;
  },
  logout: () => {
    set({ user: null, todos: [] });
  },
  addTodo: (text) => {
    const { user, todos } = get();
    if (!user) return;
    const newTodo = { id: Date.now(), text, completed: false };
    const updatedTodos = [newTodo, ...todos];
    usersDB[user.username].todos = updatedTodos;
    set({ todos: updatedTodos });
  },
  toggleTodo: (id) => {
    const { user, todos } = get();
    if (!user) return;
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    usersDB[user.username].todos = updatedTodos;
    set({ todos: updatedTodos });
  },
  deleteTodo: (id) => {
    const { user, todos } = get();
    if (!user) return;
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    usersDB[user.username].todos = updatedTodos;
    set({ todos: updatedTodos });
  },
}));

export default useStore;
