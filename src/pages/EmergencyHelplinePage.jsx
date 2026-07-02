import { Phone, AlertCircle, Clock, MapPin, Heart, Zap, Shield, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const emergencyNums = [
  { label: "Emergency Helpline", num: "1800 266 6464", desc: "24/7 Medical Emergency", color: "#e53e3e", bg: "#fff5f5", icon: "🚨" },
  { label: "Ambulance", num: "108", desc: "Free Government Ambulance", color: "#f5a623", bg: "#fff9ed", icon: "🚑" },
  { label: "Doctor on Call", num: "+91 9876 543 210", desc: "Speak to a doctor now", color: "#0a8f8f", bg: "#e8f7f7", icon: "👨‍⚕️" },
  { label: "Mental Health", num: "iCall: 9152987821", desc: "Crisis Support Line", color: "#7c3aed", bg: "#f5f0ff", icon: "💙" },
];

const symptoms = [
  { icon: Heart, title: "Chest Pain", desc: "Crushing pain, pressure or tightening in chest" },
  { icon: Zap, title: "Stroke Signs", desc: "Sudden numbness, confusion, vision loss or severe headache" },
  { icon: AlertCircle, title: "Breathing Difficulty", desc: "Severe shortness of breath or choking" },
  { icon: Shield, title: "Severe Injury", desc: "Deep wounds, heavy bleeding or fractures" },
];

const hospitals = [
  { name: "Omnio Mumbai Central", address: "12 Health Ave, Mumbai 400001", distance: "2.4 km", open: true },
  { name: "Omnio Delhi North", address: "5 Medical Lane, New Delhi 110001", distance: "3.1 km", open: true },
  { name: "Omnio Bangalore Hub", address: "88 Care Street, Bangalore 560001", distance: "1.8 km", open: true },
];

export default function EmergencyHelplinePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Emergency Hero */}
        <section style={{ background: "linear-gradient(135deg, #c53030 0%, #9b2c2c 100%)", color: "#fff", padding: "72px 0 56px" }}>
          <div className="container" style={{ textAlign: "center" }}>
            <span style={{ fontSize: 52, display: "block", marginBottom: 16 }}>🚨</span>
            <h1 style={{ fontSize: 44, fontWeight: 900, marginBottom: 14 }}>Emergency Helpline</h1>
            <p style={{ fontSize: 18, opacity: 0.9, maxWidth: 540, margin: "0 auto 32px" }}>In a medical emergency, every second counts. Call us immediately — our team is available 24/7.</p>
            <a href="tel:18002666464" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "#c53030", borderRadius: 14, padding: "18px 36px", fontWeight: 800, fontSize: 22, textDecoration: "none", boxShadow: "0 8px 24px rgba(0,0,0,0.2)", transition: "transform 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "scale(1.04)"}
              onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
              <Phone size={24} fill="currentColor" /> 1800 266 6464
            </a>
            <div style={{ fontSize: 14, opacity: 0.75, marginTop: 14 }}>Toll-Free · Available 24 hours · 7 days a week</div>
          </div>
        </section>

        {/* Emergency Numbers */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 className="section-title">Emergency Contacts</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>Keep these numbers handy for any medical emergency</p>
            </div>
            <div className="grid-2" style={{ gap: 20 }}>
              {emergencyNums.map(e => (
                <a key={e.label} href={`tel:${e.num.replace(/\D/g, "")}`} style={{ textDecoration: "none" }}>
                  <div className="card" style={{ padding: 28, display: "flex", alignItems: "center", gap: 20, border: `2px solid ${e.color}20` }}>
                    <div style={{ width: 60, height: 60, borderRadius: 14, background: e.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28, flexShrink: 0 }}>{e.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, color: "#718096", fontWeight: 600, marginBottom: 4 }}>{e.label}</div>
                      <div style={{ fontSize: 22, fontWeight: 900, color: e.color }}>{e.num}</div>
                      <div style={{ fontSize: 13, color: "#718096" }}>{e.desc}</div>
                    </div>
                    <Phone size={20} color={e.color} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Signs */}
        <section className="section" style={{ background: "#fff9f9" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 className="section-title">When to Call Emergency</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>These symptoms require immediate medical attention</p>
            </div>
            <div className="grid-4">
              {symptoms.map(s => (
                <div key={s.title} className="card" style={{ padding: 28, textAlign: "center", borderTop: "4px solid #e53e3e" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#fff5f5", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                    <s.icon size={24} color="#e53e3e" />
                  </div>
                  <h4 style={{ fontWeight: 700, color: "#1a2e44", marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ fontSize: 14, color: "#718096", lineHeight: 1.5 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearest Hospitals */}
        <section className="section">
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32 }}>
              <div>
                <h2 className="section-title">Nearest Omnio Hospitals</h2>
                <p className="section-subtitle">Find the closest emergency centre to you</p>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {hospitals.map(h => (
                <div key={h.name} className="card" style={{ padding: 24, display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "#e8f7f7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>🏥</div>
                  <div style={{ flex: 1, minWidth: 180 }}>
                    <div style={{ fontWeight: 700, color: "#1a2e44", marginBottom: 4 }}>{h.name}</div>
                    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, color: "#718096" }}><MapPin size={13} />{h.address}</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontWeight: 700, color: "#0a8f8f", marginBottom: 4 }}>{h.distance}</div>
                    <span className="badge badge-green" style={{ fontSize: 11 }}><Clock size={11} /> Open 24/7</span>
                  </div>
                  <a href="#" className="btn-outline" style={{ marginLeft: 8, fontSize: 13, padding: "8px 14px" }}>Directions <ArrowRight size={13} /></a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* First Aid Tips */}
        <section className="section" style={{ background: "#f4f9f9" }}>
          <div className="container" style={{ maxWidth: 720, textAlign: "center" }}>
            <h2 className="section-title">While Help Is on the Way</h2>
            <p style={{ color: "#718096", marginBottom: 32 }}>Follow these basic first-aid guidelines to stabilise the patient until emergency services arrive.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14, textAlign: "left" }}>
              {["Stay calm and reassure the patient — panic worsens the situation.", "Call emergency services immediately — do not delay.", "Do not move the person unless there is immediate danger.", "If trained, start CPR for an unconscious, non-breathing patient.", "Control bleeding by applying firm pressure with a clean cloth.", "Keep the patient warm and comfortable until help arrives."].map((tip, i) => (
                <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: "#fff", borderRadius: 10, padding: 16 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", background: "#e8f7f7", color: "#0a8f8f", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{i + 1}</div>
                  <span style={{ color: "#4a5568", fontSize: 15 }}>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
