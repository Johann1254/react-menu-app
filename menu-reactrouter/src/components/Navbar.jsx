import { Link } from 'react-router-dom';
import { FaHome, FaCar, FaUserTie, FaCog } from 'react-icons/fa';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    gap: '10px',
    padding: '10px',
    borderBottom: '1px solid black',
    justifyContent: 'flex-start'
  };

  const baseItemStyle = {
    padding: '10px 15px',
    textDecoration: 'none',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    borderRadius: '6px',
    fontWeight: 'bold'
  };

  return (
    <div style={navStyle}>
      <Link
        to="/"
        style={{ ...baseItemStyle, backgroundColor: '#4CAF50' }} // Verde
      >
        <FaHome /> Home
      </Link>

      <Link
        to="/carros"
        style={{ ...baseItemStyle, backgroundColor: '#2196F3' }} // Azul
      >
        <FaCar /> Carros
      </Link>

      <Link
        to="/conductores"
        style={{ ...baseItemStyle, backgroundColor: '#FF9800' }} // Naranja
      >
        <FaUserTie /> Conductores
      </Link>

      <Link
        to="/configuracion"
        style={{ ...baseItemStyle, backgroundColor: '#9C27B0' }} // Morado
      >
        <FaCog /> Configuración
      </Link>
    </div>
  );
};

export default Navbar;
