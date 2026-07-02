import { Phone, MapPin, Clock, CheckCircle, Zap, Shield } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ambulanceTypes = [
  { emoji: "🚑", title: "Basic Life Support (BLS)", desc: "Equipped for stable patient transport with oxygen, stretcher and first-aid supplies.", eta: "Avg ETA: 12 min", tag: "Most Common" },
  { emoji: "🚨", title: "Advanced Life Support (ALS)", desc: "Fully equipped ICU on wheels with defibrillator, ventilator and paramedic team.", eta: "Avg ETA: 18 min", tag: "Critical Care" },
  { emoji: "🏥", title: "Neonatal Ambulance", desc: "Specialised for premature babies with incubator, oxygen and neonatal support equipment.", eta: "Avg ETA: 15 min", tag: "New-borns" },
  { emoji: "✈️", title: "Air Ambulance", desc: "Helicopter medical evacuation for remote areas or inter-city critical transfers.", eta: "On request", tag: "Remote Areas" },
];

const features = [
  { icon: Clock, title: "Average Response: 10 min", desc: "Our fleet is strategically positioned for fastest response across cities." },
  { icon: Shield, title: "Trained Paramedics", desc: "Every ambulance is staffed by certified paramedics and emergency technicians." },
  { icon: Zap, title: "GPS Tracked Fleet", desc: "Real-time tracking allows you to monitor the ambulance location live." },
  { icon: CheckCircle, title: "Hospital Pre-Alert", desc: "The ER team is notified before arrival so they're ready when you arrive." },
];

export default function AmbulancePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #1a2e44 0%, #c53030 100%)", color: "#fff", padding: "72px 0 56px", textAlign: "center" }}>
          <div className="container">
            <div style={{ fontSize: 60, marginBottom: 16 }}>🚑</div>
            <h1 style={{ fontSize: 44, fontWeight: 900, marginBottom: 14 }}>Ambulance Services</h1>
            <p style={{ fontSize: 17, opacity: 0.85, maxWidth: 520, margin: "0 auto 32px" }}>24/7 emergency ambulance service with trained paramedics. We reach you fast — because time saves lives.</p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:18002666464" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#e53e3e", color: "#fff", borderRadius: 12, padding: "16px 32px", fontWeight: 800, fontSize: 20, textDecoration: "none", boxShadow: "0 6px 20px rgba(229,62,62,0.4)" }}>
                <Phone size={22} fill="currentColor" /> 1800 266 6464
              </a>
              <a href="tel:108" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(255,255,255,0.15)", color: "#fff", borderRadius: 12, padding: "16px 32px", fontWeight: 800, fontSize: 20, textDecoration: "none", border: "2px solid rgba(255,255,255,0.3)" }}>
                <Phone size={22} /> 108 (Free)
              </a>
            </div>
            <div style={{ fontSize: 13, opacity: 0.7, marginTop: 14 }}>Both numbers available 24/7 · No waiting · Immediate dispatch</div>
          </div>
        </section>

        {/* Quick Stats */}
        <section style={{ background: "#0a8f8f", padding: "36px 0" }}>
          <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, textAlign: "center" }}>
            {[["<10 min", "Avg Response Time"], ["200+", "Ambulances in Fleet"], ["50+", "Cities Covered"], ["100%", "GPS Tracked"]].map(([v, l]) => (
              <div key={l}><div style={{ fontSize: 30, fontWeight: 900, color: "#fff" }}>{v}</div><div style={{ fontSize: 13, color: "rgba(255,255,255,0.75)", marginTop: 4 }}>{l}</div></div>
            ))}
          </div>
        </section>

        {/* Ambulance Types */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="section-title">Our Ambulance Fleet</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>Specialised vehicles equipped for every type of medical emergency</p>
            </div>
            <div className="grid-2" style={{ gap: 24 }}>
              {ambulanceTypes.map(a => (
                <div key={a.title} className="card" style={{ padding: 28, display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{ fontSize: 48, flexShrink: 0 }}>{a.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                      <h3 style={{ fontWeight: 700, color: "#1a2e44", fontSize: 17 }}>{a.title}</h3>
                      <span className="badge badge-teal" style={{ fontSize: 11 }}>{a.tag}</span>
                    </div>
                    <p style={{ color: "#718096", fontSize: 14, lineHeight: 1.6, marginBottom: 12 }}>{a.desc}</p>
                    <span style={{ fontSize: 13, fontWeight: 700, color: "#0a8f8f" }}>⏱ {a.eta}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Call */}
        <section className="section" style={{ background: "#f4f9f9" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="section-title">How to Request an Ambulance</h2>
            </div>
            <div className="grid-4">
              {[
                { n: "1", emoji: "📞", title: "Call 1800 266 6464", desc: "Call our 24/7 emergency dispatch centre." },
                { n: "2", emoji: "📍", title: "Share Location", desc: "Give your exact location or landmark clearly." },
                { n: "3", emoji: "🔔", title: "Stay on the Line", desc: "Our operator guides you until the ambulance arrives." },
                { n: "4", emoji: "🚑", title: "Help Arrives", desc: "Trained paramedics reach you with full medical support." },
              ].map(s => (
                <div key={s.n} style={{ textAlign: "center", padding: 24 }}>
                  <div style={{ fontSize: 40, marginBottom: 14 }}>{s.emoji}</div>
                  <h4 style={{ fontWeight: 700, color: "#1a2e44", marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ color: "#718096", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="section-title">Why Omnio Ambulance?</h2>
            </div>
            <div className="grid-2" style={{ gap: 24 }}>
              {features.map(f => (
                <div key={f.title} className="card" style={{ padding: 28, display: "flex", gap: 18, alignItems: "flex-start" }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: "#e8f7f7", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <f.icon size={22} color="#0a8f8f" />
                  </div>
                  <div>
                    <h4 style={{ fontWeight: 700, color: "#1a2e44", marginBottom: 6 }}>{f.title}</h4>
                    <p style={{ color: "#718096", fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Big CTA */}
        <section style={{ background: "#e53e3e", padding: "60px 0", textAlign: "center" }}>
          <div className="container">
            <h2 style={{ fontSize: 32, fontWeight: 800, color: "#fff", marginBottom: 14 }}>Medical Emergency? Don't Wait.</h2>
            <p style={{ color: "rgba(255,255,255,0.85)", marginBottom: 28 }}>Call us now — our team dispatches help within minutes.</p>
            <a href="tel:18002666464" style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "#fff", color: "#e53e3e", borderRadius: 12, padding: "16px 36px", fontWeight: 800, fontSize: 20, textDecoration: "none" }}>
              <Phone size={22} fill="currentColor" /> Call 1800 266 6464
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
