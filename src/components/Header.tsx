import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Header: React.FC = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Inicio 🚀</Link></li>
        <li><Link to="/locations">Ubicaciones 🎯</Link></li>
        <li><Link to="/favorites">Favoritos 🌟</Link></li>
        <li><Link to="/login">Inicio de Sesión 👽</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
