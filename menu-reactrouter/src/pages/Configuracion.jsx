export default function Configuracion() {
  const containerStyle = {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    backgroundColor: '#f9f9f9',
  };

  const titleStyle = {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  };

  const formGroup = {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  };

  const labelStyle = {
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#444',
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Configuración del Sistema</h2>
      <form>
        <div style={formGroup}>
          <label style={labelStyle}>Color del Tema:</label>
          <input type="color" style={{ ...inputStyle, padding: '4px' }} />
        </div>

        <div style={formGroup}>
          <label style={labelStyle}>Correo de notificaciones:</label>
          <input type="email" placeholder="ejemplo@correo.com" style={inputStyle} />
        </div>

        <div style={formGroup}>
          <label style={labelStyle}>
            <input type="checkbox" style={{ marginRight: '8px' }} />
            Activar notificaciones
          </label>
        </div>

        <div style={formGroup}>
          <label style={labelStyle}>Frecuencia de notificación:</label>
          <input type="number" min="1" max="30" placeholder="Días" style={inputStyle} />
        </div>
      </form>
    </div>
  );
}
