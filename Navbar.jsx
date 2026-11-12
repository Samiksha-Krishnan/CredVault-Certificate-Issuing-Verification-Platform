import { Link, useNavigate } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { isAdmin, setAdmin } from "../utils/storage.js";

export default function Navbar({ admin = false }) {
  const navigate = useNavigate();
  function logout() {
    setAdmin(false);
    navigate("/");
  }
  return (
    <header className="navbar">
      <Link className="brand" to="/"><span className="brand-icon"><ShieldCheck size={21} /></span>CredVault</Link>
      <nav>
        {admin ? (
          <>
            <Link to="/admin/applications">Applications</Link>
            <Link to="/admin/certificates">Certificates</Link>
            <button className="nav-button" onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/request">Request</Link>
            <Link to="/track">Track</Link>
            <Link to="/verify">Verify</Link>
            <Link className="admin-link" to={isAdmin() ? "/admin/applications" : "/admin/login"}>Admin</Link>
          </>
        )}
      </nav>
    </header>
  );
}