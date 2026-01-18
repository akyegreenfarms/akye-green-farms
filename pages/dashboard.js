"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        window.location.href = "/login";
      } else {
        setUser(currentUser);
        const snap = await getDoc(doc(db, "investors", currentUser.uid));
        setProfile(snap.data());
      }
    });
    return () => unsub();
  }, []);

  if (!profile) return <p style={{ padding: "40px" }}>Loading dashboard…</p>;

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7f6", padding: "40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1>Investor Dashboard</h1>

        <div style={cardStyle}>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Email:</strong> {profile.email}</p>
          <p><strong>Status:</strong> {profile.status}</p>
        </div>

        <div style={cardStyle}>
          <p>
            Your investment details and plantation updates will appear here
            once onboarding is completed.
          </p>
        </div>

        <button onClick={handleLogout} style={buttonStyle}>Logout</button>
      </div>
    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "25px",
  borderRadius: "10px",
  marginBottom: "20px"
};

const buttonStyle = {
  background: "#198754",
  color: "#fff",
  padding: "12px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};
