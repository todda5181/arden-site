export default function ArdenEstateAssessment() {
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
          max-width: 790px;
          margin: 0 auto 38px;
          font-size: 23px;
          line-height: 1.65;
          color: rgba(244,238,227,0.78);
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

        .content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 90px 0;
        }

        .intro {
          max-width: 850px;
          margin: 0 auto 70px;
          text-align: center;
        }

        .intro h2,
        .recommendation h2 {
          font-size: 54px;
          line-height: 1.1;
          font-weight: 400;
          margin: 0 0 24px;
        }

        .intro p,
        .recommendation p {
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
        }

        .number {
          color: #c6a46c;
          font-size: 13px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        .card h3 {
          font-size: 30px;
          font-weight: 400;
          margin: 14px 0;
        }

        .card p {
          font-size: 17px;
          line-height: 1.65;
          color: rgba(244,238,227,0.72);
          margin: 0;
        }

        .recommendation {
          max-width: 900px;
          margin: 90px auto 40px;
          padding: 58px 38px;
          text-align: center;
          border: 1px solid rgba(198,164,108,0.32);
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
            <a href="/arden-estate-assessment">
              Estate Assessment
            </a>
            <a href="/service-areas">Service Areas</a>
            <a href="/private-client-intake">Private Intake</a>
          </div>
        </nav>

        <section className="hero">
          <div className="eyebrow">The First Step</div>

          <h1>The Arden Estate Assessment™</h1>

          <div className="divider" />

          <p>
            A confidential review of your property, estate operations,
            maintenance requirements, vendor relationships, risk exposure,
            and lifestyle needs.
          </p>

          <a href="/private-client-intake" className="cta">
            Request an Assessment
          </a>
        </section>

        <section className="content">
          <div className="intro">
            <div className="eyebrow">Clarity Before Management</div>

            <h2>A Complete View of Your Estate</h2>

            <p>
              The Arden Estate Assessment™ identifies operational gaps,
              maintenance priorities, vendor-management opportunities, and
              areas where greater oversight can protect your property and
              simplify your life.
            </p>
          </div>

          <div className="grid">
            <div className="card">
              <div className="number">01</div>
              <h3>Discovery Consultation</h3>
              <p>
                We review your residence, lifestyle, travel schedule,
                current challenges, service expectations, and long-term
                priorities.
              </p>
            </div>

            <div className="card">
              <div className="number">02</div>
              <h3>Property Review</h3>
              <p>
                Arden evaluates key property systems, maintenance needs,
                exterior conditions, access procedures, and operational risks.
              </p>
            </div>

            <div className="card">
              <div className="number">03</div>
              <h3>Vendor Audit</h3>
              <p>
                We assess existing service providers, responsibilities,
                schedules, communication, documentation, and areas requiring
                stronger coordination.
              </p>
            </div>

            <div className="card">
              <div className="number">04</div>
              <h3>Estate Recommendations</h3>
              <p>
                You receive a clear summary of findings, priorities, risk
                considerations, and recommended next steps for ongoing estate
                management.
              </p>
            </div>
          </div>

          <div className="recommendation">
            <div className="eyebrow">Limited by Design</div>

            <h2>Begin Your Private Introduction</h2>

            <p>
              Arden works with a limited number of clients to preserve the
              discretion, responsiveness, and personal attention exceptional
              estate management requires.
            </p>

            <a href="/private-client-intake" className="cta">
              Begin Private Intake
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
