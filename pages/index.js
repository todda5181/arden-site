import React from "react";

export default function Home() {

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
        <div style={{ color: "red", fontSize: "60px", padding: "40px" }}>
      TEST LIVE
    </div>
        
      <style>{`
        body {
          margin: 0;
          background: #050505;
          color: #f4eee3;
          font-family: Georgia, "Times New Roman", serif;
        }

        .services-section {
          padding: 80px 40px;
          text-align: center;
        }

        .services-title {
          font-size: 52px;
          margin-bottom: 10px;
        }

        .services-sub {
          font-size: 18px;
          opacity: 0.7;
          margin-bottom: 50px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        .card {
          padding: 40px;
          border: 1px solid rgba(198,164,108,0.4);
          border-radius: 16px;
          background: rgba(255,255,255,0.02);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(198,164,108,0.25);
        }

        .icon {
          font-size: 32px;
          margin-bottom: 12px;
          color: #c6a46c;
        }

        .learn {
          margin-top: 12px;
          font-size: 12px;
          color: #c6a46c;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        @media (max-width: 900px) {
          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="services-section">

        <div className="services-title">
          Tailored Oversight.<br />Total Peace of Mind.
        </div>

        <div className="services-sub">
          Discreet. Reliable. Exceptional. Every detail handled with precision.
        </div>

        <div className="grid">
          {services.map((service) => (
            <a key={service.title} href={service.link}>
              <div className="card">
                <div className="icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="learn">Learn More →</div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </>
  );
}
