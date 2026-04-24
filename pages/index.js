import { useState } from "react";
function ContactForm() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/mzdykgry", {
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

  if (status === "success") {
    return (
      <div style={{ ...styles.successBox, animation: "fadeIn 0.8s ease forwards" }}>
        <div style={styles.successKicker}>Request Received</div>
        <div style={styles.successTitle}>Thank You.</div>
        <div style={styles.successDivider} />
        <p style={styles.successText}>
          Your private assessment request has been received. A member of our
          team will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="hidden"
        name="_subject"
        value="New Private Estate Inquiry – Arden"
      />

      <div style={styles.formRow} className="form-row">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          style={styles.input}
          className="input-field"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          style={styles.input}
          className="input-field"
          required
        />
      </div>

      <div style={styles.formRow} className="form-row">
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          style={styles.input}
          className="input-field"
        />
        <input
          type="text"
          name="propertyLocation"
          placeholder="Property Location"
          style={styles.input}
          className="input-field"
        />
      </div>

      <textarea
        name="message"
        placeholder="How can we help?"
        rows={5}
        style={styles.textarea}
        className="text-area"
        required
      />

      <button
        type="submit"
        style={styles.primaryButton}
        className="primary-btn"
      >
        {status === "loading" ? "Submitting..." : "Submit Request"}
      </button>

      {status === "error" && (
        <p style={{ color: "#C6A46C", marginTop: "16px" }}>
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
export default function Home() {
const navItems = [
  { label: "Estate", href: "/estate-management-northern-virginia" },
  { label: "Concierge", href: "/luxury-concierge-washington-dc" },
  { label: "Home Watch", href: "/home-watch-services-great-falls-va" },
  { label: "Contact", href: "#contact" },
];

  React.useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);


  const services = [
  {
    title: "Property Management",
    description:
      "Complete oversight of your residence, inside and out. We coordinate vendors, maintenance, and day-to-day estate operations.",
    icon: "⌂",
    link: "/estate-management-northern-virginia",
  },
  {
    title: "Security & Access",
    description:
      "Trusted access management, discreet monitoring, and thoughtful protocols to protect what matters most.",
    icon: "◆",
    link: "/home-watch-services-great-falls-va",
  },
  {
    title: "Lifestyle Concierge",
    description:
      "From arrivals to events, reservations to stocking, every detail is handled before you have to ask.",
    icon: "✦",
    link: "/luxury-concierge-washington-dc",
  },
  {
    title: "Estate Maintenance",
    description:
      "Proactive preservation of your home, systems, and grounds so everything remains in exceptional order.",
    icon: "◇",
    link: "/estate-management-northern-virginia",
  },
  {
    title: "Vendor Management",
    description:
      "We vet, schedule, coordinate, and oversee trusted service partners on your behalf with precision.",
    icon: "$",
    link: "/estate-management-northern-virginia",
  },
];

  return (
    <>
<style jsx global>{`
  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: #050505;
    color: #f4eee3;
    font-family: Georgia, "Times New Roman", serif;
  }

  * {
    box-sizing: border-box;
  }

  a, button, input, textarea {
    transition: all 180ms ease;
  }

  input::placeholder,
  textarea::placeholder {
    color: rgba(244, 238, 227, 0.42);
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease;
  }

  .reveal.visible {
    opacity: 1;
    transform: translateY(0);
  }

  .primary-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(198,164,108,0.25);
  }
`}</style>


        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(22px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slowZoom {
          from {
            transform: scale(1.03);
          }
          to {
            transform: scale(1);
          }
        }

        .fade-up {
          animation: fadeUp 0.9s ease forwards;
        }

        .delay-1 {
          animation-delay: 0.08s;
        }

        .delay-2 {
          animation-delay: 0.16s;
        }

        .delay-3 {
          animation-delay: 0.24s;
        }

        .delay-4 {
          animation-delay: 0.32s;
        }

        .hero-image-animate {
          animation: slowZoom 1.6s ease forwards;
        }

        .nav-link:hover {
          color: #c6a46c !important;
        }

        .header-btn:hover,
        .secondary-btn:hover {
          background: rgba(198, 164, 108, 0.1) !important;
          transform: translateY(-1px);
        }

        .primary-btn:hover {
          opacity: 0.92;
          transform: translateY(-1px);
        }

        .service-card:hover {
          background: rgba(255,255,255,0.015);
        }

        .input-field:focus,
        .text-area:focus {
          border-color: #c6a46c !important;
          box-shadow: 0 0 0 1px rgba(198,164,108,0.25);
        }

        .footer-link:hover {
          color: #c6a46c !important;
        }

        @media (max-width: 1200px) {
          .header-grid {
            grid-template-columns: 1fr;
            justify-items: center;
            gap: 18px;
            text-align: center;
          }

          .hero-grid,
          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr !important;
          }

          .hero-copy {
            padding: 56px 0 36px 0 !important;
          }

          .about-copy {
            padding: 56px 0 !important;
          }

          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .approach-grid {
            grid-template-columns: 1fr !important;
          }

          .hero-title {
            font-size: 58px !important;
          }

          .section-title {
            font-size: 52px !important;
          }

          .quote-text {
            font-size: 28px !important;
          }
        }

        @media (max-width: 760px) {
          .page-shell {
            padding: 18px 18px 40px !important;
          }

          .logo-img {
            width: 180px !important;
          }

          .nav-wrap {
            gap: 16px !important;
          }

          .hero-title {
            font-size: 42px !important;
          }

          .hero-text {
            font-size: 20px !important;
          }

          .section-title {
            font-size: 40px !important;
          }

          .section-text {
            font-size: 18px !important;
          }

          .quote-section {
            padding: 44px 20px !important;
          }

          .quote-text {
            font-size: 22px !important;
          }

          .services-grid {
            grid-template-columns: 1fr !important;
          }

          .form-row {
            grid-template-columns: 1fr !important;
          }

          .hero-actions {
            flex-direction: column;
            align-items: stretch;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <div style={styles.page} className="page-shell">
        <div style={styles.pageGlowTop} />
        <div style={styles.pageGlowBottom} />

        <header style={styles.header} className="header-grid">
          <div style={styles.logoWrap}>
            <img
              src="/logo.png"
              alt="Arden Estate Concierge"
              style={styles.logo}
              className="logo-img fade-up"
            />
          </div>

          <nav style={styles.nav} className="nav-wrap fade-up delay-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={styles.navLink}
                className="nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            style={styles.headerButton}
            className="header-btn fade-up delay-2"
          >
            Request Private Assessment
          </a>
        </header>

        <section style={styles.hero} className="hero-grid">
          <div style={styles.heroContent} className="hero-copy">
            <div style={styles.kicker} className="fade-up">
              Private Estate Oversight
            </div>

            <h1 style={styles.heroTitle} className="hero-title fade-up delay-1">
              Everything Handled.
              <br />
              Nothing Overlooked.
            </h1>

            <div style={styles.heroDivider} className="fade-up delay-2" />

            <p style={styles.heroText} className="hero-text fade-up delay-3">
              Arden provides discreet, comprehensive oversight for exceptional
              homes and the people who own them.
            </p>

            <div style={styles.heroActions} className="hero-actions fade-up delay-4">
              <a href="#contact" style={styles.primaryButton} className="primary-btn">
                Request Private Assessment
              </a>
              <a
                href="#services"
                style={styles.secondaryButton}
                className="secondary-btn"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div style={styles.heroImagePanel}>
            <img
              src="/hero-estate.jpg"
              alt="Luxury estate exterior"
              style={styles.heroImage}
              className="hero-image-animate"
            />
            <div style={styles.heroImageOverlay} />
          </div>
        </section>

       <section id="services" style={styles.luxuryServicesSection} className="reveal">
  <div style={styles.servicesHeader}>
    <div style={styles.servicesEyebrow}>Our Services</div>
    <h2 style={styles.servicesHeadline}>
      Tailored Oversight.
      <br />
      Total Peace of Mind.
    </h2>
    <p style={styles.servicesSubhead}>
      Discreet. Reliable. Exceptional. Every detail handled with precision,
      so you can focus on what truly matters.
    </p>
  </div>

  <div style={styles.luxuryServicesGrid}>
    {services.map((service) => (
      <a
        href={service.link}
        key={service.title}
        style={styles.luxuryServiceLink}
      >
        <div style={styles.luxuryServiceCard} className="luxury-service-card">
          <div style={styles.cardGlow} />
          <div style={styles.luxuryServiceIcon}>{service.icon}</div>
          <h3 style={styles.luxuryServiceTitle}>{service.title}</h3>
          <div style={styles.cardDivider}>◇</div>
          <p style={styles.luxuryServiceText}>{service.description}</p>
          <div style={styles.learnMore}>Learn More →</div>
        </div>
      </a>
    ))}
  </div>
</section>

        <section id="about" style={styles.aboutSection} className="about-grid">
          <div style={styles.aboutTextCol} className="about-copy">
            <div style={styles.sectionKicker}>Discreet. Reliable. Exceptional.</div>

            <h2 style={styles.sectionTitle} className="section-title">
              Your Property.
              <br />
              Our Priority.
            </h2>

            <div style={styles.smallDivider} />

            <p style={styles.sectionText} className="section-text">
              Arden is more than a service—it is a standard of care. We
              anticipate needs, solve problems before they arise, and protect
              your investment with composure, consistency, and discretion.
            </p>

            <p style={styles.sectionText} className="section-text">
              Whether you are in residence, away for the season, or simply
              unwilling to spend time managing details, Arden ensures your home
              is always maintained to a level worthy of its value.
            </p>

            <a href="#approach" style={styles.secondaryButton} className="secondary-btn">
              Learn Our Approach
            </a>
          </div>

          <div style={styles.aboutImageCol}>
            <img
              src="/interior.jpg"
              alt="Luxury interior living room"
              style={styles.aboutImage}
            />
          </div>
        </section>

        <section id="approach" style={styles.approachSection}>
          <div style={styles.approachInner}>
            <div style={styles.sectionKickerCentered}>The Arden Standard</div>

            <div style={styles.approachGrid} className="approach-grid">
              <div style={styles.approachItem}>
                <div style={styles.approachNumber}>01</div>
                <h3 style={styles.approachTitle}>Private Assessment</h3>
                <p style={styles.approachText}>
                  We begin with a detailed review of your home, vendors,
                  priorities, and expectations.
                </p>
              </div>

              <div style={styles.approachItem}>
                <div style={styles.approachNumber}>02</div>
                <h3 style={styles.approachTitle}>Tailored Estate Plan</h3>
                <p style={styles.approachText}>
                  We create a customized oversight structure aligned with your
                  property, schedule, and lifestyle.
                </p>
              </div>

              <div style={styles.approachItem}>
                <div style={styles.approachNumber}>03</div>
                <h3 style={styles.approachTitle}>Ongoing Management</h3>
                <p style={styles.approachText}>
                  Arden manages the details continuously so your home remains
                  ready, protected, and impeccably maintained.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section style={styles.quoteSection} className="quote-section reveal">
          <div style={styles.quoteMark}>“</div>
          <p style={styles.quoteText} className="quote-text">
            Arden gives us complete peace of mind. Our home is always perfect,
            our guests are always impressed, and we know everything is handled.
          </p>
          <div style={styles.quoteAttribution}>Private Client, Great Falls, VA</div>
        </section>

       <section id="contact" style={styles.contactSection} className="contact-grid reveal">
          <div style={styles.contactBrandPanel}>
            <img src="/logo.png" alt="Arden logo" style={styles.contactLogo} />
            <div style={styles.contactBrandText}>
              Northern Virginia · Washington DC · Maryland
            </div>
            <div style={styles.contactTagline}>
              Trusted by discerning clients.
              <br />
              Committed to excellence.
            </div>
          </div>

          <div style={styles.contactFormPanel}>
  <div style={styles.sectionKicker}>Request Private Assessment</div>

  <p style={styles.contactIntro}>
    Tell us about your property and needs. A member of our team will
    be in touch promptly.
  </p>

  <ContactForm />
</div>
        </section>

        <footer style={styles.footer}>
          <div style={styles.footerLeft}>
            © 2026 Arden Estate Concierge. All rights reserved.
          </div>
          <div style={styles.footerRight}>
            <a href="#" style={styles.footerLink} className="footer-link">
              Privacy Policy
            </a>
            <a href="#" style={styles.footerLink} className="footer-link">
              Terms of Service
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

const globalStyles = `
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

.primary-btn {
  transition: all 0.3s ease;
}

.primary-btn:hover {
  transform: translateY(-2px) scale(1.01);
  box-shadow:
    0 12px 30px rgba(198,164,108,0.22),
    0 0 18px rgba(198,164,108,0.18);
}

const styles = {
  page: {
    position: "relative",
    background:
      "linear-gradient(180deg, #050505 0%, #080808 35%, #050505 100%)",
    color: "#F4EEE3",
    minHeight: "100vh",
    fontFamily: 'Georgia, "Times New Roman", serif',
    padding: "24px 32px 48px",
    overflow: "hidden",
  },

  pageGlowTop: {
    position: "absolute",
    top: "-140px",
    left: "-120px",
    width: "420px",
    height: "420px",
    background: "radial-gradient(circle, rgba(198,164,108,0.14) 0%, rgba(198,164,108,0) 70%)",
    pointerEvents: "none",
  },

  pageGlowBottom: {
    position: "absolute",
    bottom: "-180px",
    right: "-120px",
    width: "440px",
    height: "440px",
    background: "radial-gradient(circle, rgba(198,164,108,0.1) 0%, rgba(198,164,108,0) 70%)",
    pointerEvents: "none",
  },

  header: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "240px 1fr auto",
    alignItems: "center",
    gap: "24px",
    paddingBottom: "24px",
    borderBottom: "1px solid rgba(198,164,108,0.18)",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    width: "220px",
    height: "auto",
    objectFit: "contain",
    filter: "drop-shadow(0 8px 30px rgba(198,164,108,0.12))",
  },

  nav: {
    display: "flex",
    justifyContent: "center",
    gap: "36px",
    flexWrap: "wrap",
  },

  navLink: {
    color: "#F4EEE3",
    textDecoration: "none",
    fontSize: "13px",
    letterSpacing: "2.2px",
    textTransform: "uppercase",
    opacity: 0.9,
  },

  headerButton: {
    textDecoration: "none",
    color: "#C6A46C",
    border: "1px solid rgba(198,164,108,0.8)",
    padding: "14px 20px",
    fontSize: "12px",
    letterSpacing: "1.8px",
    textTransform: "uppercase",
    display: "inline-block",
    whiteSpace: "nowrap",
    background: "rgba(255,255,255,0.01)",
  },

  hero: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.02fr 1.28fr",
    minHeight: "740px",
    borderBottom: "1px solid rgba(198,164,108,0.14)",
  },

  heroContent: {
    padding: "88px 56px 88px 4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  kicker: {
    color: "#C6A46C",
    textTransform: "uppercase",
    letterSpacing: "4px",
    fontSize: "12px",
    marginBottom: "22px",
    opacity: 0.95,
  },

  heroTitle: {
    fontSize: "84px",
    lineHeight: 0.98,
    fontWeight: 400,
    letterSpacing: "-1.5px",
    margin: 0,
    maxWidth: "640px",
    textShadow: "0 8px 30px rgba(0,0,0,0.25)",
  },

  heroDivider: {
    width: "132px",
    height: "2px",
    backgroundColor: "#C6A46C",
    marginTop: "34px",
    marginBottom: "34px",
    boxShadow: "0 0 18px rgba(198,164,108,0.25)",
  },

  heroText: {
    fontSize: "31px",
    lineHeight: 1.45,
    maxWidth: "560px",
    color: "rgba(244,238,227,0.88)",
    margin: 0,
  },

  heroActions: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "42px",
  },

  primaryButton: {
    background: "linear-gradient(180deg, #cfb27a 0%, #b7904d 100%)",
    color: "#111111",
    textDecoration: "none",
    border: "none",
    padding: "16px 26px",
    fontSize: "12px",
    letterSpacing: "1.8px",
    textTransform: "uppercase",
    cursor: "pointer",
    display: "inline-block",
    boxShadow: "0 10px 30px rgba(183,144,77,0.18)",
  },

  secondaryButton: {
    backgroundColor: "transparent",
    color: "#C6A46C",
    textDecoration: "none",
    border: "1px solid rgba(198,164,108,0.8)",
    padding: "16px 26px",
    fontSize: "12px",
    letterSpacing: "1.8px",
    textTransform: "uppercase",
    display: "inline-block",
  },

  heroImagePanel: {
    position: "relative",
    minHeight: "740px",
    overflow: "hidden",
    borderLeft: "1px solid rgba(198,164,108,0.1)",
  },

  heroImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  heroImageOverlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(90deg, rgba(5,5,5,0.42) 0%, rgba(5,5,5,0.1) 30%, rgba(5,5,5,0.2) 100%)",
  },

  servicesSection: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "52px 0 34px",
    borderBottom: "1px solid rgba(198,164,108,0.14)",
  },

  sectionKickerCentered: {
    textAlign: "center",
    color: "#C6A46C",
    textTransform: "uppercase",
    letterSpacing: "4px",
    fontSize: "15px",
    marginBottom: "34px",
  },

  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "0px",
  },

  serviceCard: {
    padding: "32px 22px 20px",
    textAlign: "center",
    borderLeft: "1px solid rgba(198,164,108,0.12)",
    background: "transparent",
  },

  serviceIcon: {
    color: "#C6A46C",
    fontSize: "42px",
    lineHeight: 1,
    marginBottom: "18px",
    textShadow: "0 0 18px rgba(198,164,108,0.16)",
  },

  serviceTitle: {
    fontSize: "24px",
    fontWeight: 400,
    margin: "0 0 14px",
    lineHeight: 1.2,
  },

  serviceText: {
    fontSize: "17px",
    lineHeight: 1.68,
    color: "rgba(244,238,227,0.75)",
    margin: 0,
  },

  aboutSection: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    alignItems: "stretch",
    borderBottom: "1px solid rgba(198,164,108,0.14)",
  },

  aboutTextCol: {
    padding: "74px 40px 74px 4px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  sectionKicker: {
    color: "#C6A46C",
    textTransform: "uppercase",
    letterSpacing: "4px",
    fontSize: "12px",
    marginBottom: "22px",
  },

  sectionTitle: {
    fontSize: "72px",
    lineHeight: 1.01,
    fontWeight: 400,
    margin: 0,
    letterSpacing: "-1px",
  },

  smallDivider: {
    width: "92px",
    height: "2px",
    backgroundColor: "#C6A46C",
    marginTop: "28px",
    marginBottom: "28px",
    boxShadow: "0 0 18px rgba(198,164,108,0.25)",
  },

  sectionText: {
    fontSize: "23px",
    lineHeight: 1.62,
    color: "rgba(244,238,227,0.82)",
    marginTop: 0,
    marginBottom: "18px",
    maxWidth: "560px",
  },

  aboutImageCol: {
    minHeight: "580px",
    borderLeft: "1px solid rgba(198,164,108,0.1)",
  },

  aboutImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  approachSection: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "58px 0 26px",
    borderBottom: "1px solid rgba(198,164,108,0.14)",
  },

  approachInner: {
    paddingBottom: "12px",
  },

  approachGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "28px",
  },

  approachItem: {
    padding: "12px 18px 24px",
  },

  approachNumber: {
    color: "#C6A46C",
    fontSize: "20px",
    letterSpacing: "3px",
    marginBottom: "14px",
  },

  approachTitle: {
    fontSize: "32px",
    fontWeight: 400,
    margin: "0 0 12px",
  },

  approachText: {
    fontSize: "19px",
    lineHeight: 1.72,
    color: "rgba(244,238,227,0.75)",
    margin: 0,
  },

  quoteSection: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    margin: "0 auto",
    textAlign: "center",
    padding: "68px 120px",
    borderBottom: "1px solid rgba(198,164,108,0.14)",
    background:
      "linear-gradient(180deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0.005) 100%)",
  },

  quoteMark: {
    color: "#C6A46C",
    fontSize: "60px",
    lineHeight: 1,
    marginBottom: "14px",
  },

  quoteText: {
    fontSize: "35px",
    lineHeight: 1.48,
    fontStyle: "italic",
    maxWidth: "980px",
    margin: "0 auto 16px",
    color: "rgba(244,238,227,0.92)",
  },

  quoteAttribution: {
    color: "#C6A46C",
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontSize: "12px",
  },

  contactSection: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    margin: "40px auto 0",
    display: "grid",
    gridTemplateColumns: "0.9fr 1.2fr",
    border: "1px solid rgba(198,164,108,0.24)",
    background: "rgba(255,255,255,0.015)",
    boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
  },

  contactBrandPanel: {
    padding: "56px 36px",
    borderRight: "1px solid rgba(198,164,108,0.14)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  contactLogo: {
    width: "250px",
    height: "auto",
    marginBottom: "28px",
    filter: "drop-shadow(0 8px 30px rgba(198,164,108,0.12))",
  },

  contactBrandText: {
    fontSize: "20px",
    lineHeight: 1.6,
    color: "rgba(244,238,227,0.8)",
    marginBottom: "28px",
  },

  contactTagline: {
    color: "#C6A46C",
    fontSize: "30px",
    lineHeight: 1.5,
    fontStyle: "italic",
  },

  contactFormPanel: {
    padding: "52px 42px",
  },

  contactIntro: {
    fontSize: "21px",
    lineHeight: 1.62,
    maxWidth: "650px",
    color: "rgba(244,238,227,0.8)",
    marginTop: 0,
    marginBottom: "26px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  formRow: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },

  input: {
    backgroundColor: "rgba(255,255,255,0.01)",
    border: "1px solid rgba(198,164,108,0.24)",
    color: "#F4EEE3",
    padding: "16px 14px",
    fontSize: "16px",
    outline: "none",
  },

  textarea: {
    backgroundColor: "rgba(255,255,255,0.01)",
    border: "1px solid rgba(198,164,108,0.24)",
    color: "#F4EEE3",
    padding: "16px 14px",
    fontSize: "16px",
    outline: "none",
    resize: "vertical",
    fontFamily: 'Georgia, "Times New Roman", serif',
  },

  footer: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1400px",
    margin: "26px auto 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    color: "rgba(244,238,227,0.6)",
    fontSize: "14px",
    paddingTop: "8px",
  },

  footerLeft: {},

  footerRight: {
    display: "flex",
    gap: "22px",
    flexWrap: "wrap",
  },

footerLink: {
  color: "rgba(244,238,227,0.6)",
  textDecoration: "none",
},

// 👇 ADD THESE RIGHT HERE
successBox: {
  textAlign: "center",
  padding: "40px 20px",
  border: "1px solid rgba(198,164,108,0.25)",
  background: "rgba(255,255,255,0.02)",
},

successKicker: {
  color: "#C6A46C",
  textTransform: "uppercase",
  letterSpacing: "3px",
  fontSize: "12px",
  marginBottom: "16px",
},

successTitle: {
  fontSize: "48px",
  marginBottom: "16px",
},

successDivider: {
  width: "80px",
  height: "2px",
  backgroundColor: "#C6A46C",
  margin: "0 auto 20px",
},

successText: {
  fontSize: "20px",
  color: "rgba(244,238,227,0.8)",
},
const styles = {
  page: { ... },

  pageGlowTop: { ... },

  // your existing styles...

  // ✅ ADD BELOW THIS LINE
  luxuryServicesSection: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "80px 0 90px",
    borderBottom: "1px solid rgba(198,164,108,0.16)",
  },

  servicesHeader: {
    textAlign: "center",
    maxWidth: "820px",
    margin: "0 auto 48px",
  },

  servicesEyebrow: {
    color: "#C6A46C",
    textTransform: "uppercase",
    letterSpacing: "6px",
    fontSize: "13px",
    marginBottom: "22px",
  },

  servicesHeadline: {
    fontSize: "68px",
    lineHeight: 1.02,
    fontWeight: 400,
    margin: "0 0 22px",
    color: "#F4EEE3",
  },

  servicesSubhead: {
    fontSize: "20px",
    lineHeight: 1.6,
    color: "rgba(244,238,227,0.72)",
  },

  luxuryServicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "28px",
  },

  luxuryServiceLink: {
    textDecoration: "none",
    color: "inherit",
  },

  luxuryServiceCard: {
    position: "relative",
    padding: "42px 30px",
    border: "1px solid rgba(198,164,108,0.65)",
    borderRadius: "18px",
    background: "rgba(255,255,255,0.02)",
    textAlign: "center",
  },

  luxuryServiceIcon: {
    fontSize: "36px",
    marginBottom: "20px",
    color: "#C6A46C",
  },

  luxuryServiceTitle: {
    fontSize: "26px",
    marginBottom: "12px",
  },

  luxuryServiceText: {
    fontSize: "16px",
    color: "rgba(244,238,227,0.75)",
  },

  learnMore: {
    marginTop: "16px",
    fontSize: "12px",
    letterSpacing: "2px",
    color: "#C6A46C",
  },
};
};
