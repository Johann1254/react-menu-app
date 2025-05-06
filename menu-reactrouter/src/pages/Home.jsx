export default function Home() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '80vh',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '12px',
    margin: '20px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  };

  const titleStyle = {
    fontSize: '32px',
    color: '#333',
    marginBottom: '10px',
  };

  const subtitleStyle = {
    fontSize: '18px',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Bienvenido al sistema</h2>
      <p style={subtitleStyle}>Usa el menú de navegación para acceder a las diferentes secciones</p>
    </div>
  );
}
