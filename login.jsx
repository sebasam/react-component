// LoginForm.js - Componente para iniciar sesión

import React, { useState } from 'react';

const LoginForm = () => {
  // Hooks para manejar el estado del formulario
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar campos (validación básica)
    if (!email || !password) {
      alert("Por favor completa todos los campos.");
      return;
    }

    // Aquí iría la llamada al backend para autenticar
    console.log("Usuario:", email, "Contraseña:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Iniciar Sesión</h2>
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LoginForm;
