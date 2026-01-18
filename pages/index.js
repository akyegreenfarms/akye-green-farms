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
          <p>
            <strong>Akye Green Farms</strong> is a Ghana-based agribusiness venture focused on developing
            <strong> large-scale rubber plantations</strong> as a sustainable raw material base for future
            processing and export. Our model is designed to generate long-term value through agriculture and
            industrial value addition.
          </p>
        </div>
      </section>

      {/* Vision */}
      <section style={sectionStyle}>
        <h2>Our Strategic Vision</h2>
        <div style={cardStyle}>
          <ul>
            <li>Develop thousands of acres of professionally managed rubber plantations</li>
            <li>Establish a rubber processing facility once plantations mature</li>
            <li>Add value locally instead of exporting raw rubber</li>
            <li>Serve regional and international export markets</li>
          </ul>
        </div>
      </section>

      {/* Business Model */}
      <section style={{ ...sectionStyle, background: "#ffffff" }}>
        <h2>Our Two-Stage Business Model</h2>

        <div style={cardStyle}>
          <h3>Stage 1: Rubber Plantation Development</h3>
          <p>
            This stage focuses on land preparation, planting of high-quality rubber seedlings, and
            professional farm management. Once mature, rubber trees can generate steady income for
            <strong> over 40–50 years</strong>, making rubber one of the most reliable long-term agricultural assets.
          </p>
        </div>

        <div style={cardStyle}>
          <h3>Stage 2: Processing & Value Addition (Future Phase)</h3>
          <p>
            Upon plantation maturity, Akye Green Farms plans to establish a rubber processing facility.
            This introduces a second income stream through value addition, manufacturing, and export-oriented
            operations, independent of plantation ownership.
          </p>
        </div>
      </section>

      {/* Investment Packages */}
      <section style={sectionStyle}>
        <h2>Investment Packages</h2>

        <div style={cardStyle}>
          <h3>Rubber Plantation Investment</h3>
          <p>
            Akye Green Farms has secured <strong>642 acres of land</strong> under an established land tenure arrangement
            for large-scale rubber plantation development. Due to the capital-intensive nature of rubber
            farming, investors are invited to partner in the plantation phase.
          </p>

          <ul>
            <li><strong>Minimum investment:</strong> 5 acres</li>
            
            <li><strong>Investor funding period:</strong> First 2 years only</li>
            <li><strong>Tree maturity:</strong> 6 years (latex tapping begins)</li>
            <li><strong>Production lifespan:</strong> 50+ years of continuous latex production</li>
          </ul>
        </div>

        <div style={cardStyle}>
          <h3>Payment Structure</h3>
          <ul>
            <li>25% upfront payment – land preparation</li>
            <li>75% balance – payable after land preparation</li>
            <li>No recurring capital calls after Year 2</li>
          </ul>
        </div>

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
        <h2>Contact Akye Green Farms</h2>
        <div style={cardStyle}>
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
