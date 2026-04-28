export default function Home() {
  const services = [
    {
      title: "Property Management",
      description:
        "Complete oversight of your residence, vendors, maintenance, and day-to-day estate operations.",
      icon: "⌂",
      link: "/estate-management-northern-virginia",
    },
    {
      title: "Security & Access",
      description:
        "Discreet access coordination, trusted monitoring, and protocols that protect what matters most.",
      icon: "◆",
      link: "/home-watch-services-great-falls-va",
    },
    {
      title: "Lifestyle Concierge",
      description:
        "From arrivals to events, reservations to stocking, every detail is handled before you ask.",
      icon: "✦",
      link: "/luxury-concierge-washington-dc",
    },
    {
      title: "Estate Maintenance",
      description:
        "Proactive preservation of your home, systems, and grounds so everything remains in exceptional order.",
      icon: "◇",
      link: "/estate-management-northern-virginia",
    },
    {
      title: "Vendor Management",
      description:
        "We vet, schedule, coordinate, and oversee trusted service partners on your behalf.",
      icon: "♜",
      link: "/estate-management-northern-virginia",
    },
  ];

  return (
    <>
      <style>{`
        body {
          margin: 0;
          background: #050505;
          color: #f4eee3;
          font-family: Georgia, "Times New Roman", serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .page {
          min-height: 100vh;
          padding: 34px;
          background:
            radial-gradient(circle at top left, rgba(198,164,108,0.12), transparent 32%),
            radial-gradient(circle at bottom right, rgba(198,164,108,0.08), transparent 34%),
            linear-gradient(180deg, #050505 0%, #090909 45%, #050505 100%);
        }

        .hero {
          max-width: 1400px;
          margin: 0 auto;
          padding: 44px 0 70px;
          border-bottom: 1px solid rgba(198,164,108,0.18);
        }

        .logo {
          color: #c6a46c;
          letter-spacing: 8px;
          font-size: 44px;
          margin-bottom: 6px;
        }

        .sublogo {
          color: rgba(244,238,227,0.68);
          letter-spacing: 4px;
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 80px;
        }

        .hero-title {
          font-size: 82px;
          line-height: 0.98;
          font-weight: 400;
          max-width: 820px;
          margin: 0;
        }

        .divider {
          width: 120px;
          height: 2px;
          background: #c6a46c;
          margin: 34px 0;
          box-shadow: 0 0 24px rgba(198,164,108,0.3);
        }

        .hero-copy {
          max-width: 700px;
          font-size: 25px;
          line-height: 1.55;
          color: rgba(244,238,227,0.82);
          margin-bottom: 38px;
        }

        .cta {
          display: inline-block;
          background: linear-gradient(180deg, #d6b875 0%, #ad8541 100%);
          color: #111;
          padding: 16px 28px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 12px;
          transition: all 0.25s ease;
        }

        .cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(198,164,108,0.24);
        }

        .services {
          max-width: 1400px;
          margin: 0 auto;
          padding: 86px 0 100px;
        }

        .eyebrow {
          text-align: center;
          color: #c6a46c;
          letter-spacing: 6px;
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 20px;
        }

        .services-title {
          text-align: center;
          font-size: 64px;
          line-height: 1.04;
          font-weight: 400;
          margin: 0 0 20px;
        }

        .services-sub {
          max-width: 760px;
          margin: 0 auto 54px;
          text-align: center;
          font-size: 20px;
          line-height: 1.6;
          color: rgba(244,238,227,0.72);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .card {
          position: relative;
          overflow: hidden;
          min-height: 330px;
          padding: 42px 30px;
          border: 1px solid rgba(198,164,108,0.55);
          border-radius: 18px;
          background:
            linear-gradient(180deg, rgba(255,255,255,0.035), rgba(255,255,255,0.01));
          text-align: center;
          transition: all 0.35s ease;
          box-shadow:
            0 22px 60px rgba(0,0,0,0.32),
            inset 0 0 45px rgba(198,164,108,0.04);
        }

        .card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 20%;
          width: 60%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,218,150,0.95), transparent);
          box-shadow: 0 0 28px rgba(198,164,108,0.6);
        }

        .card:hover {
          transform: translateY(-10px) scale(1.015);
          border-color: rgba(255,218,150,0.95);
          box-shadow:
            0 34px 90px rgba(0,0,0,0.5),
            0 0 42px rgba(198,164,108,0.18),
            inset 0 0 50px rgba(198,164,108,0.06);
        }

        .icon {
          width: 84px;
          height: 84px;
          border-radius: 999px;
          border: 1px solid rgba(198,164,108,0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 26px;
          color: #c6a46c;
          font-size: 36px;
          box-shadow: 0 0 28px rgba(198,164,108,0.12);
        }

        .card h3 {
          font-size: 29px;
          font-weight: 400;
          margin: 0 0 10px;
        }

        .ornament {
          color: #c6a46c;
          letter-spacing: 8px;
          margin: 12px 0 20px;
        }

        .card p {
          font-size: 17px;
          line-height: 1.65;
          color: rgba(244,238,227,0.76);
          margin: 0 auto 26px;
          max-width: 330px;
        }

        .learn {
          color: #c6a46c;
          text-transform: uppercase;
          letter-spacing: 3px;
          font-size: 12px;
        }

        .contact {
          max-width: 1000px;
          margin: 0 auto 40px;
          padding: 56px 34px;
          text-align: center;
          border: 1px solid rgba(198,164,108,0.22);
          background: rgba(255,255,255,0.018);
        }

        .contact h2 {
          font-size: 46px;
          font-weight: 400;
          margin: 0 0 18px;
        }

        .contact p {
          font-size: 20px;
          line-height: 1.6;
          color: rgba(244,238,227,0.74);
          margin: 0 auto 30px;
          max-width: 680px;
        }

        @media (max-width: 1000px) {
          .grid {
            grid-template-columns: 1fr;
          }

          .hero-title,
          .services-title {
            font-size: 48px;
          }

          .hero-copy {
            font-size: 20px;
          }
        }
      `}</style>

      <main className="page">
        <section className="hero">
          <div className="logo">ARDEN</div>
          <div className="sublogo">Estate Concierge</div>

          <h1 className="hero-title">
            Everything Handled.
            <br />
            Nothing Overlooked.
          </h1>

          <div className="divider" />

          <p className="hero-copy">
            Discreet, comprehensive estate oversight for exceptional homes and
            the people who own them.
          </p>

          <a href="#contact" className="cta">
            Request Private Assessment
          </a>
        </section>
              <section style={{ padding: "100px 40px" }}>
  <h2 style={{ fontSize: "48px", marginBottom: "40px" }}>
    Our Services
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "28px",
    }}
  >
    {services.map((s) => (
      <div
        key={s.title}
        style={{
          padding: "40px",
          border: "1px solid rgba(198,164,108,0.5)",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.02)",
        }}
      >
        <h3>{s.title}</h3>
        <p>{s.description}</p>
      </div>
    ))}
  </div>
</section>

        <section className="services" id="services">
          <div className="eyebrow">Our Services</div>

          <h2 className="services-title">
            Tailored Oversight.
            <br />
            Total Peace of Mind.
          </h2>

          <p className="services-sub">
            Private estate management, home oversight, and concierge support
            delivered with discretion, precision, and polish.
          </p>

          <div className="grid">
            {services.map((service) => (
              <a href={service.link} key={service.title}>
                <div className="card">
                  <div className="icon">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <div className="ornament">◇</div>
                  <p>{service.description}</p>
                  <div className="learn">Learn More →</div>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <h2>Request a Private Assessment</h2>
          <p>
            Arden works with a limited number of private clients to ensure the
            highest level of discretion, responsiveness, and service.
          </p>

          <a href="/private-client-intake" className="cta">
            Begin Private Intake
          </a>
        </section>
      </main>
    </>
  );
}
