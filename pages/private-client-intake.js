import React, { useState } from "react";

export default function PrivateClientIntake() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xojreojj", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  };

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
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(198,164,108,0.18);
        }

   .logo-img {
  width: 280px;
  height: auto;
  display: block;
  object-fit: contain;
  filter: drop-shadow(0 14px 40px rgba(198,164,108,0.18));
}

        .back {
          color: rgba(244,238,227,0.72);
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 12px;
        }

        .back:hover {
          color: #c6a46c;
        }

        .wrap {
          max-width: 1120px;
          margin: 72px auto 0;
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 44px;
          align-items: stretch;
        }

        .brand-panel,
        .form-panel {
          border: 1px solid rgba(198,164,108,0.22);
          background: rgba(255,255,255,0.018);
          box-shadow: 0 28px 90px rgba(0,0,0,0.38);
          border-radius: 22px;
        }

        .brand-panel {
          padding: 54px 40px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .eyebrow {
          color: #c6a46c;
          letter-spacing: 5px;
          text-transform: uppercase;
          font-size: 12px;
          margin-bottom: 22px;
        }

        h1 {
          font-size: 64px;
          line-height: 1.02;
          font-weight: 400;
          margin: 0;
        }

        .divider {
          width: 104px;
          height: 2px;
          background: #c6a46c;
          margin: 30px 0;
          box-shadow: 0 0 24px rgba(198,164,108,0.3);
        }

        .copy {
          font-size: 21px;
          line-height: 1.7;
          color: rgba(244,238,227,0.78);
          margin: 0 0 26px;
        }

        .note {
          color: rgba(244,238,227,0.58);
          font-size: 15px;
          line-height: 1.7;
          margin-top: 24px;
        }

        .form-panel {
          padding: 44px;
        }

        .form-title {
          font-size: 34px;
          font-weight: 400;
          margin: 0 0 10px;
        }

        .form-intro {
          color: rgba(244,238,227,0.68);
          font-size: 17px;
          line-height: 1.6;
          margin: 0 0 28px;
        }

        form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        input,
        textarea,
        select {
          width: 100%;
          padding: 16px 14px;
          border: 1px solid rgba(198,164,108,0.28);
          background: rgba(255,255,255,0.018);
          color: #f4eee3;
          font-size: 15px;
          font-family: Georgia, "Times New Roman", serif;
          outline: none;
          transition: all 0.22s ease;
        }

        input::placeholder,
        textarea::placeholder {
          color: rgba(244,238,227,0.42);
        }

        input:focus,
        textarea:focus,
        select:focus {
          border-color: rgba(198,164,108,0.85);
          box-shadow: 0 0 0 1px rgba(198,164,108,0.22), 0 0 30px rgba(198,164,108,0.08);
        }

        textarea {
          resize: vertical;
          min-height: 140px;
        }

        button {
          margin-top: 6px;
          background: linear-gradient(180deg, #d6b875 0%, #ad8541 100%);
          color: #111;
          border: none;
          padding: 17px 28px;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(198,164,108,0.22);
        }

        .success {
          max-width: 760px;
          margin: 96px auto 0;
          text-align: center;
          padding: 64px 42px;
          border: 1px solid rgba(198,164,108,0.24);
          border-radius: 22px;
          background: rgba(255,255,255,0.02);
          box-shadow: 0 28px 90px rgba(0,0,0,0.38);
        }

        .success h1 {
          font-size: 58px;
          margin-bottom: 22px;
        }

        .success p {
          font-size: 21px;
          line-height: 1.7;
          color: rgba(244,238,227,0.78);
        }

        .error {
          color: #c6a46c;
          font-size: 15px;
          margin-top: 8px;
        }

        @media (max-width: 900px) {
          .wrap {
            grid-template-columns: 1fr;
          }

          h1 {
            font-size: 44px;
          }

          .row {
            grid-template-columns: 1fr;
          }

          .page {
            padding: 24px;
          }

          .nav {
            flex-direction: column;
            gap: 22px;
          }
        }
      `}</style>

      <main className="page">
        <nav className="nav">
          <a href="/">
         <img
src="/logo.png?v=2"
  alt="Arden Concierge"
  className="logo-png"
  style={{
    width: "280px",
    height: "auto",
    display: "block",
    filter: "drop-shadow(0 12px 36px rgba(198,164,108,0.18))"
  }}
/>
          </a>

          <a href="/" className="back">
            Return Home
          </a>
        </nav>

        {status === "success" ? (
          <section className="success">
            <div className="eyebrow">Request Received</div>
            <h1>Thank You.</h1>
            <div className="divider" style={{ margin: "28px auto" }} />
            <p>
              Your private intake request has been received. A member of the
              Arden team will contact you shortly.
            </p>
            <a href="/" className="back">
              Return Home →
            </a>
          </section>
        ) : (
          <section className="wrap">
            <div className="brand-panel">
              <div className="eyebrow">Private Client Intake</div>

              <h1>
                Request a Private
                <br />
                Assessment.
              </h1>

              <div className="divider" />

              <p className="copy">
                Arden works with a limited number of private clients to ensure
                the highest level of discretion, responsiveness, and service.
              </p>

              <p className="note">
                Please share a brief overview of your property, location, and
                needs. All inquiries are handled discreetly.
              </p>
            </div>

            <div className="form-panel">
              <h2 className="form-title">Tell us how we may assist.</h2>

              <p className="form-intro">
                A member of our team will review your inquiry and follow up
                promptly.
              </p>

              <form onSubmit={handleSubmit}>
                <input
                  type="hidden"
                  name="_subject"
                  value="New Private Client Intake – Arden Concierge"
                />

                <div className="row">
                  <input
                    name="fullName"
                    placeholder="Full Name"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>

                <div className="row">
                  <input
                    name="phone"
                    placeholder="Phone Number"
                  />

                  <input
                    name="propertyLocation"
                    placeholder="Property Location"
                  />
                </div>

                <div className="row">
                  <select name="serviceInterest" defaultValue="">
                    <option value="" disabled>
                      Service Interest
                    </option>
                    <option value="Estate Management">
                      Estate Management
                    </option>
                    <option value="Home Watch">
                      Home Watch
                    </option>
                    <option value="Lifestyle Concierge">
                      Lifestyle Concierge
                    </option>
                    <option value="Vendor Management">
                      Vendor Management
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>

                  <select name="timeframe" defaultValue="">
                    <option value="" disabled>
                      Desired Timeframe
                    </option>
                    <option value="Immediately">Immediately</option>
                    <option value="Within 30 Days">Within 30 Days</option>
                    <option value="This Season">This Season</option>
                    <option value="Exploring Options">
                      Exploring Options
                    </option>
                  </select>
                </div>

                <textarea
                  name="message"
                  placeholder="Tell us about your property and needs."
                  required
                />

                <button type="submit">
                  {status === "loading"
                    ? "Submitting..."
                    : "Submit Private Request"}
                </button>

                {status === "error" && (
                  <p className="error">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
