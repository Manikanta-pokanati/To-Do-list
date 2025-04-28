import React, { useState } from "react";
import useStore from "../../stores/store";

export default function Login() {
  const login = useStore((state) => state.login);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username.trim(), password.trim());
    if (!success) {
      setError("⚠️ Invalid username or password");
    } else {
      setError("");
    }
  };

  return (
    <div className="container">
      <h2 className="login-header">Welcome Back</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="USERNAME"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="username"
          spellCheck="false"
        />
        <input
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          spellCheck="false"
        />
        {error && <p className="error-msg">{error}</p>}
        <button type="submit" className="primary">LOG IN</button>
      </form>
      <p style={{textAlign: "center", marginTop: "1rem", color: "var(--text-muted)"}}>
        Use <b>alice / alice123</b> or <b>bob / bob123</b>
      </p>
    </div>
  );
}
