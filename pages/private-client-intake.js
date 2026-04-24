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
2. /pages/luxury-concierge-washington-dc.js
export { default } from "./estate-management-northern-virginia";

export function getStaticProps() {
  return { props: {} };
}

Actually, don’t use that shortcut. Use the same template from above, but change the top function to:

export default function LuxuryConciergeWashingtonDC() {
  return (
    <Page
      title="Luxury Concierge Services in Washington DC"
      kicker="Private Concierge"
      intro="Arden provides refined, discreet concierge support for discerning clients in Washington DC, Northern Virginia, and Maryland."
      body={[
        ["What does a luxury concierge do?", "A luxury concierge handles household logistics, arrival preparation, vendor coordination, reservations, special requests, and discreet personal support."],
        ["Who uses this service?", "Our clients are busy homeowners, executives, frequent travelers, and private families who want time returned and details handled without friction."],
        ["The Arden standard", "Every request is handled with composure, privacy, and precision. We do not simply complete tasks — we protect your time, your home, and your peace of mind."],
      ]}
    />
  );
}

Then paste the same Page component underneath it.

3. /pages/home-watch-services-great-falls-va.js
export default function HomeWatchGreatFalls() {
  return (
    <Page
      title="Home Watch Services in Great Falls, VA"
      kicker="Home Watch"
      intro="Arden offers discreet home watch and property oversight services for high-value homes in Great Falls, McLean, and surrounding Northern Virginia communities."
      body={[
        ["What is a home watch service?", "A home watch service provides scheduled inspections and oversight while a homeowner is away. Arden elevates this with white-glove reporting, vendor coordination, and proactive issue resolution."],
        ["What we monitor", "We review exterior conditions, interior systems, vendor access, storm concerns, security issues, maintenance needs, and signs of damage or disruption."],
        ["Why it matters", "For exceptional homes, small problems can become expensive quickly. Arden provides a trusted local presence so your property is never left unattended."],
      ]}
    />
  );
}

Paste the same Page component underneath.

4. /pages/seasonal-property-preparation.js
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

Paste the same Page component underneath.

5. /pages/private-client-intake.js
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

After creating them, add these links to your homepage nav or footer:

<a href="/estate-management-northern-virginia">Estate Management</a>
<a href="/luxury-concierge-washington-dc">Luxury Concierge</a>
<a href="/home-watch-services-great-falls-va">Home Watch</a>
<a href="/seasonal-property-preparation">Seasonal Preparation</a>
<a href="/private-client-intake">Private Client Intake</a>
