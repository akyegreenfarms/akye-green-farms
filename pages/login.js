export default function Login() {
  return (
    <div style={{ minHeight: "100vh", background: "#f5f7f6", padding: "40px" }}>
      <div style={{ maxWidth: "500px", margin: "0 auto", background: "#fff", padding: "30px", borderRadius: "10px" }}>
        <h2>Investor Login</h2>

        <form>
          <label>Email Address</label><br />
          <input type="email" placeholder="Your email" style={inputStyle} /><br /><br />

          <label>Password</label><br />
          <input type="password" placeholder="Your password" style={inputStyle} /><br /><br />

          <a href="/dashboard">
            <button type="button" style={buttonStyle}>Login</button>
          </a>
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
