import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { getCertificates, formatDate } from "../utils/storage.js";

export default function Verify() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(undefined);
  function search(event) {
    event.preventDefault();
    const found = getCertificates().find(item => item.id.toLowerCase() === id.trim().toLowerCase());
    setResult(found || null);
  }
  return <div><Navbar /><main className="page-wrap narrow">
    <div className="page-intro"><span className="eyebrow">CERTIFICATE AUTHENTICITY</span><h1>Verify a certificate</h1><p>Enter a Certificate ID to check its current validity.</p></div>
    <form className="panel search-panel" onSubmit={search}><label>Certificate ID<input value={id} onChange={e => setId(e.target.value)} placeholder="Example: CRT1234567" /></label><button className="btn primary" type="submit">Verify certificate</button></form>
    {result === null && <div className="error-message result-message">No certificate found. Please verify the Certificate ID.</div>}
    {result && <div className="panel result-card"><div className="result-top"><div><small>CERTIFICATE ID</small><h2>{result.id}</h2></div><StatusBadge status={result.status} /></div><div className="details-grid"><div><small>NAME</small><strong>{result.name}</strong></div><div><small>PHONE</small><strong>{result.phone}</strong></div><div><small>ISSUED ON</small><strong>{formatDate(result.issuedOn)}</strong></div><div><small>CITY</small><strong>{result.city}</strong></div></div></div>}
  </main></div>;
}