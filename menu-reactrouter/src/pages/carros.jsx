const mockCarros = [
  { id: 1, marca: 'Toyota', modelo: 'Corolla' },
  { id: 2, marca: 'Honda', modelo: 'Civic' },
  { id: 3, marca: 'Chevrolet', modelo: 'Camaro' },
  { id: 4, marca: 'Ford', modelo: 'Mustang' },
  { id: 5, marca: 'Ford', modelo: 'Raptor' }
];

export default function Carros() {
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
      <h2 style={titleStyle}>Lista de Carros</h2>
      <ul style={listStyle}>
        {mockCarros.map((carro) => (
          <li key={carro.id} style={itemStyle}>
            {carro.marca} - {carro.modelo}
          </li>
        ))}
      </ul>
    </div>
  );
}
