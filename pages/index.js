export default function Home() {
  return (
    <div style={{
      background: '#0A0A0A',
      color: '#F5F3EF',
      minHeight: '100vh',
      padding: '60px 40px',
      fontFamily: 'Georgia, serif'
    }}>
      
      {/* Logo */}
      <div style={{ marginBottom: '60px' }}>
        <h1 style={{
          color: '#C6A46C',
          letterSpacing: '8px',
          fontSize: '48px',
          marginBottom: '10px'
        }}>
          ARDEN
        </h1>
        <div style={{
          letterSpacing: '4px',
          fontSize: '14px',
          opacity: 0.7
        }}>
          ESTATE CONCIERGE
        </div>
      </div>

      {/* Hero */}
      <div style={{ maxWidth: '800px' }}>
        <h2 style={{
          fontSize: '42px',
          lineHeight: '1.2',
          marginBottom: '30px'
        }}>
          Everything Handled.<br />Nothing Overlooked.
        </h2>

        <p style={{
          fontSize: '20px',
          lineHeight: '1.6',
          opacity: 0.85
        }}>
          Arden provides discreet, comprehensive oversight for exceptional homes and the people who own them.
        </p>
      </div>

      {/* Divider */}
      <div style={{
        marginTop: '80px',
        height: '1px',
        background: '#C6A46C',
        width: '120px'
      }} />

      {/* Footer note */}
      <div style={{
        marginTop: '20px',
        fontSize: '14px',
        opacity: 0.6
      }}>
        Private Estate Oversight · Northern Virginia · Washington DC
      </div>

    </div>
  );
}
