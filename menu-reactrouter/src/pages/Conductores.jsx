const mockConductores = [
  { id: 1, nombre: 'Carlos Pérez' },
  { id: 2, nombre: 'Lucía Gómez' },
  { id: 3, nombre: 'Sebastian Gutierrez' },
  { id: 4, nombre: 'Juan Cabrera' },
  { id: 5, nombre: 'Luciana Escobar' },
];

export default function Conductores() {
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

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
  };

  const itemStyle = {
    backgroundColor: '#fff',
    padding: '12px 20px',
    marginBottom: '10px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    fontSize: '18px',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <h2 style={titleStyle}>Lista de Conductores</h2>
      <ul style={listStyle}>
        {mockConductores.map((conductor) => (
          <li key={conductor.id} style={itemStyle}>
            {conductor.nombre}
          </li>
        ))}
      </ul>
    </div>
  );
}
  