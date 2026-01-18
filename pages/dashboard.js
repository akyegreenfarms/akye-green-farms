"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        window.location.href = "/login";
      } else {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => unsub();
  }, []);

  if (loading) {
    return <p style={{ padding: "40px" }}>Loading dashboard...</p>;
  }

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7f6", padding: "40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1>Investor Dashboard</h1>

        <div style={cardStyle}>
          <p><strong>Logged in as:</strong> {user.email}</p>
          <p><strong>Status:</strong> Onboarding in progress</p>
          <p><strong>Plantation Stage:</strong> Pre-allocation</p>
        </div>

        <div style={cardStyle}>
          <p>
            Your investment details, plantation updates, and documents will appear
            here once onboarding is completed.
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
