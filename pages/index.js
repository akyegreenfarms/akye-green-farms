"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* 🔝 TOP NAVIGATION ONLY */}
      <header style={nav}>
        <h2>Akye Green Farms</h2>

        {!user ? (
          <div>
            <a href="/login" style={link}>Login</a>
            <a href="/signup" style={btn}>Sign Up</a>
          </div>
        ) : (
          <div>
            <a href="/dashboard" style={btn}>Dashboard</a>
            <button onClick={logout} style={logoutBtn}>Logout</button>
          </div>
        )}
      </header>

      {/* ✅ YOUR EXISTING HOMEPAGE CONTENT STAYS HERE */}
     <main>

  {/* HERO */}
  <section style={hero}>
    <h1>Integrated Rubber Plantation Investment</h1>
    <p>
      A long-term agribusiness platform combining plantation development
      and future processing for sustainable value creation.
    </p>
  </section>

  {/* ABOUT */}
  <section style={section}>
    <h2>About Akye Green Farms</h2>
    <p>
      Akye Green Farms is an agribusiness venture focused on building
      large-scale rubber plantations in Ghana as a sustainable raw
      material base for future processing and export.
    </p>
    <p>
      Our approach is long-term, value-driven, and anchored in land
      security, structured investor participation, and professional
      farm management.
    </p>
  </section>

  {/* INVESTMENT MODEL */}
  <section style={sectionAlt}>
    <h2>Our Investment Model</h2>
    <ul>
      <li>
        <strong>Phase 1 – Plantation Development:</strong> Establishment
        of rubber plantations spanning thousands of acres.
      </li>
      <li>
        <strong>Phase 2 – Processing & Value Addition:</strong> After
        tree maturity, latex processing facilities will be introduced
        to increase value and export potential.
      </li>
    </ul>
    <p>
      This two-stage model ensures both long-term plantation income
      and additional revenue streams from processing.
    </p>
  </section>

  {/* WHY RUBBER */}
  <section style={section}>
    <h2>Why Rubber?</h2>
    <ul>
      <li>Strong global demand for natural rubber</li>
      <li>Production lifespan of over 40 years</li>
      <li>Stable long-term cash flow when properly managed</li>
      <li>Strategic importance for manufacturing and export</li>
    </ul>
  </section>

  {/* TRANSPARENCY */}
  <section style={sectionAlt}>
    <h2>Investor Transparency & Tracking</h2>
    <p>
      Investors onboarded through our platform gain access to a secure
      dashboard where they can track:
    </p>
    <ul>
      <li>Allocated acreage</li>
      <li>Investment status</li>
      <li>Payment milestones</li>
      <li>Plantation development updates</li>
    </ul>
  </section>

  {/* RISK */}
  <section style={section}>
    <h2>Long-Term Perspective & Risk Disclosure</h2>
    <p>
      Agriculture is influenced by natural and market conditions.
      Akye Green Farms is structured as a long-term agribusiness venture
      rather than a short-term scheme.
    </p>
    <p>
      While fixed returns are not guaranteed, well-managed rubber
      plantations can provide steady income for over
      <strong> 40 years</strong>.
    </p>
  </section>

  {/* CTA */}
  <section style={cta}>
    <h2>Get Started</h2>
    <p>
      Interested investors are encouraged to create an account or
      log in to learn more about participation opportunities.
    </p>
    <div>
      <a href="/signup" style={btn}>Create Account</a>
      <a href="/login" style={btnOutline}>Login</a>
    </div>
  </section>

</main>
        </section>

        {/* 
          ⚠️ VERY IMPORTANT:
          If you already had more homepage sections
          (About, Investment Overview, Risk Disclosure, Contact, etc),
          KEEP THEM BELOW — DO NOT DELETE THEM.
        */}
      </main>

    </div>
  );
}

/* ---------- STYLES ---------- */

const nav = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  background: "#0f5132",
  color: "#fff"
};

const hero = {
  padding: "80px 20px",
  textAlign: "center"
};

const link = {
  marginRight: "15px",
  color: "#fff",
  textDecoration: "none"
};

const btn = {
  background: "#198754",
  color: "#fff",
  padding: "8px 14px",
  borderRadius: "6px",
  textDecoration: "none",
  marginRight: "10px"
};

const logoutBtn = {
  background: "#dc3545",
  color: "#fff",
  border: "none",
  padding: "8px 14px",
  borderRadius: "6px",
  cursor: "pointer"
};
