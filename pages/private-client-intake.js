export default function PrivateClientIntake() {
  return (
    <div style={{ background: "#050505", color: "#f4eee3", minHeight: "100vh", padding: "80px 24px", textAlign: "center" }}>
      <div style={{ color: "#C6A46C", letterSpacing: "4px", textTransform: "uppercase", fontSize: "12px", marginBottom: "24px" }}>
        Private Client Intake
      </div>

      <h1 style={{ fontSize: "56px", fontWeight: 400, marginBottom: "24px" }}>
        Request a Private Assessment
      </h1>

      <p style={{ fontSize: "21px", lineHeight: 1.7, maxWidth: "720px", margin: "0 auto 36px", color: "rgba(244,238,227,0.82)" }}>
        Arden works with a limited number of private clients to ensure discretion, responsiveness, and exceptional service.
      </p>

      <a
        href="/#contact"
        style={{
          display: "inline-block",
          padding: "16px 26px",
          border: "1px solid #C6A46C",
          color: "#C6A46C",
          textDecoration: "none",
          letterSpacing: "2px",
          textTransform: "uppercase",
          fontSize: "12px",
        }}
      >
        Begin Private Intake
      </a>
    </div>
  );
}
