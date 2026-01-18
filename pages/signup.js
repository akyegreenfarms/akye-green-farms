export default function Signup() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7f6", padding: "40px" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto", background: "#fff", padding: "30px", borderRadius: "10px" }}>
        <h2>Investor Sign Up</h2>
        <p>Register your interest to access the Akye Green Farms investor portal.</p>

        <form>
          <label>Full Name</label><br />
          <input type="text" placeholder="Your full name" style={inputStyle} /><br /><br />

          <label>Email Address</label><br />
          <input type="email" placeholder="Your email" style={inputStyle} /><br /><br />

          <label>Password</label><br />
          <input type="password" placeholder="Create password" style={inputStyle} /><br /><br />

          <button style={buttonStyle}>Create Account</button>
        </form>

        <p style={{ marginTop: "15px" }}>
          Already registered? <a href="/login">Login here</a>
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
