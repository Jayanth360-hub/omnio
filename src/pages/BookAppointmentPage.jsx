import { useState } from "react";
import { Calendar, Clock, CheckCircle } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const timeSlots = ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"];

export default function BookAppointmentPage() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ name: "", phone: "", email: "", specialty: "", doctor: "", date: "", time: "", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  const up = (k, v) => setForm(f => ({ ...f, [k]: v }));

  if (submitted) return (
    <>
      <Navbar />
      <main>
        <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ textAlign: "center", maxWidth: 480, padding: 48 }}>
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "#e6f6f0", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <CheckCircle size={40} color="#38a169" />
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 800, color: "#1a2e44", marginBottom: 12 }}>Appointment Confirmed!</h2>
            <p style={{ color: "#718096", marginBottom: 24 }}>Your appointment has been booked successfully. You'll receive a confirmation SMS and email shortly.</p>
            <div style={{ background: "#f4f9f9", borderRadius: 12, padding: 20, marginBottom: 24, textAlign: "left" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ color: "#718096", fontSize: 14 }}>Patient</span><span style={{ fontWeight: 600 }}>{form.name}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}><span style={{ color: "#718096", fontSize: 14 }}>Date</span><span style={{ fontWeight: 600 }}>{form.date}</span></div>
              <div style={{ display: "flex", justifyContent: "space-between" }}><span style={{ color: "#718096", fontSize: 14 }}>Time</span><span style={{ fontWeight: 600 }}>{form.time}</span></div>
            </div>
            <button className="btn-primary" onClick={() => { setSubmitted(false); setStep(1); setForm({ name:"",phone:"",email:"",specialty:"",doctor:"",date:"",time:"",notes:"" }); }}>Book Another</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", marginBottom: 16, display: "inline-block" }}>Medical Services</span>
            <h1>Book an Appointment</h1>
            <p>Schedule your visit with our expert doctors in just a few steps</p>
          </div>
        </section>

        <section className="section">
          <div className="container" style={{ maxWidth: 760 }}>
            {/* Progress Steps */}
            <div style={{ display: "flex", alignItems: "center", marginBottom: 48 }}>
              {[{ n: 1, label: "Personal Info" }, { n: 2, label: "Choose Doctor" }, { n: 3, label: "Pick Time" }].map((s, i) => (
                <div key={s.n} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, transition: "all 0.3s",
                      background: step >= s.n ? "#0a8f8f" : "#e2e8f0", color: step >= s.n ? "#fff" : "#a0aec0" }}>{s.n}</div>
                    <span style={{ fontSize: 12, color: step >= s.n ? "#0a8f8f" : "#a0aec0", fontWeight: 600 }}>{s.label}</span>
                  </div>
                  {i < 2 && <div style={{ flex: 1, height: 2, background: step > s.n ? "#0a8f8f" : "#e2e8f0", margin: "0 8px", marginBottom: 22, transition: "background 0.3s" }} />}
                </div>
              ))}
            </div>

            <div className="card" style={{ padding: 36 }}>
              {step === 1 && (
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1a2e44", marginBottom: 24 }}>Personal Information</h3>
                  <div className="grid-2">
                    <div className="form-group"><label>Full Name *</label><input className="form-control" value={form.name} onChange={e => up("name", e.target.value)} placeholder="Enter your full name" /></div>
                    <div className="form-group"><label>Phone Number *</label><input className="form-control" value={form.phone} onChange={e => up("phone", e.target.value)} placeholder="+91 XXXXX XXXXX" /></div>
                  </div>
                  <div className="form-group"><label>Email Address</label><input className="form-control" value={form.email} onChange={e => up("email", e.target.value)} placeholder="your@email.com" /></div>
                  <div className="form-group">
                    <label>Speciality Needed *</label>
                    <select className="form-control" value={form.specialty} onChange={e => up("specialty", e.target.value)}>
                      <option value="">Select speciality...</option>
                      {["Cardiology","Neurology","Orthopaedics","Paediatrics","Ophthalmology","General Medicine"].map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <button className="btn-primary" style={{ width: "100%", justifyContent: "center" }} onClick={() => setStep(2)} disabled={!form.name || !form.phone || !form.specialty}>Next Step →</button>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1a2e44", marginBottom: 24 }}>Choose Your Doctor</h3>
                  {["Dr. Priya Sharma – Cardiologist", "Dr. Arjun Mehta – Neurologist", "Dr. Sneha Iyer – Orthopaedic", "Dr. Rajan Nair – Paediatrician"].map(d => (
                    <div key={d} onClick={() => up("doctor", d)}
                      style={{ display: "flex", alignItems: "center", gap: 16, padding: 16, borderRadius: 12, border: "2px solid", marginBottom: 12, cursor: "pointer", transition: "all 0.2s",
                        borderColor: form.doctor === d ? "#0a8f8f" : "#e2e8f0", background: form.doctor === d ? "#e8f7f7" : "#fff" }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: "#e8f7f7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>👨‍⚕️</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 700, color: "#1a2e44" }}>{d.split("–")[0]}</div>
                        <div style={{ fontSize: 13, color: "#0a8f8f" }}>{d.split("–")[1]}</div>
                      </div>
                      <div style={{ width: 20, height: 20, borderRadius: "50%", border: "2px solid", borderColor: form.doctor === d ? "#0a8f8f" : "#e2e8f0", background: form.doctor === d ? "#0a8f8f" : "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        {form.doctor === d && <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#fff" }} />}
                      </div>
                    </div>
                  ))}
                  <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
                    <button className="btn-outline" style={{ flex: 1, justifyContent: "center" }} onClick={() => setStep(1)}>← Back</button>
                    <button className="btn-primary" style={{ flex: 1, justifyContent: "center" }} onClick={() => setStep(3)} disabled={!form.doctor}>Next Step →</button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1a2e44", marginBottom: 24 }}>Select Date & Time</h3>
                  <div className="form-group"><label><Calendar size={14} style={{ verticalAlign: "middle", marginRight: 6 }} />Preferred Date *</label><input type="date" className="form-control" value={form.date} onChange={e => up("date", e.target.value)} min={new Date().toISOString().split("T")[0]} /></div>
                  <div className="form-group">
                    <label><Clock size={14} style={{ verticalAlign: "middle", marginRight: 6 }} />Available Time Slots</label>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 10 }}>
                      {timeSlots.map(t => (
                        <button type="button" key={t} onClick={() => up("time", t)}
                          style={{ padding: "10px 4px", borderRadius: 8, border: "1.5px solid", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", textAlign: "center",
                            background: form.time === t ? "#0a8f8f" : "#fff", color: form.time === t ? "#fff" : "#4a5568", borderColor: form.time === t ? "#0a8f8f" : "#e2e8f0" }}>{t}</button>
                      ))}
                    </div>
                  </div>
                  <div className="form-group"><label>Additional Notes</label><textarea className="form-control" rows={3} value={form.notes} onChange={e => up("notes", e.target.value)} placeholder="Any symptoms or concerns..." /></div>
                  <div style={{ display: "flex", gap: 12 }}>
                    <button type="button" className="btn-outline" style={{ flex: 1, justifyContent: "center" }} onClick={() => setStep(2)}>← Back</button>
                    <button type="submit" className="btn-primary" style={{ flex: 1, justifyContent: "center" }} disabled={!form.date || !form.time}>Confirm Booking ✓</button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
