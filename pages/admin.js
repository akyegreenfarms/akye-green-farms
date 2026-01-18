"use client";

import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, collection, getDocs, updateDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";
import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [investors, setInvestors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        window.location.href = "/login";
        return;
      }

      // 🔐 CHECK ROLE
      const profileSnap = await getDoc(doc(db, "investors", user.uid));
      if (!profileSnap.exists() || profileSnap.data().role !== "admin") {
        window.location.href = "/dashboard";
        return;
      }

      // ✅ LOAD ALL INVESTORS
      const snap = await getDocs(collection(db, "investors"));
      const list = snap.docs.map(d => ({ id: d.id, ...d.data() }));
      setInvestors(list);
      setLoading(false);
    });

    return () => unsub();
  }, []);

  const updateInvestor = async (id, field, value) => {
    await updateDoc(doc(db, "investors", id), {
      [field]: value
    });

    setInvestors(prev =>
      prev.map(i => i.id === id ? { ...i, [field]: value } : i)
    );
  };

  if (loading) return <p style={{ padding: "40px" }}>Loading admin dashboard…</p>;

  return (
    <div style={{ padding: "40px", background: "#f5f7f6", minHeight: "100vh" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1>Admin Dashboard</h1>

        <table style={table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Acreage</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {investors.map(inv => (
              <tr key={inv.id}>
                <td>{inv.name}</td>
                <td>{inv.email}</td>
                <td>
                  <input
                    type="number"
                    value={inv.acreage || 0}
                    onChange={(e) =>
                      updateInvestor(inv.id, "acreage", Number(e.target.value))
                    }
                    style={input}
                  />
                </td>
                <td>
                  <select
                    value={inv.status}
                    onChange={(e) =>
                      updateInvestor(inv.id, "status", e.target.value)
                    }
                    style={input}
                  >
                    <option>Onboarding</option>
                    <option>Active</option>
                    <option>Fully Paid</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const table = {
  width: "100%",
  borderCollapse: "collapse",
  background: "#ffffff"
};

const input = {
  padding: "6px",
  borderRadius: "6px"
};
