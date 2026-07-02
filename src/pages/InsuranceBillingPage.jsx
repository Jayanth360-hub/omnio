import { Shield, CheckCircle, FileText, Phone, Download, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const partners = [
  { name: "Star Health", emoji: "⭐" }, { name: "ICICI Lombard", emoji: "🏦" },
  { name: "Bajaj Allianz", emoji: "🔷" }, { name: "New India Assurance", emoji: "🇮🇳" },
  { name: "HDFC Ergo", emoji: "💎" }, { name: "SBI General", emoji: "🏛️" },
  { name: "United India", emoji: "🤝" }, { name: "Oriental Insurance", emoji: "🌟" },
];

const faqs = [
  { q: "What is cashless hospitalisation?", a: "Cashless hospitalisation means you don't have to pay hospital bills upfront. The insurance company settles the bills directly with Omnio Hospitals, subject to your policy limits and coverage terms." },
  { q: "How do I check my insurance coverage?", a: "You can verify your coverage by calling our insurance helpline at 1800 266 0001, or by entering your policy details at our billing desk at any Omnio branch." },
  { q: "What documents are required for a claim?", a: "You typically need your health insurance card or policy document, a photo ID proof, doctor's prescription and discharge summary, and original bills and receipts." },
  { q: "How long does claim settlement take?", a: "For cashless claims, authorisation is usually given within 4–6 hours. For reimbursement claims, settlement typically takes 7–15 working days after document submission." },
  { q: "Does Omnio accept CGHS/ESIC?", a: "Yes, Omnio Hospitals is empanelled with CGHS, ESIC, and most government health schemes. Please carry your valid beneficiary card and check your scheme limits at the billing counter." },
];

export default function InsuranceBillingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Navbar />
      <main>
        <section className="page-hero">
          <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }}>
            <div>
              <span className="tag" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", marginBottom: 16, display: "inline-block" }}>Medical Services</span>
              <h1>Insurance & Billing</h1>
              <p>Seamless cashless treatment with 100+ insurance partners. Transparent billing with no hidden charges.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {["100+ Insurance Partners", "Cashless Claims", "Transparent Billing", "24/7 Support"].map(f => (
                <div key={f} style={{ background: "rgba(255,255,255,0.12)", borderRadius: 12, padding: "18px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                  <CheckCircle size={18} color="#0fb8b8" />
                  <span style={{ fontWeight: 600, fontSize: 14 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="section">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <h2 className="section-title">Cashless Claim Process</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>Simple steps to avail cashless treatment at Omnio</p>
            </div>
            <div className="grid-4">
              {[
                { n: "1", icon: Shield, title: "Present Your Card", desc: "Show your health insurance card at the billing desk on arrival." },
                { n: "2", icon: FileText, title: "Pre-Authorisation", desc: "Our team sends an authorisation request to your insurer within 2 hours." },
                { n: "3", icon: CheckCircle, title: "Get Approved", desc: "Receive approval and get treated without paying bills upfront." },
                { n: "4", icon: Download, title: "Discharge", desc: "Walk out without paying — insurance settles directly with us." },
              ].map(s => (
                <div key={s.n} style={{ textAlign: "center", padding: "28px 20px" }}>
                  <div style={{ width: 56, height: 56, borderRadius: "50%", background: "#0a8f8f", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 20, margin: "0 auto 16px" }}>{s.n}</div>
                  <h4 style={{ fontWeight: 700, color: "#1a2e44", marginBottom: 8 }}>{s.title}</h4>
                  <p style={{ color: "#718096", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insurance Partners */}
        <section className="section" style={{ background: "#f4f9f9" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <h2 className="section-title">Our Insurance Partners</h2>
              <p className="section-subtitle" style={{ margin: "0 auto" }}>Omnio is empanelled with 100+ insurance companies across India</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {partners.map(p => (
                <div key={p.name} className="card" style={{ padding: 24, textAlign: "center" }}>
                  <div style={{ fontSize: 36, marginBottom: 10 }}>{p.emoji}</div>
                  <div style={{ fontWeight: 700, color: "#1a2e44", fontSize: 14 }}>{p.name}</div>
                  <span className="badge badge-green" style={{ fontSize: 11, marginTop: 8 }}>Cashless</span>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", color: "#718096", marginTop: 24, fontSize: 14 }}>+ 92 more insurance companies. Contact us to verify your specific insurer.</p>
          </div>
        </section>

        {/* Billing Info */}
        <section className="section">
          <div className="container">
            <div className="grid-2" style={{ gap: 48, alignItems: "start" }}>
              <div>
                <h2 className="section-title">Transparent Billing</h2>
                <p style={{ color: "#718096", marginBottom: 24, lineHeight: 1.7 }}>We believe in complete transparency. All charges are disclosed upfront — no hidden costs, no surprises.</p>
                {["Detailed itemised bill for every service", "Upfront cost estimate before planned procedures", "No hidden or arbitrary charges", "Dedicated billing counsellor for every patient", "Online bill access through patient portal", "Easy EMI options available for large bills"].map(f => (
                  <div key={f} style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 14 }}>
                    <CheckCircle size={17} color="#0a8f8f" />
                    <span style={{ color: "#4a5568", fontSize: 15 }}>{f}</span>
                  </div>
                ))}
                <div style={{ marginTop: 28, display: "flex", gap: 14, flexWrap: "wrap" }}>
                  <a href="tel:18002660001" className="btn-primary"><Phone size={15} /> Billing Helpline</a>
                  <button className="btn-outline"><Download size={15} /> Download Rates</button>
                </div>
              </div>
              <div>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1a2e44", marginBottom: 20 }}>Frequently Asked Questions</h3>
                {faqs.map((f, i) => (
                  <div key={i} style={{ border: "1px solid #e2e8f0", borderRadius: 10, marginBottom: 10, overflow: "hidden" }}>
                    <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: openFaq === i ? "#e8f7f7" : "#fff", border: "none", cursor: "pointer", fontWeight: 600, color: "#1a2e44", fontSize: 14, textAlign: "left", gap: 12 }}>
                      {f.q}
                      {openFaq === i ? <ChevronUp size={16} color="#0a8f8f" /> : <ChevronDown size={16} color="#a0aec0" />}
                    </button>
                    {openFaq === i && <div style={{ padding: "0 16px 16px", color: "#718096", fontSize: 14, lineHeight: 1.7 }}>{f.a}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
