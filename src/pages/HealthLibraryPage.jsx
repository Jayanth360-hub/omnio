import { useState } from "react";
import { Search, Clock, BookOpen, Video, Lightbulb } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tabs = ["Articles", "Videos", "Health Tips"];

const articles = [
  { title: "Understanding Heart Disease: Causes, Symptoms & Prevention", category: "Cardiology", readTime: "8 min", date: "Jun 18, 2024", emoji: "❤️" },
  { title: "Managing Diabetes: A Complete Guide to Blood Sugar Control", category: "Endocrinology", readTime: "12 min", date: "Jun 15, 2024", emoji: "🩺" },
  { title: "Back Pain Relief: Exercises and Lifestyle Changes That Work", category: "Orthopaedics", readTime: "6 min", date: "Jun 10, 2024", emoji: "🦴" },
  { title: "Childhood Nutrition: Building Healthy Habits From Day One", category: "Paediatrics", readTime: "9 min", date: "Jun 8, 2024", emoji: "👶" },
  { title: "Eye Care in the Digital Age: Protecting Your Vision", category: "Ophthalmology", readTime: "7 min", date: "Jun 5, 2024", emoji: "👁️" },
  { title: "Mental Health Matters: Recognising Signs of Depression", category: "Psychiatry", readTime: "10 min", date: "Jun 2, 2024", emoji: "🧠" },
];

const videos = [
  { title: "How to Check Your Blood Pressure at Home", duration: "5:32", views: "12k", emoji: "🎬" },
  { title: "Yoga for Back Pain — Gentle Routines for Beginners", duration: "18:45", views: "28k", emoji: "🎬" },
  { title: "What Happens During a Heart Bypass Surgery?", duration: "11:20", views: "9.4k", emoji: "🎬" },
  { title: "Nutrition Tips for a Healthy Immune System", duration: "8:15", views: "21k", emoji: "🎬" },
];

const tips = [
  { title: "Drink 2–3 litres of water daily", category: "Hydration", emoji: "💧" },
  { title: "Walk 10,000 steps every day", category: "Fitness", emoji: "🚶" },
  { title: "Sleep 7–9 hours for optimal health", category: "Rest", emoji: "😴" },
  { title: "Eat 5 servings of fruits & vegetables", category: "Nutrition", emoji: "🥦" },
  { title: "Meditate 10 minutes daily to reduce stress", category: "Mental Health", emoji: "🧘" },
  { title: "Get annual health screenings done", category: "Prevention", emoji: "🩺" },
  { title: "Limit screen time to under 4 hours/day", category: "Wellness", emoji: "📵" },
  { title: "Take the stairs instead of the lift", category: "Fitness", emoji: "🪜" },
];

export default function HealthLibraryPage() {
  const [activeTab, setActiveTab] = useState("Articles");
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", marginBottom: 16, display: "inline-block" }}>Health Library</span>
            <h1>Health Library</h1>
            <p>Trusted health information, guides, and tips written and reviewed by Omnio's expert doctors.</p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            {/* Search */}
            <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", borderRadius: 12, padding: "10px 20px", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", marginBottom: 36, maxWidth: 560 }}>
              <Search size={18} color="#0a8f8f" />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles, videos, health tips..." style={{ border: "none", outline: "none", flex: 1, fontSize: 15 }} />
            </div>

            {/* Tabs */}
            <div style={{ display: "flex", gap: 8, marginBottom: 36, borderBottom: "2px solid #e2e8f0", paddingBottom: 0 }}>
              {tabs.map(t => (
                <button key={t} onClick={() => setActiveTab(t)}
                  style={{ display: "flex", alignItems: "center", gap: 7, padding: "10px 20px", background: "none", border: "none", cursor: "pointer", fontWeight: 600, fontSize: 15,
                    color: activeTab === t ? "#0a8f8f" : "#718096",
                    borderBottom: `3px solid ${activeTab === t ? "#0a8f8f" : "transparent"}`,
                    marginBottom: -2, transition: "all 0.2s" }}>
                  {t === "Articles" && <BookOpen size={16} />}
                  {t === "Videos" && <Video size={16} />}
                  {t === "Health Tips" && <Lightbulb size={16} />}
                  {t}
                </button>
              ))}
            </div>

            {activeTab === "Articles" && (
              <div className="grid-3">
                {articles.map(a => (
                  <div key={a.title} className="card" style={{ overflow: "hidden" }}>
                    <div style={{ background: "#e8f7f7", height: 120, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 52 }}>{a.emoji}</div>
                    <div style={{ padding: 20 }}>
                      <div style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                        <span className="badge badge-teal" style={{ fontSize: 11 }}>{a.category}</span>
                        <span style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 12, color: "#718096" }}><Clock size={12} />{a.readTime}</span>
                      </div>
                      <h3 style={{ fontWeight: 700, color: "#1a2e44", fontSize: 15, lineHeight: 1.4, marginBottom: 12 }}>{a.title}</h3>
                      <div style={{ fontSize: 12, color: "#a0aec0" }}>{a.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Videos" && (
              <div className="grid-2">
                {videos.map(v => (
                  <div key={v.title} className="card" style={{ overflow: "hidden", display: "flex" }}>
                    <div style={{ width: 140, background: "#1a2e44", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, flexDirection: "column", gap: 8, color: "#fff" }}>
                      <div style={{ width: 42, height: 42, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Video size={20} />
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 600 }}>{v.duration}</span>
                    </div>
                    <div style={{ padding: 20 }}>
                      <h3 style={{ fontWeight: 700, color: "#1a2e44", fontSize: 15, lineHeight: 1.4, marginBottom: 10 }}>{v.title}</h3>
                      <span style={{ fontSize: 13, color: "#718096" }}>{v.views} views</span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Health Tips" && (
              <div className="grid-4">
                {tips.map(t => (
                  <div key={t.title} className="card" style={{ padding: 24, textAlign: "center" }}>
                    <div style={{ fontSize: 40, marginBottom: 14 }}>{t.emoji}</div>
                    <span className="badge badge-teal" style={{ fontSize: 11, marginBottom: 10, display: "inline-block" }}>{t.category}</span>
                    <p style={{ fontWeight: 600, color: "#1a2e44", fontSize: 14, lineHeight: 1.5 }}>{t.title}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
