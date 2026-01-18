"use client";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useState } from "react";

export default function Signup() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const userCred = await createUserWithEmailAndPassword(auth, email, password);

      await setDoc(doc(db, "investors", userCred.user.uid), {
        name,
        email,
        status: "Onboarding",
        createdAt: new Date()
      });

      window.location.href = "/dashboard";
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7f6", padding: "40px" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto", background: "#fff", padding: "30px", borderRadius: "12px" }}>
        <h2>Investor Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <label>Full Name</label><br />
          <input type="text" name="name" required style={inputStyle} /><br /><br />

          <label>Email Address</label><br />
          <input type="email" name="email" required style={inputStyle} /><br /><br />

          <label>Password</label><br />
          <input type="password" name="password" required style={inputStyle} /><br /><br />

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Creating account..." : "Create Account"}
          </button>
        </form>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  background: "#198754",
  color: "#fff",
  padding: "12px",
  border: "none",
  borderRadius: "8px",
  width: "100%",
  cursor: "pointer"
};
 
 
