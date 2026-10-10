import React from 'react';

export const ProductCard = ({ producto, onAgregar, isInCart }) => {
  const formatearPrecio = (valor) => `$${valor.toLocaleString('es-CL')}`;

  return (
    <div className="col">
      <article className="card h-100 shadow-sm card-weplay">
        <img 
          src={producto.imagen} 
          className="card-img-top p-3" 
          alt={producto.nombre} 
          style={{ height: '210px', objectFit: 'contain' }}
        />
        <div className="card-body d-flex flex-column text-center">
          <h5 className="card-title fw-bold text-dark mb-1">{producto.nombre}</h5>
          <span className="badge bg-secondary mb-2 align-self-center">{producto.categoria}</span>
          <p className="card-text text-muted small flex-grow-1">{producto.descripcion}</p>
          
          <h4 className="fw-bold mt-2" style={{ color: 'var(--weplay-cyan)' }}>
            {formatearPrecio(producto.precio)}
          </h4>

          <button 
            className={`btn w-100 mt-3 fw-bold ${isInCart ? 'btn-secondary' : 'btn-weplay'}`}
            onClick={() => onAgregar(producto)}
            disabled={isInCart}
          >
            {isInCart ? 'En el Carrito' : 'Agregar al Carrito'}
          </button>
        </div>
      </article>
    </div>
  );
};