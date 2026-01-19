// DASHBOARD LANDING PAGE – AKYE GREEN FARMS (INVESTOR VIEW)
"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        window.location.href = "/login";
        return;
      }
      setUser(u);

      const ref = doc(db, "investors", u.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) setProfile(snap.data());

      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return <p style={{ padding: 40 }}>Loading dashboard...</p>;

  return (
    <div style={layout}>
      {/* SIDEBAR */}
      <aside style={sidebar}>
        <h3 style={{ marginBottom: 30 }}>Akye Green Farms</h3>
        <nav style={navList}>
          <a style={navItem}>Dashboard</a>
          <a style={navItem}>My Investment</a>
          <a style={navItem}>Progress Updates</a>
          <a style={navItem}>Lifecycle Timeline</a>
          <a style={navItem}>Documents</a>
          <a style={navItem}>Support</a>
        </nav>
      </aside>

      {/* MAIN */}
      <main style={main}>
        {/* TOP BAR */}
        <div style={topbar}>
          <h2>Dashboard</h2>
          <span>{profile?.fullName}</span>
        </div>

        {/* STATUS CARDS */}
        <div style={cards}>
          <div style={card}><h4>Allocated Acreage</h4><p>{profile?.acreage || "—"} Acres</p></div>
          <div style={card}><h4>Project Stage</h4><p>{profile?.stage || "Plantation Establishment"}</p></div>
          <div style={card}><h4>Investment Status</h4><p>{profile?.status || "Active"}</p></div>
          <div style={card}><h4>Last Update</h4><p>{profile?.lastUpdate || "—"}</p></div>
        </div>

        {/* SUMMARY */}
        <section style={panel}>
          <h3>Your Investment Summary</h3>
          <div style={twoCol}>
            <div>
              <p><strong>Investor ID:</strong> {user.uid.slice(0, 8)}</p>
              <p><strong>Project:</strong> Rubber Plantation Project</p>
              <p><strong>Start Date:</strong> {profile?.startDate || "—"}</p>
            </div>
            <div>
              <p><strong>Allocated Block:</strong> {profile?.block || "—"}</p>
              <p><strong>Participation:</strong> Long-term Agribusiness</p>
              <p><strong>Production Window:</strong> Year 6 onward</p>
            </div>
          </div>
        </section>

        {/* LATEST UPDATE */}
        <section style={panel}>
          <h3>Latest Project Update</h3>
          <p>{profile?.latestNote || "No updates posted yet."}</p>
        </section>

        {/* LIFECYCLE */}
        <section style={panel}>
          <h3>Lifecycle Timeline</h3>
          <div style={timeline}>
            <span>Land Secured ✓</span>
            <span>Land Prepared ✓</span>
            <span style={active}>Planting</span>
            <span>Immature</span>
            <span>Production</span>
          </div>
        </section>
      </main>
    </div>
  );
}

/* STYLES */
const layout = { display: "flex", minHeight: "100vh", fontFamily: "Arial" };
const sidebar = { width: 240, background: "#0f5132", color: "#fff", padding: 20 };
const navList = { display: "flex", flexDirection: "column", gap: 12 };
const navItem = { color: "#fff", textDecoration: "none", cursor: "pointer", padding: "6px 0" };
const main = { flex: 1, background: "#f5f7f6", padding: 30 };
const topbar = { display: "flex", justifyContent: "space-between", marginBottom: 30 };
const cards = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: 20 };
const card = { background: "#fff", padding: 20, borderRadius: 10 };
const panel = { background: "#fff", padding: 25, borderRadius: 10, marginTop: 30 };
const twoCol = { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 };
const timeline = { display: "flex", gap: 15, marginTop: 10 };
const active = { fontWeight: "bold", color: "#198754" };
