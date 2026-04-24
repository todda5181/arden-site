export default function SeasonalPropertyPreparation() {
  return (
    <Page
      title="Seasonal Property Preparation"
      kicker="Estate Readiness"
      intro="Arden prepares exceptional homes for seasonal transitions, owner arrivals, guest stays, and extended periods away."
      body={[
        ["What is seasonal property preparation?", "Seasonal preparation ensures your residence is ready for changing weather, travel schedules, entertaining, and periods of vacancy."],
        ["What Arden handles", "We coordinate inspections, HVAC readiness, landscaping transitions, pool oversight, storm preparation, stocking, cleaning coordination, and arrival readiness."],
        ["A home that is always ready", "Whether you are arriving for the weekend or leaving for the season, Arden ensures every detail is addressed before you need to think about it."],
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
