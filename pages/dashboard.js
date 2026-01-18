"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        window.location.href = "/login";
        return;
      }

      setUser(currentUser);

      const ref = doc(db, "investors", currentUser.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        const newProfile = {
          name: currentUser.email.split("@")[0],
          email: currentUser.email,
          phone: "",
          acreage: 0,
          project: "Rubber Plantation Project",
          status: "Onboarding",
          createdAt: new Date()
        };
        await setDoc(ref, newProfile);
        setProfile(newProfile);
      } else {
        setProfile(snap.data());
      }
    });

    return () => unsub();
  }, []);

  if (!profile) return <p style={{ padding: "40px" }}>Loading dashboard...</p>;

  const saveProfile = async () => {
    setSaving(true);
    await updateDoc(doc(db, "investors", user.uid), {
      name: profile.name,
      phone: profile.phone
    });
    setSaving(false);
    setEditing(false);
  };

  const logout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7f6", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1>Investor Dashboard</h1>

        {/* PROFILE */}
        <Section title="Investor Profile">
          <Grid>
            <Editable
              label="Full Name"
              value={profile.name}
              editing={editing}
              onChange={(v) => setProfile({ ...profile, name: v })}
            />
            <ReadOnly label="Email" value={profile.email} />
            <Editable
              label="Phone"
              value={profile.phone}
              editing={editing}
              onChange={(v) => setProfile({ ...profile, phone: v })}
            />
            <ReadOnly label="Project" value={profile.project} />
            <ReadOnly label="Allocated Acreage" value={`${profile.acreage} Acres`} />
            <ReadOnly label="Status" value={profile.status} />
          </Grid>

          {!editing ? (
            <button style={btn} onClick={() => setEditing(true)}>Edit Profile</button>
          ) : (
            <button style={btn} onClick={saveProfile}>
              {saving ? "Saving..." : "Save Changes"}
            </button>
          )}
        </Section>

        {/* INVESTMENT OVERVIEW */}
        <Section title="Investment Overview">
          <Grid>
            <ReadOnly label="Total Acreage" value={`${profile.acreage} Acres`} />
            <ReadOnly label="Investment Commitment" value="Disclosed on request" />
            <ReadOnly label="Amount Paid" value="—" />
            <ReadOnly label="Outstanding Balance" value="—" />
          </Grid>
        </Section>

        <button onClick={logout} style={btn}>Logout</button>
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Section({ title, children }) {
  return <div style={section}><h2>{title}</h2>{children}</div>;
}

function Grid({ children }) {
  return <div style={grid}>{children}</div>;
}

function Editable({ label, value, editing, onChange }) {
  return (
    <div style={card}>
      <strong>{label}</strong>
      {editing ? (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          style={input}
        />
      ) : (
        <p>{value || "—"}</p>
      )}
    </div>
  );
}

function ReadOnly({ label, value }) {
  return (
    <div style={card}>
      <strong>{label}</strong>
      <p>{value}</p>
    </div>
  );
}

/* ---------- STYLES ---------- */

const section = {
  background: "#fff",
  padding: "25px",
  borderRadius: "12px",
  marginBottom: "30px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "15px"
};

const card = {
  background: "#f9fafb",
  padding: "15px",
  borderRadius: "8px"
};

const input = {
  width: "100%",
  padding: "8px",
  marginTop: "5px"
};

const btn = {
  marginTop: "15px",
  background: "#198754",
  color: "#fff",
  padding: "10px 18px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};
