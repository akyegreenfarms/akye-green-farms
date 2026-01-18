"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        window.location.href = "/login";
      } else {
        setUser(currentUser);
      }
    });
    return () => unsub();
  }, []);

  if (!user) return <p style={{ padding: "40px" }}>Loading dashboard...</p>;

  const handleLogout = async () => {
    await signOut(auth);
    window.location.href = "/login";
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f5f7f6", padding: "40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <h1>Investor Dashboard</h1>

        {/* Investor Profile */}
        <Section title="Investor Profile">
          <Grid>
            <Item label="Name" value="Nana Kwame" />
            <Item label="Email" value={user.email} />
            <Item label="Project" value="Rubber Plantation Project" />
            <Item label="Allocated Acreage" value="5 Acres" />
            <Item label="Status" value="Active / Onboarding" />
          </Grid>
        </Section>

        {/* Investment Overview */}
        <Section title="Investment Overview">
          <Grid>
            <Item label="Total Acreage" value="5 Acres" />
            <Item label="Total Commitment" value="Private (Disclosed on request)" />
            <Item label="Amount Paid" value="—" />
            <Item label="Outstanding Balance" value="—" />
          </Grid>
        </Section>

        {/* Payment Schedule */}
        <Section title="Payment Schedule">
          <Table
            headers={["Tranche", "%", "Payment Window", "Purpose", "Status"]}
            rows={[
              ["1st Tranche", "25%", "Sep–Nov 2025", "Land preparation", "Completed"],
              ["2nd Tranche", "50%", "Dec 2025–Apr 2026", "Tree establishment", "In progress"],
              ["3rd Tranche", "25%", "May 2026–Jan 2027", "Maintenance", "Pending"]
            ]}
          />
        </Section>

        {/* Payment History */}
        <Section title="Payment History">
          <Table
            headers={["Date", "Tranche", "Remark"]}
            rows={[
              ["04 Sep 2025", "1st Tranche", "Land preparation (partial)"],
              ["08 Oct 2025", "1st Tranche", "Land preparation completed"],
              ["27 Nov 2025", "2nd Tranche", "Tree establishment (partial)"]
            ]}
          />
        </Section>

        {/* Documents */}
        <Section title="Documents & Acknowledgement">
          <p>
            All payments made to Akye Green Farms are acknowledged and recorded.
            Official receipts and documentation will be made available in this
            section.
          </p>
        </Section>

        <button onClick={handleLogout} style={logoutBtn}>
          Logout
        </button>
      </div>
    </div>
  );
}

/* ---------- COMPONENTS ---------- */

function Section({ title, children }) {
  return (
    <div style={section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return <div style={grid}>{children}</div>;
}

function Item({ label, value }) {
  return (
    <div style={card}>
      <strong>{label}</strong>
      <p>{value}</p>
    </div>
  );
}

function Table({ headers, rows }) {
  return (
    <table style={table}>
      <thead>
        <tr>
          {headers.map((h, i) => (
            <th key={i} style={th}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} style={td}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ---------- STYLES ---------- */

const section = {
  background: "#ffffff",
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

const table = {
  width: "100%",
  borderCollapse: "collapse"
};

const th = {
  borderBottom: "2px solid #ddd",
  padding: "10px",
  textAlign: "left"
};

const td = {
  borderBottom: "1px solid #eee",
  padding: "10px"
};

const logoutBtn = {
  background: "#198754",
  color: "#fff",
  padding: "12px 20px",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};
