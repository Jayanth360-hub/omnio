import { Heart, Activity, Pill, Stethoscope, CheckCircle, Star, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const services = [
  { icon: Stethoscope, title: "Doctor Home Visit", desc: "Licensed doctors visit you at home for diagnosis, prescriptions & follow-up care.", price: "From ₹999", color: "#e8f7f7", iconColor: "#0a8f8f" },
  { icon: Activity, title: "Nursing Care", desc: "Trained nurses for wound care, injections, IV therapy, and post-surgery monitoring.", price: "From ₹699", color: "#f0fff4", iconColor: "#38a169" },
  { icon: Pill, title: "Physiotherapy", desc: "Certified physiotherapists for rehabilitation, pain management & mobility restoration.", price: "From ₹799", color: "#fff7ed", iconColor: "#f5a623" },
  { icon: Heart, title: "Elderly Care", desc: "Dedicated caregivers for senior citizens — daily assistance, companionship & monitoring.", price: "From ₹1499/day", color: "#fff0f0", iconColor: "#e53e3e" },
  { icon: Activity, title: "Lab Tests at Home", desc: "Sample collection from your doorstep. Reports delivered digitally within 24 hours.", price: "From ₹299", color: "#f5f0ff", iconColor: "#7c3aed" },
  { icon: Pill, title: "Medical Equipment", desc: "Rent or buy hospital-grade equipment — oxygen, wheelchair, hospital bed & more.", price: "On request", color: "#ebf8ff", iconColor: "#3182ce" },
];

const steps = [
  { n: "1", title: "Book Online", desc: "Select service and schedule your preferred time slot." },
  { n: "2", title: "Professional Arrives", desc: "A verified medical professional arrives at your doorstep." },
  { n: "3", title: "Care Delivered", desc: "Receive quality care in the comfort of your home." },
  { n: "4", title: "Follow-Up", desc: "Digital reports and follow-up recommendations sent to you." },
];

export default function HomeCarePage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <span className="tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", marginBottom: 16, display: "inline-block" }}>Medical Services</span>
              <h1>Home Care Services</h1>
              <p>Professional medical care delivered safely to your home. Trusted doctors, nurses & therapists — at your convenience.</p>
              <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
                <a href="#book-appointment" className="btn-yellow">Book Home Visit</a>
                <a href="tel:18002666464" className="btn-outline" style={{ color: "#fff", borderColor: "rgba(255,255,255,0.4)" }}><Phone size={15} /> Call Us</a>
              </div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.1)", borderRadius: 20, padding: 32, textAlign: "center" }}>
              <div style={{ fontSize: 72, marginBottom: 16 }}>🏠</div>
              <div style={{ fontSize: 24, fontWeight: 800, color: "#fff" }}>Care at Home</div>
              <div style={{ color: "rgba(255,255,255,0.75)", marginTop: 8 }}>Available 7 days, 6 AM – 10 PM</div>
              <div style={{ display: "flex", gap: 16, justifyContent: "center", marginTop: 20 }}>
                {[["500+", "Caregivers"], ["4.8★", "Rating"], ["50k+", "Visits"]].map(([v, l]) => (
                  <div key={l} style={{ textAlign: "center" }}>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#fff" }}>{v}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.7)" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="section-title">Our Home Care Services</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>Comprehensive medical services delivered right to your doorstep</p>
            </div>
            <div className="grid-3">
              {services.map(s => (
                <div key={s.title} className="card" style={{ padding: 28 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: s.color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
                    <s.icon size={26} color={s.iconColor} />
                  </div>
                  <h3 style={{ fontWeight: 700, color: "#1a2e44", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ color: "#718096", fontSize: 14, lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontWeight: 700, color: "#0a8f8f" }}>{s.price}</span>
                    <a href="#book-appointment" className="btn-primary" style={{ fontSize: 13, padding: "7px 16px" }}>Book Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="section" style={{ background: "#f4f9f9" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="section-title">How It Works</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>Getting care at home is simple and hassle-free</p>
            </div>
            <div className="grid-4">
              {steps.map(s => (
                <div key={s.n} style={{ textAlign: "center", padding: 24 }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "#0a8f8f", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, fontWeight: 800, margin: "0 auto 16px" }}>{s.n}</div>
                  <h4 style={{ fontWeight: 700, color: "#1a2e44", marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ color: "#718096", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Trust Us */}
        <section className="section">
          <div className="container">
            <div className="grid-2" style={{ alignItems: "center", gap: 56 }}>
              <div>
                <h2 className="section-title">Why Choose Omnio Home Care?</h2>
                <p style={{ color: "#718096", marginBottom: 28 }}>We bring hospital-quality care to the comfort of your home, with verified professionals and real-time support.</p>
                {["Background-verified medical professionals", "Real-time tracking of caregiver arrival", "Digital health records after every visit", "24/7 customer support available", "Flexible booking — same day or scheduled", "Affordable pricing with insurance accepted"].map(f => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <CheckCircle size={18} color="#0a8f8f" />
                    <span style={{ color: "#4a5568" }}>{f}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "linear-gradient(135deg, #e8f7f7, #d0f0f0)", borderRadius: 20, padding: 40, textAlign: "center" }}>
                <div style={{ fontSize: 64 }}>🩺</div>
                <div style={{ fontSize: 20, fontWeight: 700, color: "#1a2e44", marginTop: 16 }}>Trusted by 50,000+</div>
                <div style={{ color: "#718096", marginTop: 8 }}>Families across India</div>
                <div style={{ display: "flex", gap: 4, justifyContent: "center", marginTop: 16 }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="#f5a623" color="#f5a623" />)}
                </div>
                <div style={{ fontSize: 14, color: "#718096", marginTop: 8 }}>4.9/5 Average Rating</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
