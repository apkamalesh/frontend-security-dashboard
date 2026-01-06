import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("auth", "true");
        navigate("/dashboard");
      } else {
        setMsg(data.message);
      }
    } catch (err) {
      setMsg("Server Error");
    }
  };

  return (
    <div className="login-container">
      <div className="card">

      <i className="fa-solid fa-shield-halved lock-icon"></i>
        <h2>SECURITY LOGIN</h2>

        {msg && <p className="error">{msg}</p>}

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>

        <p className="signup-text">
          Don’t have an account?
          <span onClick={() => navigate("/signup")}> Sign up</span>
        </p>

        <footer>© 2024 ESM</footer>
      </div>
    </div>
  );
}
