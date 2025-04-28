import React from "react";
import useStore from "./stores/store";
import Login from "./components/Auth/Login";
import TodoList from "./components/Todos/TodoList";
import Layout from "./components/Layout";

export default function App() {
  const user = useStore((state) => state.user);

  return (
    <Layout>
      {user ? <TodoList /> : <Login />}
    </Layout>
  );
}
