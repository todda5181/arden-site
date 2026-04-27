export default function Home() {
  const services = [
    { title: "Property Management", description: "Full estate oversight." },
    { title: "Security & Access", description: "Discreet protection systems." },
    { title: "Lifestyle Concierge", description: "Everything handled." },
  ];

  return (
    <div style={{ padding: "60px", color: "white", background: "#050505", minHeight: "100vh" }}>
      <h1>TEST CLEAN BUILD</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {services.map((s) => (
          <div key={s.title} style={{ border: "1px solid gold", padding: "20px" }}>
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
               ))}
      </div>
    </div>
  );
}
