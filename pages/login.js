"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/dashboard";
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7f6", padding: "40px" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto", background: "#fff", padding: "30px", borderRadius: "10px" }}>
        <h2>Investor Login</h2>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label><br />
          <input type="email" name="email" required style={inputStyle} /><br /><br />

          <label>Password</label><br />
          <input type="password" name="password" required style={inputStyle} /><br /><br />

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p style={{ marginTop: "15px" }}>
          New investor? <a href="/signup">Create an account</a>
        </p>
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
