import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import { getApplications, saveApplications, makeId, formatDate } from "../utils/storage.js";

const states = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
  "Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala","Madhya Pradesh",
  "Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland","Odisha","Punjab",
  "Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
  "Uttarakhand","West Bengal"
];

export default function Request() {
  const [form, setForm] = useState({ name: "", phone: "", gender: "", city: "", state: "" });
  const [submitted, setSubmitted] = useState(null);
  const [error, setError] = useState("");
  function update(event) {
    setForm({ ...form, [event.target.name]: event.target.value });
  }
  function submit(event) {
    event.preventDefault();
    setError("");
    if (!form.name.trim() || !form.phone.trim() || !form.gender || !form.city.trim() || !form.state) {
      setError("Please complete every field.");
      return;
    }
    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      setError("Enter a valid 10-digit Indian mobile number.");
      return;
    }
    const application = {
      ...form, id: makeId("APP"), status: "Pending",
      submittedOn: new Date().toISOString()
    };
    saveApplications([...getApplications(), application]);
    setSubmitted(application);
    setForm({ name: "", phone: "", gender: "", city: "", state: "" });
  }
  return (
    <div><Navbar /><main className="page-wrap narrow">
      <div className="page-intro"><span className="eyebrow">NEW APPLICATION</span><h1>Request a certificate</h1><p>Enter your details below to submit your application.</p></div>
      {submitted ? (
        <div className="success-card">
          <div className="success-mark">✓</div><h2>Application submitted!</h2>
          <p>Your application has been saved successfully.</p>
          <div className="id-box"><small>YOUR APPLICATION ID</small><strong>{submitted.id}</strong></div>
          <p className="muted">Submitted on {formatDate(submitted.submittedOn)}</p>
          <div className="button-row"><Link className="btn primary" to="/track">Track application</Link><button className="btn secondary" onClick={() => setSubmitted(null)}>Submit another</button></div>
        </div>
      ) : (
        <form className="panel form-panel" onSubmit={submit}>
          {error && <div className="error-message">{error}</div>}
          <label>Full name<input name="name" value={form.name} onChange={update} placeholder="Enter your full name" /></label>
          <label>Phone number<input name="phone" value={form.phone} onChange={update} inputMode="numeric" maxLength="10" placeholder="10-digit mobile number" /></label>
          <fieldset><legend>Gender</legend><div className="radio-row">
            {["Female","Male","Other"].map(value => <label className="radio-label" key={value}><input type="radio" name="gender" value={value} checked={form.gender === value} onChange={update} />{value}</label>)}
          </div></fieldset>
          <label>City<input name="city" value={form.city} onChange={update} placeholder="Enter your city" /></label>
          <label>State<select name="state" value={form.state} onChange={update}><option value="">Select your state</option>{states.map(item => <option key={item}>{item}</option>)}</select></label>
          <button className="btn primary full" type="submit">Submit application <span>→</span></button>
          <p className="form-footnote">Your details are stored locally in this browser for this demo.</p>
        </form>
      )}
    </main></div>
  );
}