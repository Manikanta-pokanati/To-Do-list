import React from "react";
import useStore from "../stores/store";

export default function Layout({ children }) {
  const user = useStore((state) => state.user);
  const logout = useStore((state) => state.logout);

  return (
    <div style={{ width: "100%", maxWidth: "640px" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          color: "var(--accent-cyan)",
          textShadow: "0 0 15px var(--accent-cyan)",
          fontWeight: "700",
          letterSpacing: "0.2em",
          fontSize: "1.8rem",
          userSelect: "none",
        }}
      >
        
        
        {user && (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontWeight: "600" }}>HELLO, {user.username.toUpperCase()}</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              onClick={logout}
              style={{
                background: "var(--accent-coral)",
                color: "var(--text-light)",
                padding: "0.5rem 1rem",
                borderRadius: "30px",
                boxShadow: "0 0 10px var(--accent-coral)",
                fontWeight: "600",
                letterSpacing: "0.1em",
                transition: "background 0.3s ease",
              }}
              onMouseEnter={(e) => (e.target.style.background = "#ff0f2f")}
              onMouseLeave={(e) => (e.target.style.background = "var(--accent-coral)")}
            >
              LOG OUT
            </button>
          </div>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
}
