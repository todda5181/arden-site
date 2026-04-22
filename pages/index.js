export default function Home() {
  const navItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Approach", href: "#approach" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    {
      title: "Property Management",
      description:
        "Complete oversight of your residence, inside and out. We coordinate vendors, maintenance, and day-to-day estate operations.",
      icon: "⌂",
    },
    {
      title: "Security & Access",
      description:
        "Trusted access management, discreet monitoring, and thoughtful protocols to protect what matters most.",
      icon: "◈",
    },
    {
      title: "Lifestyle Concierge",
      description:
        "From arrivals to events, reservations to stocking, every detail is handled before you have to ask.",
      icon: "✦",
    },
    {
      title: "Estate Maintenance",
      description:
        "Proactive preservation of your home, systems, and grounds so everything remains in exceptional order.",
      icon: "◇",
    },
    {
      title: "Vendor Management",
      description:
        "We vet, schedule, coordinate, and oversee trusted service partners on your behalf with precision.",
      icon: "$",
    },
  ];

  return (
    <>
      <div style={styles.page}>
        <header style={styles.header}>
          <div style={styles.logoWrap}>
            <img src="/logo.png" alt="Arden Estate Concierge" style={styles.logo} />
          </div>

          <nav style={styles.nav}>
            {navItems.map((item) => (
              <a key={item.label} href={item.href} style={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#contact" style={styles.headerButton}>
            Request Private Assessment
          </a>
        </header>

        <section style={styles.hero}>
          <div style={styles.heroContent}>
            <div style={styles.kicker}>Private Estate Oversight</div>

            <h1 style={styles.heroTitle}>
              Everything Handled.
              <br />
              Nothing Overlooked.
            </h1>

            <div style={styles.heroDivider} />

            <p style={styles.heroText}>
              Arden provides discreet, comprehensive oversight for exceptional
              homes and the people who own them.
            </p>

            <div style={styles.heroActions}>
              <a href="#contact" style={styles.primaryButton}>
                Request Private Assessment
              </a>
              <a href="#services" style={styles.secondaryButton}>
                Explore Services
              </a>
            </div>
          </div>

          <div style={styles.heroImagePanel}>
            <img
              src="/hero-estate.jpg"
              alt="Luxury estate exterior"
              style={styles.heroImage}
            />
            <div style={styles.heroImageOverlay} />
          </div>
        </section>

        <section id="services" style={styles.servicesSection}>
          <div style={styles.sectionKickerCentered}>
            Tailored Oversight. Total Peace of Mind.
          </div>

          <div style={styles.servicesGrid}>
            {services.map((service) => (
              <div key={service.title} style={styles.serviceCard}>
                <div style={styles.serviceIcon}>{service.icon}</div>
                <h3 style={styles.serviceTitle}>{service.title}</h3>
                <p style={styles.serviceText}>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" style={styles.aboutSection}>
          <div style={styles.aboutTextCol}>
            <div style={styles.sectionKicker}>Discreet. Reliable. Exceptional.</div>

            <h2 style={styles.sectionTitle}>
              Your Property.
              <br />
              Our Priority.
            </h2>

            <div style={styles.smallDivider} />

            <p style={styles.sectionText}>
              Arden is more than a service—it is a standard of care. We
              anticipate needs, solve problems before they arise, and protect
              your investment with composure, consistency, and discretion.
            </p>

            <p style={styles.sectionText}>
              Whether you are in residence, away for the season, or simply
              unwilling to spend time managing details, Arden ensures your home
              is always maintained to a level worthy of its value.
            </p>

            <a href="#approach" style={styles.secondaryButton}>
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

            <div style={styles.approachGrid}>
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

        <section style={styles.quoteSection}>
          <div style={styles.quoteMark}>“</div>
          <p style={styles.quoteText}>
            Arden gives us complete peace of mind. Our home is always perfect,
            our guests are always impressed, and we know everything is handled.
          </p>
          <div style={styles.quoteAttribution}>Private Client, Great Falls, VA</div>
        </section>

        <section id="contact" style={styles.contactSection}>
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

            <form style={styles.form}>
              <div style={styles.formRow}>
                <input type="text" placeholder="Full Name" style={styles.input} />
                <input type="email" placeholder="Email Address" style={styles.input} />
              </div>

              <div style={styles.formRow}>
                <input type="text" placeholder="Phone Number" style={styles.input} />
                <input type="text" placeholder="Property Location" style={styles.input} />
              </div>

              <textarea
                placeholder="How can we help?"
                rows={5}
                style={styles.textarea}
              />

              <button type="submit" style={styles.primaryButton}>
                Submit Request
              </button>
            </form>
          </div>
        </section>

        <footer style={styles.footer}>
          <div style={styles.footerLeft}>© 2026 Arden Estate Concierge. All rights reserved.</div>
          <div style={styles.footerRight}>
            <a href="#" style={styles.footerLink}>
              Privacy Policy
            </a>
            <a href="#" style={styles.footerLink}>
              Terms of Service
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

const styles = {
  page: {
    backgroundColor: "#050505",
    color: "#F4EEE3",
    minHeight: "100vh",
    fontFamily: 'Georgia, "Times New Roman", serif',
    padding: "24px 32px 48px",
  },

  header: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "240px 1fr auto",
    alignItems: "center",
    gap: "24px",
    paddingBottom: "24px",
    borderBottom: "1px solid rgba(198,164,108,0.22)",
  },

  logoWrap: {
    display: "flex",
    alignItems: "center",
  },

  logo: {
    width: "180px",
    height: "auto",
    objectFit: "contain",
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
    fontSize: "14px",
    letterSpacing: "2px",
    textTransform: "uppercase",
    opacity: 0.92,
  },

  headerButton: {
    textDecoration: "none",
    color: "#C6A46C",
    border: "1px solid #C6A46C",
    padding: "14px 20px",
    fontSize: "13px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    display: "inline-block",
    whiteSpace: "nowrap",
  },

  hero: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1.05fr 1.25fr",
    minHeight: "700px",
    borderBottom: "1px solid rgba(198,164,108,0.18)",
  },

  heroContent: {
    padding: "80px 48px 80px 8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  kicker: {
    color: "#C6A46C",
    textTransform: "uppercase",
    letterSpacing: "4px",
    fontSize: "13px",
    marginBottom: "22px",
  },

  heroTitle: {
    fontSize: "78px",
    lineHeight: 1.02,
    fontWeight: 400,
    margin: 0,
    maxWidth: "620px",
  },

  heroDivider: {
    width: "120px",
    height: "2px",
    backgroundColor: "#C6A46C",
    marginTop: "34px",
    marginBottom: "34px",
  },

  heroText: {
    fontSize: "30px",
    lineHeight: 1.45,
    maxWidth: "560px",
    color: "rgba(244,238,227,0.9)",
    margin: 0,
  },

  heroActions: {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginTop: "40px",
  },

  primaryButton: {
    backgroundColor: "#C6A46C",
    color: "#111111",
    textDecoration: "none",
    border: "none",
    padding: "16px 26px",
    fontSize: "13px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    cursor: "pointer",
    display: "inline-block",
  },

  secondaryButton: {
    backgroundColor: "transparent",
    color: "#C6A46C",
    textDecoration: "none",
    border: "1px solid #C6A46C",
    padding: "16px 26px",
    fontSize: "13px",
    letterSpacing: "1.5px",
    textTransform: "uppercase",
    display: "inline-block",
  },

  heroImagePanel: {
    position: "relative",
    minHeight: "700px",
    overflow: "hidden",
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
      "linear-gradient(90deg, rgba(5,5,5,0.35) 0%, rgba(5,5,5,0.05) 30%, rgba(5,5,5,0.12) 100%)",
  },

  servicesSection: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "48px 0 32px",
    borderBottom: "1px solid rgba(198,164,108,0.18)",
  },

  sectionKickerCentered: {
    textAlign: "center",
    color: "#C6A46C",
    textTransform: "uppercase",
    letterSpacing: "4px",
    fontSize: "16px",
    marginBottom: "34px",
  },

  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gap: "0px",
  },

  serviceCard: {
    padding: "28px 22px 18px",
    textAlign: "center",
    borderLeft: "1px solid rgba(198,164,108,0.16)",
  },

  serviceIcon: {
    color: "#C6A46C",
    fontSize: "42px",
    lineHeight: 1,
    marginBottom: "18px",
  },

  serviceTitle: {
    fontSize: "24px",
    fontWeight: 400,
    margin: "0 0 14px",
    lineHeight: 1.2,
  },

  serviceText: {
    fontSize: "17px",
    lineHeight: 1.65,
    color: "rgba(244,238,227,0.78)",
    margin: 0,
  },

  aboutSection: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "0.9fr 1.1fr",
    alignItems: "stretch",
    borderBottom: "1px solid rgba(198,164,108,0.18)",
  },

  aboutTextCol: {
    padding: "70px 40px 70px 8px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  sectionKicker: {
    color: "#C6A46C",
    textTransform: "uppercase",
    letterSpacing: "4px",
    fontSize: "13px",
    marginBottom: "22px",
  },

  sectionTitle: {
    fontSize: "68px",
    lineHeight: 1.03,
    fontWeight: 400,
    margin: 0,
  },

  smallDivider: {
    width: "90px",
    height: "2px",
    backgroundColor: "#C6A46C",
    marginTop: "28px",
    marginBottom: "28px",
  },

  sectionText: {
    fontSize: "23px",
    lineHeight: 1.6,
    color: "rgba(244,238,227,0.84)",
    marginTop: 0,
    marginBottom: "18px",
    maxWidth: "560px",
  },

  aboutImageCol: {
    minHeight: "560px",
  },

  aboutImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  approachSection: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "56px 0 24px",
    borderBottom: "1px solid rgba(198,164,108,0.18)",
  },

  approachInner: {
    paddingBottom: "12px",
  },

  approachGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "30px",
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
    lineHeight: 1.7,
    color: "rgba(244,238,227,0.78)",
    margin: 0,
  },

  quoteSection: {
    maxWidth: "1400px",
    margin: "0 auto",
    textAlign: "center",
    padding: "60px 120px",
    borderBottom: "1px solid rgba(198,164,108,0.18)",
    background:
      "linear-gradient(180deg, rgba(18,18,18,0.35) 0%, rgba(5,5,5,0.55) 100%)",
  },

  quoteMark: {
    color: "#C6A46C",
    fontSize: "60px",
    lineHeight: 1,
    marginBottom: "14px",
  },

  quoteText: {
    fontSize: "34px",
    lineHeight: 1.45,
    fontStyle: "italic",
    maxWidth: "980px",
    margin: "0 auto 16px",
    color: "rgba(244,238,227,0.92)",
  },

  quoteAttribution: {
    color: "#C6A46C",
    textTransform: "uppercase",
    letterSpacing: "3px",
    fontSize: "13px",
  },

  contactSection: {
    maxWidth: "1400px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "0.9fr 1.2fr",
    border: "1px solid rgba(198,164,108,0.28)",
    marginTop: "40px",
  },

  contactBrandPanel: {
    padding: "54px 36px",
    borderRight: "1px solid rgba(198,164,108,0.18)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  contactLogo: {
    width: "220px",
    height: "auto",
    marginBottom: "26px",
  },

  contactBrandText: {
    fontSize: "20px",
    lineHeight: 1.6,
    color: "rgba(244,238,227,0.82)",
    marginBottom: "28px",
  },

  contactTagline: {
    color: "#C6A46C",
    fontSize: "29px",
    lineHeight: 1.5,
    fontStyle: "italic",
  },

  contactFormPanel: {
    padding: "50px 42px",
  },

  contactIntro: {
    fontSize: "21px",
    lineHeight: 1.6,
    maxWidth: "650px",
    color: "rgba(244,238,227,0.82)",
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
    backgroundColor: "transparent",
    border: "1px solid rgba(198,164,108,0.28)",
    color: "#F4EEE3",
    padding: "16px 14px",
    fontSize: "16px",
    outline: "none",
  },

  textarea: {
    backgroundColor: "transparent",
    border: "1px solid rgba(198,164,108,0.28)",
    color: "#F4EEE3",
    padding: "16px 14px",
    fontSize: "16px",
    outline: "none",
    resize: "vertical",
    fontFamily: 'Georgia, "Times New Roman", serif',
  },

  footer: {
    maxWidth: "1400px",
    margin: "26px auto 0",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    color: "rgba(244,238,227,0.66)",
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
    color: "rgba(244,238,227,0.66)",
    textDecoration: "none",
  },
};
