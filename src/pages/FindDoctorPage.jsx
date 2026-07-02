import { useState } from "react";
import { Search, Star, MapPin, Clock, Filter } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const doctors = [
  { id: 1, name: "Dr. Priya Sharma", specialty: "Cardiologist", exp: "18 yrs", rating: 4.9, reviews: 312, location: "Mumbai", fee: "₹1200", available: true, emoji: "👩‍⚕️" },
  { id: 2, name: "Dr. Arjun Mehta", specialty: "Neurologist", exp: "14 yrs", rating: 4.8, reviews: 245, location: "Delhi", fee: "₹1500", available: true, emoji: "👨‍⚕️" },
  { id: 3, name: "Dr. Sneha Iyer", specialty: "Orthopaedic", exp: "12 yrs", rating: 4.7, reviews: 198, location: "Bangalore", fee: "₹1000", available: false, emoji: "👩‍⚕️" },
  { id: 4, name: "Dr. Rajan Nair", specialty: "Paediatrician", exp: "20 yrs", rating: 4.9, reviews: 420, location: "Chennai", fee: "₹800", available: true, emoji: "👨‍⚕️" },
  { id: 5, name: "Dr. Meera Patel", specialty: "Ophthalmologist", exp: "10 yrs", rating: 4.6, reviews: 156, location: "Ahmedabad", fee: "₹900", available: true, emoji: "👩‍⚕️" },
  { id: 6, name: "Dr. Vikram Reddy", specialty: "General Medicine", exp: "16 yrs", rating: 4.8, reviews: 289, location: "Hyderabad", fee: "₹700", available: false, emoji: "👨‍⚕️" },
];

const specialties = ["All", "Cardiologist", "Neurologist", "Orthopaedic", "Paediatrician", "Ophthalmologist", "General Medicine"];

export default function FindDoctorPage() {
  const [search, setSearch] = useState("");
  const [selectedSpec, setSelectedSpec] = useState("All");

  const filtered = doctors.filter(d =>
    (selectedSpec === "All" || d.specialty === selectedSpec) &&
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", marginBottom: 16, display: "inline-block" }}>Medical Services</span>
            <h1>Find a Doctor</h1>
            <p>Search from 500+ expert doctors across 25+ specialities</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {/* Search & Filter Bar */}
            <div style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 4px 20px rgba(0,0,0,0.08)", marginBottom: 36, display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <div style={{ flex: 1, minWidth: 220, display: "flex", alignItems: "center", gap: 10, background: "#f4f9f9", borderRadius: 10, padding: "10px 16px" }}>
                <Search size={18} color="#0a8f8f" />
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by doctor name..." style={{ border: "none", background: "transparent", outline: "none", fontSize: 15, width: "100%" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f4f9f9", borderRadius: 10, padding: "10px 16px", fontSize: 14 }}>
                <Filter size={16} color="#0a8f8f" />
                <select value={selectedSpec} onChange={e => setSelectedSpec(e.target.value)} style={{ border: "none", background: "transparent", outline: "none", fontSize: 14, cursor: "pointer" }}>
                  {specialties.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <button className="btn-primary">Search Doctors</button>
            </div>

            {/* Specialty Pills */}
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 32 }}>
              {specialties.map(s => (
                <button key={s} onClick={() => setSelectedSpec(s)}
                  style={{ padding: "7px 18px", borderRadius: 100, border: "1.5px solid", fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                    background: selectedSpec === s ? "#0a8f8f" : "#fff",
                    color: selectedSpec === s ? "#fff" : "#4a5568",
                    borderColor: selectedSpec === s ? "#0a8f8f" : "#e2e8f0" }}>
                  {s}
                </button>
              ))}
            </div>

            <p style={{ marginBottom: 20, color: "#718096", fontSize: 14 }}>{filtered.length} doctors found</p>

            <div className="grid-3">
              {filtered.map(d => (
                <div key={d.id} className="card" style={{ padding: 24 }}>
                  <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 60, height: 60, borderRadius: 12, background: "#e8f7f7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, flexShrink: 0 }}>{d.emoji}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: "#1a2e44", fontSize: 16 }}>{d.name}</div>
                      <div style={{ fontSize: 13, color: "#0a8f8f", fontWeight: 600 }}>{d.specialty}</div>
                      <div style={{ fontSize: 12, color: "#718096" }}>{d.exp} experience</div>
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
                    <span className="badge badge-teal" style={{ fontSize: 12 }}><Star size={12} fill="#0a8f8f" /> {d.rating} ({d.reviews})</span>
                    <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#718096" }}><MapPin size={12} /> {d.location}</span>
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 12, borderTop: "1px solid #e2e8f0" }}>
                    <div>
                      <span style={{ fontSize: 18, fontWeight: 800, color: "#1a2e44" }}>{d.fee}</span>
                      <span style={{ fontSize: 12, color: "#718096" }}> /consult</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 8 }}>
                      <span className={`badge ${d.available ? "badge-green" : "badge-red"}`} style={{ fontSize: 11 }}>
                        <Clock size={11} /> {d.available ? "Available Today" : "Fully Booked"}
                      </span>
                      <a href="#book-appointment" className="btn-primary" style={{ fontSize: 13, padding: "7px 16px" }}>Book Now</a>
                    </div>
                  </div>
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
