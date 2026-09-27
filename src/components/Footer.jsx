import React from 'react';

export const Footer = () => {
  return (
    <footer className="footer-polystation text-center py-4 mt-auto">
      <div className="container">
        <p className="mb-1">
          <strong>Contacto:</strong> contacto@polystationstore.cl | <strong>Fono:</strong> +56 9 1234 5678
        </p>
        <p className="mb-1 text-light">Calle Falsa 123, Santiago, Chile</p>
        <p className="mb-2">
          <a href="#" className="text-white text-decoration-none me-2 fw-semibold">Instagram</a> | 
          <a href="#" className="text-white text-decoration-none ms-2 fw-semibold">Facebook</a>
        </p>
        <small className="text-white-50">&copy; 2026 PolystationStore. Todos los derechos reservados.</small>
        <p className="fw-bold mt-2 mb-0" style={{ color: 'var(--ps-cyan)' }}>NO DISC NO BUY</p>
      </div>
    </footer>
  );
};