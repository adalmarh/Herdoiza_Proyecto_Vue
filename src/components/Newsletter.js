import React, { useState } from 'react';
import './Newsletter.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const validateAndSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError('Email requerido');
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Email inválido');
    } else {
      setError('');
      setSuccess(true);
      setEmail('');
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <section id="newsletter" className="newsletter">
      <div className="container">
        <h2>📧 Ofertas exclusivas para gamers</h2>
        <p>Recibe códigos de descuento, lanzamientos y noticias antes que nadie</p>
        <form onSubmit={validateAndSubmit} className="newsletter-form">
          <input 
            type="email" 
            placeholder="tu@email.com" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit">Suscribirme 🎁</button>
        </form>
        {error && <p className="error-msg">{error}</p>}
        {success && <p className="success-msg">✅ ¡Suscripción exitosa! Revisa tu bandeja</p>}
        <p className="small">Sin spam. Puedes cancelar cuando quieras.</p>
      </div>
    </section>
  );
}

export default Newsletter;