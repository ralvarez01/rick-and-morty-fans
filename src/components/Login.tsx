import React from 'react';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { login } = useAppContext();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate('/');
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h1>Inicio de sesión 👽</h1>
        <button style={{ padding: '10px 20px', fontSize: '1rem' }} onClick={handleLogin}>Iniciar sesión</button>
      </div>
    </div>
  );
}

export default Login;
