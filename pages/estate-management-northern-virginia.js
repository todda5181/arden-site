export default function EstateManagementNorthernVirginia() {
  return (
    <Page
      title="Private Estate Management in Northern Virginia"
      kicker="Estate Management"
      intro="Arden provides discreet, full-service estate management for exceptional homes across Northern Virginia, Washington DC, and Maryland."
      body={[
        ["What does private estate management include?", "Private estate management includes property oversight, vendor coordination, preventative maintenance, home readiness, emergency response, and ongoing communication with trusted service partners."],
        ["Who is this for?", "This service is designed for high-value homeowners, frequent travelers, second-home owners, and families who expect their property to remain flawless whether they are in residence or away."],
        ["Why Arden?", "Arden operates with discretion, consistency, and a limited client roster. We are proactive, not reactive — handling details before they become problems."],
      ]}
    />
  );
}

function Page({ title, kicker, intro, body }) {
  return (
    <>
      <style jsx global>{`
        body { margin: 0; background: #050505; color: #f4eee3; font-family: Georgia, "Times New Roman", serif; }
        .wrap { max-width: 980px; margin: 0 auto; padding: 90px 24px; }
        .kicker { color: #c6a46c; letter-spacing: 4px; text-transform: uppercase; font-size: 12px; margin-bottom: 24px; }
        h1 { font-size: 58px; line-height: 1.05; font-weight: 400; margin: 0 0 28px; }
        p { font-size: 21px; line-height: 1.7; color: rgba(244,238,227,.82); }
        h2 { margin-top: 56px; font-size: 32px; font-weight: 400; color: #f4eee3; }
        .divider { width: 90px; height: 2px; background: #c6a46c; margin: 34px 0; }
        .cta { display: inline-block; margin-top: 46px; padding: 16px 26px; border: 1px solid #c6a46c; color: #c6a46c; text-decoration: none; letter-spacing: 2px; text-transform: uppercase; font-size: 12px; }
        .cta:hover { background: #c6a46c; color: #050505; }
      `}</style>

      <main className="wrap">
        <div className="kicker">{kicker}</div>
        <h1>{title}</h1>
        <div className="divider" />
        <p>{intro}</p>

        {body.map(([heading, text]) => (
          <section key={heading}>
            <h2>{heading}</h2>
            <p>{text}</p>
          </section>
        ))}

        <a href="/#contact" className="cta">Request Private Assessment</a>
      </main>
    </>
  );
}
