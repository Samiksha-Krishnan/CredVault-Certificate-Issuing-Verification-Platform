export default function StatusBadge({ status }) {
  const className = status?.toLowerCase() === "issued" ? "status issued"
    : status?.toLowerCase() === "rejected" ? "status rejected"
    : status?.toLowerCase() === "revoked" ? "status revoked" : "status pending";
  return <span className={className}>{status}</span>;
}