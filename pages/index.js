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
    <div style={container}>
      {/* Top Bar */}
      <div style={topBar}>
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
      </div>

      {/* Hero */}
      <div style={hero}>
        <h1>Integrated Rubber Plantation Investment</h1>
        <p>
          A long-term agribusiness platform combining plantation development
          and future processing for sustainable value creation.
        </p>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const container = {
  fontFamily: "Arial, sans-serif"
};

const topBar = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  background: "#0f5132",
  color: "#fff"
};

const hero = {
  padding: "60px 20px",
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
