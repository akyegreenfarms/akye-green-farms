export default function Home() {
  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "40px" }}>
      <h1>Akye Green Farms</h1>
      <p>
        Welcome to Akye Green Farms – a sustainable rubber plantation investment
        platform in Ghana.
      </p>

      <h2>Why Invest With Us?</h2>
      <ul>
        <li>Professionally managed rubber plantations</li>
        <li>Transparent growth tracking</li>
        <li>Long-term sustainable value</li>
      </ul>

      <h2>Investment Model</h2>
      <p>
        Investors participate by acquiring plantation plots and receive regular
        updates on land preparation, planting, and growth stages.
      </p>

      <h2>Status</h2>
      <p>Platform is live. Investor dashboard coming soon.</p>

      <footer style={{ marginTop: "40px", color: "#555" }}>
        © {new Date().getFullYear()} Akye Green Farms
      </footer>
    </main>
  );
}
