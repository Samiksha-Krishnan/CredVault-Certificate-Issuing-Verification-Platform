import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { getApplications, formatDate } from "../utils/storage.js";

export default function Track() {
  const [id, setId] = useState("");
  const [result, setResult] = useState(undefined);
  function search(event) {
    event.preventDefault();
    const found = getApplications().find(item => item.id.toLowerCase() === id.trim().toLowerCase());
    setResult(found || null);
  }
  return <div><Navbar /><main className="page-wrap narrow">
    <div className="page-intro"><span className="eyebrow">APPLICATION STATUS</span><h1>Track your application</h1><p>Enter the Application ID you received after submitting your request.</p></div>
    <form className="panel search-panel" onSubmit={search}><label>Application ID<input value={id} onChange={e => setId(e.target.value)} placeholder="Example: APP1234567" /></label><button className="btn primary" type="submit">Search application</button></form>
    {result === null && <div className="error-message result-message">No application found. Check the ID and try again.</div>}
    {result && <div className="panel result-card"><div className="result-top"><div><small>APPLICATION ID</small><h2>{result.id}</h2></div><StatusBadge status={result.status} /></div><div className="details-grid"><div><small>APPLICANT NAME</small><strong>{result.name}</strong></div><div><small>SUBMISSION DATE</small><strong>{formatDate(result.submittedOn)}</strong></div></div></div>}
  </main></div>;
}