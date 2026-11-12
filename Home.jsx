import { Link } from "react-router-dom";
import { ArrowRight, FilePlus2, Search, ShieldCheck, LockKeyhole, BadgeCheck } from "lucide-react";
import Navbar from "../components/Navbar.jsx";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="hero">
        <div className="eyebrow"><span className="pulse" /> DIGITAL CERTIFICATE PORTAL</div>
        <h1>Every certificate.<br /><span>One trusted vault.</span></h1>
        <p className="hero-copy">Request, track, and verify certificates through one simple and secure portal.</p>
        <div className="hero-actions">
          <Link className="btn primary" to="/request">Request a certificate <ArrowRight size={17} /></Link>
          <Link className="btn secondary" to="/verify">Verify a certificate</Link>
        </div>
        <div className="hero-note"><LockKeyhole size={15} /> Simple. Transparent. Easy to verify.</div>
      </main>
      <section className="section">
        <div className="section-heading"><span className="eyebrow">WHAT YOU CAN DO</span><h2>Certificate services</h2></div>
        <div className="feature-grid">
          <Link to="/request" className="feature-card">
            <span className="feature-icon"><FilePlus2 /></span><h3>Request</h3>
            <p>Submit your details and create a certificate application.</p><span className="card-link">Start request <ArrowRight size={15} /></span>
          </Link>
          <Link to="/track" className="feature-card">
            <span className="feature-icon"><Search /></span><h3>Track</h3>
            <p>Check the latest status of your submitted application.</p><span className="card-link">Track application <ArrowRight size={15} /></span>
          </Link>
          <Link to="/verify" className="feature-card">
            <span className="feature-icon"><BadgeCheck /></span><h3>Verify</h3>
            <p>Confirm whether a certificate is valid, issued, or revoked.</p><span className="card-link">Verify certificate <ArrowRight size={15} /></span>
          </Link>
        </div>
      </section>
      <footer className="footer"><ShieldCheck size={17} /> CredVault <span>© 2026 Certificate Issuing & Verification Platform</span></footer>
    </div>
  );
}