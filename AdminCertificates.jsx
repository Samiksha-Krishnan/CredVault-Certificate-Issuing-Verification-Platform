import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { getCertificates, saveCertificates, formatDate } from "../utils/storage.js";

export default function AdminCertificates() {
  const [certificates, setCertificates] = useState(getCertificates());
  function revoke(id) {
    const updated = certificates.map(item => item.id === id ? { ...item, status: "Revoked" } : item);
    setCertificates(updated);
    saveCertificates(updated);
  }
  return <div><Navbar admin /><main className="page-wrap wide">
    <div className="page-intro"><span className="eyebrow">ADMIN DASHBOARD</span><h1>Certificates</h1><p>View issued certificates and revoke them when required.</p></div>
    <div className="panel table-panel"><div className="table-heading"><h2>Issued certificates</h2><span>{certificates.length} records</span></div>
      {certificates.length === 0 ? <div className="empty-state">No certificates issued yet. Issue an application to create a certificate.</div> :
      <div className="table-scroll"><table><thead><tr><th>Certificate ID</th><th>Name</th><th>Phone</th><th>City</th><th>State</th><th>Issued On</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>{certificates.map(cert => <tr key={cert.id}><td className="id-cell">{cert.id}</td><td>{cert.name}</td><td>{cert.phone}</td><td>{cert.city}</td><td>{cert.state}</td><td>{formatDate(cert.issuedOn)}</td><td><StatusBadge status={cert.status} /></td><td><button className="revoke-button" disabled={cert.status === "Revoked"} onClick={() => revoke(cert.id)}>Revoke</button></td></tr>)}</tbody></table></div>}
    </div>
  </main></div>;
}