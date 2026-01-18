export default function Dashboard() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7f6", padding: "40px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1>Investor Dashboard</h1>

        <div style={cardStyle}>
          <h3>Welcome to Akye Green Farms</h3>
          <p>Status: <strong>Onboarding in progress</strong></p>
          <p>Plantation Stage: <strong>Pre-allocation</strong></p>
        </div>

        <div style={cardStyle}>
          <p>
            Your investment details, plantation updates, and documents will appear here
            once onboarding is completed.
          </p>
        </div>

        <a href="/">
          <button style={buttonStyle}>Back to Website</button>
        </a>
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
