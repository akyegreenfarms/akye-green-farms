export default function Home() {
  const sectionStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "60px 20px"
  };

  const cardStyle = {
    background: "#ffffff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
    marginBottom: "30px"
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#1f2933", background: "#f5f7f6" }}>
      {/* Hero Section */}
      <section style={{ background: "linear-gradient(135deg, #0f5132, #198754)", color: "white" }}>
        <div style={{ ...sectionStyle, textAlign: "center" }}>
          <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>Akye Green Farms</h1>
          <h3 style={{ fontWeight: "400", marginBottom: "25px" }}>
            Integrated Rubber Plantation & Processing Investment Platform in Ghana
          </h3>
          <p style={{ fontSize: "18px", maxWidth: "800px", margin: "0 auto" }}>
            Building large-scale rubber plantations spanning thousands of acres, with a long-term vision of
            value addition through processing and export.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section style={sectionStyle}>
        <div style={cardStyle}>
          <h3>Rubber Plantation Investment Overview</h3>
          <p>
            Akye Green Farms has secured land for large-scale rubber plantation development under
            established tenure arrangements. Investors are invited to participate in the plantation
            phase as strategic partners in a long-term agribusiness project.
          </p>

          <ul>
            <li><strong>Minimum participation:</strong> 5 acres</li>
            <li><strong>Tree maturity:</strong> Approximately 6 years</li>
            <li><strong>Production lifespan:</strong> 50+ years of continuous latex production</li>

        <div style={cardStyle}>
          <h3>Profit Sharing Structure</h3>
          <p>
            Upon commencement of latex production, proceeds are shared equally under the land tenure
            arrangement:
          </p>
          <ul>
            <li>Landowners – 1/3</li>
            <li>Investor – 1/3</li>
            <li>Akye Green Farms – 1/3</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Security & Documentation</h3>
          <p>
            Every investment is fully documented. Site plans and indentures are prepared for each
            investor’s allocated acres and authenticated at the High Court, ensuring strong legal
            protection and transparency.
          </p>
        </div>
      </section>

      {/* Transparency */}
      <section style={sectionStyle}>
        <h2>Transparency & Reporting</h2>
        <div style={cardStyle}>
          <p>
            Investors receive regular updates including photographs, progress reports, and clear
            communication on plantation development stages.
          </p>
        </div>
      </section>

      {/* Risk */}
      <section style={sectionStyle}>
        <h2>Long-Term Perspective</h2>
        <div style={cardStyle}>
          <p>
            Agriculture is influenced by natural and market conditions. Akye Green Farms is structured as
            a long-term agribusiness venture rather than a short-term scheme. While fixed returns are not
            guaranteed, rubber plantations can provide a <strong>steady income stream for over 40 years</strong>
            when properly managed.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section style={{ ...sectionStyle, background: "#e9f5ef" }}>
        <h2>Register Your Interest</h2>
        <div style={cardStyle}>
          <p>
            If you are interested in participating in our rubber plantation project, please submit your
            details below. Our team will contact you to discuss investment structure and next steps.
          </p>

          <form
            action="https://formsubmit.co/akyefarms@gmail.com"
            method="POST"
            style={{ maxWidth: "600px" }}
          >
            <input type="hidden" name="_subject" value="New Investment Inquiry – Akye Green Farms" />
            <input type="hidden" name="_captcha" value="false" />

            <div style={{ marginBottom: "15px" }}>
              <label>Full Name</label><br />
              <input
                type="text"
                name="name"
                required
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Email Address</label><br />
              <input
                type="email"
                name="email"
                required
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label>Phone / WhatsApp</label><br />
              <input
                type="text"
                name="phone"
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label>Message</label><br />
              <textarea
                name="message"
                rows="4"
                style={{ width: "100%", padding: "10px", borderRadius: "6px", border: "1px solid #ccc" }}
              ></textarea>
            </div>

            <button
              type="submit"
              style={{
                background: "#198754",
                color: "white",
                padding: "12px 25px",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              Submit Interest
            </button>
          </form>
        </div>

        <div style={{ ...cardStyle, marginTop: "30px" }}>
          <p>📞 <strong>Phone / WhatsApp:</strong> +233 555 434 923</p>
          <p>📧 <strong>Email:</strong> akyefarms@gmail.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "#0f5132", color: "white", textAlign: "center", padding: "20px" }}>
        © {new Date().getFullYear()} Akye Green Farms. All rights reserved.
      </footer>
    </div>
  );
}
