const APPLICATIONS_KEY = "credvault_applications";
const CERTIFICATES_KEY = "credvault_certificates";
const ADMIN_KEY = "credvault_admin";

export function getApplications() {
  return JSON.parse(localStorage.getItem(APPLICATIONS_KEY) || "[]");
}
export function saveApplications(items) {
  localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(items));
}
export function getCertificates() {
  return JSON.parse(localStorage.getItem(CERTIFICATES_KEY) || "[]");
}
export function saveCertificates(items) {
  localStorage.setItem(CERTIFICATES_KEY, JSON.stringify(items));
}
export function isAdmin() {
  return localStorage.getItem(ADMIN_KEY) === "true";
}
export function setAdmin(value) {
  if (value) localStorage.setItem(ADMIN_KEY, "true");
  else localStorage.removeItem(ADMIN_KEY);
}
export function makeId(prefix) {
  return prefix + Date.now().toString().slice(-7) + Math.floor(100 + Math.random() * 900);
}
export function formatDate(value) {
  return new Date(value).toLocaleDateString("en-IN", {
    day: "2-digit", month: "short", year: "numeric"
  });
}