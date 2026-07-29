export default function ServiceAreas() {
  const areas = [
    {
      name: "McLean, Virginia",
      description:
        "Private estate management and home oversight for exceptional residences throughout McLean.",
    },
    {
      name: "Great Falls, Virginia",
      description:
        "Discreet property oversight, vendor coordination, and estate support for Great Falls homeowners.",
    },
    {
      name: "Vienna, Virginia",
      description:
        "Proactive home management and trusted estate coordination for clients in Vienna.",
    },
    {
      name: "Arlington, Virginia",
      description:
        "Private residence oversight and concierge support for Arlington homeowners.",
    },
    {
      name: "Potomac, Maryland",
      description:
        "White-glove estate management for distinguished homes throughout Potomac.",
    },
    {
      name: "Bethesda, Maryland",
      description:
        "Confidential home oversight and lifestyle support for Bethesda residents.",
    },
    {
      name: "Washington, DC",
      description:
        "Private estate and lifestyle management for select residences in Washington, DC.",
    },
    {
      name: "Northern Virginia",
      description:
        "Comprehensive estate management across Northern Virginia and the greater Washington region.",
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

        * {
          box-sizing: border-box;
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

        .nav {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(198,164,108,0.18);
        }

        .logo {
          width: 230px;
          height: auto;
          display: block;
        }

        .nav-links {
          display: flex;
          gap: 28px;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(244,238,227,0.75);
        }

        .nav-links a:hover {
          color: #c6a46c;
        }

        .hero {
          max-width: 1100px;
          margin: 0 auto;
          padding: 110px 0 85px;
          text-align: center;
          border-bottom: 1px solid rgba(198,164,108,0.18);
        }

        .eyebrow {
          color: #c6a46c;
          letter-spacing: 5px;
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 22px;
        }

        h1 {
          font-size: 76px;
          line-height: 1;
          font-weight: 400;
          margin: 0;
        }

        .divider {
          width: 120px;
          height: 2px;
          background: #c6a46c;
          margin: 34px auto;
        }

        .hero p {
          max-width: 820px;
          margin: 0 auto;
          font-size: 22px;
          line-height: 1.65;
          color: rgba(244,238,227,0.78);
        }

        .content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 0;
        }

        .intro {
          max-width: 850px;
          margin: 0 auto 60px;
          text-align: center;
        }

        .intro h2 {
          font-size: 54px;
          line-height: 1.1;
          font-weight: 400;
          margin: 0 0 24px;
        }

        .intro p {
          font-size: 20px;
          line-height: 1.7;
          color: rgba(244,238,227,0.74);
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .card {
          padding: 38px;
          border: 1px solid rgba(198,164,108,0.42);
          border-radius: 18px;
          background: rgba(255,255,255,0.018);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,218,150,0.92);
          box-shadow: 0 24px 70px rgba(0,0,0,0.4);
        }

        .card h3 {
          font-size: 30px;
          font-weight: 400;
          margin: 0 0 16px;
        }

        .card p {
          font-size: 17px;
          line-height: 1.65;
          color: rgba(244,238,227,0.72);
          margin: 0;
        }

        .contact {
          max-width: 900px;
          margin: 90px auto 40px;
          padding: 58px 38px;
          text-align: center;
          border: 1px solid rgba(198,164,108,0.32);
        }

        .contact h2 {
          font-size: 48px;
          line-height: 1.1;
          font-weight: 400;
          margin: 0 0 22px;
        }

        .contact p {
          font-size: 20px;
          line-height: 1.7;
          color: rgba(244,238,227,0.74);
          margin: 0 auto 30px;
          max-width: 700px;
        }

        .cta {
          display: inline-block;
          background: linear-gradient(180deg, #d6b875 0%, #ad8541 100%);
          color: #111;
          padding: 16px 28px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 12px;
        }

        .footer {
          max-width: 1400px;
          margin: 0 auto;
          padding: 34px 0 0;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          color: rgba(244,238,227,0.56);
          font-size: 14px;
          border-top: 1px solid rgba(198,164,108,0.14);
        }

        @media (max-width: 900px) {
          h1 {
            font-size: 48px;
          }

          .grid {
            grid-template-columns: 1fr;
          }

          .nav {
            flex-direction: column;
            gap: 24px;
          }

          .nav-links {
            justify-content: center;
            flex-wrap: wrap;
          }

          .page {
            padding: 24px;
          }

          .intro h2,
          .contact h2 {
            font-size: 40px;
          }
        }
      `}</style>

      <main className="page">
        <nav className="nav">
          <a href="/">
            <img src="/logo.png" alt="Arden Concierge" className="logo" />
          </a>

          <div className="nav-links">
            <a href="/estate-management-northern-virginia">
              Estate Management
            </a>
            <a href="/arden-estate-assessment">Estate Assessment</a>
            <a href="/service-areas">Service Areas</a>
            <a href="/private-client-intake">Private Intake</a>
          </div>
        </nav>

        <section className="hero">
          <div className="eyebrow">Northern Virginia • Maryland • Washington, DC</div>

          <h1>Private Estate Management Across the Capital Region</h1>

          <div className="divider" />

          <p>
            Arden provides discreet estate oversight, vendor coordination,
            property management, and lifestyle support for select homeowners
            throughout Northern Virginia, suburban Maryland, and Washington, DC.
          </p>
        </section>

        <section className="content">
          <div className="intro">
            <div className="eyebrow">Areas We Serve</div>

            <h2>Local Knowledge. Personal Oversight.</h2>

            <p>
              Each residence is managed according to the needs of the property,
              the expectations of the owner, and the standards required to keep
              an exceptional home operating seamlessly.
            </p>
          </div>

          <div className="grid">
            {areas.map((area) => (
              <div className="card" key={area.name}>
                <h3>{area.name}</h3>
                <p>{area.description}</p>
              </div>
            ))}
          </div>

          <div className="contact">
            <div className="eyebrow">Private Introduction</div>

            <h2>Is Your Residence Within Our Service Area?</h2>

            <p>
              Arden works with a limited number of private clients. Begin with
              a confidential conversation about your property, location, and
              estate management requirements.
            </p>

            <a href="/private-client-intake" className="cta">
              Request a Confidential Consultation
            </a>
          </div>
        </section>

        <footer className="footer">
          <div>© 2026 Arden Concierge. All rights reserved.</div>
          <div>Everything Handled. Nothing Overlooked.</div>
        </footer>
      </main>
    </>
  );
}
