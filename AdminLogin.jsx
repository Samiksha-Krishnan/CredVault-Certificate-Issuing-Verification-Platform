import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { setAdmin } from "../utils/storage.js";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  function login(event) {
    event.preventDefault();
    if (username === "admin" && password === "admin") {
      setAdmin(true);
      navigate("/admin/applications");
    } else setError("Incorrect username or password.");
  }
  return <main className="login-page"><Link className="brand login-brand" to="/"><span className="brand-icon"><ShieldCheck size={21} /></span>CredVault</Link>
    <form className="panel login-panel" onSubmit={login}><span className="eyebrow">ADMINISTRATOR ACCESS</span><h1>Welcome back</h1><p className="muted">Sign in to manage certificate applications.</p>
      {error && <div className="error-message">{error}</div>}
      <label>Username<input value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter username" /></label>
      <label>Password<input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" /></label>
      <button className="btn primary full">Login to dashboard</button>
      <p className="form-footnote">Demo login: admin / admin</p>
    </form></main>;
}