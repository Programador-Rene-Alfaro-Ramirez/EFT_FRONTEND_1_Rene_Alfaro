import React from 'react';

export const Header = ({ busqueda, onBusquedaChange, totalItems, onReset }) => {
  return (
    <header>
      <div className="bg-weplay-topbar text-white py-1 text-center fw-semibold">
        <small>REVISA NUESTROS TIEMPOS DE ENTREGA AQUÍ &nbsp;&nbsp;|&nbsp;&nbsp; SÍGUENOS EN REDES SOCIALES</small>
      </div>

      <nav className="navbar navbar-expand-lg bg-white shadow-sm py-3">
        <div className="container">
          <a className="navbar-brand text-uppercase fw-bold fs-3" href="#" onClick={onReset} style={{ cursor: 'pointer' }}>
            <span style={{ color: 'var(--weplay-cyan)' }}>POLYSTATION</span>
            <span style={{ color: 'var(--weplay-blue)' }}>STORE</span>
          </a>
          
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menuNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-lg-3">
              <li className="nav-item">
                <a className="nav-link text-weplay-nav fw-bold" href="#inicio" onClick={onReset}>Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-weplay-nav fw-bold" href="#contacto">Contacto</a>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <form className="d-flex position-relative" role="search" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="form-control me-2 rounded-pill ps-4"
                  type="search"
                  placeholder="Buscar título o consola..."
                  value={busqueda}
                  onChange={onBusquedaChange}
                />
              </form>
              <span className="badge rounded-pill text-white px-3 py-2 shadow-sm d-flex align-items-center gap-1" style={{ backgroundColor: 'var(--weplay-cyan)' }}>
                <i className="bi bi-cart3"></i> {totalItems}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};