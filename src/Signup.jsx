import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const res = await fetch("https://YOUR-RENDER-URL/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, 
          password 
        }),
      });

      const data = await res.json();

      if (data.success) {
        setMsg("Signup Successful! Redirecting...");
        setTimeout(() => navigate("/"), 1000);
      } else {
        setMsg(data.message || "Signup failed");
      }
    } catch {
      setMsg("Server error");
    }
  };

  return (
    <div className="login-container">
      <div className="card">
        <h2>Create Account</h2>

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

        <button onClick={handleSignup}>Sign up</button>

        <p className="signup-text">
          Already have an account?
          <span onClick={() => navigate("/")}> Login</span>
        </p>
      </div>
    </div>
  );
}
