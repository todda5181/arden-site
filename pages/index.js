export default function Home() {
  const services = [
    { title: "Property Management", description: "Full estate oversight." },
    { title: "Security & Access", description: "Discreet protection systems." },
    { title: "Lifestyle Concierge", description: "Everything handled." },
  ];

  return (
    <div style={{ padding: "60px", color: "white", background: "#050505", minHeight: "100vh" }}>
      <h1>TEST CLEAN BUILD</h1>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "28px",
    marginTop: "40px"
  }}
>
        {services.map((s) => (
<div
  key={s.title}
  style={{
    position: "relative",
    padding: "42px 30px",
    border: "1px solid rgba(198,164,108,0.65)",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.02)",
    transition: "all 0.35s ease",
    cursor: "pointer"
  }}
  className="service-card"
>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
               ))}
      </div>
    </div>
  );
}
