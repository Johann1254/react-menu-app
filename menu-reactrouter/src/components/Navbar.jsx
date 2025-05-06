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

  const itemStyle = {
    border: '1px solid black',
    padding: '10px',
    textDecoration: 'none',
    color: 'black',
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  };

  return (
    <div style={navStyle}>
      <Link to="/" style={itemStyle}><FaHome /> Home</Link>
      <Link to="/carros" style={itemStyle}><FaCar /> Carros</Link>
      <Link to="/conductores" style={itemStyle}><FaUserTie /> Conductores</Link>
      <Link to="/configuracion" style={itemStyle}><FaCog /> Configuración</Link>
    </div>
  );
};

export default Navbar;
