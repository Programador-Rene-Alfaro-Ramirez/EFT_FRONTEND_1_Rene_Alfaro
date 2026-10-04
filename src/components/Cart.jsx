import React from 'react';
import { formatearMoneda } from '../data/products';

export const Cart = ({ carrito, totalItems, totalPrecio, onAumentar, onDisminuir, onEliminar, onVaciar }) => {
  return (
    <aside className="col-lg-4 mt-5 mt-lg-0" aria-label="Carrito de compras">
      <div className="card shadow-sm border-0 sticky-top" style={{ top: '20px' }}>
        
        {/* Cabecera del carrito */}
        <div className="card-header header-carrito text-center py-3">
          <h3 className="h5 mb-0 fw-bold">Carrito de Compras</h3>
        </div>

        <div className="card-body">
          {/* Criterio 3: Renderizado condicional para mostrar mensaje si el carrito está vacío */}
          {carrito.length === 0 ? (
            <ul className="list-group list-group-flush mb-3">
              <li className="list-group-item text-center text-muted py-4">
                <p className="mb-1 fw-bold">El carrito está vacío</p>
                <small>Agrega algunos videojuegos para comenzar.</small>
              </li>
            </ul>
          ) : (
            <>
              {/* Lista de productos agregados */}
              <ul className="list-group list-group-flush mb-3">
                {carrito.map((item) => (
                  <li key={item.id} className="list-group-item d-flex flex-column px-2 py-3">
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="text-truncate fw-semibold" style={{ maxWidth: '160px' }} title={item.nombre}>
                        {item.nombre}
                      </span>
                      <span className="badge rounded-pill text-white" style={{ backgroundColor: 'var(--ps-cyan)' }}>
                        {formatearMoneda(item.precioOferta * item.cantidad)}
                      </span>
                    </div>
                    
                    {/* Controles para aumentar, disminuir o eliminar */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-secondary fw-bold" onClick={() => onDisminuir(item.id)}>-</button>
                        <span className="btn btn-light disabled px-3 text-dark fw-bold">{item.cantidad}</span>
                        <button className="btn btn-outline-secondary fw-bold" onClick={() => onAumentar(item.id)}>+</button>
                      </div>
                      <button 
                        className="btn btn-sm btn-outline-danger py-1 px-2" 
                        onClick={() => onEliminar(item.id)}
                        title="Eliminar producto"
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Resumen de totales */}
              <div className="pt-3 border-top">
                <div className="d-flex justify-content-between align-items-center mb-2 text-muted small">
                  <span>Total de unidades:</span>
                  <strong>{totalItems} u.</strong>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span className="fs-5 fw-bold">Total a pagar:</span>
                  <span className="fs-5 fw-bold text-success">
                    {formatearMoneda(totalPrecio)}
                  </span>
                </div>
              </div>

              {/* Botones de accion final */}
              <div className="d-grid gap-2">
                <button className="btn btn-polystation-cyan text-white fw-bold py-2" onClick={() => alert('Compra procesada con exito')}>
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