"use client";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        window.location.href = "/login";
      } else {
        setUser(u);
      }
    });
    return () => unsub();
  }, []);

  if (!user) {
    return <p style={{ padding: "40px" }}>Loading profile...</p>;
  }

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>Account Profile</h1>
      <p>Manage your personal information.</p>

      <div style={{ marginTop: "30px" }}>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.uid}</p>
      </div>
    </div>
  );
}
