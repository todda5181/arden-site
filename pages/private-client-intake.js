export default function PrivateClientIntake() {
  return (
    <>
      <style jsx global>{`
        body { margin: 0; background: #050505; color: #f4eee3; font-family: Georgia, "Times New Roman", serif; }
        .wrap { max-width: 760px; margin: 0 auto; padding: 100px 24px; text-align: center; }
        .kicker { color: #c6a46c; letter-spacing: 4px; text-transform: uppercase; font-size: 12px; margin-bottom: 24px; }
        h1 { font-size: 58px; font-weight: 400; margin: 0 0 26px; }
        p { font-size: 21px; line-height: 1.7; color: rgba(244,238,227,.82); }
        .divider { width: 90px; height: 2px; background: #c6a46c; margin: 34px auto; }
        .cta { display: inline-block; margin-top: 40px; padding: 16px 26px; border: 1px solid #c6a46c; color: #c6a46c; text-decoration: none; letter-spacing: 2px; text-transform: uppercase; font-size: 12px; }
        .cta:hover { background: #c6a46c; color: #050505; }
      `}</style>

      <main className="wrap">
        <div className="kicker">Private Client Intake</div>
        <h1>Request a Private Assessment</h1>
        <div className="divider" />
        <p>
          Arden works with a limited number of private clients to ensure the
          highest level of discretion, responsiveness, and service.
        </p>
        <p>
          Please share a brief overview of your property and needs. A member of
          our team will follow up promptly.
        </p>
        <a href="/#contact" className="cta">Begin Private Intake</a>
      </main>
    </>
  );
}
