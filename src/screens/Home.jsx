import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Car, Calendar, MapPin, Clock, ChevronRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Vehicle & lifestyle images
import SUV from "../assets/SUV.jpg";
import MiniVan from "../assets/MiniVan.jfif";
import Maybach from "../assets/maybach.jpeg";
import Limo from "../assets/Limo.jpg";
import Van from "../assets/Van.jpg";
import Bus from "../assets/bus.jpg";
import HomeImg from "../assets/Black.jpg";
import Home2 from "../assets/Home2.jfif";
import Home3 from "../assets/Services.jfif";

// Event logos
import FifaLogo from "../assets/fifa-world-cup-2026-logo.jpg";
import CopaLogo from "../assets/copa-america-usa-2024-logo.jpg";
import PepsiLogo from "../assets/pepsi-logo.jpg";
import CocaColaLogo from "../assets/coca-cola-logo.png";
import F1Logo from "../assets/formula-1-logo.png";

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NAVY = "#111827";
const BLUE = "#2563eb";

const OFFICES = [
  { city: "NEW JERSEY", country: "USA" },
  { city: "NEW YORK CITY", country: "USA" },
  { city: "VIRGINIA", country: "USA" },
  { city: "LOS ANGELES", country: "USA" },
  { city: "MIAMI", country: "USA" },
  { city: "VANCOUVER", country: "CANADA" },
  { city: "DUBAI", country: "UAE" },
  { city: "ABU DHABI", country: "UAE" },
  { city: "FRANKFURT", country: "GERMANY" },
  { city: "BERLIN", country: "GERMANY" },
  { city: "MUNICH", country: "GERMANY" },
];

const EVENT_LOGOS = [
  { name: "FIFA World Cup 26", img: FifaLogo },
  { name: "Copa America", img: CopaLogo },
  { name: "Formula 1", img: F1Logo },
  { name: "Pepsi", img: PepsiLogo },
  { name: "Coca-Cola", img: CocaColaLogo },
];

function Label({ text, light }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
      <div style={{ width: 28, height: 2, background: BLUE }} />
      <span style={{ color: light ? "#fff" : NAVY, opacity: light ? 0.9 : 1, fontWeight: 700, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", fontFamily: "'Montserrat', sans-serif" }}>
        {text}
      </span>
    </div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────
function Hero() {
  const [ready, setReady] = useState(false);
  useEffect(() => { const t = setTimeout(() => setReady(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section style={{ position: "relative", height: "100vh", minHeight: 640, display: "flex", alignItems: "flex-start", overflow: "hidden", paddingTop: "clamp(100px, 15vh, 160px)", boxSizing: "border-box" }}>
      <div style={{ position: "absolute", inset: 0 }}>
        <img src={HomeImg} alt="Stallion Worldwide Transportation luxury fleet" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(115deg, ${NAVY}f2 0%, ${NAVY}9a 50%, ${NAVY}55 100%)` }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${NAVY}f2 0%, transparent 55%)` }} />
      </div>

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "30px auto", padding: "0 24px", width: "100%" }}>
        <motion.div initial={{ opacity: 0, x: -24 }} animate={ready ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3, duration: 0.6 }}>
          <Label text="10+ Years of Trusted Service" light />
        </motion.div>

        <div style={{ maxWidth: 780 }}>
          {["Premium", "Chauffeur", "Services"].map((word, i) => (
            <motion.div key={word}
              initial={{ opacity: 0, y: 30 }} animate={ready ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.13, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: "clamp(2.2rem, 5.4vw, 4.8rem)", lineHeight: 1, color: i === 1 ? "#93c5fd" : "#fff", letterSpacing: "-2px", textTransform: "uppercase" }}>
              {word}
            </motion.div>
          ))}

          <motion.p initial={{ opacity: 0, y: 20 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.85, duration: 0.6 }}
            style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.7)", fontSize: 15, lineHeight: 1.7, maxWidth: 540, marginTop: 16, marginBottom: 16 }}>
             Experience premium transportation with professional chauffeurs, exceptional service, and seamless travel solutions across our global network of locations.          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={ready ? { opacity: 1, y: 0 } : {}} transition={{ delay: 1.0, duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 16px 48px rgba(0,0,0,0.35)" }}
                whileTap={{ scale: 0.97 }}
                style={{ background: BLUE, color: "#fff", padding: "14px 32px", borderRadius: 50, fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 8 }}>
                Reserve Now
                <ChevronRight size={14} />
              </motion.button>
            </Link>
            <Link to="/fleet">
              <motion.button
                whileHover={{ borderColor: "rgba(255,255,255,0.9)" }}
                style={{ background: "transparent", color: "#fff", padding: "14px 32px", borderRadius: 50, border: "2px solid rgba(255,255,255,0.35)", fontFamily: "'Montserrat', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 2, textTransform: "uppercase", cursor: "pointer" }}>
                Explore Fleet
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>

      <SupportBadge />
    </section>
  );
}

// ─── 24/7 rotating support badge ────────────────────────────────────────────
function SupportBadge() {
  return (
    <Link
      to="/contact"
      aria-label="Contact us for 24/7 live support"
      style={{ position: "absolute", right: "6%", bottom: "14%", width: 138, height: 138, zIndex: 3, display: "block" }}
      className="support-badge"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.96 }}
        transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ position: "relative", width: "100%", height: "100%", cursor: "pointer" }}
      >
        <svg viewBox="0 0 200 200" style={{ width: "100%", height: "100%", animation: "badge-spin 16s linear infinite" }}>
          <defs>
            <path id="badgeCircle" d="M 100,100 m -82,0 a 82,82 0 1,1 164,0 a 82,82 0 1,1 -164,0" />
          </defs>
          <circle cx="100" cy="100" r="98" fill={NAVY} stroke={BLUE} strokeWidth="2.5" />
          <circle cx="100" cy="100" r="82" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />
          <text fontSize="16.5" fontWeight="800" letterSpacing="2" fill="#fff" fontFamily="'Montserrat', sans-serif">
            <textPath href="#badgeCircle" startOffset="0%">
              24/7 LIVE SUPPORT • 24/7 LIVE SUPPORT •
            </textPath>
          </text>
        </svg>
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", pointerEvents: "none" }}>
          <Phone color="#fff" size={26} />
          <span style={{ color: "#fff", fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 11, marginTop: 4 }}>CALL US</span>
        </div>
      </motion.div>
      <style>{`
        @keyframes badge-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @media (max-width: 640px) { .support-badge { width: 92px !important; height: 92px !important; right: 16px !important; bottom: 16px !important; } }
      `}</style>
    </Link>
  );
}

// ─── Feature Cards ────────────────────────────────────────────────────────
function FeatureCards() {
  const FEATURES = [
    { icon: <Car size={28} />, title: "Premium Fleet", desc: "Luxury and performance vehicles" },
    { icon: <Calendar size={28} />, title: "Flexible Booking", desc: "Daily to monthly chauffeur services" },
    { icon: <MapPin size={28} />, title: "Multiple Locations", desc: "Offices across the US, Canada, UAE & Europe" },
    { icon: <Clock size={28} />, title: "24/7 Support", desc: "Always here to help" },
  ];

  return (
    <section style={{ background: "#fff", padding: "0 24px", marginTop: 60 }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", transform: "translateY(-40px)", boxShadow: "0 20px 60px rgba(17,24,39,0.12)", borderRadius: 16, overflow: "hidden", background: "#fff", border: "1px solid rgba(17,24,39,0.08)" }} className="feature-grid">
          {FEATURES.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.09, duration: 0.55 }}
              style={{ padding: "32px 24px", borderRight: i < 3 ? `1px solid rgba(17,24,39,0.08)` : "none", display: "flex", flexDirection: "column", gap: 12 }}
              className="feat-card">
              <div style={{ color: NAVY }} className="feat-icon">{f.icon}</div>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 13, color: NAVY, margin: "0 0 6px", textTransform: "uppercase", letterSpacing: 0.5 }} className="feat-title">{f.title}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#6b7280", fontSize: 13, margin: 0 }} className="feat-desc">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .feat-card:hover { background: ${NAVY}; }
        .feat-card:hover .feat-icon  { color: #fff !important; }
        .feat-card:hover .feat-title { color: #fff !important; }
        .feat-card:hover .feat-desc  { color: rgba(255,255,255,0.6) !important; }
        .feat-card { transition: background 0.3s; }
        .feat-icon, .feat-title, .feat-desc { transition: color 0.3s; }
        @media (max-width: 768px) { .feature-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .feature-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

// ─── Global Presence: 10+ years + Cities / Countries ticker ────────────────
// Pure-CSS marquee (translateX(0) -> translateX(-50%), linear, infinite) so the
// loop point is handled by the browser's compositor and never stutters/snaps.
function GlobalPresence() {
  const [tab, setTab] = useState("cities");
  const items = tab === "cities" ? OFFICES.map((o) => o.city) : [...new Set(OFFICES.map((o) => o.country))];
  const REPEATS = 8;
  const loop = Array.from({ length: REPEATS }, () => items).flat();

  return (
    <section style={{ background: NAVY, padding: "70px 0 60px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ display: "flex", justifyContent: "center" }}>
          <Label text="Global Presence" light />
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3.2rem)", color: "#fff", textTransform: "uppercase", margin: "0 0 12px" }}>
          10+ Years of <span style={{ color: "#93c5fd" }}>Experience</span>
        </motion.h2>
        <p style={{ fontFamily: "'Inter', sans-serif", color: "rgba(255,255,255,0.6)", fontSize: 15, maxWidth: 560, margin: "0 auto 32px" }}>
          A decade of trusted chauffeur service, now serving clients across our offices worldwide.
        </p>

        <div style={{ display: "inline-flex", background: "rgba(255,255,255,0.08)", borderRadius: 50, padding: 4, marginBottom: 36 }}>
          {["cities", "countries"].map((key) => (
            <button key={key} onClick={() => setTab(key)}
              style={{
                padding: "9px 26px", borderRadius: 50, border: "none", cursor: "pointer",
                fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase",
                background: tab === key ? BLUE : "transparent",
                color: tab === key ? "#fff" : "rgba(255,255,255,0.6)",
                transition: "all 0.25s"
              }}>
              {key}
            </button>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(255,255,255,0.12)", borderBottom: "1px solid rgba(255,255,255,0.12)", padding: "22px 0", overflow: "hidden" }}>
        <div className="marquee-track" style={{ display: "flex", width: "max-content" }}>
          {loop.map((label, i) => (
            <span key={`${label}-${i}`} style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}>
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800, fontSize: 20, letterSpacing: 2, color: "#fff", padding: "0 28px" }}>
                {label}
              </span>
              <span style={{ color: BLUE, fontSize: 20 }}>|</span>
            </span>
          ))}
        </div>
      </div>
      <style>{`
        .marquee-track { animation: marquee-scroll 24s linear infinite; }
        @keyframes marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-12.5%); } }
      `}</style>
    </section>
  );
}

// ─── Events We Cover marquee ────────────────────────────────────────────────
function EventsMarquee() {
  const loop = Array.from({ length: 4 }, () => EVENT_LOGOS).flat();
  return (
    <section style={{ background: "#f8f9fb", padding: "70px 0" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px", textAlign: "center", marginBottom: 40 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ display: "flex", justifyContent: "center" }}>
          <Label text="Events We Cover" />
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 4vw, 3rem)", color: NAVY, textTransform: "uppercase", margin: 0 }}>
          Trusted for <span style={{ color: BLUE }}>World-Class</span> Events
        </motion.h2>
      </div>

      <div style={{ overflow: "hidden", padding: "10px 0" }}>
        <div className="events-marquee-track" style={{ display: "flex", width: "max-content" }}>
          {loop.map((ev, i) => (
            <div key={`${ev.name}-${i}`} style={{
              width: 190, height: 110, margin: "0 16px", background: "#fff", borderRadius: 16,
              display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 24px rgba(17,24,39,0.08)", flexShrink: 0
            }}>
              <img src={ev.img} alt={ev.name} style={{ maxWidth: "70%", maxHeight: "60%", objectFit: "contain" }} />
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .events-marquee-track { animation: events-marquee-scroll 28s linear infinite; }
        @keyframes events-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-25%); } }
      `}</style>
    </section>
  );
}

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <FeatureCards />
      <GlobalPresence />
      <EventsMarquee />

      {/* Unlock the Road Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: BLUE }}>Unlock the Road</h2>
            <p className="text-gray-600 mb-6">
              Welcome to Stallion Worldwide Transportation, where convenience and flexibility meet exceptional quality. Discover a wide range of vehicles meticulously maintained to ensure a seamless experience.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { title: 'Explore Nearby Attractions', desc: 'Plan your adventure' },
                { title: 'Car Delivery', desc: 'Flexible drop-off points' },
                { title: 'Plan Your Route', desc: 'Detailed trip planning' },
                { title: 'Convenient', desc: 'Hassle-free booking' }
              ].map((item) => (
                <div key={item.title} className="space-y-1">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="text-white px-6 py-3 rounded-lg font-semibold"
                style={{ background: NAVY }}
              >
                Secure Your Booking
              </motion.button>
            </Link>
          </div>
          <div className="relative">
            <img
              src={Home3}
              alt="Luxury sedan"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </motion.div>

      {/* Drive in Style Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-16 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img
              src={Home2}
              alt="Premium vehicle"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4" style={{ color: BLUE }}>Drive in Style:<br />Our Premium Selection</h2>
            <p className="text-gray-600 mb-6">
              From the sleek and sporty to the spacious and luxurious, discover your perfect ride.
            </p>
            <div className="space-y-3 mb-6">
              {['Luxury Sedans', 'Luxury SUVs', 'Stretch Limo'].map((category) => (
                <Link
                  key={category}
                  to={`/fleet?category=${encodeURIComponent(category)}`}
                  className="block"
                >
                  <motion.div
                    whileHover={{ x: 10 }}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer"
                  >
                    <span className="font-medium">{category}</span>
                    <ChevronRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              ))}
            </div>
            <div className="flex space-x-4">
              <Link to="/fleet">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="text-white px-6 py-3 rounded-lg"
                  style={{ background: NAVY }}
                >
                  Explore Inventory
                </motion.button>
              </Link>
              <Link to="/fleet">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="border-2 px-6 py-3 rounded-lg"
                  style={{ borderColor: NAVY, color: NAVY }}
                >
                  Find Your Fit
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Featured Cars Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-24 px-6 bg-gray-50"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: BLUE }}>Featured Vehicles</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { image: Maybach, name: 'Luxury Sedan' },
              { image: MiniVan, name: 'Executive Vans' },
              { image: SUV, name: 'Luxury SUVs' },
              { image: Van, name: 'Luxury MiniBus', price: '299' },
              { image: Bus, name: 'Luxury Motor Coach', price: '399' },
              { image: Limo, name: 'Stretch Limo', price: '499' }
            ].map((car, index) => (
              <motion.div
                key={car.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-0">{car.name}</h3>
                <Link to="/booking">
                  <button className="mt-4 text-white px-6 py-2 rounded-lg transition-colors" style={{ background: NAVY }}>
                    Book Now
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
