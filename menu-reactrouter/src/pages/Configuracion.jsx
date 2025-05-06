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
          <label style={labelStyle}>Tema:</label>
          <select style={inputStyle}>
            <option>Claro</option>
            <option>Oscuro</option>
          </select>
        </div>
        <div style={formGroup}>
          <label style={labelStyle}>
            <input type="checkbox" style={{ marginRight: '8px' }} />
            Activar notificaciones
          </label>
        </div>
      </form>
    </div>
  );
}
