import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Request from "./pages/Request.jsx";
import Track from "./pages/Track.jsx";
import Verify from "./pages/Verify.jsx";
import AdminLogin from "./pages/AdminLogin.jsx";
import AdminApplications from "./pages/AdminApplications.jsx";
import AdminCertificates from "./pages/AdminCertificates.jsx";
import { isAdmin } from "./utils/storage.js";

function ProtectedRoute({ children }) {
  return isAdmin() ? children : <Navigate to="/admin/login" replace />;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/track" element={<Track />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/applications" element={<ProtectedRoute><AdminApplications /></ProtectedRoute>} />
        <Route path="/admin/certificates" element={<ProtectedRoute><AdminCertificates /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}