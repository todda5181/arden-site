export default function EstateManagement() {
  return (
    <>
      <style jsx global>{`
        body {
          background: #050505;
          color: #f4eee3;
          font-family: Georgia, "Times New Roman", serif;
          margin: 0;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          padding: 80px 24px;
        }

        h1 {
          font-size: 48px;
          margin-bottom: 20px;
        }

        h2 {
          margin-top: 50px;
          font-size: 26px;
        }

        p {
          line-height: 1.7;
          font-size: 18px;
          color: rgba(244,238,227,0.85);
        }

        ul {
          margin-top: 20px;
          padding-left: 20px;
        }

        li {
          margin-bottom: 10px;
        }

        .cta {
          margin-top: 50px;
          padding: 18px 28px;
          border: 1px solid #c6a46c;
          display: inline-block;
          text-decoration: none;
          color: #f4eee3;
        }

        .cta:hover {
          background: #c6a46c;
          color: #050505;
        }
      `}</style>

      <div className="container">
        <h1>Private Estate Management in Northern Virginia</h1>

        <p>
          Arden provides discreet, full-service estate management for private
          residences across Northern Virginia, Washington DC, and Maryland.
        </p>

        <p>
          We oversee every detail of your home so it is always prepared,
          protected, and perfectly maintained.
        </p>

        <h2>What does an estate manager do?</h2>
        <p>
          A private estate manager ensures your property is maintained at the
          highest standard, coordinates vendors, oversees maintenance, and
          prepares your home for arrival at any time.
        </p>

        <ul>
          <li>Routine property inspections</li>
          <li>Vendor management</li>
          <li>Preventative maintenance oversight</li>
          <li>Pre-arrival preparation</li>
          <li>Emergency response</li>
        </ul>

        <h2>Who requires estate management?</h2>
        <p>
          Estate management is ideal for second homeowners, frequent travelers,
          and individuals who expect their home to be flawlessly maintained in
          their absence.
        </p>

        <h2>Serving</h2>
        <p>
          Northern Virginia · Washington DC · Maryland  
          (Great Falls, McLean, Arlington, Bethesda)
        </p>

        <a href="/#contact" className="cta">
          Request Private Assessment
        </a>
      </div>
    </>
  );
}
