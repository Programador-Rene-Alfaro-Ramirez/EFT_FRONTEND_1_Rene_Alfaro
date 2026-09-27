import React from 'react';

export const Header = ({ 
  busqueda, 
  onBusquedaChange, 
  totalItems, 
  onFiltroConsolas, 
  onFiltroJuegos, 
  onReset,
  categoriaActiva 
}) => {
  return (
    <header>
      <div className="top-bar-polystation text-white py-1 text-center fw-semibold">
        REVISA NUESTROS TIEMPOS DE ENTREGA AQUÍ &nbsp;|&nbsp; SÍGUENOS EN REDES SOCIALES
      </div>

      <nav className="navbar navbar-expand-lg navbar-polystation py-3 shadow-sm">
        <div className="container">
          {/* Evento onClick en el logo para reiniciar todo */}
          <a className="navbar-brand text-uppercase" href="#" onClick={onReset} id="logo-tienda">
            <h1 className="h3 m-0 d-inline">
              <span className="brand-cyan">POLYSTATION</span><span className="brand-blue">STORE</span>
            </h1>
          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menuNavbar" aria-controls="menuNavbar" aria-expanded="false" aria-label="Abrir navegación">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="menuNavbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ps-lg-3">
              {/* Eventos onClick en los enlaces del menú */}
              <li className="nav-item">
                <a 
                  className={`nav-link nav-link-polystation ${categoriaActiva === 'juegos' ? 'active' : ''}`} 
                  href="#" 
                  onClick={onFiltroJuegos}
                >
                  Juegos Físicos
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link nav-link-polystation ${categoriaActiva === 'consolas' ? 'active' : ''}`} 
                  href="#" 
                  onClick={onFiltroConsolas}
                >
                  Consolas
                </a>
              </li>
            </ul>

            <div className="d-flex align-items-center gap-3">
              <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Buscar título o consola..."
                  aria-label="Buscar producto"
                  value={busqueda}
                  onChange={onBusquedaChange}
                />
              </form>
              <span 
                className="badge rounded-pill text-white px-3 py-2 shadow-sm" 
                style={{ backgroundColor: 'var(--ps-cyan)', fontSize: '0.9rem' }}
              >
                🛒 {totalItems}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};