import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import StatusBadge from "../components/StatusBadge.jsx";
import { getApplications, saveApplications, getCertificates, saveCertificates, makeId, formatDate } from "../utils/storage.js";

export default function AdminApplications() {
  const [applications, setApplications] = useState(getApplications());
  function updateStatus(id, status) {
    const updated = applications.map(item => item.id === id ? { ...item, status } : item);
    setApplications(updated);
    saveApplications(updated);
    if (status === "Issued") {
      const app = updated.find(item => item.id === id);
      const certificates = getCertificates();
      if (!certificates.some(item => item.applicationId === id)) {
        certificates.push({
          id: makeId("CRT"), applicationId: id, name: app.name, phone: app.phone,
          city: app.city, state: app.state, issuedOn: new Date().toISOString(), status: "Issued"
        });
        saveCertificates(certificates);
      }
    }
  }
  return <div><Navbar admin /><main className="page-wrap wide">
    <div className="page-intro"><span className="eyebrow">ADMIN DASHBOARD</span><h1>Applications</h1><p>Review submitted requests and issue or reject certificates.</p></div>
    <div className="stats-row"><div className="stat-card"><small>TOTAL APPLICATIONS</small><strong>{applications.length}</strong></div><div className="stat-card"><small>PENDING</small><strong>{applications.filter(a => a.status === "Pending").length}</strong></div><div className="stat-card"><small>ISSUED</small><strong>{applications.filter(a => a.status === "Issued").length}</strong></div></div>
    <div className="panel table-panel"><div className="table-heading"><h2>All applications</h2><span>{applications.length} records</span></div>
      {applications.length === 0 ? <div className="empty-state">No applications yet. Submitted requests will appear here.</div> :
      <div className="table-scroll"><table><thead><tr><th>Application ID</th><th>Name</th><th>Phone</th><th>Gender</th><th>City</th><th>State</th><th>Status</th><th>Action</th></tr></thead>
        <tbody>{applications.map(app => <tr key={app.id}><td className="id-cell">{app.id}</td><td>{app.name}</td><td>{app.phone}</td><td>{app.gender}</td><td>{app.city}</td><td>{app.state}</td><td><StatusBadge status={app.status} /></td><td><div className="action-buttons"><button disabled={app.status === "Issued"} onClick={() => updateStatus(app.id, "Issued")}>Issue</button><button className="reject-button" disabled={app.status === "Rejected" || app.status === "Issued"} onClick={() => updateStatus(app.id, "Rejected")}>Reject</button></div></td></tr>)}</tbody></table></div>}
    </div>
  </main></div>;
}