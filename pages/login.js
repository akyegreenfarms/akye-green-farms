"use client";

import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [emailForReset, setEmailForReset] = useState("");

  const handleLogin = async (e) => {
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

  const resetPassword = async () => {
    if (!emailForReset) {
      alert("Enter your email to reset password");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, emailForReset);
      alert("Password reset email sent");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div style={container}>
      <div style={card}>
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <label>Email</label>
          <input type="email" name="email" required style={input} />

          <label>Password</label>
          <input type="password" name="password" required style={input} />

          <button style={btn} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <hr />

        <h4>Forgot password?</h4>
        <input
          type="email"
          placeholder="Enter your email"
          value={emailForReset}
          onChange={(e) => setEmailForReset(e.target.value)}
          style={input}
        />
        <button onClick={resetPassword} style={resetBtn}>
          Reset Password
        </button>

        <p>
          New here? <a href="/signup">Create an account</a>
        </p>

        <p>
          <a href="/">← Back to Home</a>
        </p>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const container = {
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "#f5f7f6"
};

const card = {
  background: "#fff",
  padding: "30px",
  borderRadius: "10px",
  width: "350px"
};

const input = {
  width: "100%",
  padding: "8px",
  margin: "8px 0"
};

const btn = {
  width: "100%",
  background: "#198754",
  color: "#fff",
  padding: "10px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const resetBtn = {
  width: "100%",
  background: "#0d6efd",
  color: "#fff",
  padding: "8px",
  border: "none",
  borderRadius: "6px",
  marginTop: "5px"
};
