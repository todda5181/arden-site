export default function PrivateClientIntake() {
  return (
    <>
      <style>{styles}</style>

      <main className="page">
        <div className="backgroundGlow" />

        <section className="container">
          <div className="header">
            <p className="eyebrow">Arden Concierge</p>
            <h1>Private Client Intake</h1>
            <p className="intro">
              Discreet estate management and white-glove household oversight
              for exceptional homes and the people who own them.
            </p>
          </div>

          <form
            className="formCard"
            action="https://formspree.io/f/xojreojj"
            method="POST"
          >
            <div className="grid">
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
            </div>

            <div className="grid">
              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="Preferred contact number"
                />
              </label>

              <label>
                Property Location
                <input
                  type="text"
                  name="location"
                  placeholder="City / Neighborhood"
                />
              </label>
            </div>

            <label>
              Service Interest
              <select name="service">
                <option>Estate Management</option>
                <option>Home Oversight</option>
                <option>Private Concierge</option>
                <option>Vendor Coordination</option>
                <option>Seasonal Property Readiness</option>
              </select>
            </label>

            <label>
              About Your Needs
              <textarea
                name="message"
                rows="7"
                placeholder="Tell us about your residence, household needs, travel schedule, or level of support desired."
                required
              />
            </label>

            <button type="submit">
              Request Confidential Consultation
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

const styles = `
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background: #050505;
    color: #f5efe4;
    font-family: Inter, sans-serif;
  }

  .page {
    min-height: 100vh;
    position: relative;
    overflow: hidden;
    background:
      radial-gradient(circle at top left, rgba(198,164,108,0.15), transparent 35rem),
      linear-gradient(180deg, #050505 0%, #0d0d0d 100%);
    padding: 100px 24px;
  }

  .backgroundGlow {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(circle at center, rgba(198,164,108,0.08), transparent 40%);
    pointer-events: none;
  }

  .container {
    position: relative;
    z-index: 2;
    max-width: 920px;
    margin: 0 auto;
  }

  .header {
    text-align: center;
    margin-bottom: 60px;
  }

  .eyebrow {
    color: #c6a46c;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    font-size: 0.78rem;
    font-weight: 700;
    margin-bottom: 18px;
  }

  h1 {
    margin: 0 0 24px;
    font-family: Georgia, serif;
    font-size: clamp(3rem, 7vw, 5.5rem);
    line-height: 0.95;
    color: #fff8eb;
    letter-spacing: -0.05em;
  }

  .intro {
    max-width: 720px;
    margin: 0 auto;
    color: rgba(245,239,228,0.78);
    font-size: 1.15rem;
    line-height: 1.8;
  }

  .formCard {
    padding: 60px;
    border-radius: 32px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    box-shadow: 0 24px 80px rgba(0,0,0,0.4);
    backdrop-filter: blur(18px);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
    font-size: 0.8rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(245,239,228,0.72);
    font-weight: 700;
  }

  input,
  textarea,
  select {
    width: 100%;
    padding: 18px;
    border-radius: 18px;
    border: 1px solid rgba(255,255,255,0.1);
    background: rgba(255,255,255,0.04);
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }

  input:focus,
  textarea:focus,
  select:focus {
    border-color: #c6a46c;
    box-shadow: 0 0 0 4px rgba(198,164,108,0.15);
  }

  textarea {
    resize: vertical;
  }

  button {
    width: 100%;
    margin-top: 12px;
    padding: 20px;
    border: none;
    border-radius: 999px;
    background: #c6a46c;
    color: #111;
    font-size: 0.82rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    font-weight: 800;
    cursor: pointer;
    transition: transform 0.25s ease, opacity 0.25s ease;
  }

  button:hover {
    transform: translateY(-2px);
    opacity: 0.92;
  }

  @media (max-width: 768px) {
    .formCard {
      padding: 32px 24px;
    }

    .grid {
      grid-template-columns: 1fr;
    }

    h1 {
      font-size: 3rem;
    }
  }
`;
