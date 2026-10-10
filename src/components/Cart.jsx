import React from 'react';

export const Cart = ({ carrito, totalItems, totalPrecio, onAumentar, onDisminuir, onEliminar, onVaciar }) => {
  const formatearPrecio = (valor) => `$${valor.toLocaleString('es-CL')}`;

  return (
    <aside className="col-lg-4 mt-5 mt-lg-0">
      <div className="card shadow-sm border-0 sticky-top" style={{ top: '80px' }}>
        <div className="card-header text-white text-center py-3" style={{ backgroundColor: 'var(--weplay-blue)' }}>
          <h5 className="mb-0 fw-bold"><i className="bi bi-cart3"></i> Carrito de Compras</h5>
        </div>

        <div className="card-body">
          {carrito.length === 0 ? (
            <div className="text-center text-muted py-4">
              <p className="mb-1 fw-bold">El carrito está vacío</p>
              <small>Agrega videojuegos o consolas para comenzar.</small>
            </div>
          ) : (
            <>
              <ul className="list-group list-group-flush mb-3">
                {carrito.map((item) => (
                  <li key={item.id} className="list-group-item d-flex flex-column px-2 py-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-truncate fw-semibold" style={{ maxWidth: '160px' }}>{item.nombre}</span>
                      <span className="badge rounded-pill" style={{ backgroundColor: 'var(--weplay-cyan)' }}>
                        {formatearPrecio(item.precio * item.cantidad)}
                      </span>
                    </div>
                    
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-secondary fw-bold" onClick={() => onDisminuir(item.id)}>-</button>
                        <span className="btn btn-light disabled px-3 fw-bold">{item.cantidad}</span>
                        <button className="btn btn-outline-secondary fw-bold" onClick={() => onAumentar(item.id)}>+</button>
                      </div>
                      <button className="btn btn-sm btn-outline-danger py-1 px-2" onClick={() => onEliminar(item.id)}>
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-3 border-top">
                <div className="d-flex justify-content-between align-items-center mb-2 text-muted small">
                  <span>Total de unidades:</span>
                  <strong>{totalItems} u.</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fs-5 fw-bold text-dark">Total a pagar:</span>
                  <span className="fs-5 fw-bold" style={{ color: 'var(--weplay-blue)' }}>
                    {formatearPrecio(totalPrecio)}
                  </span>
                </div>
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-weplay fw-bold py-2" onClick={() => alert('Compra procesada con éxito!')}>
                  Finalizar Compra
                </button>
                <button className="btn btn-outline-secondary btn-sm" onClick={onVaciar}>
                  Vaciar Carrito
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};