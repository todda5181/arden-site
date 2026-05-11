import { useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojreojj";

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormStatus("Thank you. Your private assessment request has been received.");
        form.reset();
      } else {
        setFormStatus("Something went wrong. Please try again or contact us directly.");
      }
    } catch (error) {
      setFormStatus("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const services = [
    {
      title: "Estate Management",
      text: "Discreet oversight of primary residences, second homes, vendors, service schedules, and household standards.",
    },
    {
      title: "Home Oversight",
      text: "Routine property walkthroughs, seasonal checks, maintenance coordination, and issue prevention before problems escalate.",
    },
    {
      title: "Private Concierge",
      text: "Personalized lifestyle support, household logistics, special requests, travel preparation, and trusted local coordination.",
    },
    {
      title: "Vendor Coordination",
      text: "A single point of contact for contractors, landscapers, cleaners, repair teams, and specialty home-service providers.",
    },
    {
      title: "Seasonal Readiness",
      text: "Preparation for holidays, weather changes, guest arrivals, travel departures, and extended absences from the residence.",
    },
    {
      title: "White-Glove Support",
      text: "Quiet, proactive assistance designed for families who value privacy, precision, and elevated service standards.",
    },
  ];

  const differentiators = [
    "Private, discreet, relationship-driven service",
    "Designed for affluent homeowners in Northern Virginia, DC, and Maryland",
    "One trusted point of contact for home, vendors, and personal logistics",
    "Proactive oversight instead of reactive problem-solving",
  ];

  return (
    <>
      <style>{globalStyles}</style>

      <main className="page">
        <nav className="nav">
          <div className="brand" onClick={() => scrollToSection("top")}>Arden Concierge</div>
          <div className="navLinks">
            <button onClick={() => scrollToSection("services")}>Services</button>
            <button onClick={() => scrollToSection("standards")}>Standards</button>
            <button onClick={() => scrollToSection("assessment")}>Private Assessment</button>
          </div>
        </nav>

        <section id="top" className="hero">
          <div className="heroImage heroImageOne" />
          <div className="heroOverlay" />
          <div className="heroContent">
            <img
              src="/logo.png"
              alt="Arden Concierge"
              className="heroLogo"
            />
            <p className="eyebrow">Northern Virginia · Washington DC · Maryland</p>
            <h1>Estate Management for Homes That Demand More Than Maintenance.</h1>
            <p className="heroText">
              Arden Concierge delivers discreet, white-glove home oversight, estate management,
              and private concierge services for discerning homeowners who expect every detail to be handled.
            </p>
            <div className="heroActions">
              <button className="primaryButton" onClick={() => scrollToSection("assessment")}>
                Begin Private Intake
              </button>
              <button className="secondaryButton" onClick={() => scrollToSection("services")}>
                Explore Services
              </button>
            </div>
          </div>
        </section>

        <section className="intro section">
          <div>
            <p className="eyebrow dark">Everything Handled, Nothing Overlooked</p>
            <h2>A private household partner for modern luxury living.</h2>
          </div>
          <p>
            From routine home oversight to complex vendor coordination, Arden Concierge acts as
            the quiet operational layer behind a beautifully maintained residence. We help homeowners
            protect their time, preserve their property, and elevate the way their home functions every day.
          </p>
        </section>

        <section className="imageBand">
          <div className="imageCard imageInterior">
            <span>Interior Standards</span>
          </div>
          <div className="imageCard imageExterior">
            <span>Exterior Oversight</span>
          </div>
          <div className="imageCard imageArrival">
            <span>Arrival Ready</span>
          </div>
        </section>

        <section id="services" className="section servicesSection">
          <div className="sectionHeader">
            <p className="eyebrow dark">Services</p>
            <h2>White-glove support for the home, the household, and the life around it.</h2>
          </div>

          <div className="servicesGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.title}>
                <div className="cardLine" />
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="standards" className="standardSection">
          <div className="standardImage" />
          <div className="standardContent">
            <p className="eyebrow">The Arden Standard</p>
            <h2>Quiet precision. Elevated discretion. Total confidence.</h2>
            <p>
              Luxury service is not loud. It is the absence of friction. It is the comfort of knowing
              the home is being watched, cared for, and prepared by someone who understands what matters.
            </p>
            <div className="differentiators">
              {differentiators.map((item) => (
                <div className="diffItem" key={item}>
                  <span />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="assessment" className="assessmentSection">
          <div className="assessmentIntro">
            <p className="eyebrow dark">Private Assessment</p>
            <h2>Request a confidential home and lifestyle assessment.</h2>
            <p>
              Tell us a little about your residence, household needs, and preferred level of support.
              Arden Concierge will respond discreetly to discuss fit, scope, and next steps.
            </p>
          </div>

          <form className="intakeForm" onSubmit={handleSubmit}>
            <div className="formRow">
              <label>
                Full Name
                <input name="name" type="text" placeholder="Your name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
            </div>

            <div className="formRow">
              <label>
                Phone
                <input name="phone" type="tel" placeholder="Preferred phone number" />
              </label>
              <label>
                Location
                <input name="location" type="text" placeholder="City / neighborhood" />
              </label>
            </div>

            <label>
              Service Interest
              <select name="serviceInterest" defaultValue="">
                <option value="" disabled>Select one</option>
                <option>Estate Management</option>
                <option>Home Oversight</option>
                <option>Private Concierge</option>
                <option>Vendor Coordination</option>
                <option>Seasonal / Travel Readiness</option>
                <option>Not Sure Yet</option>
              </select>
            </label>

            <label>
              Tell Us What You Need
              <textarea
                name="message"
                rows="6"
                placeholder="Share any details about your home, household, vendors, travel schedule, or service expectations."
                required
              />
            </label>

            <input type="hidden" name="brand" value="Arden Concierge" />
            <input type="hidden" name="source" value="ardenconcierge.com private assessment" />

            <button className="submitButton" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Private Request"}
            </button>

            {formStatus && <p className="formStatus">{formStatus}</p>}
          </form>
        </section>

        <footer className="footer">
          <div>
            <h3>Arden Concierge</h3>
            <p>Estate Management · Home Oversight · Private Concierge</p>
          </div>
          <button onClick={() => scrollToSection("assessment")}>Begin Private Intake</button>
        </footer>
      </main>
    </>
  );
}

const globalStyles = `
  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: #0b0b0a;
    color: #f5efe4;
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  button,
  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  .page {
    overflow: hidden;
    background:
      radial-gradient(circle at top left, rgba(198, 164, 108, 0.18), transparent 32rem),
      linear-gradient(180deg, #0b0b0a 0%, #15120f 45%, #0b0b0a 100%);
  }

  .nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.15rem 5vw;
    background: rgba(11, 11, 10, 0.68);
    backdrop-filter: blur(18px);
    border-bottom: 1px solid rgba(245, 239, 228, 0.1);
  }

  .brand {
    letter-spacing: 0.18em;
    text-transform: uppercase;
    font-size: 0.82rem;
    color: #f5efe4;
    font-weight: 600;
  }

  .navLinks {
    display: flex;
    gap: 1.25rem;
  }

  .navLinks button {
    border: 0;
    background: transparent;
    color: rgba(245, 239, 228, 0.78);
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    transition: color 0.25s ease;
  }

  .navLinks button:hover {
    color: #c6a46c;
  }

  .hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 9rem 5vw 6rem;
  }

  .heroImage {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    transform: scale(1.04);
    animation: slowZoom 16s ease-in-out infinite alternate;
  }

  .heroImageOne {
    background-image: url("/luxury-exterior.jpg");
  }

  .heroOverlay {
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, rgba(11, 11, 10, 0.92) 0%, rgba(11, 11, 10, 0.68) 42%, rgba(11, 11, 10, 0.28) 100%),
      linear-gradient(180deg, rgba(11, 11, 10, 0.2) 0%, rgba(11, 11, 10, 0.92) 100%);
  }

  .heroContent {
    position: relative;
    max-width: 820px;
    animation: fadeUp 0.9s ease both;
  }

  .heroLogo {
    width: 260px;
    max-width: 75%;
    margin-bottom: 2rem;
    filter: drop-shadow(0 10px 30px rgba(198,164,108,0.35));
  }

  .heroContent {
    position: relative;
    max-width: 820px;
    animation: fadeUp 0.9s ease both;
  }

  .eyebrow {
    margin: 0 0 1rem;
    color: #c6a46c;
    font-size: 0.78rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    font-weight: 700;
  }

  .eyebrow.dark {
    color: #9b7843;
  }

  h1,
  h2,
  h3,
  p {
    margin-top: 0;
  }

  h1 {
    margin-bottom: 1.4rem;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(3.4rem, 7vw, 7.4rem);
    line-height: 0.9;
    letter-spacing: -0.06em;
    color: #fff8eb;
  }

  h2 {
    margin-bottom: 1rem;
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(2.4rem, 4vw, 4.6rem);
    line-height: 0.96;
    letter-spacing: -0.045em;
  }

  h3 {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.55rem;
    letter-spacing: -0.02em;
  }

  .heroText {
    max-width: 650px;
    color: rgba(245, 239, 228, 0.82);
    font-size: 1.16rem;
    line-height: 1.85;
  }

  .heroActions {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2.25rem;
  }

  .primaryButton,
  .secondaryButton,
  .submitButton,
  .footer button {
    border-radius: 999px;
    padding: 0.95rem 1.45rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-size: 0.78rem;
    font-weight: 800;
    transition: transform 0.25s ease, background 0.25s ease, border-color 0.25s ease;
  }

  .primaryButton,
  .submitButton {
    border: 1px solid #c6a46c;
    background: #c6a46c;
    color: #11100e;
    box-shadow: 0 20px 60px rgba(198, 164, 108, 0.22);
  }

  .secondaryButton,
  .footer button {
    border: 1px solid rgba(245, 239, 228, 0.32);
    background: rgba(245, 239, 228, 0.06);
    color: #f5efe4;
  }

  .primaryButton:hover,
  .secondaryButton:hover,
  .submitButton:hover,
  .footer button:hover {
    transform: translateY(-2px);
  }

  .section {
    padding: 7rem 5vw;
  }

  .intro {
    display: grid;
    grid-template-columns: 0.9fr 1fr;
    gap: 4rem;
    align-items: start;
    background: #f4efe6;
    color: #15120f;
  }

  .intro p:last-child {
    color: rgba(21, 18, 15, 0.7);
    font-size: 1.08rem;
    line-height: 1.9;
  }

  .imageBand {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    min-height: 450px;
  }

  .imageCard {
    position: relative;
    display: flex;
    align-items: flex-end;
    padding: 2rem;
    min-height: 450px;
    background-size: cover;
    background-position: center;
    overflow: hidden;
  }

  .imageCard::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.78) 100%);
  }

  .imageCard span {
    position: relative;
    color: #fff8eb;
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.65rem;
  }

  .imageInterior {
    background-image: url("/luxury-interior.jpg");
  }

  .imageExterior {
    background-image: url("/luxury-home.jpg");
  }

  .imageArrival {
    background-image: url("/arrival-ready.jpg");
  }

  .servicesSection {
    background: #0b0b0a;
  }

  .sectionHeader {
    max-width: 850px;
    margin-bottom: 3rem;
  }

  .servicesGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .serviceCard {
    position: relative;
    padding: 2rem;
    min-height: 280px;
    background: linear-gradient(180deg, rgba(245, 239, 228, 0.08), rgba(245, 239, 228, 0.035));
    border: 1px solid rgba(245, 239, 228, 0.12);
    border-radius: 28px;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.22);
    transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
  }

  .serviceCard:hover {
    transform: translateY(-6px);
    border-color: rgba(198, 164, 108, 0.5);
    background: linear-gradient(180deg, rgba(198, 164, 108, 0.14), rgba(245, 239, 228, 0.04));
  }

  .cardLine {
    width: 44px;
    height: 1px;
    background: #c6a46c;
    margin-bottom: 1.4rem;
  }

  .serviceCard p {
    color: rgba(245, 239, 228, 0.72);
    line-height: 1.75;
  }

  .standardSection {
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    min-height: 760px;
    background: #15120f;
  }

  .standardImage {
    background-image: url("https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1800&q=85");
    background-size: cover;
    background-position: center;
    min-height: 520px;
  }

  .standardContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 7rem 5vw;
  }

  .standardContent p {
    color: rgba(245, 239, 228, 0.76);
    line-height: 1.85;
    font-size: 1.05rem;
  }

  .differentiators {
    display: grid;
    gap: 1rem;
    margin-top: 2rem;
  }

  .diffItem {
    display: flex;
    align-items: center;
    gap: 0.9rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(245, 239, 228, 0.12);
    color: rgba(245, 239, 228, 0.84);
  }

  .diffItem span {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #c6a46c;
    box-shadow: 0 0 24px rgba(198, 164, 108, 0.8);
    flex: 0 0 auto;
  }

  .assessmentSection {
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 4rem;
    padding: 7rem 5vw;
    background:
      radial-gradient(circle at top right, rgba(198, 164, 108, 0.16), transparent 28rem),
      #f4efe6;
    color: #15120f;
  }

  .assessmentIntro p {
    color: rgba(21, 18, 15, 0.7);
    line-height: 1.85;
    font-size: 1.05rem;
  }

  .intakeForm {
    padding: 2rem;
    border-radius: 32px;
    background: rgba(255, 255, 255, 0.62);
    border: 1px solid rgba(21, 18, 15, 0.1);
    box-shadow: 0 34px 100px rgba(21, 18, 15, 0.16);
    backdrop-filter: blur(16px);
  }

  .formRow {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  label {
    display: grid;
    gap: 0.5rem;
    margin-bottom: 1rem;
    color: rgba(21, 18, 15, 0.74);
    font-size: 0.8rem;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    font-weight: 800;
  }

  input,
  textarea,
  select {
    width: 100%;
    border: 1px solid rgba(21, 18, 15, 0.16);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.78);
    color: #15120f;
    outline: none;
    padding: 1rem;
    text-transform: none;
    letter-spacing: normal;
    font-weight: 500;
    transition: border-color 0.25s ease, box-shadow 0.25s ease;
  }

  input:focus,
  textarea:focus,
  select:focus {
    border-color: #9b7843;
    box-shadow: 0 0 0 4px rgba(198, 164, 108, 0.18);
  }

  textarea {
    resize: vertical;
  }

  .submitButton {
    width: 100%;
    margin-top: 0.5rem;
  }

  .submitButton:disabled {
    opacity: 0.68;
    cursor: not-allowed;
  }

  .formStatus {
    margin: 1rem 0 0;
    color: #5d492b;
    text-align: center;
    font-weight: 700;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    padding: 3rem 5vw;
    background: #0b0b0a;
    border-top: 1px solid rgba(245, 239, 228, 0.1);
  }

  .footer h3 {
    margin-bottom: 0.35rem;
  }

  .footer p {
    margin-bottom: 0;
    color: rgba(245, 239, 228, 0.62);
  }

  @keyframes slowZoom {
    from { transform: scale(1.02); }
    to { transform: scale(1.09); }
  }

  @keyframes fadeUp {
    from {
      opacity: 0;
      transform: translateY(26px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 980px) {
    .nav {
      align-items: flex-start;
      gap: 1rem;
      flex-direction: column;
    }

    .navLinks {
      flex-wrap: wrap;
      gap: 0.75rem 1rem;
    }

    .intro,
    .standardSection,
    .assessmentSection {
      grid-template-columns: 1fr;
    }

    .servicesGrid,
    .imageBand {
      grid-template-columns: 1fr;
    }

    .hero {
      padding-top: 11rem;
    }
  }

  @media (max-width: 640px) {
    .formRow {
      grid-template-columns: 1fr;
    }

    .footer {
      align-items: flex-start;
      flex-direction: column;
    }

    h1 {
      font-size: 3.15rem;
    }

    .section,
    .assessmentSection,
    .standardContent {
      padding: 5rem 1.25rem;
    }

    .nav,
    .hero,
    .footer {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
  }
`;

