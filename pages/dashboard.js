"use client";

import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../lib/firebase";
import { doc, getDoc } from "firebase/firestore";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState("dashboard");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (u) => {
      if (!u) {
        window.location.href = "/login";
        return;
      }

      setUser(u);

      const snap = await getDoc(doc(db, "investors", u.uid));
      if (snap.exists()) setProfile(snap.data());

      setLoading(false);
    });

    return () => unsub();
  }, []);

  const logout = async () => {
    await signOut(auth);
    window.location.href = "/";
  };

  if (loading) return <p style={{ padding: 40 }}>Loading dashboard…</p>;

  return (
    <div style={layout}>
      {/* SIDEBAR */}
      <aside style={sidebar}>
        <h3 style={{ marginBottom: 30 }}>Akye Green Farms</h3>

        <nav style={navList}>
          <NavItem label="Dashboard" active={active} onClick={() => setActive("dashboard")} />
          <NavItem label="My Investment" active={active} onClick={() => setActive("investment")} />
          <NavItem label="Progress Updates" active={active} onClick={() => setActive("updates")} />
          <NavItem label="Lifecycle Timeline" active={active} onClick={() => setActive("lifecycle")} />
          <NavItem label="Documents" active={active} onClick={() => setActive("documents")} />
          <NavItem label="Support" active={active} onClick={() => setActive("support")} />
        </nav>

        <button onClick={logout} style={logoutBtn}>Logout</button>
      </aside>

      {/* MAIN CONTENT */}
      <main style={main}>
        <h2 style={{ marginBottom: 20 }}>
          {active === "dashboard" && "Dashboard"}
          {active === "investment" && "My Investment"}
          {active === "updates" && "Progress Updates"}
          {active === "lifecycle" && "Lifecycle Timeline"}
          {active === "documents" && "Documents"}
          {active === "support" && "Support"}
        </h2>

        {active === "dashboard" && <DashboardHome profile={profile} />}
        {active === "investment" && <Investment profile={profile} />}
        {active === "updates" && <Updates />}
        {active === "lifecycle" && <Lifecycle />}
        {active === "documents" && <Documents />}
        {active === "support" && <Support />}
      </main>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function NavItem({ label, active, onClick }) {
  const isActive = active.toLowerCase().includes(label.split(" ")[0].toLowerCase());
  return (
    <div
      onClick={onClick}
      style={{
        padding: "10px 0",
        cursor: "pointer",
        color: isActive ? "#ffd966" : "#fff",
        fontWeight: isActive ? "bold" : "normal"
      }}
    >
      {label}
    </div>
  );
}

function DashboardHome({ profile }) {
  return (
    <>
      <div style={cards}>
        <Card title="Allocated Acreage" value={`${profile?.acreage || "—"} Acres`} />
        <Card title="Project Stage" value="Plantation Establishment" />
        <Card title="Investment Status" value={profile?.status || "Active"} />
        <Card title="Last Update" value="—" />
      </div>

      <Panel title="Your Investment Summary">
        <p><strong>Project:</strong> Rubber Plantation Project</p>
        <p><strong>Participation:</strong> Long-term Agribusiness</p>
        <p><strong>Production Window:</strong> Year 6 onward</p>
      </Panel>
    </>
  );
}

function Investment({ profile }) {
  return (
    <Panel title="My Investment">
      <p><strong>Allocated Acreage:</strong> {profile?.acreage || "—"} Acres</p>
      <p><strong>Status:</strong> {profile?.status}</p>
      <p><strong>Block:</strong> {profile?.block || "—"}</p>
    </Panel>
  );
}

function Updates() {
  return (
    <Panel title="Progress Updates">
      <p>No updates posted yet.</p>
    </Panel>
  );
}

function Lifecycle() {
  return (
    <Panel title="Lifecycle Timeline">
      <p>Land Secured → Land Prepared → Planting → Immature → Production</p>
    </Panel>
  );
}

function Documents() {
  return (
    <Panel title="Documents">
      <p>No documents available yet.</p>
    </Panel>
  );
}

function Support() {
  return (
    <Panel title="Support">
      <p>Email: akyefarms@gmail.com</p>
      <p>Phone / WhatsApp: +233 555 434 923</p>
    </Panel>
  );
}

function Panel({ title, children }) {
  return (
    <div style={panel}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div style={card}>
      <h4>{title}</h4>
      <p>{value}</p>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const layout = { display: "flex", minHeight: "100vh", fontFamily: "Arial" };
const sidebar = { width: 240, background: "#0f5132", color: "#fff", padding: 20 };
const navList = { display: "flex", flexDirection: "column", gap: 10 };
const main = { flex: 1, background: "#f5f7f6", padding: 30 };

const cards = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: 20,
  marginBottom: 30
};

const card = { background: "#fff", padding: 20, borderRadius: 10 };
const panel = { background: "#fff", padding: 25, borderRadius: 10, marginBottom: 30 };

const logoutBtn = {
  marginTop: 30,
  background: "#dc3545",
  color: "#fff",
  border: "none",
  padding: "10px",
  borderRadius: 6,
  cursor: "pointer"
};
